import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: red[800],
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#fff",
    },
  },
  shape: {
    borderRadius: 24,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textShadow: `2px 2px 10px #ff0000`,
        },
      },
    },
  },
});

export default theme;
