# 🛍️ React E-commerce Store App 

This project demonstrates **advanced React concepts** by building an interactive product display for a simplified e-commerce store. It focuses on effective data management, conditional rendering for various UI states, and creating reusable component structures.

---

## Features Implemented

### 1. Component Structure & Data Flow 
* **StoreApp (Parent):** Manages global state (product data, `cartCount`) and initiates the data flow.
* **ProductList (Intermediate):** Receives product array and handler, mapping them down to individual items.
* **ProductItem (Child):** Receives specific product data and handlers via **Prop Drilling** from the `StoreApp` through the `ProductList`.
* **Header:** Displays state-driven data (`cartCount`).

### 2. Conditional Rendering

* **Ternary Operator (`? :`):** Used extensively in `ProductItem.jsx` to switch between three UI states based on availability and user action:
    * `✅ Item Added to Cart!` (Temporary confirmation message)
    * **"Add to Cart"** button (`product.available === true`)
    * **"Out of Stock 😟"** label (`product.available === false`)
* **Logical AND (`&&`) Operator:** Used to display the **"✨ Special Offer Available!"** message only if the product price exceeds a set threshold (e.g., $300).

### 3. Reusable Layout (`props.children`)
* **Card Component:** A reusable wrapper implemented using **`props.children`**. It provides consistent styling and structure for each product box, allowing dynamic content to be nested within it.

### 4. UI/UX Enhancements
* **Image Display:** Each product now includes a placeholder image URL.
* **Cart Feedback:** Clicking "Add to Cart" triggers a short, temporary confirmation message ("Item Added!").
* **Responsiveness:** The **Header** component is made responsive using **CSS Media Queries** to ensure a clean layout on small mobile screens.

---

## ⚙️ Steps to Run the Project

Follow these steps to set up and run the project locally.

### Prerequisites

You need to have **Node.js** and **npm** (or Yarn/pnpm) installed on your system.

### 1. Setup

Assuming you have saved the provided code into the appropriate files (e.g., `StoreApp.jsx`, `ProductItem.jsx`, `App.css`, etc.) within a standard React project structure (like one created by Vite or Create React App):

1.  **Install Dependencies:** Navigate to your project root directory and run:
    ```bash
    npm install
    # or
    # yarn install
    ```

### 2. Run the Application

1.  Start the development server:
    ```bash
    npm run dev 
    # (Common command for Vite)
    
    # or 
    
    # npm start 
    # (Common command for Create React App)
    ```

2.  Open your browser and navigate to the local address provided by the terminal (usually `http://localhost:5173/` or `http://localhost:3000/`).

-