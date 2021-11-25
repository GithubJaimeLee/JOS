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
import NewContact from "../Img/NewContact.png";

const FingerStyle = {
  y: -40,
  x: 118,
  width: 100,
  height: 100,
  backgroundImage: `url(${FingerClick})`,
  position: "relative",
  top: 88,
  backgroundPosition: "25px 25px",
  zIndex: 100,
  backgroundRepeat: "no-repeat",
};
const ContactBubbleStyle = {
  width: 375,
  height: 812,

  opacity: 1,
  y: 812,
  backgroundImage: `url(${NewContact})`,
  position: "absolute",
  //bottom: -420,
  zIndex: 20,
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

const BoxVariants = {
  animationOne: {
    y: 812,
  },
  animationTwo: {
    y: 0,
  },
};
const FingerVariants = {
  animationOne: {
    y: -40,
    x: 118,
  },
  animationTwo: {
    y: -30,
    x: -138,
  },
};
const KeyBoardVariants = {
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
  // backgroundColor: "#000000",
  overflow: "hidden",
};
const BGVariants = {
  BGanimationOne: {
    y: 0,
  },
  BGAnimationTwo: {
    y: -10,
    scale: 0.9,
    borderRadius: "30px",
    opacity: 0.5,
  },
};
const ContactFooterStyle = {
  backgroundImage: `url(${ContactFooter})`,
  position: "absolute",
  bottom: 0,
  width: 375,
  height: 65,
  zIndex: 1,
};

const Create = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [animationKeyBoard, KcycleAnimation] = useCycle(
    "KAnimationOne",
    "KAnimationTwo"
  );
  const [animationBG, BGcycleAnimation] = useCycle(
    "BGAnimationOne",
    "BGAnimationTwo"
  );
  const Info = <p>新建动画</p>;
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
        <motion.div
          variants={FingerVariants}
          animate={animationBox}
          transition={{ type: "tween" }}
          className="ContactBtn"
          onClick={() =>
            cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
          }
          style={FingerStyle}
        />
        <motion.div
          onClick={() =>
            cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
          }
          className="BG"
          variants={BGVariants}
          animate={animationBG}
          transition={{
            type: "tween",
          }}
          style={{
            width: 375,
            height: 812,
            position: "absolute",
            overflow: "hidden",
          }}
        >
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
        </motion.div>
        <motion.div
          className="boxChange"
          style={ContactBubbleStyle}
          variants={BoxVariants}
          animate={animationBox}
          transition={{
            type: "spring",
            damping: 18,
            stiffness: 105,
          }}
        />
        <motion.div
          className="KeyBoard"
          style={KeyboardStyle}
          variants={KeyBoardVariants}
          animate={animationKeyBoard}
          transition={{ type: "tween" }}
        />
        <div
          className="blackBg"
          style={{
            position: "absolute",
            width: 375,
            height: 812,
            zIndex: -10,
            backgroundColor: "#000000",
          }}
        />
      </div>
      <Bg />
    </div>
  );
};

export default Create;