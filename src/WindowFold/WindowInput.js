import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import WindowInputBg from "../Img/WindowInputBg.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import WindowInputKeyboard from "../Img/WindowInputKeyboard.png";
import WindowInputRename from "../Img/WindowInputRename.png";
import Bg from "../Component/Bg";

const ContactBtnStyle = {
  position: "relative",
  bottom: -228,
  left: -160,
  width: 32,
  height: 60,
  backgroundImage: `url(${OneFingerClick})`,
  textAlign: "center",
  zIndex: 100,
  display: "flex",
  justifyContent: "center",
};
const ContactBubbleStyle = {
  width: 340,
  height: 205,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  // backgroundImage: `url(${WindowInputRename})`,
  backgroundColor: "#fff",
  borderRadius: 12,
  position: "absolute",
  bottom: 100,
  zIndex: 20,
  y: 400,
};
const KeyboardStyle = {
  width: 375,
  height: 290,
  backgroundImage: `url(${WindowInputKeyboard})`,
  position: "absolute",
  y: 400,
  bottom: 100,
  zIndex: 20,
};
const BoxAnimation = {
  animationOne: {
    y: 400,
    // transitionDuration: "1s",
    //  y: -300,
  },
  animationTwo: {
    y: -300,
  },
};
const FingerVariants = {
  animationOne: {
    y: 0,
  },
  animationTwo: {
    y: 170,
    x: 80,
    opacity: 0,
  },
};
const KeyBoardAnimation = {
  KAnimationOne: {
    y: 400,
  },
  KAnimationTwo: {
    y: 100,
  },
};

const ContactBodyStyle = {
  //  backgroundImage: `url(${WindowInputBg})`,
  backgroundColor: "#eee",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: 375,
  height: 812,
  zIndex: 1,
  overflow: "hidden",
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
const BgAnimation = {
  BgAnimationOne: {
    opacity: 0,
  },
  BgAnimationTwo: {
    opacity: 0.3,
  },
};
const WindowInput = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [animationBg, BgCycleAnimation] = useCycle(
    "BgAnimationOne",
    "BgAnimationTwo"
  );
  const [animationKeyBoard, KcycleAnimation] = useCycle(
    "KAnimationOne",
    "KAnimationTwo"
  );
  const Info = <p>弹窗出现是底部弹窗的参数（无回弹），退出原地消失。</p>;
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",

          position: "absolute",
          top: 0,
        }}
      >
        <div className="ContactBody" style={ContactBodyStyle}>
          <motion.div
            className="WinChange"
            variants={FingerVariants}
            animate={animationBox}
            transition={{
              type: "tween",
            }}
            onClick={() =>
              cycleAnimation() & KcycleAnimation() & BgCycleAnimation()
            }
            // style={ContactBtnStyle}
          />

          <motion.div
            onClick={() =>
              cycleAnimation() & KcycleAnimation() & BgCycleAnimation()
            }
            className="WinChange"
            style={MaskStyle}
            variants={BgAnimation}
            animate={animationBg}
          />
          <motion.div
            onClick={() =>
              cycleAnimation() & KcycleAnimation() & BgCycleAnimation()
            }
            className="InputWindow"
            style={ContactBubbleStyle}
            variants={BoxAnimation}
            animate={animationBox}
            transition={{
              type: "tween",
              //  y: { duration: 1 },
            }}
          />
          <motion.div
            className="KeyBoard"
            transition={{ type: "tween" }}
            style={KeyboardStyle}
            variants={KeyBoardAnimation}
            animate={animationKeyBoard}
          />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default WindowInput;
