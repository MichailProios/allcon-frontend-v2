//* Base
import React from "react";
import { createRoot } from "react-dom/client";

//* Components
import App from "./App";

//* Render
const root = createRoot(document.getElementById("root"));
root.render(<App />);
