const initialPatients = [
  { id: 1, name: 'Alice Smith', age: 45, symptoms: 'Fever, cough', appointment: '2025-10-26T10:00', priority: 'High' },
  { id: 2, name: 'Bob Johnson', age: 30, symptoms: 'Back pain', appointment: '2025-10-26T11:30', priority: 'Normal' },
  { id: 3, name: 'Charlie Brown', age: 70, symptoms: 'Fatigue', appointment: '2025-10-27T09:00', priority: 'High' },
];

// src/state/patientReducer.js

// Initial state with an empty patient list for a fresh start on every load
export const initialState = {
  patients: [], // 🔑 Changed to an empty array for "start from zero"
  filterPriority: 'All', 
  searchTerm: '',
  sortKey: 'appointment',
};

export const patientReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PATIENT':
      return {
        ...state,
        // Ensure new patients are assigned a unique ID
        patients: [{ ...action.payload, id: Date.now() }, ...state.patients],
      };
    case 'UPDATE_PATIENT':
      return {
        ...state,
        patients: state.patients.map(p =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case 'DELETE_PATIENT':
      return {
        ...state,
        patients: state.patients.filter(p => p.id !== action.payload.id),
      };
    case 'SET_FILTER_PRIORITY':
      return {
        ...state,
        filterPriority: action.payload,
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'SET_SORT_KEY':
        return {
          ...state,
          sortKey: action.payload,
        };
    default:
      return state;
  }
};
