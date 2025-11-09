import React, { useState } from "react";
import ReactDOM from "react-dom";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";
import "./App.css";

// ---------------- Error Boundary ----------------
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by Error Boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while rendering the Dashboard.</h2>;
    }
    return this.props.children;
  }
}

// ---------------- Modal using React Portal ----------------
const Modal = ({ show, onClose, onConfirm, message }) => {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-box">
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="btn-confirm">Confirm</button>
          <button onClick={onClose} className="btn-cancel">Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

// ---------------- Main App Component ----------------
function App() {
  const [patients, setPatients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const addPatient = (patient) => {
    setPatients([...patients, { ...patient, id: Date.now() }]);
  };

  const confirmDelete = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleDelete = () => {
    setPatients(patients.filter((p) => p.id !== selectedId));
    setShowModal(false);
  };

  return (
    <>
      <ErrorBoundary>
        <h1>Healthcare Management Dashboard</h1>
        <PatientForm onAdd={addPatient} />
        <PatientList patients={patients} onDelete={confirmDelete} />

        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={handleDelete}
          message="Are you sure you want to delete this patient?"
        />
      </ErrorBoundary>
    </>
  );
}

export default App;

