import { motion, useCycle } from "framer-motion";
import React, { useState } from "react";
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
  const [XX, setXX] = useState(1);
  const [CameraX, setCameraX] = useState(0);
  const [CameraY, setCameraY] = useState(0);
  const [CameraScale, setCameraScale] = useState(1);
  const [PhoneX, setPhoneX] = useState(0);
  const [PhoneY, setPhoneY] = useState(0);
  const [PhoneScale, setPhoneScale] = useState(1);
  const [GreyBtnX, setGreyBtnX] = useState(0);
  const [GreyBtnY, setGreyBtnY] = useState(0);
  const [GreyBtnScale, setGreyBtnScale] = useState(1);
  const [PointScale, setPointScale] = useState(1);
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
            drag
            style={{
              width: 36,
              height: 36,
              position: "absolute",
              top: 586,
              left: 316,
              zIndex: 10,

              backgroundImage: `url(${Phone})`,
              transformOrigin: "100px 100px",
            }}
            animate={{ x: PhoneX, y: PhoneY, scale: PhoneScale }}
            onDragCancel={() => {
              setPhoneX(0);
              setPhoneY(0);
              setPointScale(1);
              setPhoneScale(1);
            }}
            onDragStart={() => {
              setPhoneX(-12);
              setPhoneY(0);
              setPointScale(3);
              setPhoneScale(1.2);
            }}
            onTapStart={() => {
              setPhoneX(-12);
              setPhoneY(0);
              setPointScale(1.3);
              setPhoneScale(1.2);
            }}
            onTap={() => {
              setPhoneX(0);
              setPhoneY(0);
              setPointScale(1);
              setPhoneScale(1);
            }}
            onDragEnd={() => {
              setPhoneX(0);
              setPhoneY(0);
              setPointScale(1);
              setPhoneScale(1);
            }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          />
          <div
            style={{
              position: "absolute",
              backgroundColor: "#fff",
              top: 526,
              width: 214,
              height: 155,
              zIndex: 2,
              left: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <motion.div
              className="Btn"
              style={{
                width: 90,
                height: 90,
                backgroundColor: "#fff",

                position: "absolute",
                // top: 560,
                zIndex: 3,
                //  left: 140,
                borderRadius: 45,
                opacity: 0.5,
                border: "26px solid #E55C5C",
              }}
              animate={{ scale: PointScale }}
            />
          </div>
          <motion.div
            className="Camera"
            drag
            style={{
              width: 35,
              height: 35,
              position: "absolute",
              top: 728,
              left: 316,
              zIndex: 10,
              //  opacity: 0.1,
              backgroundImage: `url(${Camera})`,
            }}
            animate={{ x: CameraX, y: CameraY, scale: CameraScale }}
            onDragCancel={() => {
              setCameraX(0);
              setCameraY(0);
              setPointScale(1);
              setCameraScale(1);
            }}
            onDragStart={() => {
              setCameraX(-10);
              setCameraY(-10);
              setPointScale(3);
              setCameraScale(1.2);
            }}
            onTapStart={() => {
              setCameraX(-10);
              setCameraY(-10);
              setPointScale(1.3);
              setCameraScale(1.2);
            }}
            onTap={() => {
              setCameraX(0);
              setCameraY(0);
              setPointScale(1);
              setCameraScale(1);
            }}
            onDragEnd={() => {
              setCameraX(0);
              setCameraY(0);
              setPointScale(1);
              setCameraScale(1);
            }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          />
          <motion.div
            className="Point"
            drag={true}
            style={{
              width: 32,
              height: 32,
              position: "absolute",
              top: 710,
              left: 24,
              zIndex: 10,
              backgroundImage: `url(${Point})`,
            }}
            animate={{ x: GreyBtnX, y: GreyBtnY, scale: GreyBtnScale }}
            onDragCancel={() => {
              setGreyBtnX(0);
              setGreyBtnY(0);
              setPointScale(1);
              setGreyBtnScale(1);
            }}
            onDragStart={() => {
              setGreyBtnX(10);
              setGreyBtnY(-10);
              setPointScale(0);
              setGreyBtnScale(1.2);
            }}
            onTapStart={() => {
              setGreyBtnX(10);
              setGreyBtnY(-10);
              setPointScale(1.3);
              setGreyBtnScale(1.2);
            }}
            onTap={() => {
              setGreyBtnX(0);
              setGreyBtnY(0);
              setPointScale(1);
              setGreyBtnScale(1);
            }}
            onDragEnd={() => {
              setGreyBtnX(0);
              setGreyBtnY(0);
              setPointScale(1);
              setGreyBtnScale(1);
            }}
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
