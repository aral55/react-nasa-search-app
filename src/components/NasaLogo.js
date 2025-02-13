import React from "react";
import "../styles/NasaLogo.css";

function NasaLogo() {
  return (
    <div className="nasa-log-wrapper">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasa logo"
      />
    </div>
  );
}

export default NasaLogo;