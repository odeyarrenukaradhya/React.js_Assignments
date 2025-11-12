import React from 'react';
function PatientRowInner({ patient, onEdit, onDelete }) {
  if (!patient) throw new Error('Patient missing'); 
  return (
    <tr>
      <td style={{ padding: '8px' }}>{patient.name}</td>
      <td style={{ padding: '8px' }}>{patient.appointmentDate} at {patient.appointmentTime}</td>
      <td style={{ padding: '8px' }}>
        <span style={patient.priority === 'High' ? { color: '#dc3545', fontWeight: 700 } : { color: '#007bff' }}>
          {patient.priority}
        </span>
      </td>
      <td style={{ padding: '8px', display: 'flex', gap: 8 }}>
        <button style={{ padding: '6px 10px', background: '#67eb5bff', border: 'none', borderRadius: 6 }} onClick={() => onEdit(patient)}>Edit</button>
        <button style={{ padding: '6px 10px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: 6 }} onClick={() => onDelete(patient.id)}>Delete</button>
      </td>
    </tr>
  );
}
function areEqual(prev, next) {
  return prev.patient.id === next.patient.id
    && prev.patient.name === next.patient.name
    && prev.patient.appointmentDate === next.patient.appointmentDate
    && prev.patient.appointmentTime === next.patient.appointmentTime
    && prev.patient.priority === next.patient.priority
    && prev.onEdit === next.onEdit
    && prev.onDelete === next.onDelete;
}

export default React.memo(PatientRowInner, areEqual);
