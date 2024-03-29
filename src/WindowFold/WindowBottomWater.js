import { motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import { Slider, InputNumber } from "antd";
import vbg1 from "../Img/vbg2.png";
import NavBarPage from "../Component/NavBarPage";
import "bootstrap/dist/css/bootstrap.min.css";
import WindowBottomBg from "../Img/WindowBottomBg.png";
import WindowBottomWin from "../Img/WindowBottomWin.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import Set from "../Icon/Set.png";
import Bg from "../Component/Bg";
import Close from "../Icon/Close.png";

const ContactBtnStyle = {
  position: "relative",
  bottom: -700,
  width: 32,
  height: 60,
  backgroundImage: `url(${OneFingerClick})`,
  // backgroundColor: "#666",

  textAlign: "center",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
};
const ChangeBoxStyle = {
  width: 340,
  height: 275,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  opacity: 1,
  y: 400,
  backgroundImage: `url(${WindowBottomWin})`,
  // background: "#aaa",
  borderRadius: 20,
  position: "absolute",
  bottom: 100,
  zIndex: 20,
};
const BoxAnimation = {
  animationOne: {
    y: 360,
    rotateX: -90,
    scale: 0.8,
    opacity: 0,
  },
  animationTwo: {
    y: 0,
    rotateX: -0,
    scale: 1,
    opacity: 1,
  },
};

const ContactBodyStyle = {
  //backgroundImage: `url(${WindowBottomBg})`,
  backgroundColor: "#EEEEEE",
  position: "absolute",
  backgroundImage: `url(${vbg1})`, // Set the background image
  backgroundSize: "cover", // Adjust background size as needed
  backgroundRepeat: "no-repeat", // Adjust background repeat as needed
  width: 375,
  height: 812,
  zIndex: 0,
};

const MaskStyle = {
  position: "absolute",
  bottom: 0,
  width: 375,
  height: 812,
  backgroundColor: "#999",
  textAlign: "center",
  zIndex: 1,
  opacity: 0,
  display: "flex",
  justifyContent: "center",
  y: 0,
};
const BgAnimation = {
  BgAnimationOne: {
    opacity: 0,
  },
  BgAnimationTwo: {
    opacity: 0.5,
  },
};

const WindowBottom = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(400);
  const [Damping, setDamping] = useState(27);
  const [Stiffness, setStiffness] = useState(320);
  const [animationBg, BgCycleAnimation] = useCycle(
    "BgAnimationOne",
    "BgAnimationTwo"
  );
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
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
      <h5>弹出</h5>
      {/* position：悬浮位置+比例值 time：250ms bezier curve ：(0.37, 0.75, 0.46 ,1)
      position：悬浮位置+比例值~悬浮位置 time：200ms bezier curve ：(0.3, 0, 0.5 
      ,1)*/}
      {/*   alpha：0～0.4 time：300ms bezier curve ：(0.33, 0.1, 0.67 ,1) */}
      弹窗：
      <br />
      position：悬浮位置+比例值
      <br />
      damping:30
      <br />
      stiffness:300
      <br /> <br />
      背景压黑：
      <br /> alpha：0.5
      <br />
      damping:30
      <br />
      stiffness:300
      <br />
      <br />
      <h5>收起code</h5>
      弹窗：
      <br />
      position：回到屏幕外
      <br /> damping:30
      <br />
      stiffness:300
      <br /> <br />
      背景压黑：
      <br /> alpha：0.5
      <br />
      damping:30
      <br />
      stiffness:300
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
          height: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",

          position: "absolute",
          top: 0,
        }}
      >
        <div
          className="mask"
          style={{
            width: 360,
            height: 800,
            position: "absolute",
            top: 0,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
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
              <h6>Damping 阻尼</h6>
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
              <h6>Stiffness 刚度</h6>
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
            onClick={() => cycleAnimation() & BgCycleAnimation()}
            className="MaskChange"
            style={MaskStyle}
            variants={BgAnimation}
            animate={animationBg}
          />
          <div className="ContactBody" style={ContactBodyStyle} />

          {/*         <motion.div
          className="ContactBtn"
          //  onClick={() => cycleAnimation() & BgCycleAnimation()}
          style={ContactBtnStyle}
          variants={FingerVariants}
          animate={Fingeranimation}
        /> */}
          <div
            style={{
              perspective: "340px",
              position: "absolute",
              bottom: 40,
              width: 340,
              opacity: 1,
              height: 275,
              zIndex: 20,
            }}
          >
            <motion.div
              drag="y"
              onClick={() => cycleAnimation() & BgCycleAnimation()}
              className="JumpWin"
              style={{
                width: 340,
                height: 275,
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
                opacity: 1,
                y: Y,
                x: X,
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                position: "absolute",
                bottom: 40,
                zIndex: 20,
              }}
              variants={BoxAnimation}
              animate={animationBox}
              transition={{
                type: "spring",
                damping: Damping,
                stiffness: Stiffness,
              }}
              dragConstraints={{
                top: 0,
                bottom: 0,
              }}
              dragElastic={0.08}
              onDragCancel={() => {
                setX(-1);
                setY(-1);
              }}
              onDragStart={() => {
                setX(-1);
                setY(-1);
              }}
              onDragEnd={() => {
                setX(-1);
                setY(-1);
              }}
            />
          </div>
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default WindowBottom;
