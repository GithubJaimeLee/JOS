import React, { useState } from "react";
import { Slider, InputNumber } from "antd";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useElementScroll,
  useCycle,
} from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import JumpAppWin from "../Img/JumpAppWin.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import SetHeader from "../Img/WSetHeader.png";
import SetBody from "../Img/SetBody.png";
import Bg from "../Component/Bg";
import Close from "../Icon/Close.png";
import Set from "../Icon/Set.png";

const SetWindowVariants = {
  UPanimationOne: {
    y: 780,
  },
  UPanimationTwo: {
    y: 400,
  },
};

const ContactBtnStyle = {
  position: "relative",
  bottom: -450,
  width: 32,
  height: 60,
  backgroundImage: `url(${OneFingerClick})`,

  textAlign: "center",
  zIndex: 21,
  display: "flex",
  justifyContent: "center",
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

const BoxAnimation = {
  animationOne: {
    x: 375,
  },
  animationTwo: {
    x: 0,
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

const SetBgAnimation = {
  BgAnimationOne: {
    x: 0,
  },
  BgAnimationTwo: {
    x: -60,
  },
};
const ContactBodyStyle = {
  //backgroundColor: "#ddd",
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
};

const JumpApp = () => {
  const [SetWindowAnimation, UPcycleAnimation] = useCycle(
    "UPanimationOne",
    "UPanimationTwo"
  );
  const [BR, setBR] = useState(12);
  const [Duration, setDuration] = useState(0.3);
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [animationBg, BgCycleAnimation] = useCycle(
    "BgAnimationOne",
    "BgAnimationTwo"
  );

  const ref = useRef();
  const { scrollYProgress } = useElementScroll(ref);
  const y = useMotionValue(0);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["26px", "14px", "14px"]
  );

  const Info = <p>单入动画</p>;
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="SetBtn"
        onClick={() => UPcycleAnimation()}
        style={{
          position: "absolute",
          backgroundImage: `url(${Set})`,
          top: 13,
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
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: 812,
          position: "absolute",
          top: 0,
        }}
      >
        <div
          className="allImportant"
          ref={ref}
          style={{
            height: 812,
            overflow: "scroll",
          }}
        >
          <motion.div
            className="SetBg"
            variants={SetBgAnimation}
            animate={animationBg}
            transition={{ type: "spring", damping: 16 }}
          >
            <div
              className="HeadCard"
              style={{
                backgroundImage: `url(${SetHeader})`,
                top: 0,

                width: 375,
                height: 148,
                position: "fixed",
                opacity: 1,
                zIndex: 1,
              }}
            >
              <motion.p
                className="SetP"
                style={{
                  fontSize: scale,
                  position: "relative",
                  top: 52,
                  left: 20,
                  margin: 0,
                  fontWeight: "bold",
                  zIndex: 10,
                }}
              >
                设置
              </motion.p>
            </div>
            <motion.div
              className="MoveBackground"
              drag="y"
              dragConstraints={{ top: -960, bottom: 0 }}
              dragElastic={1}
              dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
              style={{
                y,
                backgroundImage: `url(${SetBody})`,
                top: 148,
                width: 375,
                height: 1590,
                position: "relative",
                opacity: 1,
                zIndex: 0,
              }}
            />

            <div
              className="Background"
              style={{
                backgroundColor: "#f7f7f7",
                width: 375,
                height: 812,
                position: "absolute",
                top: 0,

                opacity: 1,
                zIndex: -1,
              }}
            />
          </motion.div>
        </div>
        <div
          className="Mask"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            width: 375,
            height: 812,
            overflow: "hidden",
          }}
        >
          <motion.div
            className="SetWindow"
            style={{
              position: "absolute",
              top: 50,
              width: 350,
              height: 340,
              borderRadius: 12,
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              backgroundColor: "rgba(255,255,255,0.9)",
              // filter: "blur(2px)",
              boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
              zIndex: 100,
              y: 780,
            }}
            variants={SetWindowVariants}
            animate={SetWindowAnimation}
          >
            <motion.img
              className="CloseBtn"
              onClick={() => UPcycleAnimation()}
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
              className="DefaultSetScale"
              style={{
                width: 300,
                height: "auto",
                fontSize: 14,
                marginTop: 12,
              }}
            >
              <div
                style={{
                  height: 40,
                }}
              />
              <h6>圆角大小</h6>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Slider
                  min={0}
                  max={60}
                  onChange={setBR}
                  value={BR}
                  step={1}
                  style={{
                    width: 220,
                  }}
                />
                <InputNumber
                  min={0}
                  max={60}
                  style={{
                    margin: 0,
                    height: 30,
                    width: 80,
                    borderRadius: 6,
                  }}
                  step={1}
                  onChange={setBR}
                  value={BR}
                />
              </div>
              <div
                className="DefaultDuration"
                style={{
                  width: 300,
                  height: "auto",
                  fontSize: 14,
                  marginTop: 12,
                }}
              >
                <h6>Duration 持续时间</h6>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Slider
                    min={0}
                    max={1}
                    onChange={setDuration}
                    value={Duration}
                    step={0.1}
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
                    step={0.1}
                    onChange={setDuration}
                    value={Duration}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <div
            className="ContactBody"
            onClick={() => cycleAnimation() & BgCycleAnimation()}
            style={ContactBodyStyle}
          >
            <div
              className="ContactBtn"
              //      onClick={() => cycleAnimation() & BgCycleAnimation()}
              style={ContactBtnStyle}
            />
            <motion.div
              className="boxChange"
              style={{
                width: 375,
                height: 812,
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
                opacity: 1,
                backgroundImage: `url(${JumpAppWin})`,
                position: "absolute",
                bottom: 100,
                zIndex: 20,
                borderTopLeftRadius: BR,
                borderBottomLeftRadius: BR,
                y: 101,
                x: 375,
              }}
              variants={BoxAnimation}
              animate={animationBox}
              transition={{ type: "tween", duration: Duration }}
            />
            <motion.div
              className="MaskChange"
              style={MaskStyle}
              variants={BgAnimation}
              animate={animationBg}
              transition={{ type: "spring" }}
            />
          </div>
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default JumpApp;
