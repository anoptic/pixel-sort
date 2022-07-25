import '@fontsource/lato';
import '@fontsource/architects-daughter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/header/Header';
import Sorter from './components/Sorter';
import { useState } from 'react';
import { Box, Container } from '@mui/material';

const queryClient = new QueryClient();

const App = () => {
  const [dark, setDark] = useState(true);

  return (
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
  );
};

export default App;
