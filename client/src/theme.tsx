// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5C67F2',       
      light: '#8C92FF',
      dark: '#2D35B0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F273B5',       
      light: '#FFA3D1',
      dark: '#B43C85',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F7F7FB',    
      paper: '#ffffff',
    },
    text: {
      primary: '#1E1E2F',   
      secondary: '#4B4B61',
      disabled: '#A0A0B2',
    },
    error: {
      main: '#E53935',
    },
    warning: {
      main: '#FFA726',
    },
    info: {
      main: '#29B6F6',
    },
    success: {
      main: '#66BB6A',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700 },
    h2: { fontSize: '2.25rem', fontWeight: 600 },
    h3: { fontSize: '1.75rem', fontWeight: 600 },
    h4: { fontSize: '1.5rem', fontWeight: 600 },
    h5: { fontSize: '1.25rem', fontWeight: 500 },
    h6: { fontSize: '1.125rem', fontWeight: 500 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.5 },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 20px',
          boxShadow: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#5C67F2',
          '&:hover': {
            backgroundColor: '#3f4bd9',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});
export default theme;
