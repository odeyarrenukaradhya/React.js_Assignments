import React, { useState } from "react";

function PatientForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [disease, setDisease] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && disease) {
      onAdd({ name, age, disease });
      setName("");
      setAge("");
      setDisease("");
    }
  };

  return (
    <>
      <h2>Add New Patient</h2>
      <form onSubmit={handleSubmit} className="patient-form">
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Disease"
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
          required
        />
        <button type="submit">Add Patient</button>
      </form>
    </>
  );
}

export default PatientForm;
