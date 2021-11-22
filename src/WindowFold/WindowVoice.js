import { motion, useCycle } from "framer-motion";
import * as React from "react";
import NavBarPage from "../Component/NavBarPage";
import "bootstrap/dist/css/bootstrap.min.css";
import WindowBg from "../Img/WindowBg.png";
import WindowVoiceWin from "../Img/WindowVoiceWin.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import Bg from "../Component/Bg";

const ContactBtnStyle = {
  position: "relative",
  left: 310,
  bottom: -480,
  width: 32,
  height: 60,
  backgroundImage: `url(${OneFingerClick})`,
  justifyContent: "center",
  display: "flex",
  zIndex: 1,
  opacity: 1,
};

const BoxAnimation = {
  animationOne: {
    x: 100,
  },
  animationTwo: {
    x: 10,
  },
};

const ContactBodyStyle = {
  backgroundImage: `url(${WindowBg})`,
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: 1,
  overflow: "hidden",
};

const WindowVoice = () => {
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
      positionX：屏幕内 ~ 屏幕外
      <br />
      time：300ms
      <br />
      bezier curve:（0.4, 0, 0.68,0.06)
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
        >
          <div
            className="ContactBtn"
            onClick={() => cycleAnimation()}
            style={ContactBtnStyle}
          >
            <motion.div
              className="boxChange"
              style={{
                width: 56,
                height: 306,
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
                opacity: 1,
                backgroundImage: `url(${WindowVoiceWin})`,
                borderRadius: 12,
                position: "absolute",
                x: 100,
                y: 8,
                bottom: 100,
                zIndex: 20,
              }}
              variants={BoxAnimation}
              animate={animationBox}
              transition={{ type: "tween" }}
            />
          </div>
        </div>
        <Bg />
      </div>
    </div>
  );
};

export default WindowVoice;
