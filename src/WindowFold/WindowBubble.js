import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactHeader from "../Img/ContactHeader.png";
import NavBarPage from "../Component/NavBarPage";
import OneFingerClick from "../Img/OneFingerClick.png";
import ContactFooterActive from "../Img/ContactFooterActive.png";
import Bg from "../Component/Bg";

const ContactBtnStyle = {
  backgroundImage: `url(${OneFingerClick})`,
  position: "absolute",
  top: 0,
  left: 156,
  transform: "rotate(270deg)",
  width: 32,
  height: 60,
  backgroundRepeat: "no-repeat",
  zIndex: 20,
};
const BubbleStyle = {
  width: 160,
  height: 60,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  opacity: 1,
  background: "grey",
  borderRadius: 12,
  position: "absolute",
  right: 200,
  bottom: 60,
  zIndex: 20,
};
const IconStyle = {
  width: 32,
  height: 50,
  backgroundImage: `url(${ContactFooterActive})`,
  opacity: 0.5,
  backgroundRepeat: "no-repeat",
  position: "absolute",
  right: 218,
  bottom: 0,
  zIndex: 1,
};
const IconVariants = {
  animationOne: {
    opacity: 1,
  },
  animationTwo: {
    opacity: 0,
  },
};
const BoxAnimation = {
  animationOne: {
    width: 160,
    height: 60,
  },
  animationTwo: {
    scale: 0,
    width: 0,
    height: 0,
  },
};

const ContactHeaderStyle = {
  backgroundImage: `url(${ContactHeader})`,
  width: 375,
  height: 159,
  position: "fixed",
  zIndex: 2,
  top: 0,
};
const ContactBodyStyle = {
  backgroundImage: `url(${ContactBody})`,
  position: "absolute",
  top: 159,
  width: 375,
  height: 1169,
  zIndex: 1,
};
const ContactFooterStyle = {
  backgroundImage: `url(${ContactFooter})`,
  position: "absolute",
  bottom: 0,
  width: 375,
  height: 65,
  zIndex: 1,
};

const WindowBubble = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const Info = (
    <p>
      Hello,
      <br /> world!
    </p>
  );
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />

      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: 812,
          position: "absolute",
          top: 0,
        }}
      >
        <div
          className="Mask"
          style={{
            height: 812,
            width: 375,
            position: "absolute",
            overflow: "scroll",
          }}
        >
          <div className="ContactHeader" style={ContactHeaderStyle} />
          <div className="ContactBody" style={ContactBodyStyle} />
        </div>
        <div className="ContactFooter" style={ContactFooterStyle}>
          <motion.div
            className="boxChange"
            style={BubbleStyle}
            variants={BoxAnimation}
            animate={animationBox}
          />
          <motion.div
            className="IconChange"
            style={IconStyle}
            variants={IconVariants}
            animate={animationBox}
            transition={{
              type: "tween",
            }}
          />

          <div
            className="ContactBtn"
            onClick={() => cycleAnimation()}
            style={ContactBtnStyle}
          />
        </div>
        <Bg />
      </div>
    </div>
  );
};

export default WindowBubble;
