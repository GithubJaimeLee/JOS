import * as React from "react";
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
const SideStyle = {
  width: 375,
  height: 812,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  opacity: 1,
  backgroundImage: `url(${JumpAppWin})`,
  position: "absolute",
  bottom: 100,
  zIndex: 20,
  y: 101,
  x: 375,
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

  const Info = (
    <p>
      Hello,
      <br /> world!
    </p>
  );
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />

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
          <div className="GridCenter">
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
                {" "}
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
          </div>
        </div>

        <div className="ContactBody" style={ContactBodyStyle}>
          <div
            className="ContactBtn"
            onClick={() => cycleAnimation() & BgCycleAnimation()}
            style={ContactBtnStyle}
          />
          <motion.div
            className="boxChange"
            style={SideStyle}
            variants={BoxAnimation}
            animate={animationBox}
            transition={{ type: "tween" }}
          />
          <motion.div
            className="MaskChange"
            style={MaskStyle}
            variants={BgAnimation}
            animate={animationBg}
          />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default JumpApp;
