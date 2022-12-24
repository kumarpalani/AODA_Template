import React, { useState, useRef } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import botImg from "../Images/step1.png";
import topImg from "../Images/step2.png";
import "./Section.css";
const Imgbox = (props) => <img src={props.imgname} alt={props.alttxt} />;
const Section = () => {
  const [textDes, setTextDes] = useState(
    "Without exporting: limited number of customers."
  );
  const [firImg, setFirImg] = useState(false);

  const nodeRef = useRef(null);

  const imageLoad = () => {};
  const imagechange = (e) => {
    setFirImg(true);
    setTextDes(
      "With exporting, there are more potential customers and increased jobs and income."
    );
  };
  return (
    <div className="sectionDiv">
      <div className="mapArea" onClick={imagechange}>
        <CSSTransition
          in={false}
          timeout={300}
          classNames="my-first"
          enter={false}
        >
          <Imgbox imgname={botImg} alttxt="without_export_image" />
        </CSSTransition>
        <CSSTransition
          in={firImg}
          timeout={300}
          classNames="my-node"
          unmountOnExit
          enter={firImg}
        >
          <Imgbox imgname={topImg} alttxt="without_export_image" />
        </CSSTransition>

        <div className="detailTxt">{textDes}</div>
      </div>
    </div>
  );
};

export default Section;
