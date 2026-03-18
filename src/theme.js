import { createTheme } from "@mui/material/styles";

/**
 * Portfolio theme (dark + "tech" accent)
 * - Keep it clean and professional
 * - Strong contrast + subtle neon accent
 */

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#070A12",
      paper: "rgba(255,255,255,0.04)",
    },
    primary: {
      main: "#6AE4FF", // cyan
    },
    secondary: {
      main: "#B39DFF", // soft purple
    },
    text: {
      primary: "#E8ECF7",
      secondary: "rgba(232,236,247,0.70)",
    },
    divider: "rgba(255,255,255,0.10)",
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: [
      "Space Grotesk",
      "Inter",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 800, letterSpacing: "-0.02em" },
    h3: { fontWeight: 750, letterSpacing: "-0.01em" },
    h4: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});

export default theme;
