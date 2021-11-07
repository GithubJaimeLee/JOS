import { motion, useCycle, AnimatePresence } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import WindowCenterBg from "../Img/WindowCenterBg.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import WindowCenterWin from "../Img/WindowCenterWin.png";

const ContactBtnStyle = {
  position: "relative",
  backgroundImage: `url(${OneFingerClick})`,
  bottom: -500,
  width: 32,
  height: 60,
  // backgroundColor: "#666",

  textAlign: "center",
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
};
const BgStyle = {
  position: "absolute",
  bottom: 0,
  width: 375,
  height: 812,
  backgroundColor: "#000",
  textAlign: "center",
  zIndex: 1,
  opacity: 0,
  display: "flex",
  justifyContent: "center",
};
const ContactBubbleStyle = {
  width: 232,
  height: 72,
  opacity: 1,
  backgroundImage: `url(${WindowCenterWin})`,
  background: "#aaa",
  borderRadius: 17,
  position: "absolute",
  bottom: 100,
  zIndex: 20,
  y: -300,
  scale: 0,
};
const BoxAnimation = {
  animationOne: {
    scale: 0,
  },
  animationTwo: {
    scale: 1,
  },
};
const BgAnimation = {
  BgAnimationOne: {
    opacity: 0,
  },
  BgAnimationTwo: {
    opacity: 0.5,
  },
};

const ContactBodyStyle = {
  backgroundImage: `url(${WindowCenterBg})`,
  // backgroundColor: "#EEEEEE",
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: 1,
};

const WindowCenter = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [animationBg, BgCycleAnimation] = useCycle(
    "BgAnimationOne",
    "BgAnimationTwo"
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
        className="All"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: 812,
          position: "absolute",
          top: 0,
        }}
      >
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
        <motion.div
          className="BgChange"
          style={BgStyle}
          variants={BgAnimation}
          animate={animationBg}
        />
      </div>
    </div>
  );
};

export default WindowCenter;
