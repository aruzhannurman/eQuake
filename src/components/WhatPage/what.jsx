import React from "react";
import { Link } from "react-router-dom";
import './what.css';
// import background from "../../assets/img/how4.svg";
// import person from "../../assets/img/persona.svg";
import { useState } from "react";
import person from "../../assets/img/persona.svg";
import room from "../../assets/img/room.svg";

const WhatPage = () => {

  const [visibility, setVisibility] = useState({});
  const [idM,setId] = useState();
  const [show, setShow] = useState();
  const clickShow = () => {
    setVisibility({ display: 'flex' });
  };

  const clickHide = () => {
    setVisibility({ display: 'none' });
  };

  const items = [
    {
      id: 1,
      label: "В многоэтажке",
      description: "Не спешите на улицу только потому, что сработала пожарная сигнализация. Если вы считаете, что у вас не будет достаточно времени, чтобы эвакуироваться из здания, мы рекомендуем вам подняться на пятый этаж или выше внутри вашего здания.",
      icons: "../../assets/img/room.svg"
    },
    {
      id: 2,
      label: "На улице",
      description: "Отодвиньтесь от зданий, деревьев и линий электропередач. А затем найдите пустое место и прикройте голову.",
      icons: { room }

    },
    {
      id: 3,
      label: "Общественное место",
      description: "Не оставайтесь на пешеходной дорожке, так как на вас могут упасть предметы из окружающих вас зданий. Быстро войдите в здание, затем ПАДАЕТЕ, НАКРЫВАЙТЕ и УДЕРЖИВАЙТЕ.",
      icons: { room }

    },
    {
      id: 4,
      label: "В машине",
      description: "ОСТАНОВИТЕСЬ и ПОДОЖДИТЕ - остановитесь в свободном месте, остановитесь и оставайтесь там с пристегнутым ремнем безопасности, пока тряска не прекратится. Когда сотрясение прекратится, действуйте осторожно и избегайте мостов или пандусов, так как они могут быть повреждены.",
      icons: { room }

    },
    {
      id: 5,
      label: "В кровати",
      description: "Оставайтесь в постели, натяните на себя простыни и одеяла и используйте подушку, чтобы защитить голову и шею. У вас меньше шансов получить травму, если вы останетесь в постели",
      icons: { room }
    },
    {
      id: 6,
      label: "В лифте",
      description: "СНЯТЬ, НАКРЫТЬ и УДЕРЖИВАТЬ. Когда тряска прекратится, попытайтесь выбраться на ближайший этаж, если можете безопасно это сделать.",
      icons: { room }
    }
  ];
  console.log(idM)

  return (
    < >

      <div id ="what" className="background1">
        <div className="TextMain">
        Что делать во время  землетрясения?
        </div>
        <div className="backgroup">
          <img className="image" src={person}></img>

          <div className="image-group">
            <div className="mainshow1" onClick={()=>{clickShow() ;setId(items[0])}}></div>
            <div className="mainshow2" onClick={()=>{clickShow() ;setId(items[1])}}></div>
            <div className="mainshow3" onClick={()=>{clickShow() ;setId(items[2])}}></div>
            <div className="mainshow4" onClick={()=>{clickShow() ;setId(items[3])}}></div>
            <div className="mainshow5" onClick={()=>{clickShow() ;setId(items[4])}}></div>
            <div className="mainshow6" onClick={()=>{clickShow() ;setId(items[5])}}></div>
          </div>

          <div className="wrapper" style={visibility}>
            {idM && <div className="content">
                  <header id="disclaimer">{idM.label}</header>
                  <div className="roomdiv"><img id="room" src={idM.icons} alt="" /> </div>
                  <p id="d2">{idM.description}</p>
                  <button className="skr" onClick={clickHide}>скрыть</button>
                </div>}

              
            </div>
          </div>

        </div>
    </>
  );
};

export default WhatPage;
