//* Base
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

//* MUI
import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import { withStyles } from "@mui/styles";

//* Components
import AppRouter from "utilities/Routes/AppRouter.jsx";

//* Styling
import "./App.css";

//* Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#008B8B",
      light: "#00b3b3",
      dark: "#006666",
    },
    secondary: {
      main: "#008B8B",
      light: "#00b3b3",
      dark: "#006666",
    },
    success: {
      main: "#4caf50",
      secondary: "#3e8e41",
    },
    error: {
      main: "#f44336",
      secondary: "#c2160a",
    },

    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "unset" } },
    },
  },
});

const GlobalCss = withStyles({
  "@global": {
    "*": {
      scrollbarWidth: "thin",
      scrollbarColor: "#B7B7B7 transparent",
      "&::-webkit-scrollbar": {
        width: 8,
        height: 6,
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: 6,
        backgroundColor: "#B7B7B7",
        minHeight: 24,
        minWidth: 24,
      },
      "&::-webkit-scrollbar-thumb:focus": {
        backgroundColor: "#adadad",
      },
      "&::-webkit-scrollbar-thumb:active": {
        backgroundColor: "#adadad",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#adadad",
      },
      "&::-webkit-scrollbar-corner": {
        backgroundColor: "transparent",
      },
    },
  },
})(() => null);

//! TEMPORARY
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

//* Main
export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <CssBaseline />
      <GlobalCss />
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
