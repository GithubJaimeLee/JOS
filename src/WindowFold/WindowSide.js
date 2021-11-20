import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import WindowSideBg from "../Img/WindowSideBg.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import WindowSideSide from "../Img/WindowSideSide.png";
import Bg from "../Component/Bg";

const ContactBtnStyle = {
  position: "relative",
  bottom: -50,
  left: -160,
  width: 32,
  height: 60,
  backgroundImage: `url(${OneFingerClick})`,
  // backgroundColor: "#666",

  textAlign: "center",
  zIndex: 21,
  display: "flex",
  justifyContent: "center",
};
const MaskStyle = {
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
  y: 0,
};
const SideStyle = {
  width: 286,
  height: 812,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  opacity: 1,
  backgroundImage: `url(${WindowSideSide})`,
  //background: "#eee",
  position: "absolute",
  bottom: 100,
  zIndex: 20,
  y: 101,
  x: -320,
};
const BoxAnimation = {
  animationOne: {
    x: -320,
  },
  animationTwo: {
    x: -50,
  },
};
const FingerVariants = {
  animationOne: {
    x: 0,
    y: 0,
  },
  animationTwo: {
    x: 288,
    y: 188,
    opacity: 0,
  },
};
const BgAnimation = {
  BgAnimationOne: {
    display: "none",
  },
  BgAnimationTwo: {
    display: "block",
    opacity: 0.5,
  },
};

const ContactBodyStyle = {
  backgroundImage: `url(${WindowSideBg})`,
  //backgroundColor: "#ddd",
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
};

const WindowSide = () => {
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
        <div className="ContactBody" style={ContactBodyStyle}>
          <motion.div
            className="FingerBtn"
            variants={FingerVariants}
            animate={animationBox}
            transition={{ type: "tween" }}
            onClick={() => cycleAnimation() & BgCycleAnimation()}
            style={ContactBtnStyle}
          />

          <motion.div
            className="boxChange"
            style={SideStyle}
            variants={BoxAnimation}
            animate={animationBox}
            transition={{ type: "tween" }}
          />
          <motion.div
            onClick={() => cycleAnimation() & BgCycleAnimation()}
            className="MaskChange"
            style={MaskStyle}
            variants={BgAnimation}
            animate={animationBg}
          />
        </div>
        <Bg />
      </div>
    </div>
  );
};

export default WindowSide;
