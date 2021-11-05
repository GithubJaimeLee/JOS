import { motion, useCycle } from "framer-motion";
import * as React from "react";
import NavBarPage from "../Component/NavBarPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "../Img/Calendar.png";
import CalendarWindow from "../Img/CalendarWindow.png";
import OneFingerClick from "../Img/OneFingerClick.png";
//press功能

//变形完整交互

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
  right: -154,
  top: 46,
  width: 40,
  //  opacity: 1,
  height: 40,
  //   backgroundColor: "#ccc",
  borderRadius: 20,
  textAlign: "center",
  zIndex: 2,
  // boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.3)"
};
const Background = {
  backgroundImage: `url(${Calendar})`,
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
        </div>

        <div className="Background" style={Background} />
      </div>
    </div>
  );
};

export default WindowPull;
