import { motion, useCycle, AnimatePresence } from "framer-motion";
import * as React from "react";
import zoomIcon from "../Icon/zoomIcon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import SetBg from "../Img/SetBg.png";
import SetCenter from "../Img/SetCenter.png";
import { useState } from "react";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
const boxChange = {
  width: 70,
  height: 70,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  color: "#415fff",
  opacity: 0,
  background: "#fff",
  backgroundImage: `url(${SetBg})`,
  borderRadius: 12,
  position: "absolute",
  left: 20,
  top: 66,
  zIndex: 20,
  // overflow: 'hidden'
};
const SetCenterStyle = {
  width: 122,
  height: 122,
  scale: 0.45,
  opacity: 0,
  backgroundImage: `url(${SetCenter})`,
};
const boxAnimation = {
  animationOne: {
    opacity: 1,
    width: 70,
    height: 70,
  },
  animationTwo: {
    opacity: 1,
    width: 140,
    height: 70,
  },
  animationThree: {
    opacity: 1,
    width: 70,
    height: 140,
  },
  animationFour: {
    opacity: 1,
    width: 140,
    height: 140,
  },
};

const SetAnimation = {
  SanimationOne: {
    bottom: 26,
    right: 26,
    position: "relative",
    zIndex: -1,
    opacity: 1,
  },
  SanimationTwo: {
    scale: 1,
    bottom: 10,
    right: -36,
    position: "relative",
    zIndex: -1,
    opacity: 1,
  },
  SanimationThree: {
    scale: 0.85,
    bottom: -10,
    right: 0,
    position: "relative",
    zIndex: -1,
    opacity: 1,
  },
  SanimationFour: {
    scale: 1.36,
    bottom: -30,
    right: -35,
    position: "relative",
    zIndex: -1,
    opacity: 1,
  },
};
const MaskAnimation = {
  ManimationOne: {
    width: 70,
    height: 70,
  },
  ManimationTwo: {
    width: 140,
    height: 70,
  },
  ManimationThree: {
    width: 70,
    height: 140,
  },
  ManimationFour: {
    width: 140,
    height: 140,
  },
};

const DChange = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo",
    "animationThree",
    "animationFour"
  );
  const [animationSet, ScycleAnimation] = useCycle(
    "SanimationOne",
    "SanimationTwo",
    "SanimationThree",
    "SanimationFour"
  );
  const [animationMask, McycleAnimation] = useCycle(
    "ManimationOne",
    "ManimationTwo",
    "ManimationThree",
    "ManimationFour"
  );
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(true);
  const toggleClose = () => setIsOpen(false);
  const Info = <p>图标移动自动补位</p>;

  return (
    <div>
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        onClick={toggleClose}
        style={{
          display: "flex",
          justifyContent: "center",
          zIndex: -11,
        }}
      >
        <div
          className="Screen"
          style={{
            width: 375,
            position: "absolute",
            top: 0,
          }}
        >
          <motion.div
            className="boxChange"
            style={boxChange}
            variants={boxAnimation}
            animate={animationBox}
            onPanStart={toggleOpen}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "tween" }}
          >
            <p
              style={{
                color: "#666",
                fontWeight: "bold",
                position: "absolute",
                top: 10,
                left: 10,
                fontSize: 14,
              }}
            >
              长 按
            </p>
            <motion.div
              style={{
                overflow: "hidden",
                width: 70,
                height: 70,
              }}
              transition={{ type: "tween" }}
              variants={MaskAnimation}
              animate={animationMask}
              className="Mask"
            >
              <motion.div
                className="SetCenter"
                variants={SetAnimation}
                animate={animationSet}
                transition={{ type: "tween" }}
                style={SetCenterStyle}
              />
            </motion.div>

            {isOpen && (
              <div
                className="AllbtnTwo"
                onClick={() =>
                  cycleAnimation() & ScycleAnimation() & McycleAnimation()
                }
              >
                <img
                  src={zoomIcon}
                  alt=" "
                  style={{
                    width: 16,
                    position: "absolute",
                    bottom: 2,
                    right: 2,
                    opacity: 1,
                    zIndex: "100",
                  }}
                ></img>
                <div
                  className="boxPress"
                  //exit={{ opacity: 0 }}
                  style={{
                    display: "block",
                    position: "absolute",
                    right: -10,
                    bottom: -10,
                    width: 40,
                    height: 40,
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    textAlign: "center",
                    boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.3)",
                  }}
                ></div>
              </div>
            )}
          </motion.div>
        </div>
        <div
          className="Background"
          onClick={toggleClose}
          style={{
            background: "#E6ECF4",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "-10",
          }}
        />
        <Bg />
      </div>
    </div>
  );
};

export default DChange;