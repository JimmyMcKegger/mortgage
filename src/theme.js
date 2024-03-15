import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#ddd",
      secondary: "#aaa",
    },
  },
  typography: {
    h1: {
      fontSize: "16px",
      fontWeight: 700
    },
  },
});
