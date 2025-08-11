import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// ✅ Rename to PascalCase

import MainPage from "./Components/MainPage/mainpage";

import CabinetNews from "./Components/MainPage/CabinateNews/CabinetNews";

import CmAllNews from "./Components/MainPage/CmNews/CmAllNews";
import PhotoAlbum from "./Components/MainPage/PhotoAlbum/PhotoAlbum";
import VideoAlbum from "./Components/MainPage/VideosAlbum/VideoAlbum";
import CabinateAllNews from "./Components/MainPage/CabinateNews/CanibateAllNews";
import TodayAllNews from "./Components/MainPage/TodayNews/TodaysAllNews";
import TodayNews from "./Components/MainPage/TodayNews/TodaysNews";
import NoticeBoard from "./Components/MainPage/Notice/NoticeBoard";
import Tender from "./Components/MainPage/Tenders/Tenders";
import Publication from "./Components/MainPage/Publication/publication";
import LogoSection from "./Components/MainPage/LogoSection/Logosection";





const App = () => {
  return (
    <Router>
      <Routes>
       
       <Route path="/"element={<MainPage/>}/>
        <Route path="/cmnews"element={<CmAllNews/>}/>
        <Route path="/notice"element={<NoticeBoard/>}/>
        <Route path="/tenders"element={<Tender/>}/>
        <Route path="/publication"element={<Publication/>}/>
        
        <Route path="/todaynews"element={<TodayAllNews/>}/>
       
        <Route path="/cabinatenews" element={<CabinateAllNews/>}/>
        <Route path="/photoalbum"element={<PhotoAlbum/>}/>
        <Route path="/videosalbum"element={<VideoAlbum/>}/>
      </Routes>
    </Router>
  );
};

export default App;
