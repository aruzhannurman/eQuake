import React from "react";
import { Link } from "react-router-dom";
import './how.css'
import background from "../../assets/img/how4.svg"


const HowPage = () => {
 

  return (
    <>
    <div className="backPage">
    <div id="how" className="background" style={{ backgroundImage: `url(${background})` }}>
    </div>
    </div>
    </>
  );
};

export default HowPage;
