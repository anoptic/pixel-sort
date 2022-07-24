import '@fontsource/lato';
import '@fontsource/architects-daughter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/header/Header';
import Sorter from './components/Sorter';
import { useState } from 'react';

const queryClient = new QueryClient();

const App = () => {
  const [dark, setDark] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <Header dark={dark} setDark={setDark} />
      <Sorter />
    </QueryClientProvider>
  );
};

export default App;
