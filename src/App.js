//Basic dependencies
import React from "react";

//Components
import Navbar from "components/Navbar/Navbar.jsx";

//Styling
import "./App.css";
import { CssBaseline, Box } from "@mui/material";

import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import loadable from "react-loadable";
import AppRouter from "utilities/Routes/AppRouter.jsx";

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
  },
});

const StyledDiv = styled("div")(({ theme }) => ({
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
}));

export const siteMap = {
  Home: {
    title: "Home",
    path: "/Home",
    description: "Allcon Home",
  },
  About: {
    title: "About",
    path: "/About",
    description: "Allcon About Us",
  },
  Projects: {
    title: "Projects",
    path: "/Projects",
    description: "Allcon Projects",
  },
  Testimonies: {
    title: "Testimonies",
    path: "/Testimonies",
    description: "Allcon Testimonies",
  },
  Contacts: {
    title: "Contacts",
    path: "/Contacts",
    description: "Allcon Contacts",
  },
};

function App() {
  return (
    <StyledDiv>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <AppRouter />
      </ThemeProvider>
    </StyledDiv>
  );
}

export default App;
