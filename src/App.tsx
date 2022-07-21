import '@fontsource/lato';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride,
} from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import Header from './components/header/Header';
import Sorter from './components/Sorter';
import GlobalStyles from './GlobalStyles';

// const newTheme: MantineThemeOverride = {
//   // colorScheme: 'dark',
//   // fontFamily: 'Lato, sans-serif',
//   colors: {
//     'dark': [
//       '#cccccc',
//       '#aaaaaa',
//       '#999999',
//       '#888888',
//       '#666666',
//       '#555555',
//       '#444444',
//       '#222222',
//       '#111111',
//       '#000000',
//     ],
//   },
//   // primaryColor: 'dark-gray',
// };

const queryClient = new QueryClient();

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = () => {
    // console.log(colorScheme);
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            colors: {
              dark: [
                '#cccccc',
                '#aaaaaa',
                '#999999',
                '#888888',
                '#666666',
                '#555555',
                '#444444',
                '#222222',
                '#111111',
                '#000000',
              ],
            },
          }}
        >
          <GlobalStyles />
          {/* <MantineProvider theme={newTheme}> */}
            <QueryClientProvider client={queryClient}>
              <Header />
              <Sorter />
            </QueryClientProvider>
          {/* </MantineProvider> */}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default App;
