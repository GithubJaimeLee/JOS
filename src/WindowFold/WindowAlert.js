import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import WindowBg from "../Img/DeskOOS.png";
import WindowAlertWin from "../Img/WindowAlertWin.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import Bg from "../Component/Bg";

const ContactBtnStyle = {
  position: "absolute",
  bottom: 550,
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
    y: -548,
  },
};

const ContactBodyStyle = {
  backgroundImage: `url(${WindowBg})`,
  //backgroundColor: "#EEEEEE",
  position: "absolute",
  width: 360,
  height: 800,
  zIndex: 1,
};

const WindowAlert = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const Info = (
    <p>
      <h6>弹出</h6>
      弹窗：
      <br />
      position：悬浮位置+比例值
      <br />
      time：250ms
      <br />
      bezier curve ：(0.37, 0.75, 0.46 ,1)
      <br />
      position：悬浮位置+比例值~悬浮位置
      <br />
      time：200ms
      <br />
      bezier curve ：(0.3, 0, 0.5 ,1)
      <br /> <br />
      <h6>收起</h6>
      弹窗：
      <br />
      position：回到屏幕外
      <br />
      time：300ms
      <br />
      bezier curve ：(0.5, 0.2, 0.5 ,1)
    </p>
  );

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
          className="boxChange"
          style={ContactBubbleStyle}
          variants={BoxAnimation}
          animate={animationBox}
          transition={{ type: "tween" }}
        />
      </div>
      <Bg />
    </div>
  );
};

export default WindowAlert;
