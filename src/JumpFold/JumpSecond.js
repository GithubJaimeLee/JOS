import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";

const ContactBtnStyle = {
  position: "relative",
  bottom: -750,
  width: 60,
  height: 60,
  backgroundColor: "#666",
  borderRadius: 20,
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
  width: 260,
  height: 812,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  opacity: 1,
  background: "#eee",
  position: "absolute",
  bottom: 100,
  zIndex: 20,
  y: 101,
  x: 320,
};
const BoxAnimation = {
  animationOne: {
    x: 320,
  },
  animationTwo: {
    x: 60,
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
  backgroundColor: "#ddd",
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
};

const JumpSecond = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [animationBg, BgCycleAnimation] = useCycle(
    "BgAnimationOne",
    "BgAnimationTwo"
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
    </div>
  );
};

export default JumpSecond;
