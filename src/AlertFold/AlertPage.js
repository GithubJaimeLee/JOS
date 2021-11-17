import React from "react";
import "../css/Component.css";
import NavBarPage from "../Component/NavBarPage";
import AlertPageBgOne from "../Img/AlertPageBgOne.png";
import AlertPageBgTwo from "../Img/AlertPageBgTwo.png";
import AlertPageBg from "../Img/AlertPageBg.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import { Carousel } from "antd";
import Bg from "../Component/Bg";
import "antd/dist/antd.css";
import { motion } from "framer-motion";

const OneFingerClickStyle = {
  position: "relative",
  left: 180,
  bottom: 110,
  width: 32,
  height: 60,
  backgroundImage: `url(${OneFingerClick})`,
  // backgroundColor: "#aaa",
  justifyContent: "center",
  display: "flex",
  zIndex: 1,
  opacity: 1,
};

const AlertPage = () => {
  const Info = <p>页码指示</p>;
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="CenterScreen"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="AlertPageMask"
          style={{
            height: 812,
            width: 375,
            zIndex: 10,
            position: "absolute",
            top: 0,
          }}
        >
          <Carousel className="AlertPage">
            <div>
              <img
                src={AlertPageBgOne}
                alt="First"
                style={{
                  //   backgroundColor: "#415FFF",
                  height: 812,
                  width: 375,
                  zIndex: 10,
                }}
              />
            </div>
            <div>
              <img
                src={AlertPageBgTwo}
                alt="Second"
                style={{
                  //   backgroundColor: "red",
                  height: 812,
                  width: 375,
                  zIndex: 10,
                }}
              />
            </div>
          </Carousel>
          <motion.div
            animate={{ x: 20, scale: [0.8, 1.1, 1.1, 0.8] }}
            transition={{
              delay: 1,
              duration: 2,
              ease: [0, 0, 1, 1],
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="OneFingerClickStyle"
            style={OneFingerClickStyle}
          />
        </div>

        <div
          className="AlertPageBg"
          style={{
            backgroundColor: "#eee",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            display: "flex",
            opacity: 1,
            zIndex: 0,
            backgroundImage: `url(${AlertPageBg})`,
            // overflow: "hidden",
          }}
        />
      </div>
      <Bg />
    </div>
  );
};

export default AlertPage;
