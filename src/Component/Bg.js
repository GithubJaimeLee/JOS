import React from "react";
import Background from "../Img/bg2.png";

const Bg = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 1,
        zIndex: "-1000",
      }}
    />
  );
};

export default Bg;
