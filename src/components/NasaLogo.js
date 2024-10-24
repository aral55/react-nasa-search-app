import React from "react";
import "../styles/NasaLogo.css";

function NasaLogo () {
    return (
        <div className="nasa-log-wrapper">
        <img
        className="nasa-logo"
        src="https://www.nasa.gov/wp-content/uploads/2023/04/cropped-nasa-logo-wallpaper-300x300.jpeg"
        alt="nasa logo"
        />
        </div>
    );
}

export default NasaLogo;