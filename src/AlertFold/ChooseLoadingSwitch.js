import React from "react";
import { useState } from "react";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import { motion, useCycle } from "framer-motion";
import Switch from "../Component/Switch";
const ChooseLoadingSwitch = () => {
  const Info = <p>布尔开关</p>;
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const BtnVariants = {
    animationOne: {
      backgroundColor: "#ddd",
    },
    animationTwo: {
      backgroundColor: "#5F7DF7",
    },
  };
  const PointVariants = {
    animationOne: {
      backgroundColor: "#b2b2b2",
      height: 16,
      width: 16,
      borderRadius: "16px",
      x: 0,
    },
    animationTwo: {
      height: 20,
      width: 8,

      x: 30,
    },
  };
  const TBtnVariants = {
    animationOne: {
      backgroundColor: "#ddd",
    },
    animationTwo: {
      backgroundColor: "#5F7DF7",
      // border: "1px solid #5F7DF7",
    },
  };
  const TPointVariants = {
    animationOne: {
      backgroundColor: "#b2b2b2",
      height: 16,
      width: 16,
      borderRadius: "16px",
      x: 0,
    },
    animationTwo: {
      height: 20,
      width: 8.5,
      borderRadius: "4.5px",
      backgroundColor: "#fff",
      x: 28,
    },
  };
  const [BtnAnimation, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );

  const [TBtnAnimation, TcycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );

  /*   const spring = {
    type: "tweem",
    // stiffness: 700,
    //  damping: 30,
  }; */
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          height: "100%",
          overflow: "hidden",
          top: 0,
        }}
      >
        <div
          className="bg"
          style={{
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            backgroundColor: "#fff",
            display: "grid",
            justifyContent: "center",
            alignContent: "space-evenly",
            opacity: 1,
            zIndex: "2",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <motion.div
              onPan={(toggleSwitch, cycleAnimation)}
              style={{
                width: 100,
                height: 100,
                // backgroundColor: "#000000",
                justifyContent: "center",
                alignItems: "center",
                display: "grid",
              }}
            >
              <motion.div
                style={{
                  width: 60,
                  height: 30,
                  backgroundColor: "#ddd",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 50,
                  padding: 10,
                  // cursor: "pointer",
                }}
                className="Switch"
                variants={BtnVariants}
                animate={BtnAnimation}
                transform={{ type: "spring", damping: 0, stiffness: 200 }}
              >
                <motion.div
                  className="Handle"
                  style={{
                    position: "relative",
                    backgroundColor: "#b2b2b2",
                    height: 16,
                    width: 16,
                    pointerEvents: "none",
                    borderRadius: "16px",
                  }}
                  variants={PointVariants}
                  animate={BtnAnimation}
                  transform={{ type: "spring", damping: 0, stiffness: 200 }}
                />
              </motion.div>
            </motion.div>
            <div>拖动开关，有回弹动效</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <motion.div
              onTap={TcycleAnimation}
              style={{
                width: 100,
                height: 100,
                // backgroundColor: "#000000",
                justifyContent: "center",
                alignItems: "center",
                display: "grid",
              }}
            >
              <motion.div
                style={{
                  width: 60,
                  height: 30,
                  backgroundColor: "#ddd",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 50,
                  padding: 10,
                  // cursor: "pointer",
                }}
                className="Switch"
                variants={TBtnVariants}
                animate={TBtnAnimation}
                transform={{ type: "tween", duration: 0.4 }}
              >
                <motion.div
                  className="Handle"
                  style={{
                    position: "relative",
                    backgroundColor: "#b2b2b2",
                    height: 16,
                    width: 16,
                    pointerEvents: "none",
                    borderRadius: "16px",
                  }}
                  variants={TPointVariants}
                  animate={TBtnAnimation}
                  transform={{ type: "tween", duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
            <div>点击开关，无回弹动效</div>
          </div>
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default ChooseLoadingSwitch;
