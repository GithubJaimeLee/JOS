import { motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import { Slider, InputNumber } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactHeader from "../Img/CHeader.png";
import ContactWindow from "../Img/ContactWindow.png";
import NavBarPage from "../Component/NavBarPage";
import ContactSetBar from "../Img/ContactSetBar.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import Bg from "../Component/Bg";
import A from "../Img/A.png";
import F from "../Img/F.png";
import L from "../Img/L.png";
import Close from "../Icon/Close.png";
import "../App.css";
import Set from "../Icon/Set.png";
const boxPress = {
  position: "relative",
  right: -290,
  top: 50,
  width: 80,
  opacity: 1,
  height: 80,
  textAlign: "center",
  zIndex: 1,
  // backgroundColor: "blue",
};

const boxAnimation = {
  animationOne: {
    scale: 0,
    width: 131,
    height: 118,
    opacity: 0,
    left: -72,
    top: 20,
  },
  animationTwo: {
    opacity: 1,
    scale: 1,
    left: -72,
    top: 60,
  },
};

const P1V = {
  animationOne: {
    scale: 1,
    zIndex: 100,
    top: 72,
    right: 22,
  },
  animationTwo: {
    top: 120,
    right: 22,
  },
};

const P2V = {
  animationOne: {
    opacity: 1,
  },
  animationTwo: {
    opacity: 0.5,
  },
};
const ContactHeaderStyle = {
  // backgroundImage: `url(${ContactHeader})`,
  width: 360,
  height: 159,
  backgroundSize: "360px 159px",
  position: "fixed",
  zIndex: 1,
  top: 0,
};

const WindowJump = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(400);
  const [Damping, setDamping] = useState(27);
  const [Stiffness, setStiffness] = useState(320);
  const [RStiffness, setRStiffness] = useState(100);
  const [RDamping, setRDamping] = useState(13);
  const [Scale, setScale] = useState(1);
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
  const boxAnimation = {
    animationOne: {
      scale: 0,
      width: 131,
      height: 118,
      opacity: 0,
      left: -72,
      top: 20,
    },
    animationTwo: {
      opacity: 1,
      scale: Scale,
      left: -72,
      top: 60,
    },
  };
  const SetVariants = {
    SetanimationOne: {
      y: 780,
    },
    SetanimationTwo: {
      y: 260,
    },
  };
  const Info = (
    <p>
      <h6>弹出</h6>
      弹窗：
      <br />
      scale：30%~ 105%
      <br />
      time：200ms
      <br />
      bezier curve ：(0.37, 0.75, 0.46 ,1)
      <br />
      scale：105%~100%
      <br />
      time：200ms
      <br />
      bezier curve ：(0.3, 0, 0.5 ,1)
      <br />
      alpha：0～1
      <br />
      time：200ms
      <br />
      bezier curve ：(0.33, 0.1, 0.67 ,1)
      <br />
      <br />
      <h6>收起</h6>
      弹窗：
      <br />
      scale：100%~ 30%
      <br />
      time：300ms
      <br />
      bezier curve ：(0.28, 0.4, 0.2 ,1)
      <br />
      alpha：1～0
      <br />
      time：300ms
      <br />
      bezier curve ：(0.28, 0.4, 0.2 ,1)
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
          height: "100%",
          overflow: "hidden",
          justifyContent: "center",
          position: "absolute",
          top: 0,
        }}
      >
        <div
          className="Screen"
          style={{
            width: 360,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            height: 800,
            overflow: "scroll",
            top: 0,
          }}
        >
          <motion.div
            className="SetWindow"
            style={{
              position: "absolute",
              top: 50,
              width: 350,
              height: 460,
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
              <h6>弹窗动画(Damping阻尼)</h6>
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
              <h6>弹窗动画(Stiffness刚度)</h6>
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
              <div
                className="DefaultRScale"
                style={{
                  width: 300,
                  height: "auto",
                  fontSize: 14,
                  marginTop: 12,
                }}
              >
                {/* <br /> */}
                <h6>弹窗缩放比例(Scale)</h6>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Slider
                    min={1}
                    max={2}
                    onChange={setScale}
                    value={Scale}
                    step={0.1}
                    style={{
                      width: 220,
                    }}
                  />
                  <InputNumber
                    min={1}
                    max={2}
                    style={{
                      margin: 0,
                      height: 30,
                      width: 70,
                      borderRadius: 6,
                    }}
                    step={0.1}
                    onChange={setScale}
                    value={Scale}
                  />
                </div>
                <br />
              </div>
              <div
                className="DefaultRStiffness"
                style={{
                  width: 300,
                  height: "auto",
                  fontSize: 14,
                  marginTop: 12,
                }}
              >
                {/* <br /> */}
                <h6>红点位移刚度(Stiffness)</h6>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Slider
                    min={1}
                    max={1000}
                    onChange={setRStiffness}
                    value={RStiffness}
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
                    onChange={setRStiffness}
                    value={RStiffness}
                  />
                </div>
              </div>
              <div
                className="DefaultRDamping"
                style={{
                  width: 300,
                  height: "auto",
                  fontSize: 14,
                  marginTop: 12,
                }}
              >
                {/* <br /> */}
                <h6>红点位移弹性(Damping)</h6>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Slider
                    min={1}
                    max={1000}
                    onChange={setRDamping}
                    value={RDamping}
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
                    onChange={setRDamping}
                    value={RDamping}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <div
            className="ContactHeader"
            style={{
              width: 360,
              height: 159,
              backgroundSize: "360px 159px",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              zIndex: 1,
              top: 100,
              left: -100,
            }}
          >
            <div className="Window">
              <motion.div
                className="RedPoint"
                style={{
                  position: "absolute",
                  backgroundColor: "red",
                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  scale: 1,
                  zIndex: 100,
                  top: 72,
                  right: 22,
                }}
                variants={P1V}
                animate={animationBox}
                transition={{
                  type: "spring",
                  damping: Damping,
                  stiffness: Stiffness,
                }}
              />
              <motion.div
                className="BlackPoint"
                style={{
                  position: "absolute",
                  // backgroundColor: "red",
                  border: "3px solid #000",

                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  scale: 1,
                  zIndex: 100,
                  top: 60,
                  right: 22,
                }}
                variants={P2V}
                animate={animationBox}
                transition={{ type: "tween" }}
              />
              <div
                className="boxPress"
                onClick={() => cycleAnimation()}
                style={{
                  position: "absolute",
                  right: -10,
                  top: 30,
                  width: 80,
                  opacity: 1,
                  height: 80,
                  textAlign: "center",
                  zIndex: 10,
                  pointerEvents: "auto",
                  //    backgroundColor: "#000000",
                }}
              >
                <motion.div
                  className="boxChange"
                  style={{
                    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.1)",
                    backgroundImage: `url(${ContactWindow})`,
                    borderRadius: 12,
                    position: "absolute",
                    transformOrigin: "131px 0px",
                    scale: 0,
                    zIndex: 1,
                    width: 131,
                    height: 118,
                    opacity: 1,
                    left: -72,
                    top: 20,
                  }}
                  variants={boxAnimation}
                  animate={animationBox}
                  transition={{
                    left: { type: "tween" },
                    top: { type: "tween" },
                    scale: {
                      type: "spring",
                      damping: RDamping,
                      stiffness: RStiffness,
                    },
                  }}
                ></motion.div>
              </div>
            </div>
          </div>
          <div
            onClick={() => cycleAnimation()}
            className="Fix"
            style={{
              width: 360,
              position: "absolute",
              height: 800,
              display: "grid",
              justifyItems: "end",
              top: 0,
            }}
          ></div>

          {/*           <motion.div
            className="ContactBody"
            drag="y"
            dragConstraints={{ top: -580, bottom: 0 }}
            dragElastic={1}
            style={{
              backgroundImage: `url(${ContactBody})`,
              top: 159,
              width: 360,
              height: 1169,
              position: "absolute",
              opacity: 1,
              zIndex: 0,
            }}
          >
            <div
              className="MaskA"
              style={{
                backgroundImage: `url(${A})`,
                width: 360,
                height: 50,
                backgroundColor: "#ddd",
                opacity: 1,

                position: "sticky",
                top: 159,
                left: 0,
                marginTop: 55,
              }}
            />
            <div
              className="MaskF"
              style={{
                backgroundImage: `url(${F})`,
                width: 360,
                height: 50,
                backgroundColor: "#ddd",
                opacity: 1,

                position: "sticky",
                top: 159,
                left: 0,
                marginTop: 260,
              }}
            />
            <div
              className="MaskL"
              style={{
                backgroundImage: `url(${L})`,
                width: 360,
                height: 50,
                backgroundColor: "#ddd",
                opacity: 1,

                position: "sticky",
                top: 159,
                left: 0,
                marginTop: 45,
              }}
            />
            <div
              className="MaskW"
              style={{
                width: 360,
                height: 50,
                backgroundColor: "#ddd",
                opacity: 0,

                position: "sticky",
                top: 159,
                left: 0,
                marginTop: 95,
              }}
            />
            <div
              className="MaskX"
              style={{
                width: 360,
                height: 50,
                backgroundColor: "#ddd",
                opacity: 0,

                position: "sticky",
                top: 159,
                left: 0,
                marginTop: 95,
              }}
            />
            <div
              className="MaskZ"
              style={{
                width: 360,
                height: 50,
                backgroundColor: "#ddd",
                opacity: 0,

                position: "sticky",
                top: 159,
                left: 0,
                marginTop: 215,
              }}
            />
          </motion.div> */}
          <div
            className="Background"
            style={{
              backgroundColor: "#fff",
              width: 360,
              height: 800,
              position: "absolute",
              top: 0,
              opacity: 1,
              zIndex: -1,
            }}
          />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default WindowJump;
