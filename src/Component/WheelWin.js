//import React from "react";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import { motion } from "framer-motion";
import ChooseDateBg from "../Img/ChooseDateBg.png";
import React from "react";
import Wheel from "../Component/DemoWheel";
import "../css/Component.css";

const WheelWin = () => {
  const Info = <p>日期滑动选择器</p>;
  /* const ClockItemStyle = {
    margin: 10,
    backgroundColor: "grey",
    width: 50,
    height: 60,
    position: "relative",
    opacity: 1,
    top: 100,
    zIndex: 10,
    textAlign: "center",
  }; */

  return (
    <div
      className="DemoWinTimePicker"
      style={{
        width: 360,
        position: "absolute",
        height: 130,
        // padding: "50px",
        display: "flex",
        justifyContent: "center",
        //background: "#666",
        top: 130,
        zIndex: 3,
      }}
    >
      <div
        className="DemoWinList"
        style={{
          width: 120,
          height: 80,

          position: "relative",
        }}
      >
        <Wheel
          className="DemoWinClock1"
          initIdx={8}
          length={24}
          width={23}
          loop={true}
          perspective="left"
        />
      </div>
      <h6
        style={{
          position: "absolute",
          top: 42,
          left: 125,
          fontWeight: "bold",
        }}
      >
        时
      </h6>
      <div
        className="DemoWinList"
        style={{
          width: 120,
          height: 80,

          position: "relative",
          marginLeft: 6,
        }}
      >
        <Wheel
          className="DemoWinClock2"
          initIdx={30}
          length={60}
          width={23}
          loop={true}
          perspective="left"
        />
      </div>
      <h6
        style={{
          position: "absolute",
          top: 42,
          right: 94,
          fontWeight: "bold",
        }}
      >
        分
      </h6>
    </div>
  );
};

export default WheelWin;
