# 🎓 Student Registration Page: React Client-Side Validation Project

This project implements a comprehensive student registration form using **React**, focusing heavily on robust, real-time **client-side form validation** and professional, responsive UI design. It serves as a practical demonstration of controlled components, state management using `useState`, and complex validation logic in a modern React application.

---

## ✨ Features

* **Controlled Components:** All form inputs are managed by React state (`useState`).
* **Real-time Validation:** Input fields are validated dynamically using `onChange` handlers.
* **Comprehensive Validation Logic:** Implements 10 specific validation rules, including password complexity, future date prevention, and cross-field comparisons (Password vs. Confirm Password, Password vs. Username).
* **Dynamic Error Display:** Clear, red error messages appear immediately below invalid fields.
* **Submission Control:** The form prevents submission until all fields meet their validation criteria.
* **Professional UI/UX:** Features a centered, responsive layout, modern input styling, and visual feedback (red borders) for invalid fields.

---

## 🛠️ Technology Stack

* **Frontend Framework:** React (using functional components and Hooks)
* **State Management:** `useState` Hook (No `useEffect` used for validation)
* **Styling:** Plain CSS (`App.css`) for a custom, professional aesthetic.
* **Build Tool:** Assumed modern React environment (Vite/CRA) using `.jsx` and `.css` files.

---

## 🚀 Setup and Installation

Follow these steps to get the project running locally.

### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn

### Steps

1.  **Clone the Repository (or create the files):**
    ```bash
    git clone <your-repo-link>
    cd student-registration-app
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the Application:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically be available at `http://localhost:5173` (or port 3000).

---

## 💡 Key Implementation Details

### State Management
The application uses two primary state variables in `RegistrationForm.jsx`:
1.  `formData`: Holds the current value of every input field.
2.  `errors`: Holds the error message string (or empty string) for every field.

### Validation Flow
The `handleChange` function updates the `formData`, then calls a `validateField` helper function to immediately update the corresponding error message in the `errors` state, providing real-time feedback. The `isFormValid` state ensures the Submit button is disabled until all checks pass.