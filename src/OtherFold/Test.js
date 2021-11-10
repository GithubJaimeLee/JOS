import React from "react";
import SliderInput from "../Component/SliderInput";
import NavBarSecondPage from "../Component/NavBarSecondPage";

const Test = () => {
  const Info = (
    <p>
      Hello,
      <br /> world!
    </p>
  );
  return (
    <div className="All">
      <NavBarSecondPage Title="测试" />

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
          className="ImportSliderInput"
          style={{
            position: "absolute",
            top: 300,
            zIndex: 10000,
          }}
        >
          <SliderInput />
        </div>
        <div
          className="bg"
          style={{
            //重要旋转
            transform: "rotateX(0deg)",
            backgroundColor: "#eee",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: -10,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Test;
