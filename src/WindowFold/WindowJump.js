import { motion, useCycle, AnimatePresence } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactHeader from "../Img/ContactHeader.png";
import ContactWindow from "../Img/ContactWindow.png";
import NavBarPage from "../Component/NavBarPage";
import OneFingerClick from "../Img/OneFingerClick.png";
import Bg from "../Component/Bg";

const ContactWindowStyle = {
  width: 0,
  height: 0,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.1)",
  //opacity: 1,
  backgroundImage: `url(${ContactWindow})`,
  borderRadius: 12,
  position: "absolute",
  right: 0,
  top: 40,
};
const boxPress = {
  position: "relative",
  right: -310,
  top: 50,
  width: 50,
  opacity: 1,
  height: 50,
  borderRadius: 20,
  textAlign: "center",
  zIndex: 10,
  //backgroundColor: "blue",
};

const boxAnimation = {
  animationOne: {
    scale: 0,
    height: 0,
    right: 0,
    opacity: 0,
  },
  animationTwo: {
    scale: 1,
    width: 131,
    height: 118,
    opacity: 1,
    right: 0,
  },
};

const ContactHeaderStyle = {
  backgroundImage: `url(${ContactHeader})`,
  width: 375,
  height: 159,
  position: "fixed",
  zIndex: 1,
  top: 0,
};
const ContactBodyStyle = {
  backgroundImage: `url(${ContactBody})`,
  position: "absolute",
  top: 159,
  width: 375,
  height: 1169,
  zIndex: 0,
};
const ContactFooterStyle = {
  backgroundImage: `url(${ContactFooter})`,
  position: "absolute",
  bottom: 0,
  width: 375,
  height: 65,
  zIndex: 1,
};

const WindowJump = () => {
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
          height: 812,

          position: "absolute",
          display: "flex",
          justifyContent: "center",
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
          <div className="ContactHeader" style={ContactHeaderStyle}>
            <div
              className="FingerClick"
              style={{
                backgroundImage: `url(${OneFingerClick})`,
                position: "absolute",
                top: 90,
                left: 326,
                width: 32,
                height: 60,
                backgroundRepeat: "no-repeat",
                zIndex: 2,
              }}
            />
            <div
              className="boxPress"
              onClick={() => cycleAnimation()}
              style={boxPress}
            >
              <motion.div
                className="boxChange"
                style={ContactWindowStyle}
                variants={boxAnimation}
                animate={animationBox}
                transition={{ type: "tween" }}
              />
            </div>
          </div>
          <div className="ContactBody" style={ContactBodyStyle} />
        </div>
        <div className="ContactFooter" style={ContactFooterStyle} />
      </div>
      <Bg />
    </div>
  );
};

export default WindowJump;
