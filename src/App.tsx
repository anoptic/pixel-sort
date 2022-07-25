import '@fontsource/lato';
import '@fontsource/architects-daughter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/header/Header';
import Sorter from './components/Sorter';
import { useMemo, useState } from 'react';
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';

const darkMode = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightMode = createTheme({
  palette: {
    mode: 'light',
  },
});

const queryClient = new QueryClient();

const App = () => {
  const [dark, setDark] = useState(true);

  return (
    <ThemeProvider theme={dark ? darkMode : lightMode}>
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
              <Header dark={dark} setDark={setDark} />
              <Sorter />
            </QueryClientProvider>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
