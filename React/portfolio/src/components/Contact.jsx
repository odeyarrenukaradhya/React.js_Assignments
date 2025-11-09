import React, { useRef, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export const Contact = () => {
  const inputRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  const currentStyle = {
    input: {
      padding: "10px",
      marginRight: "10px",
      borderRadius: "5px",
      border: `1px solid ${theme === "dark" ? "#f3ed47ff" : "#272617ff"}`,
      width: "60%",
      backgroundColor: theme === "dark" ? "#555" : "white",
      color: theme === "dark" ? "white" : "black",
      transition: "border 0.3s, background-color 0.3s",
    },
    button: {
      padding: "10px 15px",
      borderRadius: "5px",
      cursor: "pointer",
      border: "none",
      backgroundColor: "#28a745",
      color: "white",
    },
    h3: {
      color: theme === "dark" ? "#ffcc00" : "#cc00ff",
    },
  };

  const handleFocusClick = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value.trim();

      if (inputValue === "") {
        alert("You didn't enter anything!");
      } else {
        inputRef.current.focus();
        alert(`Input focused! You entered: ${inputValue}`);
      }
    }
  };

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        borderTop: `1px solid ${theme === "dark" ? "#555" : "#ccc"}`,
      }}
    >
      <h3 style={currentStyle.h3}>Contact Me</h3>
      <input
        ref={inputRef}
        type="email"
        placeholder="Enter your email to connect..."
        style={currentStyle.input}
      />
      <button onClick={handleFocusClick} style={currentStyle.button}>
        Focus on Input
      </button>

      <h2>Connect With Me: </h2>
      <a href="https://www.linkedin.com/in/renukaradhya-odeyar-9b19a4250/">LinkedIn , </a>
      <a href="https://github.com/odeyarrenukaradhya">GitHub</a>
    </div>
  );
};
