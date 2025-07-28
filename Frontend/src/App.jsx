import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// ✅ Rename to PascalCase

import MainPage from "./Components/MainPage/mainpage";
import MenuNavbar from "./Components/Menu/Menu";
import Navigation from "./Components/MainPage/NavBar";
import MainCarouselSlider from "./Components/MainPage/MainCarouselSlider";
import FooterMenu from "./Components/MainPage/footer/FooterMenu";
import UpperFooter from "./Components/MainPage/footer/upperFooter";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
