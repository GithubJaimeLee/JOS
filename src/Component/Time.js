//import React from "react";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import ChooseDateBg from "../Img/ChooseDateBg.png";
import React from "react";
import Wheel from "../Component/DemoWheel";
import "../css/Component.css";

const Time = () => {
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
      className="DemoTimePicker"
      style={{
        width: 360,
        position: "absolute",
        height: 700,
        // padding: "50px",
        display: "flex",
        justifyContent: "center",
        //background: "#666",
        top: 0,
        zIndex: 3,
      }}
    >
      <div
        className="DemoList"
        style={{
          width: 120,
          height: 170,
          top: 136,
          position: "relative",
        }}
      >
        <Wheel
          className="DemoClock1"
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
          top: 215,
          left: 72,
        }}
      >
        时
      </h6>
      <div
        className="DemoList"
        style={{
          width: 120,
          height: 170,
          top: 136,
          position: "relative",
          marginLeft: 6,
        }}
      >
        <Wheel
          className="DemoClock2"
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
          top: 215,
          right: 146,
        }}
      >
        分
      </h6>
      <div
        className="DemoList"
        style={{
          width: 120,
          height: 170,
          top: 136,
          position: "relative",
          marginLeft: -10,
        }}
      >
        <Wheel
          className="DemoClock3"
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
          top: 215,
          right: 36,
        }}
      >
        秒
      </h6>
    </div>
  );
};

export default Time;
