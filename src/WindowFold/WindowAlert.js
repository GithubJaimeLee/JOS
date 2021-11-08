import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import WindowBg from "../Img/WindowBg.png";
import WindowAlertWin from "../Img/WindowAlertWin.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import Bg from "../Component/Bg";

const ContactBtnStyle = {
  position: "relative",
  bottom: -700,
  width: 32,
  height: 60,
  backgroundImage: `url(${OneFingerClick})`,
  //backgroundColor: "#aaa",
  borderRadius: 20,
  textAlign: "center",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
};
const ContactBubbleStyle = {
  width: 340,
  height: 102,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  //opacity: 1,
  backgroundImage: `url(${WindowAlertWin})`,
  border: "1px solid #ccc",
  // background: "#666",
  borderRadius: 12,
  position: "absolute",
  y: -720,
  bottom: 100,
  zIndex: 20,
};
const BoxAnimation = {
  animationOne: {
    y: -720,
  },
  animationTwo: {
    y: -488,
  },
};

const ContactBodyStyle = {
  backgroundImage: `url(${WindowBg})`,
  //backgroundColor: "#EEEEEE",
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: 1,
};

const WindowAlert = () => {
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
        >
          <motion.div
            className="boxChange"
            style={ContactBubbleStyle}
            variants={BoxAnimation}
            animate={animationBox}
            transition={{ type: "tween" }}
          />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default WindowAlert;
