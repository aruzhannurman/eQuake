import React from "react";
import { Link } from "react-router-dom";
import './what.css';
// import background from "../../assets/img/how4.svg";
// import person from "../../assets/img/persona.svg";
import { useState } from "react";
import person from "../../assets/img/What.svg";
import room from "../../assets/img/room.svg";

const WhatPage = () => {
 
    const [visibility, setVisibility] = useState({});

    const clickShow = () => {
        setVisibility({display: 'flex'});
    };

    const clickHide = () => {
        setVisibility({display: 'none'});
    };

  return (
    <>
    <div  className="background1">
        {/* <div className="TextMain">
        Что делать во время  землетрясения?
        </div> */}
        <div className="backgroup">
        <img className="image" src={person}></img>

        <div  className="mainshow" onClick={clickShow}></div>

        <div className="wrapper" style={visibility}>
        <div className="content">
          <header id="disclaimer">В кровати</header>
          {/* <p id="d1">Paragraph-1!</p> */}
          <div className="roomdiv"><img id="room"  src={room} alt=""/> </div>
            <p id="d2">оставайтесь в постели, натяните на себя простыни и одеяла и используйте подушку, чтобы защитить голову и шею. У вас меньше шансов получить травму, если вы останетесь в постели</p>
          <div>
            <button  className="skr" onClick={clickHide}>скрыть</button>
          </div>
        </div>
      </div>


      </div>

    </div>
    </>
  );
};

export default WhatPage;
