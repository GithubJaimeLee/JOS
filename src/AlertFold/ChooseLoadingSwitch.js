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
      borderRadius: "4px",
      backgroundColor: "#fff",
      x: 30,
    },
  };

  const [BtnAnimation, cycleAnimation] = useCycle(
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
            data-isOn={isOn}
            variants={BtnVariants}
            animate={BtnAnimation}
            whileTap={{ type: "spring" }}
            onClick={(toggleSwitch, cycleAnimation)}
          >
            <motion.div
              className="Handle"
              style={{
                position: "relative",
                backgroundColor: "#b2b2b2",
                height: 16,
                width: 16,
                borderRadius: "16px",
              }}
              variants={PointVariants}
              animate={BtnAnimation}
              whileTap={{ type: "spring" }}
            />
          </motion.div>
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default ChooseLoadingSwitch;
