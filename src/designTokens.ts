import { PaletteMode } from '@mui/material';

const commonTokens = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 0,
      md: 768,
      lg: 768,
      xl: 768,
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 0,
      md: 768,
      lg: 768,
      xl: 768,
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#45758c',
          },
          divider: '#ccc',
          background: {
            default: '#fafafa',
            paper: '#ddd',
          },
          text: {
            primary: '#222',
            secondary: '#444',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#777',
          },
          divider: '#444',
          background: {
            default: '#222',
            paper: '#333',
          },
          text: {
            primary: '#eee',
            secondary: '#aaa',
          },
        }),
  },
  // commonTokens,
});
