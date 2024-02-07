import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Barlow Semi Condensed",
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  palette: {
    primary: {
      main: "hsl(263, 55%, 52%)", // Moderate violet
      dark: "hsl(217, 19%, 35%)", // Very dark grayish blue
      contrastText: "hsl(0, 0%, 100%)", // White
    },
    secondary: {
      main: "hsl(219, 29%, 14%)", // Very dark blackish blue
    },
    info: {
      light: "hsl(0, 0%, 81%)", // Light gray
      main: "hsl(210, 46%, 95%)", // Light grayish blue
    },
  },
});
