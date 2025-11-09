// In src/components/DashboardStats.js

import React, { useContext } from 'react';
import { PatientContext } from '../context/PatientContext';
import { styles } from '../styles/styles';

const DashboardStats = React.memo(() => {
  const { stats } = useContext(PatientContext);
  const { total, highPriority, normalPriority } = stats; 

  console.log('DashboardStats RENDERED');

  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
      
      <div style={styles.statCard}>
        <h3 style={{...styles.sidebarHeader, border: 'none'}}>Total Patients</h3>
        <p style={{ fontSize: '2.5em', fontWeight: '500', color: styles.primaryColor }}>{total}</p>
      </div>
      
      <div style={styles.statCard}>
        <h3 style={{...styles.sidebarHeader, border: 'none'}}>High Priority</h3>
        <p style={{ fontSize: '2.5em', fontWeight: '500', color: styles.highPriorityColor }}>{highPriority}</p>
      </div>


      <div style={styles.statCard}>
        <h3 style={{...styles.sidebarHeader, border: 'none'}}>Normal Priority</h3>
        <p style={{ fontSize: '2.5em', fontWeight: '500', color: styles.normalPriorityColor }}>{normalPriority}</p>
      </div>

    </div>
  );
});

export default DashboardStats;