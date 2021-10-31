import React from "react";
import NavBarPage from "../Component/NavBarPage";
import Example from "../Other/Example";
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
        <Example />
        <div
          className="bg"
          style={{
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
