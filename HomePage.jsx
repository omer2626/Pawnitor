import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
import JoinUs from "./JoinUs";
import WhyChooseUs from "./WhyChooseUs";
import Benifits from "./Benifits";

const HomePage = () => {
  return (
    <>
      <div> 
        <Header></Header>
        <Hero></Hero>
        <Features></Features>
        <HowItWorks></HowItWorks>
        <Benifits></Benifits>
        <WhyChooseUs></WhyChooseUs>
        <JoinUs></JoinUs>
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomePage;
