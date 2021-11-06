import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactHeader from "../Img/ContactHeader.png";
import Bg from "../Component/Bg";
import FingerClick from "../Img/OneFingerClick.png";
import WindowInputKeyboard from "../Img/WindowInputKeyboard.png";

const FingerStyle = {
  width: 32,
  height: 60,
  backgroundImage: `url(${FingerClick})`,
  position: "relative",
  top: 660,
  zIndex: 100,
};
const ContactBubbleStyle = {
  width: 375,
  height: 812,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  opacity: 1,
  background: "#fff",
  borderRadius: 12,
  position: "absolute",
  bottom: -420,
  zIndex: 20,
  y: 400,
};
const KeyboardStyle = {
  width: 375,
  height: 290,

  backgroundImage: `url(${WindowInputKeyboard})`,
  position: "absolute",
  bottom: 100,
  zIndex: 20,
  y: 400,
};

const BoxAnimation = {
  animationOne: {
    y: 520,
  },
  animationTwo: {
    y: -300,
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
  top: 0,
  width: 375,
  height: 1169,
  zIndex: 1,
  overflow: "hidden",
};
const ContactFooterStyle = {
  backgroundImage: `url(${ContactFooter})`,
  position: "absolute",
  bottom: 0,
  width: 375,
  height: 65,
  zIndex: 1,
};

const JumpNew = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [animationKeyBoard, KcycleAnimation] = useCycle(
    "KAnimationOne",
    "KAnimationTwo"
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
          overflow: "hidden",
          top: 0,
        }}
      >
        <div
          className="ContactBtn"
          onClick={() => cycleAnimation() & KcycleAnimation()}
          style={FingerStyle}
        />

        <div className="ContactHeader" style={ContactHeaderStyle} />
        <div
          className="ScrollBody"
          style={{
            height: 812,
            width: 375,
            position: "absolute",
            top: 0,
            overflow: "scroll",
          }}
        >
          <div className="ContactBody" style={ContactBodyStyle} />
        </div>
        <div className="ContactFooter" style={ContactFooterStyle}></div>

        <motion.div
          className="boxChange"
          style={ContactBubbleStyle}
          variants={BoxAnimation}
          animate={animationBox}
        />
        <motion.div
          className="KeyBoard"
          style={KeyboardStyle}
          variants={KeyBoardAnimation}
          animate={animationKeyBoard}
        />
      </div>
      <Bg />
    </div>
  );
};

export default JumpNew;
