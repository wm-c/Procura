// components/Providers.jsx
"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cache = createCache({ key: "mui", prepend: true });

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#050507",
      paper: "#0f1113",
    },
    text: {
      primary: "#ffffff",
      secondary: "#9aa3b2",
    },
    primary: {
      main: "#60a5fa",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    h1: { fontWeight: 700, fontSize: "3rem", letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, fontSize: "2rem" },
    h3: { fontWeight: 600 },
    body1: { color: "#dfe7ef" },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 999,
        },
      },
    },
  },
});

export default function Providers({ children }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
