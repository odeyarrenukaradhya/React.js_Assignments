# Personal Portfolio App: Context & Hooks Showcase

This is a simple, minimalist personal portfolio application built with **React** to showcase proficiency in fundamental concepts like the **Context API** for state management and the **`useRef`** hook for direct DOM interaction, all while using **inline CSS** exclusively.

---

## Steps to Run the Project

Follow these steps to get the application running on your local machine.

### Prerequisites

You must have **Node.js** (which includes npm) installed.

### Installation and Execution

1.  **Navigate to the project directory:**
    ```bash
    cd your-project-folder 
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **View the application:**
    Open your browser and navigate to the address shown in your terminal (usually `http://localhost:5173/`).


## Concepts and Component Explanation

ThemeContext.js: Creates the global context object used to share the theme state (light/dark) and the toggle function.

ThemeProvider.js: Manages the theme state using useState and provides the current theme and the toggleTheme function to all consuming components.

ThemeToggle.js: Consumes the theme context to display a fixed icon button (☀️/🌙) that switches the global theme when clicked.

Portfolio.js: The main content container that displays profile information, consumes the theme for dynamic styles, manages the image hover state using useState, and renders the social and contact sections.

Contact.js: Demonstrates the useRef hook by linking to the email input field and contains logic to focus the input and show an alert if the field is empty upon button click.

SocialIcons.js: Uses inline CSS and brand colors to create visually appealing, text-based icons for social media links.

App.js: The root component that wraps the entire application in the ThemeProvider and sets the full-screen background based on the active theme.