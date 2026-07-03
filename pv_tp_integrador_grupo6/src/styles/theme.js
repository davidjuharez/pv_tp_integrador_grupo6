import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(3, 38, 78, 0.4)',
          backdropFilter: 'blur(8px)',
          border: '3px solid rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          borderRadius: '12px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(3, 38, 78, 0.4)',
          backdropFilter: 'blur(8px)',
          border: '3px solid rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          borderRadius: '12px',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
          },
          '& .MuiInputLabel-root': {
            color: '#aabbce',
          },
          '& .MuiInputBase-input': {
            color: '#ffffff',
          },
        },
      },
    },
  },
});

export default theme;