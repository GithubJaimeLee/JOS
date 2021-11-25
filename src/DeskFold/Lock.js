import { motion, useCycle } from "framer-motion";
import React, { useState, useEffect } from "react";
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
import LockRedBlue from "../Img/LockRedBlue.png";
import LockPlay from "../Img/LockPlay.png";
import LockList from "../Img/LockList.png";
import WLockPlay from "../Img/WLockPlay.png";
import WLockList from "../Img/WLockList.png";
import PointBgT from "../Img/PointBgT.png";
import Health2000 from "../Img/Health2000.png";
import BHealth2000 from "../Img/BHealth2000.png";
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
  height: 80,
  textAlign: "center",
  zIndex: 2,
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
  const [HealthX, setHealthX] = useState(0);
  const [HealthY, setHealthY] = useState(0);
  const [HealthScale, setHealthScale] = useState(1);
  const [HealthO, setHealthO] = useState(0);
  const [HealthOO, setHealthOO] = useState(1);
  const [HealthBg, setHealthBg] = useState(Health2000);
  const [PointScale, setPointScale] = useState(1);
  const [LockBgBg, setLockBgBg] = useState();
  const [LockPlayScale, setLockPlayScale] = useState(0);
  const [RedO, setRedO] = useState(1);
  const [LockBgR, setLockBgR] = useState();
  const [LockBgB, setLockBgB] = useState();
  const [LockIconP, setLockIconP] = useState(LockPlay);
  const [LockIconL, setLockIconL] = useState(LockList);
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",

    "animationTwo"
  );
  const boxAnimation = {
    animationOne: {
      scale: 0,
      height: 0,
      opacity: 0,
      right: 0,
    },
    animationTwo: {
      scale: 1,
      height: 163,
      opacity: 1,
      width: 131,
      right: 0,
    },
  };

  const [WinWidth, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const Info = <p>锁屏界面</p>;

  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />

      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
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
          <div>
            <motion.div
              className="Health"
              drag
              style={{
                width: 68,
                height: 81,
                position: "absolute",
                top: 564,
                left: 6,
                zIndex: 10,
                borderRadius: 12,
                // backgroundColor: `rgba(255,255,255,${HealthO})`,

                backgroundImage: `url(${HealthBg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                transformOrigin: "100px 100px",
              }}
              dragElastic={1}
              animate={{
                x: HealthX,
                y: HealthY,
                backgroundColor: `rgba(255,255,255,${HealthO})`,
                // opacity: HealthOO,
                scale: HealthScale,
                scale: 1.2,
              }}
              onDragCancel={() => {
                setPointScale(1);
                setHealthBg(Health2000);
                setRedO(1);
                setHealthO(0);
                setHealthOO(1);
              }}
              onDragStart={() => {
                setPointScale(3);
                setHealthBg(BHealth2000);
                setHealthScale(1.2);
                setHealthO(1);
                setHealthOO(0);
                setRedO(0.5);
                setLockBgB();
                setLockBgR();
              }}
              onDragEnd={() => {
                setPointScale(1);
                setHealthBg(Health2000);
                setRedO(1);
                setHealthO(0);
                setHealthOO(1);
              }}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              // transition={{ type: "tween", duration: 0.5 }}
              transition={{ type: "spring" }}
            />
            {/*       <motion.div
              className="HealthImg"
              drag
              style={{
                width: 68,
                height: 81,
                position: "absolute",
                top: 564,
                left: 6,
                zIndex: 10,

                backgroundImage: `url(${HealthBg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                transformOrigin: "100px 100px",
              }}
              dragElastic={1}
              animate={{
                x: HealthX,
                y: HealthY,
                opacity: HealthOO,
                scale: HealthScale,
                scale: 1.2,
              }}
              onDragCancel={() => {
                setPointScale(1);
                setHealthBg(Health2000);
                setRedO(1);
                setHealthO(0);
              }}
              onDragStart={() => {
                setPointScale(3);
                setHealthBg(BHealth2000);
                setHealthScale(1.2);
                setHealthO(1);

                setRedO(0.5);
                setLockBgB();
                setLockBgR();
              }}
              onDragEnd={() => {
                setPointScale(1);
                setHealthBg(Health2000);
                setRedO(1);
                setHealthO(0);
              }}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            /> */}
          </div>
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
            dragElastic={1}
            animate={{ x: PhoneX, y: PhoneY, scale: PhoneScale }}
            onDragCancel={() => {
              setPhoneX(0);
              setPhoneY(0);
              setPointScale(1);
              setPhoneScale(1);
              setRedO(1);
            }}
            onDragStart={() => {
              setPhoneX(-12);
              setPhoneY(0);
              setPointScale(3);
              setPhoneScale(1.2);
              setRedO(0.5);
              setLockBgB();
              setLockBgR();
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
              setRedO(1);
            }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          />

          <motion.div
            className="PointBgT"
            style={{
              backgroundImage: `url(${PointBgT})`,
              position: "absolute",
              backgroundColor: "#F7FCFF",
              //     backgroundColor: LockBgC,
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
                width: 96,
                height: 96,
                backgroundColor: "#fff",

                position: "absolute",
                // top: 560,
                zIndex: 3,
                //  left: 140,
                borderRadius: 48,

                border: "26px solid #E55C5C",
              }}
              animate={{ scale: PointScale, opacity: RedO }}
              transition={{ duration: 0.1 }}
            />

            <motion.div
              className="LockPlayBgR"
              style={{
                // backgroundImage: `url(${LockBgBg})`,
                position: "absolute",
                //   backgroundColor: "#F7FCFF",
                backgroundColor: LockBgR,
                top: 526,
                width: 214,
                height: 77.5,
                zIndex: 2,
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                zIndex: 1,
              }}
            >
              <motion.div
                className="LockPlay"
                style={{
                  position: "absolute",
                  top: 28,
                  width: 22,
                  height: 22,
                  backgroundImage: `url(${LockIconP})`,
                  scale: 0,
                }}
                animate={{ scale: LockPlayScale }}
              />
            </motion.div>

            <motion.div
              className="LockListBgB"
              style={{
                // backgroundImage: `url(${LockBgBg})`,
                position: "absolute",
                //   backgroundColor: "#F7FCFF",
                backgroundColor: LockBgB,
                top: 526,
                width: 214,
                height: 77.5,
                zIndex: 2,
                top: 77.5,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                zIndex: 1,
              }}
            >
              <motion.div
                className="LockList"
                style={{
                  position: "absolute",
                  top: 28,
                  width: 22,
                  height: 22,
                  backgroundImage: `url(${LockIconL})`,
                  scale: 0,
                }}
                animate={{ scale: LockPlayScale }}
              />
            </motion.div>
          </motion.div>
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
              backgroundImage: `url(${Camera})`,
            }}
            dragElastic={1}
            animate={{ x: CameraX, y: CameraY, scale: CameraScale }}
            onDragCancel={() => {
              setCameraX(0);
              setCameraY(0);
              setPointScale(1);
              setCameraScale(1);
              setRedO(1);
            }}
            onDragStart={() => {
              setCameraX(-10);
              setCameraY(-10);
              setPointScale(3);
              setCameraScale(1.2);
              setRedO(0.5);
              setLockBgB();
              setLockBgR();
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
              setRedO(1);
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
            dragElastic={1}
            animate={{ x: GreyBtnX, y: GreyBtnY, scale: GreyBtnScale }}
            onDragCancel={(event, info) => {
              setGreyBtnX(0);
              setGreyBtnY(0);
              setPointScale(1);
              setGreyBtnScale(1);
              setLockBgBg();
              setLockPlayScale(0);

              const PDX = info.point.x;
              const PDY = info.point.y;
              setLockBgB("#F7FCFF");
              setLockBgR("#F7FCFF");

              console.log(info.point.x, info.point.y);
            }}
            onDragStart={() => {
              setGreyBtnX(10);
              setGreyBtnY(-10);
              setPointScale(0);
              setGreyBtnScale(1.2);
              setLockBgBg(LockRedBlue);
              setLockPlayScale(1);
            }}
            onDrag={(event, info) => {
              const PDX = info.point.x;
              const PDY = info.point.y;
              //          && WinWidth * 2 - 214 < PDX < WinWidth / 2 + 107
              // &&      WinWidth / 2 - 107< PDX< WinWidth / 2 + 107

              if (
                PDY <= 615 &&
                WinWidth / 2 - 107 < PDX &&
                PDX < WinWidth / 2 + 107
              ) {
                setLockIconL(LockList);
                setLockIconP(WLockPlay);
                setLockBgR("#E65B5C");
                setLockBgB("#F7FCFF");
              } else if (
                PDY <= 680 &&
                WinWidth / 2 - 107 < PDX &&
                PDX < WinWidth / 2 + 107
              ) {
                setLockIconL(WLockList);
                setLockIconP(LockPlay);
                setLockBgB("#4595E3");
                setLockBgR("#F7FCFF");
              } else if (
                PDY > 680 &&
                WinWidth / 2 - 107 < PDX &&
                PDX < WinWidth / 2 + 107
              ) {
                setLockIconP(LockPlay);
                setLockIconL(LockList);
                setLockBgB("#F7FCFF");
                setLockBgR("#F7FCFF");
              } else if (WinWidth / 2 - 107 > PDX || PDX > WinWidth / 2 + 107) {
                setLockIconP(LockPlay);
                setLockIconL(LockList);
                setLockBgB("#F7FCFF");
                setLockBgR("#F7FCFF");
              }

              //else if (PDX < WinWidth * 2 - 214 || PDX > WinWidth / 2 + 107) {
              //    setLockBgB("#F7FCFF");
              //   setLockBgR("#F7FCFF");
              //      }
              console.log(WinWidth / 2 - 107, WinWidth / 2 + 107);
              // console.log(info.point.x, info.point.y);
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
            onDragEnd={(event, info) => {
              setGreyBtnX(0);
              setGreyBtnY(0);
              setPointScale(1);
              setGreyBtnScale(1);
              setLockBgBg();
              setLockPlayScale(0);

              const PDX = info.point.x;
              const PDY = info.point.y;
              setLockBgB("#F7FCFF");
              setLockBgR("#F7FCFF");

              console.log(info.point.x, info.point.y);
            }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          />
        </div>
        <div className="Background" style={Background} />
        <Bg />
      </div>
    </div>
  );
};

export default WindowPull;
