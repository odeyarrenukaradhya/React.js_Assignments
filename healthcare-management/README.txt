# Healthcare Management Dashboard

A high-performance single-page application built with React, focusing on efficient patient data management using advanced hooks.

### Installation & Run

1.  **Clone the repository:**
    ```bash
    git clone [your-repo-link] healthcare-dashboard
    cd healthcare-dashboard
    ```

2.  **Install dependencies:**
    ```bash
    npm install 
    ```

3.  **Start the application:**
    ```bash
    npm start
    ```

##  Methods and Concepts

useReducer : Manages complex state logic (CRUD, filtering) with clear actions, centralizing all state changes.

useMemo : Optimizes performance by memoizing (caching) expensive filter/sort calculations. Only recalculates when patient data or filter criteria change. 

useCallback : Optimizes performance by memoizing (caching) event handlers (`handleDelete`, `handleFilterChange`). Keeps function references stable to prevent unnecessary child component re-renders.

useContext : Shares global state and memoized functions across the entire application without manual prop passing.

React.memo : Prevents components from re-rendering unless their specific props have changed.

Inline CSS : Defines and applies all component styles using JavaScript objects for strict consistency. 