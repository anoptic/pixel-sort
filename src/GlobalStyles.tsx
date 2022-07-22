import { Global } from "@mantine/core";

const GlobalStyles = () => { 
  // console.log(props);
  
  return (
    <Global
      styles={(theme) => ({
        '*': {
          fontFamily: 'Architects Daughter'
        },
        body: {
          // ...theme.fn.fontStyles(),
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.dark[0],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[1]
              : theme.colors.dark[8],
          lineHeight: theme.lineHeight,
          fontFamily: 'Architects Daughter, sans-serif',
          padding: 16,
          display: 'flex',
          justifyContent: 'center',
        },
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        figure: {
          margin: 0,
        },
      })}
    ></Global>
  );
}

export default GlobalStyles;