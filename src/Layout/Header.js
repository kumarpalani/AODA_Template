import React from "react";

import "./Header.css";
const Header = (props) => (
  <div className="headeDiv">
    <h1>{props.title}</h1>
    <h2>{props.title2}</h2>
    <p>{props.info} </p>
  </div>
);

export default Header;
