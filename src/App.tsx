import '@fontsource/lato';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/header/Header';
import Sorter from './components/Sorter';

const newTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Lato, sans-serif'
  // lineHeight: 1.5,
};

const queryClient = new QueryClient(); //{
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//       // cacheTime: Infinity,
//     },
//   },
// });

const App = () => {
  return (
    <>
      <MantineProvider theme={newTheme} withGlobalStyles>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Sorter />
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
};

export default App;
