import "./styles.global.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { MainLayout } from "./components";
import HomePage from "./pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainLayout>
      <HomePage />
    </MainLayout>
  </React.StrictMode>
);
