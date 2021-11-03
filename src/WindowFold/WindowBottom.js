import { motion, useCycle } from "framer-motion";
import * as React from "react";
import NavBarPage from "../Component/NavBarPage";
import "bootstrap/dist/css/bootstrap.min.css";
import WindowBottomBg from "../Img/WindowBottomBg.png";
import WindowBottomWin from "../Img/WindowBottomWin.png";
import OneFingerClick from "../Img/OneFingerClick.png";

const ContactBtnStyle = {
  position: "relative",
  bottom: -700,
  width: 32,
  height: 60,
  backgroundImage: `url(${OneFingerClick})`,
  // backgroundColor: "#666",

  textAlign: "center",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
};
const ContactBubbleStyle = {
  width: 340,
  height: 275,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  opacity: 1,
  backgroundImage: `url(${WindowBottomWin})`,
  // background: "#aaa",
  borderRadius: 20,
  position: "absolute",
  bottom: 100,
  zIndex: 20,
};
const BoxAnimation = {
  animationOne: {
    y: 400,
  },
  animationTwo: {
    y: -100,
  },
};

const ContactBodyStyle = {
  backgroundImage: `url(${WindowBottomBg})`,
  backgroundColor: "#EEEEEE",
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: 0,
};

const MaskStyle = {
  position: "absolute",
  bottom: 0,
  width: 375,
  height: 812,
  backgroundColor: "#999",
  textAlign: "center",
  zIndex: 1,
  opacity: 0,
  display: "flex",
  justifyContent: "center",
  y: 0,
};
const BgAnimation = {
  BgAnimationOne: {
    opacity: 0,
  },
  BgAnimationTwo: {
    opacity: 0.5,
  },
};
const WindowBottom = () => {
  const [animationBg, BgCycleAnimation] = useCycle(
    "BgAnimationOne",
    "BgAnimationTwo"
  );
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
          overflow: "hidden",
          position: "absolute",
          top: 0,
        }}
      >
        <motion.div
          className="MaskChange"
          style={MaskStyle}
          variants={BgAnimation}
          animate={animationBg}
        />
        <div className="ContactBody" style={ContactBodyStyle} />

        <div
          className="ContactBtn"
          onClick={() => cycleAnimation() & BgCycleAnimation()}
          style={ContactBtnStyle}
        />
        <motion.div
          className="boxChange"
          style={ContactBubbleStyle}
          variants={BoxAnimation}
          animate={animationBox}
        />
      </div>
    </div>
  );
};

export default WindowBottom;
