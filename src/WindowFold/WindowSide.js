import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import WindowSideBg from "../Img/WindowSideBg.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import WindowSideSide from "../Img/WindowSideSide.png";
import Bg from "../Component/Bg";

const MaskStyle = {
  position: "absolute",
  bottom: 0,
  width: 375,
  height: 812,
  backgroundColor: "#000",
  textAlign: "center",
  zIndex: 1,

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
const SideVariants = {
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
const BgVariants = {
  BgAnimationOne: { opacity: 0.5 },
  BgAnimationTwo: {
    opacity: 0,
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
  const [SideAnimate, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [BgAnimation, BgCycleAnimation] = useCycle(
    "BgAnimationOne",
    "BgAnimationTwo"
  );
  const Info = (
    <p>
      <h6>弹出</h6>
      弹窗：
      <br />
      positionX：
      <br />
      time：300ms
      <br />
      bezier curve:(0.25, 0.1, 0.25,1)
      <br />
      <br />
      蒙版：
      <br />
      alpha：0~0.4
      <br />
      time：300ms
      <br />
      bezier curve:(0.25, 0.1, 0.25,1)
      <br /> <br />
      <h6>收起</h6>
      弹窗：
      <br />
      positionX：
      <br />
      time：300ms
      <br />
      bezier curve:(0.25, 0.1, 0.25,1)
      <br />
      <br />
      蒙版：
      <br />
      alpha：0.4~0
      <br />
      time：300ms
      <br />
      bezier curve:(0.25, 0.1, 0.25,1)
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
          height: "100%",
          overflow: "hidden",
          position: "absolute",
          top: 0,
        }}
      >
        <div className="ContactBody" style={ContactBodyStyle}>
          <motion.div
            className="FingerBtn"
            variants={FingerVariants}
            animate={SideAnimate}
            transition={{ type: "tween" }}
            onClick={() => cycleAnimation() & BgCycleAnimation()}
            style={{
              position: "relative",
              bottom: -50,
              left: -160,
              width: 32,
              height: 60,
              backgroundImage: `url(${OneFingerClick})`,
              textAlign: "center",
              zIndex: 21,
              display: "flex",
              justifyContent: "center",
            }}
          />

          <motion.div
            className="boxChange"
            style={SideStyle}
            variants={SideVariants}
            animate={SideAnimate}
            transition={{ type: "tween" }}
          />
          <motion.div
            onClick={() => cycleAnimation() & BgCycleAnimation()}
            className="Mask"
            style={MaskStyle}
            variants={BgVariants}
            animate={BgAnimation}
          />
        </div>
        <Bg />
      </div>
    </div>
  );
};

export default WindowSide;
