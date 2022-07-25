import '@fontsource/lato';
import '@fontsource/architects-daughter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/header/Header';
import Sorter from './components/Sorter';
import { createContext, useContext, useMemo, useState } from 'react';
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  useTheme,
} from '@mui/material';

// const darkMode = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });
// const lightMode = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const queryClient = new QueryClient();

const App = () => {
  // const [dark, setDark] = useState(true);
  // const theme = useTheme();
  // const colorMode = useContext(ColorModeContext);
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    }
  }), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
    {/* <ThemeProvider theme={dark ? darkMode : lightMode}> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md" disableGutters>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                // padding: '0 3rem',
              }}
            >
              <QueryClientProvider client={queryClient}>
                {/* <Header dark={dark} setDark={setDark} /> */}
                <Header />
                <Sorter />
              </QueryClientProvider>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
