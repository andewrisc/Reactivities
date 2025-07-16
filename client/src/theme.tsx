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
  shape: {
    borderRadius: 6, // 👈️ Lebih tajam, kesan minimalis
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '10px 18px',
          boxShadow: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#5C67F2',
          '&:hover': {
            backgroundColor: '#3f4bd9',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            backgroundColor: '#f1f2ff',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: '0 3px 12px rgba(0, 0, 0, 0.04)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 8,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 10,
        },
      },
    },
  },
});

export default theme;
