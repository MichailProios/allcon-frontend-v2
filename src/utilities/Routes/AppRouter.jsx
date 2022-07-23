import React from "react";
//Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import loadable from "react-loadable";

const AsyncPages = {
  // Home: loadable({
  // loader: () => import("./pages/Home/Home.jsx"),
  // loading: LoadingSquares,
  // }),
};

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

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* <Route path={siteMap.Home.path} exact element={<AsyncPages.Home />} /> */}
      </Routes>
    </Router>
  );
}
