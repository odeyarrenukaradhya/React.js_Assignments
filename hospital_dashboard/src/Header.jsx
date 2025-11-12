import React from 'react';
import { styles } from './patientData';
const DashboardHeader = () => (
    <header style={styles.header}>
        <h1 style={{ marginLeft: "400px", fontSize: '28px' }}>Healthcare Dashboard</h1>
        <p style={{ marginLeft: '400px', fontSize: '16px', opacity: 0.9 }}>
            Easily manage the appointments and data of the patients.
        </p>
    </header>
);

export default DashboardHeader;