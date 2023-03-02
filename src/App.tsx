import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LoginorSignup from "./pages/LoginorSignup/LoginorSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginorSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
