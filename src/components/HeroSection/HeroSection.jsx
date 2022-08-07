import React from "react";
import { Link } from "react-router-dom";
import './heroSection.css'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  BtnWrapper,
  ArrowForward,
  ArrowRight
} from "./heroStyles";
import { Button } from "../btnStyles";
import Video from "../../assets/video/homeBg.mp4";
import image from "../../assets/img/citymain.svg"
import blur from "../../assets/img/blur.png"


const HeroSection = () => {
  const [hover1, setHover1] = React.useState(false);

  const onHover1 = () => {
    setHover1(!hover1);
  };

  const [hover2, setHover2] = React.useState(false);

  const onHover2 = () => {
    setHover2(!hover2);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
        <img id="townmain" src={image} alt=""/>
        <img id="blur" src={blur} alt=""/>

      </HeroBg>

      <HeroContent>
        <HeroH1> Защити себя <span id="mainColor">  во время землетрясения </span>
 <div>в городе Алматы</div>  </HeroH1>
        <HeroP>
          №1 вебсайт в Казахстане, который предоставляет бесплатную информацию о сейсмически безопасных местах
        </HeroP>

        <BtnWrapper>

        <Link to="/login" style={{ textDecoration: 'none' }}> 
          {/* <Button 
          className="btn1"
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover1}
            onMouseLeave={onHover1}
            btnPrimary="true"
            btnDarkTxt="true"
            btnDarkTxtHover="true"
          > 
            
          </Button> */}
          <button id="login" onMouseEnter={onHover1}
            onMouseLeave={onHover1} > Найти  Локацию {hover1 ? <ArrowForward /> : <ArrowRight />}
          </button>
        </Link>   
         

          <Button className="btn2"
            to="what"
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover2}
            onMouseLeave={onHover2}
            btnPrimary="true"
            btnDarkTxt="true"
            btnDarkTxtHover="true"
          >
            Подготовиться {hover2 ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BtnWrapper>

      
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
