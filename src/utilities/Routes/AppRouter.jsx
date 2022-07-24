//* Base
import React from "react";
import loadable from "react-loadable";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

//* MUI
import { Box } from "@mui/material";

//* Components
import LoadingSpinnerText from "components/LoadingSpinnerText/LoadingSpinnerText.jsx";
import Navbar from "components/Navbar/Navbar.jsx";

//* Hooks
import useDetectHeight from "utilities/Hooks/useDetectHeight.jsx";
import { isMobile } from "react-device-detect";

//* Async Page Loading
const AsyncPages = {
  Home: loadable({
    loader: () => import("pages/Home/Home.jsx"),
    loading: LoadingSpinnerText,
  }),
};

//* Site Map
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

//* Main
export default function AppRouter() {
  //* Hooks
  const height = useDetectHeight();

  return (
    <Router>
      <Navbar perfectScrollbarRef />

      {!isMobile ? (
        <Box
          sx={{
            height: `calc(${height}px - 65px)`,
            maxHeight: "100%",
            overflow: "overlay",
            scrollBehavior: "smooth",
          }}
          id="contentContainer"
        >
          <Routes>
            <Route
              path={siteMap.Home.path}
              exact
              element={<AsyncPages.Home />}
            />

            <Route path="*" exact element={<Navigate to="/Home" replace />} />
            <Route path="/" exact element={<Navigate to="/Home" replace />} />
          </Routes>
        </Box>
      ) : (
        <Routes>
          <Route path={siteMap.Home.path} exact element={<AsyncPages.Home />} />

          <Route path="*" exact element={<Navigate to="/Home" replace />} />
          <Route path="/" exact element={<Navigate to="/Home" replace />} />
        </Routes>
      )}
    </Router>
  );
}
