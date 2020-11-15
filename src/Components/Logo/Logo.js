import React from "react";
import Tilt from "react-tilt";
import "./logo.css";
import brain from "./brain.svg";
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt  center"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          {" "}
          <img src={brain} alt="brain" />{" "}
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
