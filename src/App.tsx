import '@fontsource/lato';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import Header from './components/Header';
import Sorter from './components/Sorter';

const newTheme: MantineThemeOverride = {
  fontFamily: 'Lato, sans-serif'
  // lineHeight: 1.5,
};

const App = () => {
  return (
    <>
      <MantineProvider theme={newTheme}>
        <Header />
        <Sorter />
      </MantineProvider>
    </>
  );
};

export default App;
