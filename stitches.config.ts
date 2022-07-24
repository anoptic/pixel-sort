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
      c2: "#eeeeee",
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
    sage1: "#fbfdfc",
    sage2: "#f8faf9",
    sage3: "#f1f4f3",
    sage4: "#ecefed",
    sage5: "#e6e9e8",
    sage6: "#dfe4e2",
    sage7: "#d7dcda",
    sage8: "#c2c9c6",
    sage9: "#8a918e",
    sage10: "#808784",
    sage11: "#6a716e",
    sage12: "#111c18",

    teal1: "#fafefd",
    teal2: "#f1fcfa",
    teal3: "#e7f9f5",
    teal4: "#d9f3ee",
    teal5: "#c7ebe5",
    teal6: "#afdfd7",
    teal7: "#8dcec3",
    teal8: "#53b9ab",
    teal9: "#12a594",
    teal10: "#0e9888",
    teal11: "#067a6f",
    teal12: "#10302b",

    bg: "$sage1",
    fg: "$sage12",
    primary: "$teal11",
    secondary: "$teal8",
  },
});

export const darkTheme = createTheme({
  colors: {
    sage1: "#141716",
    sage2: "#191d1b",
    sage3: "#1f2421",
    sage4: "#252a27",
    sage5: "#2a2f2c",
    sage6: "#303633",
    sage7: "#393f3c",
    sage8: "#4a524e",
    sage9: "#66736d",
    sage10: "#75817b",
    sage11: "#99a29e",
    sage12: "#eceeed",

    teal1: "#091915",
    teal2: "#04201b",
    teal3: "#062923",
    teal4: "#07312b",
    teal5: "#083932",
    teal6: "#09443c",
    teal7: "#0b544a",
    teal8: "#0c6d62",
    teal9: "#12a594",
    teal10: "#10b3a3",
    teal11: "#0ac5b3",
    teal12: "#e1faf4",

    bg: "$sage1",
    fg: "$sage12",
    primary: "$teal11",
    secondary: "$teal8",
  },
});

export const GlobalStyles = globalCss({
  body: {
    fontFamily: "$lato",
    // display: "flex",
    // justifyContent: "center",
    // padding: "1rem",
    // backgroundColor: "$bg",
    // color: "$fg",
  },
});

GlobalStyles();
