import React from "react";
import LogoSection from "./Logosection";
import TopBar from "./Topbar";
import MainCarouserSlider from "./MainCarouselSlider";
import CMSpeech from "./CMSpeech";
import CMNews from "./CMNews";
import SuccessStories from "./SuccessStories";
import CabinetNews from "./CabinetNews";
import PhotoGallerySection from "./PhotoGallerySection";
import SocialMedia from "./SocialMedia";
import Implink from "./implink";
import UpperFooter from "./footer/upperFooter";
import NavBar from "./NavBar";

const mainpage = () => {
  return (
    <div className="container-fluid">
      <div>
        <TopBar />
      </div>
      <div>
        <LogoSection />
      </div>
      <div>
        <NavBar />
      </div>
      <div className="mt-4 mb-4">
        <MainCarouserSlider />
      </div>
      <div>
        <CMSpeech />
      </div>
      <div>
        <CMNews />
      </div>
      <div>
        <SuccessStories />
      </div>
      <div>
        <CabinetNews />
      </div>
      <div>
        <PhotoGallerySection />
      </div>
      <div>
        <SocialMedia />
      </div>
      <div>
        <Implink />
      </div>
      <div>
        <UpperFooter />
      </div>
    </div>
  );
};

export default mainpage;
