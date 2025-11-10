import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
const ThemeContext = createContext();
function SmartTodo() {
  const [theme, setTheme] = useState("☀️");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "☀️" ? "🌙" : "☀️"));
  const appStyle = {
    backgroundColor: theme === "☀️" ? "#f5f5f5" : "#1a1a1a",
    color: theme === "☀️" ? "#111" : "#eee",
    minHeight: "100vh",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={appStyle}>
        <h1>Smart Task Manager</h1>
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 15px",
            backgroundColor: theme === "Light" ? "#be7a15e5" : "#d8cb1977",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Toggle Theme ({theme})
        </button>
        <Todo />
      </div>
    </ThemeContext.Provider>
  );
}

function Todo() {
  const { theme } = useContext(ThemeContext);
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) {
      alert("Please enter a task");
      return;
    }
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "completed"
      ? tasks.filter((t) => t.completed)
      : tasks.filter((t) => !t.completed);

  const styles = {
    input: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #100c0cff",
      width: "250px",
      marginRight: "10px",
    },
    button: {
      padding: "10px 15px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      backgroundColor: theme === "light" ? "#53ef5bff" : "#4aee70ff",
      color: "#fff",
    },
    task: {
      margin: "10px auto",
      padding: "10px",
      width: "300px",
      borderRadius: "8px",
      backgroundColor: theme === "light" ? "#fff" : "#f3e693ff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={styles.input}
      />
      <button onClick={addTask} style={styles.button}>
        Add
      </button>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
        style={{ ...styles.button, marginLeft: "10px" }}
      >
        Focus Input
      </button>

      <div style={{ marginTop: "20px" }}>
        <label>Filter: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div style={{ marginTop: "30px" }}>
        {filteredTasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          filteredTasks.map((t) => (
            <div key={t.id} style={styles.task}>
              <span
                style={{
                  textDecoration: t.completed ? "line-through" : "none",
                }}
              >
                {t.text}
              </span>
              <div>
                <button
                  onClick={() => toggleTask(t.id)}
                  style={{
                    ...styles.button,
                    backgroundColor: t.completed ? "#999" : "#28a745",
                  }}
                >
                  {t.completed ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => deleteTask(t.id)}
                  style={{
                    ...styles.button,
                    backgroundColor: "#dc3545",
                    marginLeft: "5px",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <p style={{ marginTop: "20px", textAlign: "center" }}>
        Completed: {tasks.filter((t) => t.completed).length}/{tasks.length}
      </p>
    </div>
  );
}

export default SmartTodo;
