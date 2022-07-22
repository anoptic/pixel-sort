import '@fontsource/lato';
import '@fontsource/architects-daughter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import Header from './components/header/Header';
import Sorter from './components/Sorter';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
          <QueryClientProvider client={queryClient}>
            <Header />
            <Sorter />
          </QueryClientProvider>
    </>
  );
};

export default App;
