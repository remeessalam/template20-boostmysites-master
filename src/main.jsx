import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./App";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import "keen-slider/keen-slider.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  </StrictMode>
);
