import React, { useState } from "react";
import { useGeolocated } from "react-geolocated";
import { createRoutesFromChildren } from "react-router-dom";
import data from "../../assets/data.json";
import "./login.css";

const Demo = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 1000,
    });

  const [closestLocation, setClosestLocation] = useState(null);

  function distance(lat1, lon1, lat2, lon2) {
    let radlat1 = (Math.PI * lat1) / 180;
    let radlat2 = (Math.PI * lat2) / 180;
    let theta = lon1 - lon2;
    let radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return dist;
  }

  const closestPlace = () => {
    const dataWithDistance = data.map((item) => {
      return {
        ...item,
        distanceFromHere: distance(
          coords.latitude,
          coords.longitude,
          item.lat,
          item.lng
        ),
      };
    });

    console.log(
      dataWithDistance
        .sort((a, b) => a.distanceFromHere - b.distanceFromHere)
        .filter((el, index) => index < 3)
    );

    setClosestLocation(
      dataWithDistance
        .sort((a, b) => a.distanceFromHere - b.distanceFromHere)
        .filter((el, index) => index < 3)
    );
  };

  const [cls, setCls] = useState("#44ADFF");



  const together = () => {
    closestPlace();
    console.log(cls);
    setCls(cls === "#44ADFF" ? "#D9D9D9" : "#D9D9D9");

  }



  console.log(closestLocation);
  return !isGeolocationAvailable ? (
    <div>{/* Your browser does not support Geolocation */}</div>
  ) : !isGeolocationEnabled ? (
    <div>{/* Geolocation is not enabled */}</div>
  ) : coords ? (
    <>
      {/* <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{coords.latitude}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{coords.longitude}</td>
          </tr>
        </tbody>
      </table> */}

      {/* <div>
        {data.map((item)=>(
          <div>{item.name}  :{distance(coords.latitude, coords.longitude, item.lat, item.lng)} </div>
        ))}
      </div> */}

      <div className="top">
        <button id="login2" onClick={together} style={{backgroundColor:`${cls}`}}>
          Найти ТОП-3 ближайшие локации 
        </button>
        <div className="between">
          {closestLocation &&
            closestLocation.map((el, index) => (
              <div className="text" key={el.num}>
                {" "}
                <div className="first">
                  {index + 1}. <span id="piece"> {el.name} </span>
                </div>
                <div className="leo">Тип: метро
                  </div>
                <div className="second">
                  <a href={el.url}>Построить маршрут</a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  ) : (
    <div>{/* Getting the location data */}</div>
  );
};

export default Demo;
