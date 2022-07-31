import { PaletteMode } from '@mui/material';

// const commonTokens = {
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 0,
//       md: 768,
//       lg: 768,
//       xl: 768,
//     },
//   },
//   typography: {
//     fontFamily: "'Lato', sans-serif",
//   },
// };

export const getDesignTokens = (mode: PaletteMode) => ({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        #cacheCanvas {
          display: none;
        }
      `,
    },
  },
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
            // main: '#919178',
            main: '#656553',
          },
          secondary: {
            main: '#E3E3DD',
          },
          divider: '#ccc',
          background: {
            default: '#F6F6F4',
            paper: '#FFFFFF',
          },
          text: {
            primary: '#222',
            secondary: '#666',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#A3A38F',
            // main: '#93C0C8',
          },
          secondary: {
            main: '#38382E',
          },
          divider: '#444',
          background: {
            default: '#22221C',
            paper: '#161612',
          },
          text: {
            primary: '#eee',
            secondary: '#aaa',
          },
        }),
  },
  // commonTokens,
});
