import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import HowPage from "../components/HowPage/how";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from "../components/InfoSection/Data";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Services />
      
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjThree} /> */}
      <HowPage/>
      <Footer />
    </>
  );
}

export default Home;
