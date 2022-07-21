import { Global } from "@mantine/core";

const GlobalStyles = () => { 
  // console.log(props);
  
  return (
    <Global
      styles={(theme) => ({
        body: {
          // ...theme.fn.fontStyles(),
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
          fontFamily: 'Lato, sans-serif',
          padding: 16,
          display: 'flex',
          justifyContent: 'center',
        },
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        figure: {
          margin: 0,
        }
      })}
    ></Global>
  );
}

export default GlobalStyles;