import React, { useEffect } from "react";
import NavBar from "./components/Navigationbar";
import Header from "./components/Header";
import Credential from "./components/Credential";
import NextSec from "./components/NextSection";
import Experience from "./components/Experience";
import PhotoGallery from "./components/photoProject";
import Footer from "./components/Footer";

import "aos/dist/aos.css";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-hidden">
  
      <NavBar />
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-bottom"
      >
        <Header />
      </div>
    
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-bottom"
      >
        <Credential id="sectionA" />
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-bottom"
      >
        <NextSec id="sectionB" />
      </div>
      <div
        data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-bottom"
      >
        <Experience />
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-bottom"
      >
      <PhotoGallery id="sectionC" />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
