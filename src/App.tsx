import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LoginorSignup from "./pages/LoginorSignup/LoginorSignup";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginorSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
library.add(fab, fas, far);
