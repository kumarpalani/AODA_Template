import React, { useState } from "react";
import botImg from "../Images/step1.png";
import topImg from "../Images/step2.png";
import "./Section.css";
const Imgbox = (props) => <img src={props.imgname} alt={props.alttxt} />;
const Section = () => {
  const [textDes, setTextDes] = useState(
    "Without exporting: limited number of customers."
  );

  const imageLoad = () => {};
  const imagechange = (e) => {
    setTextDes(
      "With exporting, there are more potential customers and increased jobs and income."
    );
  };
  return (
    <div className="sectionDiv">
      <div className="mapArea" onClick={imagechange}>
        <Imgbox imgname={botImg} alttxt="without_export_image" />
        <Imgbox imgname={topImg} alttxt="without_export_image" />
        <div className="detailTxt">{textDes} </div>
      </div>
    </div>
  );
};

export default Section;
