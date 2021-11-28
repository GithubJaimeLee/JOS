import { motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import { Slider, InputNumber } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import WindowBg from "../Img/DeskOOS.png";
import WindowAlertWin from "../Img/WindowAlertWin.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import Bg from "../Component/Bg";
import Set from "../Icon/Set.png";
import Close from "../Icon/Close.png";
const ContactBtnStyle = {
  position: "absolute",
  bottom: 550,
  width: 32,
  height: 60,
  backgroundImage: `url(${OneFingerClick})`,
  //backgroundColor: "#aaa",
  borderRadius: 20,
  textAlign: "center",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
};
const ContactBubbleStyle = {
  width: 340,
  height: 102,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  //border: "1px solid #ccc",
  background: "#fff",
  borderRadius: 12,
  position: "absolute",
  y: -720,
  bottom: 100,
  zIndex: 20,
};

const ContactBodyStyle = {
  // backgroundImage: `url(${WindowBg})`,
  backgroundColor: "#ccc",
  position: "absolute",
  width: 360,
  height: 800,
  zIndex: 1,
};

const WindowAlert = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(60);
  const [O, setO] = useState(0);
  const BoxAnimation = {
    animationOne: {
      y: Y,
    },
    animationTwo: {
      y: -Y - 102,
      opacity: O,
    },
  };
  const [Damping, setDamping] = useState(40);
  const [Stiffness, setStiffness] = useState(370);

  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const Info = (
    <p>
      <h6>弹出</h6>
      弹窗：
      <br />
      position：悬浮位置+比例值
      <br />
      time：250ms
      <br />
      bezier curve ：(0.37, 0.75, 0.46 ,1)
      <br />
      position：悬浮位置+比例值~悬浮位置
      <br />
      time：200ms
      <br />
      bezier curve ：(0.3, 0, 0.5 ,1)
      <br /> <br />
      <h6>收起</h6>
      弹窗：
      <br />
      position：回到屏幕外
      <br />
      time：300ms
      <br />
      bezier curve ：(0.5, 0.2, 0.5 ,1)
    </p>
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
      y: 320,
    },
  };

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
            display: "flex",
            justifyContent: "center",
            height: 800,
            overflow: "hidden",
            position: "absolute",
            top: 0,
          }}
        >
          <motion.div
            className="SetWindow"
            style={{
              position: "absolute",
              top: 50,
              width: 350,
              height: 400,
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
              {" "}
              <h6>动画使用Spring(弹簧)曲线完成</h6>
              <br />
              <h6>Damping 阻尼(阻尼越小回弹力度越大,阻尼越大速度越慢)</h6>
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
              <h6>Stiffness 刚度(刚度越大速度也会加快,动画越生硬同时)</h6>
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
            <div
              className="DefaultY"
              style={{
                width: 300,
                height: "auto",
                fontSize: 14,
                marginTop: 12,
              }}
            >
              {/* <br /> */}
              <h6>弹窗到顶部边框初始距离(默认为60px)</h6>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Slider
                  min={10}
                  max={1000}
                  onChange={setY}
                  value={Y}
                  step={1}
                  style={{
                    width: 220,
                  }}
                />
                <InputNumber
                  min={10}
                  max={1000}
                  style={{
                    margin: 0,
                    height: 30,
                    width: 70,
                    borderRadius: 6,
                  }}
                  step={1}
                  onChange={setY}
                  value={Y}
                />
              </div>
            </div>
            <div
              className="DefaultO"
              style={{
                width: 300,
                height: "auto",
                fontSize: 14,
                marginTop: 12,
              }}
            >
              {/* <br /> */}
              <h6>弹窗结束时透明度(默认为0%)</h6>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Slider
                  min={0}
                  max={1}
                  onChange={setO}
                  value={O}
                  step={0.01}
                  style={{
                    width: 220,
                  }}
                />
                <InputNumber
                  min={0}
                  max={1}
                  style={{
                    margin: 0,
                    height: 30,
                    width: 70,
                    borderRadius: 6,
                  }}
                  step={0.01}
                  onChange={setO}
                  value={O}
                />
              </div>
            </div>
          </motion.div>
          <div
            onClick={() => cycleAnimation()}
            className="ContactBody"
            style={ContactBodyStyle}
          />

          {/*        <div
          className="ContactBtn"
          onClick={() => cycleAnimation()}
          style={ContactBtnStyle}
        /> */}
          <motion.div
            className="boxChange"
            style={{
              width: 340,
              height: 102,
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
              border: "1px solid #ccc",
              background: "#fff",
              borderRadius: 12,
              position: "absolute",
              y: 60,
              top: 0,
              zIndex: 20,
            }}
            variants={BoxAnimation}
            animate={animationBox}
            transition={{
              type: "spring",
              damping: Damping,
              stiffness: Stiffness,
              opacity: { type: "spring" },
            }}
          />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default WindowAlert;
