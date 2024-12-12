import React from "react";
import "./map.css";

const Map = () => {
  return (
    <>
      <div className="map">
        <h2>Servis Məntəqələrimiz</h2>
        <iframe className="loc-map"
          src="https://www.google.com/maps/d/u/0/embed?mid=1RziyvhkOSVzsNLh0Bph2OXisRfCR5Ms&ehbc=2E312F"
          width="1250"
          height="540"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
