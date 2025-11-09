import React from 'react';
export const PatientContext = React.createContext({
  state: { patients: [] },
  dispatch: () => null,   
  processedPatients: [],
  stats: { total: 0, highPriority: 0 },
  handleDelete: () => null,
  handleFilterChange: () => null,
  handleSearchChange: () => null,
  handleSortChange: () => null,
});