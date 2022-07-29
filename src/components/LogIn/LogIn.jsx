import React from "react";
import './login.css'

import Demo from '././cur_loc';
import logo from  "../../assets/img/logo2.svg";
import map from "../../assets/img/map.png";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  H1,
  Label,
  Input,
  Button,
  Text
} from "./logInStyles";

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
} from "../HeroSection/heroStyles";

const LogIn = () => {

 
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"> 
          <img id ="logo" src={logo} alt=""/>
          </Icon>

          <div className="Map">
              <div className="Header">
                  <h1 id="header">Сейсмически безопасные <span id="h-blue">места в г. Алматы</span></h1>
              </div>

              <div className="mapclass"> 
              <img id ="map" src={map} alt=""/>
          </div>

         
          {/* <button id="login" onMouseEnter={onHover1}
            onMouseLeave={onHover1} > Найти  Локацию {hover1 ? <ArrowForward /> : <ArrowRight />}
          </button> */}

          </div>

         
      
        </FormWrap>

        {/* <div className="top">
          <button id="login2" className="button">Найти ТОП-3 ближайшие локации </button>
          </div> */}
          <Demo/>
      </Container>
    </>
  );
};

export default LogIn;
