import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DarkModeProvider from "./assets/customHooks/darkMode.jsx";
import AppWrapper from "./assets/styled-components/wrappers/backgroundWrapper.jsx";
import ActiveFontProvider from "./assets/customHooks/activeFont.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <ActiveFontProvider>
        <AppWrapper>
          <App />
        </AppWrapper>
      </ActiveFontProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
