import React from 'react';
import { styles } from './patientData';
const DashboardFooter = () => (
    <footer style={styles.footer}>
        <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} Healthcare Patient Dashboard |Renukaradhya Odeyar
        </p>
    </footer>
);

export default DashboardFooter;