const primaryColor = '#4e5ce3ff';
const secondaryColor = '#607ef4ff';
const highPriorityColor = '#dc3545';
const normalPriorityColor = '#58f56fff';
const backgroundColor = '#c3d7ebc0'; 

export const styles = {
  dashboardContainer: {
    padding: '25px',
    backgroundColor: backgroundColor,
    minHeight: '100vh',
    width: '100%', 
    boxSizing: 'border-box',
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  header: {
    color: primaryColor,
    borderBottom: `2px solid ${primaryColor}`,
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  mainLayout: {
    display: 'flex',
    gap: '20px',
    width: '100%', 
    maxWidth: '100%', 
    '@media (maxWidth: 900px)': { 
      flexDirection: 'column',
    },
  },
 sidebar: {
    flex: '0 0 280px', 
    padding: '20px',
    border: `1px solid `,
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    height: 'fit-content',
  },
  sidebarHeader: {
    color: secondaryColor,
    marginBottom: '15px',
  },
 content: {
    flex: 1, 
    minWidth: 0,
  },

  inputField: {
    padding: '10px',
    margin: '5px 0',
    borderRadius: '4px',
    border: `1px solid ${secondaryColor}`,
    width: '100%',
    boxSizing: 'border-box',
  },
  selectField: {
    padding: '10px',
    margin: '5px 5px 5px 0',
    borderRadius: '4px',
    border: `1px solid ${secondaryColor}`,
  },
  buttonPrimary: {
    padding: '10px 15px',
    backgroundColor:'blue',
    color: 'white',
    border: 'outset 2px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
 controlsBar: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '15px',
    marginBottom: '25px',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '15px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },

  patientTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
  },
  tableHeader: {
    backgroundColor: primaryColor,
    color: 'white',
    padding: '10px',
    textAlign: 'left',
  },
  tableCell: {
    border: '1px solid #bceba3cf',
    padding: '10px',
  },
 rowHighPriority: {
        backgroundColor: '#ffebee', // Light Red/Pink for urgency
        borderRadius: '8px',
        borderLeft: `5px solid ${highPriorityColor}`, 
    },
  rowNormalPriority: {
        backgroundColor: '#e8f5e9', // Light Green/Mint color
        borderRadius: '8px',
        borderLeft: `5px solid #4caf50`, // Use a complementary green border
    },
// In src/styles/styles.js

// ... (Rest of the styles)

  priorityBadge: (priority) => {
    let bgColor = primaryColor; 
    
    if (priority === 'High') {
      bgColor = highPriorityColor;
    } else if (priority === 'Normal') {
      bgColor = normalPriorityColor; // This sets the amber/orange background
    }

    return ({
      display: 'inline-block',
      padding: '6px 12px',
      borderRadius: '15px',
      fontSize: '0.85em',
      fontWeight: 'bold',
      // 🔑 CRITICAL CHECK: Ensure this property is set to 'white' or a high-contrast color
      color: 'black', 
      backgroundColor: bgColor, 
    });
  },
// ... (Rest of the styles)
};