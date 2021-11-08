import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import AlertNewBg from "../Img/AlertNewBg.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import AlertToastBg from "../Img/AlertToastBg.png";
import Bg from "../Component/Bg";

const ContactBtnStyle = {
  position: "relative",
  bottom: -580,
  width: 32,
  height: 60,
  backgroundImage: `url(${OneFingerClick})`,
  textAlign: "center",
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
};
const ContactBubbleStyle = {
  width: 375,
  height: 812,
  opacity: 1,
  backgroundImage: `url(${AlertToastBg})`,
  y: -812,
  position: "absolute",
  top: 0,
  zIndex: 1,
};
const ToastVariants = {
  animationOne: {
    y: -812,
  },
  animationTwo: {
    y: 0,
  },
};

const ContactBodyStyle = {
  backgroundImage: `url(${AlertNewBg})`,
  backgroundColor: "#EEEEEE",
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: 1,
};

const AlertToast = () => {
  const Info = <p>Toast</p>;
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
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
          position: "absolute",
          top: 0,
        }}
      >
        <div
          onClick={() => cycleAnimation()}
          className="ContactBody"
          style={ContactBodyStyle}
        />

        <div
          className="ContactBtn"
          onClick={() => cycleAnimation()}
          style={ContactBtnStyle}
        />
        <motion.div
          onClick={() => cycleAnimation()}
          className="boxChange"
          style={ContactBubbleStyle}
          variants={ToastVariants}
          animate={animationBox}
          transition={{ type: "tween" }}
        />
      </div>
      <Bg />
    </div>
  );
};

export default AlertToast;
