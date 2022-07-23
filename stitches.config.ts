import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      c1: "#222222",
      c2: "#fafafa",
      c3: "#74A4BC",
      c4: "#B6D6CC",
      c5: "#E1AA7D",
    },
    fonts: {
      lato: "Lato, sans-serif",
      arch: "Architects Daughter, cursive",
    },
  },
});

export const lightTheme = createTheme({
  colors: {
    bg: '$c2',
    fg: '$c1',
  },
});

export const darkTheme = createTheme({
  colors: {
    bg: '$c1',
    fg: '$c2',
  }
})

const GlobalStyles = globalCss({
  body: {
    fontFamily: "$lato",
    // display: "flex",
    // justifyContent: "center",
    // padding: "1rem",
    // backgroundColor: "$gray1",
    // color: "$gray12",
  },
});

GlobalStyles();