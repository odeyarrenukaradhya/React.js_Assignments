import React, { useReducer, useMemo, useCallback, useState, useEffect } from 'react';
import { initialPatients, styles } from './patientData';
import { useLocalStorage } from './useLocalStorage';
import DashboardHeader from './Header';
import DashboardFooter from './Footer';
import ModalPortal from './ModalPortal';
import ErrorBoundary from './ErrorBoundary';
import PatientRow from './PatientRow';
const patientReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PATIENTS': return action.payload;
    case 'ADD_PATIENT': return [...state, { ...action.payload, id: Date.now() }];
    case 'UPDATE_PATIENT': return state.map(p => p.id === action.payload.id ? action.payload : p);
    case 'DELETE_PATIENT': return state.filter(p => p.id !== action.payload.id);
    default: return state;
  }
};

const HealthcareDashboard = () => {
  const [patientsLS, setPatientsFromLS] = useLocalStorage('healthcarePatients', initialPatients);
  const [patients, dispatch] = useReducer(patientReducer, patientsLS ?? initialPatients, (init) => Array.isArray(init) ? init : initialPatients);
  useEffect(() => {
    setPatientsFromLS(patients);
  }, [patients, setPatientsFromLS]);
  const [filterPriority, setFilterPriority] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('appointmentDate');
  const [sortDirection, setSortDirection] = useState('asc');
  const [editingPatient, setEditingPatient] = useState(null);
  const [form, setForm] = useState({
    name: '', age: '', symptoms: '', appointmentDate: '', appointmentTime: '', priority: 'Normal'
  });
  const [confirmDelete, setConfirmDelete] = useState({ open: false, id: null });
  const filteredAndSortedPatients = useMemo(() => {
    let result = patients.slice();
    if (filterPriority !== 'All') result = result.filter(p => p.priority === filterPriority);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => (p.name || '').toLowerCase().includes(q) || (p.appointmentDate || '').includes(q));
    }
    result.sort((a, b) => {
      let valA, valB;
      if (sortBy === 'urgency') {
        valA = a.priority === 'High' ? 0 : 1;
        valB = b.priority === 'High' ? 0 : 1;
      } else {
        valA = a[sortBy] ?? '';
        valB = b[sortBy] ?? '';
      }
      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    return result;
  }, [patients, filterPriority, searchQuery, sortBy, sortDirection]);
  const patientStats = useMemo(() => {
    const total = patients.length;
    const highPriority = patients.filter(p => p.priority === 'High').length;
    return { totalPatients: total, highPriorityPatients: highPriority };
  }, [patients]);
  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }, []);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!form.name || !form.appointmentDate || !form.appointmentTime) {
      return alert('Please fill in required fields.');
    }
    if (editingPatient) {
      dispatch({ type: 'UPDATE_PATIENT', payload: { ...form, id: editingPatient.id } });
    } else {
      dispatch({ type: 'ADD_PATIENT', payload: form });
    }
    setEditingPatient(null);
    setForm({ name: '', age: '', symptoms: '', appointmentDate: '', appointmentTime: '', priority: 'Normal' });
  }, [form, editingPatient]);

  const handleEdit = useCallback((patient) => {
    setEditingPatient(patient);
    setForm({
      name: patient.name, age: patient.age, symptoms: patient.symptoms,
      appointmentDate: patient.appointmentDate, appointmentTime: patient.appointmentTime,
      priority: patient.priority || 'Normal'
    });
  }, []);
  const requestDelete = useCallback((id) => {
    setConfirmDelete({ open: true, id });
  }, []);

  const cancelDelete = useCallback(() => setConfirmDelete({ open: false, id: null }), []);

  const handleDelete = useCallback((id) => {
    dispatch({ type: 'DELETE_PATIENT', payload: { id } });
    cancelDelete();
  }, [cancelDelete]);

  const handleSort = useCallback((key) => {
    setSortDirection(prev => (sortBy === key ? (prev === 'asc' ? 'desc' : 'asc') : 'asc'));
    setSortBy(key);
  }, [sortBy]);
  const renderPatientForm = () => (
    <>
      <div style={styles.column}>
        <h3>{editingPatient ? 'Edit Record' : 'Add New Patient'}</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 15 }}>
            <label style={{ display: 'block', fontWeight: 600 }}>Name</label>
            <input style={styles.input} type="text" name="name" value={form.name} onChange={handleFormChange} required />
          </div>
          <div style={{ marginBottom: 15 }}>
            <label style={{ display: 'block', fontWeight: 600 }}>Age</label>
            <input style={styles.input} type="number" name="age" value={form.age} onChange={handleFormChange} />
          </div>
          <div style={{ marginBottom: 15 }}>
            <label style={{ display: 'block', fontWeight: 600 }}>Symptoms</label>
            <input style={styles.input} type="text" name="symptoms" value={form.symptoms} onChange={handleFormChange} />
          </div>
          <div style={{ marginBottom: 15 }}>
            <label style={{ display: 'block', fontWeight: 600 }}>Date</label>
            <input style={styles.input} type="date" name="appointmentDate" value={form.appointmentDate} onChange={handleFormChange} required />
          </div>
          <div style={{ marginBottom: 15 }}>
            <label style={{ display: 'block', fontWeight: 600 }}>Time</label>
            <input style={styles.input} type="time" name="appointmentTime" value={form.appointmentTime} onChange={handleFormChange} required />
          </div>
          <div style={{ marginBottom: 15 }}>
            <label style={{ display: 'block', fontWeight: 600 }}>Priority</label>
            <select style={styles.input} name="priority" value={form.priority} onChange={handleFormChange}>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="submit" style={{ ...styles.button, ...styles.primaryButton }}>{editingPatient ? 'Save Changes' : 'Add Patient'}</button>
            {editingPatient && (
              <button type="button" style={{ ...styles.button, backgroundColor: '#6c757d' }} onClick={() => { setEditingPatient(null); setForm({ name: '', age: '', symptoms: '', appointmentDate: '', appointmentTime: '', priority: 'Normal' }); }}>
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
  const renderPatientTable = () => (
    <>
      <div style={{ ...styles.column, flex: '2 1 600px', display: 'flex', flexDirection: 'column' }}>
        <h3>Appointments ({filteredAndSortedPatients.length})</h3>
        <div style={{ display: 'flex', gap: 10, marginBottom: 15, flexShrink: 0 }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: 600 }}>Filter Priority:</label>
            <select style={styles.input} value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
              <option value="All">All</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
          <div style={{ flex: 2 }}>
            <label style={{ display: 'block', fontWeight: 600 }}>Search:</label>
            <input style={styles.input} type="text" placeholder="Search by name or date..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
        </div>
        <div style={{ overflowY: 'auto', flexGrow: 1 }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th} onClick={() => handleSort('name')}>Name {sortBy === 'name' ? (sortDirection === 'asc' ? '▲' : '▼') : ''}</th>
                <th style={styles.th} onClick={() => handleSort('appointmentDate')}>Date/Time {sortBy === 'appointmentDate' ? (sortDirection === 'asc' ? '▲' : '▼') : ''}</th>
                <th style={styles.th} onClick={() => handleSort('urgency')}>Priority {sortBy === 'urgency' ? (sortDirection === 'asc' ? '▲' : '▼') : ''}</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <ErrorBoundary>
                {filteredAndSortedPatients.length === 0
                  ? <tr><td colSpan={4} style={{ textAlign: 'center', padding: 16, color: '#6c757d' }}>No patients match the current criteria.</td></tr>
                  : filteredAndSortedPatients.map(p => (
                      <PatientRow key={p.id} patient={p} onEdit={handleEdit} onDelete={requestDelete} />
                    ))
                }
              </ErrorBoundary>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  const renderStats = () => (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, flexShrink: 0 }}>
        <div style={styles.statCard}>
          <h4>Total Patients</h4>
          <p style={{ fontSize: '2em', fontWeight: 700, color: '#007bff' }}>{patientStats.totalPatients}</p>
        </div>
        <div style={{ ...styles.statCard, borderLeftColor: '#dc3545', backgroundColor: '#fff0f0' }}>
          <h4>High Priority</h4>
          <p style={{ fontSize: '2em', fontWeight: 700, color: '#dc3545' }}>{patientStats.highPriorityPatients}</p>
        </div>
      </div>
    </>
  );
  return (
    <div style={styles.dashboard}>
      <DashboardHeader />
      <div style={styles.mainContentWrapper}>
        {renderStats()}
        <div style={styles.content}>
          {renderPatientForm()}
          {renderPatientTable()}
        </div>
      </div>
      <DashboardFooter />
      {confirmDelete.open && (
        <ModalPortal onClose={cancelDelete}>
          <div>
            <h3>Confirm delete</h3>
            <p>Are you sure you want to delete this patient record?</p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button style={{ padding: '8px 12px' }} onClick={() => handleDelete(confirmDelete.id)}>Yes, delete</button>
              <button style={{ padding: '8px 12px' }} onClick={cancelDelete}>Cancel</button>
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  );
};
export default HealthcareDashboard;
