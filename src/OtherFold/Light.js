import React, { useState } from "react";
import { BackTop } from "antd";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Bg from "../Component/Bg";
import NavBarPage from "../Component/NavBarPage";
import video from "../Img/vivo.mp4";

const Info = <p>状态、标题栏置顶</p>;

const OtherBackToTop = () => {
  const y = useMotionValue(0);
  const rotate = useTransform(y, [0, 100], [180, 0]);
  const top = useTransform(y, [0, 100], [70, 170]);
  const opacity = useTransform(y, [0, 150], [0, 1]);
  /*   const  = () => {
    return ( 
      const opacity = 0;
      if (y >= 200) {
        opacity = 1;
      } else if (y < 200) {
        opacity = 0;
      }
   );
  };
   */

  return (
    <div
      className="All"
      style={{
        width: "100vw",
        height: 812,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />

      <div
        id="ScrollDiv"
        style={{
          width: 375,
          height: 805,
          position: "absolute",
          overflow: "scroll",
          backgroundColor: "#f7f7f7",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <iframe
          allowFullScreen
          frameborder="0"
          style={{
            width: 375,
            height: 812,
          }}
          src={video}
        />
      </div>

      <Bg />
    </div>
  );
};
export default OtherBackToTop;
