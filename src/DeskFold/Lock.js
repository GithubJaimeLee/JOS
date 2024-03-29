import { motion, useCycle } from "framer-motion";
import React, { useState, useEffect } from "react";
import NavBarPage from "../Component/NavBarPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Bg from "../Component/Bg";
import LockBg from "../Img/LockBg.png";
import Phone from "../Img/Phone.png";
import Camera from "../Img/Camera.png";
import Point from "../Img/Point.png";
import LockPlay from "../Img/LockPlay.png";
import LockList from "../Img/LockList.png";
import WLockPlay from "../Img/WLockPlay.png";
import WLockList from "../Img/WLockList.png";
import PointBgT from "../Img/PointBgT.png";
import Health2000 from "../Img/Health2000.png";
import BHealth2000 from "../Img/BHealth2000.png";

const Background = {
  backgroundImage: `url(${LockBg})`,
  backgroundSize: "375px 812px",
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: 1,
};

const WindowPull = () => {
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
  const [LockBgR, setLockBgR] = useState("#F7FCFF");
  const [LockBgO, setLockBgO] = useState(1);
  const [LockBgB, setLockBgB] = useState("#F7FCFF");
  const [LockIconP, setLockIconP] = useState(LockPlay);
  const [LockIconL, setLockIconL] = useState(LockList);

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
                backgroundImage: `url(${HealthBg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                transformOrigin: "0% 0%",
              }}
              transition={{ type: "spring", damping: 27, stiffness: 400 }}
              dragElastic={1}
              animate={{
                x: HealthX,
                y: HealthY,
                backgroundColor: `rgba(255,255,255,${HealthO})`,
                scale: HealthScale,
              }}
              onDragCancel={() => {
                setPointScale(1);
                setHealthBg(Health2000);
                setRedO(1);
                setHealthO(0);
                setHealthOO(1);
                setHealthX(-1);
                setHealthY(-1);
                setHealthScale(1);
                setLockBgO(1);
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
                setLockBgO(0);
                setHealthX(0);
                setHealthY(0);
              }}
              onDragEnd={() => {
                setPointScale(1);
                setHealthBg(Health2000);
                setRedO(1);
                setHealthO(0);
                setHealthOO(1);
                setHealthScale(1);
                setLockBgO(1);
                setHealthX(-1);
                setHealthY(-1);
              }}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            />
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
            transition={{ type: "spring", damping: 27, stiffness: 400 }}
            dragElastic={1}
            animate={{ x: PhoneX, y: PhoneY, scale: PhoneScale }}
            onDragCancel={() => {
              setPhoneX(-1);
              setPhoneY(-1);
              setPointScale(1);
              setPhoneScale(1);
              setRedO(1);
              setLockBgO(1);
            }}
            onDragStart={() => {
              setPhoneX(-12);
              setPhoneY(0);
              setPointScale(3);
              setPhoneScale(1.2);
              setRedO(0.5);
              setLockBgB();
              setLockBgR();
              setLockBgO(0);
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
              setPhoneX(-1);
              setPhoneY(-1);
              setPointScale(1);
              setPhoneScale(1);
              setRedO(1);
              setLockBgO(1);
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
              className="RedO"
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
              transition={{
                type: "spring",
                damping: 34,
                stiffness: 600,
              }}
            />

            <motion.div
              className="LockPlayBgR"
              style={{
                // backgroundImage: `url(${LockBgBg})`,
                position: "absolute",
                backgroundColor: "#F7FCFF",
                // backgroundColor: LockBgR,
                //   opacity: LockBgRO,

                top: 525,
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
                opacity: LockBgO,
              }}
              animate={{ backgroundColor: LockBgR }}
              transition={{ backgroundColor: { type: "tween", duration: 0.3 } }}
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
                position: "absolute",
                backgroundColor: "#F7FCFF",
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
                opacity: LockBgO,
              }}
              animate={{ backgroundColor: LockBgB }}
              transition={{ backgroundColor: { type: "tween", duration: 0.3 } }}
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
            transition={{ type: "spring", damping: 27, stiffness: 400 }}
            dragElastic={1}
            animate={{ x: CameraX, y: CameraY, scale: CameraScale }}
            onDragCancel={() => {
              setCameraX(0);
              setCameraY(0);
              setPointScale(1);
              setCameraScale(1);
              setRedO(1);
              setLockBgO(1);
            }}
            onDragStart={() => {
              setCameraX(-10);
              setCameraY(-10);
              setPointScale(3);
              setCameraScale(1.2);
              setRedO(0.5);
              setLockBgB();
              setLockBgR();
              setLockBgO(0);
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
              setLockBgO(1);
            }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          />

          <motion.div
            className="DragPoint"
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
            transition={{ type: "spring", damping: 27, stiffness: 400 }}
            dragElastic={1}
            animate={{ x: GreyBtnX, y: GreyBtnY, scale: GreyBtnScale }}
            onDragCancel={(event, info) => {
              setGreyBtnX(0);
              setGreyBtnY(0);
              setPointScale(1);
              setGreyBtnScale(1);
              setLockPlayScale(0);
              setLockBgB("#F7FCFF");
              setLockBgR("#F7FCFF");
              setRedO(1);
              //   const PDX = info.point.x;
              //      const PDY = info.point.y;
              //   console.log(info.point.x, info.point.y);
            }}
            onDragStart={() => {
              setGreyBtnX(10);
              setGreyBtnY(-10);
              setPointScale(0);
              setGreyBtnScale(1.2);
              setLockPlayScale(1);
              setRedO(0);
            }}
            onDrag={(event, info) => {
              const PDX = info.point.x;
              const PDY = info.point.y;
              setRedO(0);
              if (
                PDY >= 526 &&
                PDY <= 605 &&
                WinWidth / 2 - 107 < PDX &&
                PDX < WinWidth / 2 + 107
              ) {
                setLockIconL(LockList);
                setLockIconP(WLockPlay);
                setLockBgR("#E65B5C");
                setLockBgB("#F7FCFF");
              } else if (
                PDY > 605 &&
                PDY <= 680 &&
                WinWidth / 2 - 107 < PDX &&
                PDX < WinWidth / 2 + 107
              ) {
                setLockIconL(WLockList);
                setLockIconP(LockPlay);
                setLockBgB("#4595E3");
                setLockBgR("#F7FCFF");
              } else if (
                PDY < 526 ||
                (PDY > 680 &&
                  WinWidth / 2 - 107 < PDX &&
                  PDX < WinWidth / 2 + 107)
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

              console.log(WinWidth / 2 - 107, WinWidth / 2 + 107);
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
              setLockPlayScale(0);
              setLockBgB("#F7FCFF");
              setLockBgR("#F7FCFF");
              setRedO(1);
            }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          />
        </div>
        <div className="Background" style={Background} />
      </div>
      <Bg />
    </div>
  );
};

export default WindowPull;
