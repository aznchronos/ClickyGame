import React from "react";
import "./style.css";

function Header (props) {
  return(
  <div className="header">
    <center>
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
    </center>
  </div>
  )
};

export default Header;
