import React from "react";

import "./Header.css";
const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    <h2>{props.info}</h2>
  </div>
);

export default Header;
