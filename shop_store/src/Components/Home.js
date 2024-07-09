import React from "react";
import Nav from "./Nav";
// import Banner from './Banner'
import HeroSection from "./HeroSection";
import ItemsSection from "./ItemsSection";
import Footer from "./Footer";

function home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <ItemsSection />
      <Footer />
    </>
  );
}

export default home;
