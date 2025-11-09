const API_KEY = '84ef54a86c846d4dc5edf53e1a6e4e57';
const API_URL = 'https://api.openweathermap.org/data/2.5/';

const cityNameEl = document.getElementById('city-name');
const currentTempEl = document.getElementById('current-temp');
const weatherConditionEl = document.getElementById('weather-condition');
const mainIconEl = document.getElementById('main-icon');
const humidityEl = document.getElementById('humidity-value');
const windSpeedEl = document.getElementById('wind-speed');
const dateTimeEl = document.getElementById('date-time');
const forecastCardsEl = document.getElementById('forecast-cards');
const cityInputEl = document.getElementById('city-input');
const searchButtonEl = document.getElementById('search-button');
const historyListEl = document.getElementById('history-list');


let searchHistory = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];

function getWeatherIcon(iconCode) {
    const iconMap = {
        '01d': 'fas fa-sun',          
        '02d': 'fas fa-cloud-sun',    
        '03d': 'fas fa-cloud',        
        '04d': 'fas fa-cloud-meatball', 
        '09d': 'fas fa-cloud-showers-heavy', 
        '10d': 'fas fa-cloud-sun-rain', 
        '11d': 'fas fa-bolt',         
        '13d': 'fas fa-snowflake',    
        '50d': 'fas fa-smog',         
        '01n': 'fas fa-moon',
        '02n': 'fas fa-cloud-moon',
        '03n': 'fas fa-cloud',
        '04n': 'fas fa-cloud-meatball',
        '09n': 'fas fa-cloud-showers-heavy',
        '10n': 'fas fa-cloud-moon-rain',
        '11n': 'fas fa-bolt',
        '13n': 'fas fa-snowflake',
        '50n': 'fas fa-smog',
    };
    return iconMap[iconCode] || 'fas fa-question';
}


function formatDateTime(timestamp, timezoneOffset) {
    const utcMillis = timestamp * 1000;
    const localMillis = utcMillis + timezoneOffset * 1000;
    const date = new Date(localMillis);

    const options = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };
    return date.toLocaleString('en-US', options).replace(/,/, '');
}

async function fetchWeather(city) {
    if (!city) return;
    const currentUrl=`${API_URL}weather?q=${city}&units=metric&appid=${API_KEY}`;
    const forecastUrl=`${API_URL}forecast?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const [currentRes, forecastRes] = await Promise.all([
            fetch(currentUrl),
            fetch(forecastUrl)
        ]);
        if (!currentRes.ok || !forecastRes.ok) {
            throw new Error('City not found or API error');
        }
        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();
        
        updateDashboard(currentData, forecastData);
        updateSearchHistory(city);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert(`Could not fetch weather data for ${city}. Please check the city name.`);
        cityNameEl.textContent = 'City Not Found';
        currentTempEl.textContent = '--';
        weatherConditionEl.textContent = 'ERROR';
        mainIconEl.className = 'fas fa-exclamation-triangle';
        forecastCardsEl.innerHTML = '';
    }
}

function updateCurrentWeather(data) {
    // Temperature is displayed in Celsius
    const temp = Math.round(data.main.temp); 
    
    cityNameEl.textContent = `${data.name.toUpperCase()} WEATHER`;
    currentTempEl.textContent = temp;
    weatherConditionEl.textContent = data.weather[0].description.toUpperCase();
    humidityEl.textContent = `${data.main.humidity}%`;
    windSpeedEl.textContent = `${data.wind.speed} m/s`;
    
    const iconCode = data.weather[0].icon;
    mainIconEl.className = getWeatherIcon(iconCode);

    const localDateTime = formatDateTime(data.dt, data.timezone);
    dateTimeEl.textContent = localDateTime;
}

function updateForecast(data) {
    forecastCardsEl.innerHTML = ''; 
    
    const dailyForecasts = {};
    const today = new Date().getUTCDate();

    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
        const dayOfMonth = date.getUTCDate();
        
      
        if (dayOfMonth !== today && date.getUTCHours() >= 11 && date.getUTCHours() <= 13) {
            if (!dailyForecasts[day]) {
                dailyForecasts[day] = {
                    temp_min: item.main.temp_min,
                    temp_max: item.main.temp_max,
                    icon: item.weather[0].icon,
                };
            }
        }
    });

   
    Object.keys(dailyForecasts).slice(0, 5).forEach(day => {
        const item = dailyForecasts[day];
        const temp = Math.round(item.temp_max);
        const lowTemp = Math.round(item.temp_min);
        const iconClass = getWeatherIcon(item.icon);

        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `
            <p>${day}</p>
            <i class="${iconClass}"></i>
            <p>${temp}° <span class="low-temp">${lowTemp}°</span></p>
        `;
        forecastCardsEl.appendChild(card);
    });
}

function updateDashboard(currentData, forecastData) {
    updateCurrentWeather(currentData);
    updateForecast(forecastData);
}

// --- Search History ---
function updateSearchHistory(city) {
    const capitalizedCity = city.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

    if (!searchHistory.includes(capitalizedCity)) {
        searchHistory.unshift(capitalizedCity);
        searchHistory = searchHistory.slice(0, 5);
        localStorage.setItem('weatherSearchHistory', JSON.stringify(searchHistory));
        renderSearchHistory();
    }
}
function renderSearchHistory() {
    historyListEl.innerHTML = '';
    searchHistory.forEach(city => {
        const citySpan = document.createElement('span');
        citySpan.textContent = city;
        citySpan.addEventListener('click', () => fetchWeather(city));
        historyListEl.appendChild(citySpan);
    });
}

// --- Geolocation & Initial Load ---

function getGeolocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const reverseGeoUrl = `${API_URL}weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

            try {
                const response = await fetch(reverseGeoUrl);
                const data = await response.json();
                
                // search weather using city name
                fetchWeather(data.name);

            } catch (error) {
                console.error('Error fetching location weather:', error);
                fetchWeather('---'); 
            }
        }, (error) => {
            console.error('Geolocation failed:', error);
            fetchWeather('---'); 
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
        fetchWeather('Bangalore'); 
    }
}

searchButtonEl.addEventListener('click', () => {
    const city = cityInputEl.value.trim();
    if (city) {
        fetchWeather(city);
        cityInputEl.value = ''; 
    }
});

cityInputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButtonEl.click();
    }
});


function init() {
    renderSearchHistory();
    getGeolocationWeather();
}
init();