import React, { useState, useRef } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import botImg from "../Images/step1.png";
import topImg from "../Images/step2.png";
import "./Section.css";
const Imgbox = (props, ref) => (
  <img src={props.imgname} alt={props.alttxt} ref={ref} />
);
const Section = () => {
  const [textDes, setTextDes] = useState(
    "Without exporting: limited number of customers."
  );
  const [firImg, setFirImg] = useState(false);

  const nodeRef = useRef(null);

  const imageLoad = () => {};
  const imagechange = (e) => {
    setFirImg(true);
  };
  return (
    <div className="sectionDiv">
      <div className="mapArea" onClick={imagechange}>
        <Imgbox ref={nodeRef} imgname={botImg} alttxt="without_export_image" />
        <CSSTransition
          in={firImg}
          nodeRef={nodeRef}
          className="my-node"
          timeout={200}
          onEnter={() =>
            setTextDes(
              "With exporting, there are more potential customers and increased jobs and income."
            )
          }
        >
          <Imgbox
            ref={nodeRef}
            imgname={topImg}
            alttxt="without_export_image"
          />
        </CSSTransition>

        <div className="detailTxt">{textDes}</div>
      </div>
    </div>
  );
};

export default Section;
