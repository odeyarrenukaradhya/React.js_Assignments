import React from "react";

const PatientList = React.memo(({ patients, onDelete }) => {
  return (
    <>
      <h2>Patients List</h2>
      {patients.length === 0 ? (
        <p>No patients available.</p>
      ) : (
        <div className="patient-list">
          {patients.map((patient) => (
            <div key={patient.id} className="patient-card">
              <h3>{patient.name}</h3>
              <p>Age: {patient.age}</p>
              <p>Disease: {patient.disease}</p>
              <button onClick={() => onDelete(patient.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
});

export default PatientList;
