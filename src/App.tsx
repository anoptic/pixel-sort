import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/header/Header';
import Sorter from './components/Sorter';
import { createContext, useMemo, useState } from 'react';
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { getDesignTokens } from './designTokens';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = createContext({ toggleColorMode: () => {} });
const queryClient = new QueryClient();

const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const matches = useMediaQuery('(max-width: 767px)');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        ),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={matches ? 'sm' : 'md'} disableGutters>
          <Box
            sx={[
              {display: 'flex'},
              {justifyContent: 'center'},
              {width: '768px'},
              matches && {width: '392px'},
            ]}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <QueryClientProvider client={queryClient}>
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
