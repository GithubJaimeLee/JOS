import { motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import { Slider, InputNumber } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import WindowCenterBg from "../Img/WindowCenterBg.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import Set from "../Icon/Set.png";
import CenterWin from "../Img/WindowCenterWin.png";
import Bg from "../Component/Bg";

import Close from "../Icon/Close.png";
const ContactBtnStyle = {
  position: "relative",
  backgroundImage: `url(${OneFingerClick})`,
  bottom: -500,
  width: 32,
  height: 60,
  // backgroundColor: "#666",

  textAlign: "center",
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
};
const BgStyle = {
  position: "absolute",
  bottom: 0,
  width: 375,
  height: 812,
  backgroundColor: "#000",
  textAlign: "center",
  zIndex: 10,
  opacity: 0,
  display: "flex",
  justifyContent: "center",
  pointerEvents: "auto",
};

const CenterWinVariants = {
  animationOne: {
    scale: 0.8,
    opacity: 0,
  },
  animationTwo: {
    scale: 1,
    opacity: 1,
  },
};
const BgAnimation = {
  BgAnimationOne: {
    opacity: 0,
  },
  BgAnimationTwo: {
    opacity: 0.5,
  },
};

const ContactBodyStyle = {
  // backgroundImage: `url(${WindowCenterBg})`,
  backgroundColor: "#EEEEEE",
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: 1,
};

const WindowCenter = () => {
  const [Damping, setDamping] = useState(20);
  const [Stiffness, setStiffness] = useState(170);
  const [CenterWinAnimate, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [animationBg, BgCycleAnimation] = useCycle(
    "BgAnimationOne",
    "BgAnimationTwo"
  );

  const [SetAnimation, SetCycle] = useCycle(
    "SetanimationOne",
    "SetanimationTwo"
  );
  const SetVariants = {
    SetanimationOne: {
      y: 780,
    },
    SetanimationTwo: {
      y: 400,
    },
  };

  const Info = (
    <p>
      <h6>弹出</h6>
      <br />
      弹窗： scale：0.8~1
      <br />
      time：300ms
      <br />
      bezier curve ：(0.28, 0.85, 0.36 ,1)
      <br />
      alpha：0~1
      <br />
      time：300ms
      <br />
      bezier curve ：(0.28, 0.85, 0.36 ,1)
      <br />
      <br />
      背景压黑：
      <br />
      alpha：0～0.4
      <br />
      time：300ms
      <br />
      bezier curve ：(0.33, 0.1, 0.67 ,1)
      <br />
      <br />
      <h6>收起</h6>
      弹窗：
      <br />
      scale：1~0.8
      <br />
      time：300ms
      <br />
      bezier curve ：(0.25, 0.1, 0.25,1)
      <br />
      alpha：1~0
      <br />
      time：250ms
      <br />
      bezier curve ：(0.25, 0.1, 0.25 ,1)
      <br />
      <br />
      背景压黑：
      <br />
      alpha：0.4～0
      <br />
      time：300ms
      <br />
      bezier curve ：(0.33, 0, 0.67 ,1)
    </p>
  );
  return (
    <div className="All">
      <div
        className="SetMenu"
        onClick={() => SetCycle()}
        style={{
          position: "absolute",
          backgroundImage: `url(${Set})`,
          top: 25,
          right: 80,
          width: 30,
          height: 30,
          borderRadius: 20,
          textAlign: "center",
          zIndex: 1001,
          display: "flex",
          justifyContent: "center",
        }}
      />

      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          overflow: "hidden",
          position: "absolute",
          top: 0,
        }}
      >
        {/*     <div className="ContactBtn" style={ContactBtnStyle} /> */}
        <div
          className="mask"
          style={{
            width: 360,
            display: "flex",
            justifyContent: "center",
            height: 800,
            overflow: "hidden",
            position: "absolute",
            top: 0,
          }}
        >
          {" "}
          <motion.div
            className="SetWindow"
            style={{
              position: "absolute",
              top: 50,
              width: 350,
              height: 260,
              borderRadius: 12,
              display: "grid",
              alignContent: "space-evenly",
              justifyContent: "center",
              // alignContent: "center",
              backgroundColor: "rgba(255,255,255,0.9)",
              // filter: "blur(2px)",
              boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
              zIndex: 100,
              y: 780,
            }}
            variants={SetVariants}
            animate={SetAnimation}
          >
            <motion.img
              className="CloseBtn"
              onClick={() => SetCycle()}
              src={Close}
              alt=""
              style={{
                width: 16,
                height: 16,
                right: 20,
                top: 16,
                zIndex: 1000,
                position: "absolute",
              }}
            />

            <div
              className="DefaultDamping"
              style={{
                width: 300,
                height: "auto",
                fontSize: 14,
                marginTop: 12,
              }}
            >
              <h6>弹窗(Damping阻尼)</h6>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Slider
                  min={0}
                  max={100}
                  onChange={setDamping}
                  value={Damping}
                  step={1}
                  style={{
                    width: 220,
                  }}
                />
                <InputNumber
                  min={0}
                  max={100}
                  style={{
                    margin: 0,
                    height: 30,
                    width: 70,
                    borderRadius: 6,
                  }}
                  step={1}
                  onChange={setDamping}
                  value={Damping}
                />
              </div>
            </div>
            <div
              className="DefaultStiffness"
              style={{
                width: 300,
                height: "auto",
                fontSize: 14,
                marginTop: 12,
              }}
            >
              {/* <br /> */}
              <h6>弹窗(Stiffness刚度)</h6>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Slider
                  min={1}
                  max={1000}
                  onChange={setStiffness}
                  value={Stiffness}
                  step={1}
                  style={{
                    width: 220,
                  }}
                />
                <InputNumber
                  min={1}
                  max={1000}
                  style={{
                    margin: 0,
                    height: 30,
                    width: 70,
                    borderRadius: 6,
                  }}
                  step={1}
                  onChange={setStiffness}
                  value={Stiffness}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="CenterWin"
            style={{
              width: 232,
              height: 72,
              opacity: 1,
              //    backgroundImage: `url(${CenterWin})`,
              backgroundColor: "#FFFFFF",
              borderRadius: 17,
              position: "absolute",
              bottom: 100,
              zIndex: 20,
              y: -300,
              scale: 0.8,
            }}
            variants={CenterWinVariants}
            animate={CenterWinAnimate}
            transition={{
              type: "spring",
              damping: Damping,
              stiffness: Stiffness,
            }}
          />
          <motion.div
            className="MaskChange"
            onClick={() => cycleAnimation() & BgCycleAnimation()}
            style={BgStyle}
            variants={BgAnimation}
            animate={animationBg}
          />
          <div className="BG" style={ContactBodyStyle} />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default WindowCenter;
