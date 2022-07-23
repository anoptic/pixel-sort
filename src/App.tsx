import '@fontsource/lato';
import '@fontsource/architects-daughter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/header/Header';
import Sorter from './components/Sorter';
import { lightTheme, darkTheme, styled } from '../stitches.config';
import { useState } from 'react';

const queryClient = new QueryClient();
const Container = styled('div', {
  backgroundColor: '$bg',
  color: '$fg',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100vw',
});

const App = () => {
  const [dark, setDark] = useState(true);

  return (
    <Container className={dark ? darkTheme : lightTheme}>
      <QueryClientProvider client={queryClient}>
        <Header dark={dark} setDark={setDark} />
        <Sorter />
      </QueryClientProvider>
    </Container>
  );
};

export default App;
