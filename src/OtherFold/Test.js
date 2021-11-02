import React from "react";
import Example from "../Other/Example";
import NavBarSecondPage from "../Component/NavBarSecondPage";
import { ListTab } from "../Other/TabTest";
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
        <Example />
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
            zIndex: "2",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Test;
