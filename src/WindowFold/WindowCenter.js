import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import WindowCenterBg from "../Img/WindowCenterBg.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import CenterWin from "../Img/WindowCenterWin.png";
import Bg from "../Component/Bg";

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

const CenterWinVariants = {
  animationOne: {
    scale: 0,
    opacity: 0,
  },
  animationTwo: {
    scale: 1,
    opacity: 1,
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
  const [CenterWinAnimate, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [animationBg, BgCycleAnimation] = useCycle(
    "BgAnimationOne",
    "BgAnimationTwo"
  );
  const Info = (
    <p>
      <h6>弹出</h6>
      <br />
      弹窗： scale：0.8~1
      <br />
      time：300ms
      <br />
      bezier curve ：(0.28, 0.85, 0.36 ,1)
      <br />
      alpha：0~1
      <br />
      time：300ms
      <br />
      bezier curve ：(0.28, 0.85, 0.36 ,1)
      <br />
      <br />
      背景压黑：
      <br />
      alpha：0～0.4
      <br />
      time：300ms
      <br />
      bezier curve ：(0.33, 0.1, 0.67 ,1)
      <br />
      <br />
      <h6>收起</h6>
      弹窗：
      <br />
      scale：1~0.8
      <br />
      time：300ms
      <br />
      bezier curve ：(0.25, 0.1, 0.25,1)
      <br />
      alpha：1~0
      <br />
      time：250ms
      <br />
      bezier curve ：(0.25, 0.1, 0.25 ,1)
      <br />
      <br />
      背景压黑：
      <br />
      alpha：0.4～0
      <br />
      time：300ms
      <br />
      bezier curve ：(0.33, 0, 0.67 ,1)
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
        <div className="ContactBody" style={ContactBodyStyle} />

        {/*     <div className="ContactBtn" style={ContactBtnStyle} /> */}

        <motion.div
          className="CenterWin"
          style={{
            width: 232,
            height: 72,
            opacity: 1,
            backgroundImage: `url(${CenterWin})`,
            borderRadius: 17,
            position: "absolute",
            bottom: 100,
            zIndex: 20,
            y: -300,
            scale: 0,
          }}
          variants={CenterWinVariants}
          animate={CenterWinAnimate}
        />
        <motion.div
          className="MaskChange"
          onClick={() => cycleAnimation() & BgCycleAnimation()}
          style={BgStyle}
          variants={BgAnimation}
          animate={animationBg}
        />
      </div>
      <Bg />
    </div>
  );
};

export default WindowCenter;
