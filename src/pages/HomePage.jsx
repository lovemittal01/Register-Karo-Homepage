import React from "react";
import Discount from "../components/discount";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import Trusted from "../components/trusted";
import Services from "../components/services";
import About from "../components/about";
import ChooseUs from "../components/choose-us";
import VideoIntro from "../components/video-intro";
import HappyClients from "../components/happy-clients";
import Steps from "../components/steps";
import Blogs from "../components/blogs";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import MobileApp from "../components/mobile-app";
import ImportantNumbers from "../components/important-numbers";
import Email from "../components/email";
import Companies from "../components/companies";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <>
      <div>
        <Discount />
        <Navbar />
        <HeroSection />
        <Trusted />
        <Services />
        <About />
        <ChooseUs />
        <VideoIntro />
        <HappyClients />
        <Steps />
        <Blogs />
        <Testimonials />
        <Faq />
        <MobileApp />
        <ImportantNumbers />
        <Email />
        <Companies />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
