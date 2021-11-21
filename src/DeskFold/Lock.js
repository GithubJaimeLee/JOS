import { motion, useCycle } from "framer-motion";
import * as React from "react";
import NavBarPage from "../Component/NavBarPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "../Img/Calendar.png";
import CalendarWindow from "../Img/CalendarWindow.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import Bg from "../Component/Bg";

import LockBg from "../Img/LockBg.png";
import Phone from "../Img/Phone.png";
import Camera from "../Img/Camera.png";
import Point from "../Img/Point.png";

const boxChange = {
  width: 0,
  height: 0,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.1)",
  opacity: 1,
  backgroundImage: `url(${CalendarWindow})`,
  borderRadius: 12,
  position: "absolute",
  right: 100,

  top: 40,
  zIndex: 2,
};
const boxPress = {
  display: "block",
  position: "relative",
  right: -128,
  top: 46,
  width: 80,
  //  opacity: 1,
  height: 80,
  //backgroundColor: "#ccc",

  textAlign: "center",
  zIndex: 2,
  // boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.3)"
};
const Background = {
  backgroundImage: `url(${LockBg})`,
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: 1,
};

const WindowPull = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const boxAnimation = {
    animationOne: {
      //    width: 0,
      scale: 0,
      height: 0,
      opacity: 0,
      right: 0,
    },
    animationTwo: {
      //   width: 131,
      scale: 1,
      height: 163,
      opacity: 1,
      width: 131,
      right: 0,
    },
  };
  const Info = <p>下拉弹窗</p>;

  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />

      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          height: 812,
          opacity: 1,
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          top: 0,
        }}
      >
        <div
          className="Screen"
          style={{
            width: 375,
            height: 812,
            position: "absolute",
          }}
        >
          <motion.div
            className="Phone"
            drag={true}
            style={{
              width: 36,
              height: 36,
              position: "absolute",
              top: 560,
              left: 320,
              zIndex: 10,
              backgroundImage: `url(${Phone})`,
            }}
            whileTap={{ x: 10 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          />
          <motion.div
            className="Camera"
            drag={true}
            style={{
              width: 35,
              height: 35,
              position: "absolute",
              top: 700,
              left: 320,
              zIndex: 10,
              backgroundImage: `url(${Camera})`,
            }}
            whileTap={{ x: 10 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          />
          <motion.div
            className="Point"
            drag={true}
            style={{
              width: 31,
              height: 31,
              position: "absolute",
              top: 710,
              left: 30,
              zIndex: 10,
              backgroundImage: `url(${Point})`,
            }}
            whileTap={{ x: 10 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          />
        </div>
        {/*    <div
          className="FingerClick"
          style={{
            backgroundImage: `url(${OneFingerClick})`,
            position: "relative",
            top: 90,
            left: 178,
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
            style={boxChange}
            variants={boxAnimation}
            animate={animationBox}
            transition={{ type: "tween" }}
          />
        </div> */}
        <div className="Background" style={Background} />
        <Bg />
      </div>
    </div>
  );
};

export default WindowPull;
