import React from "react";
import { useState } from "react";

import { motion, useCycle } from "framer-motion";

const SwitchBtn = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const BtnVariants = {
    animationOne: {
      //  justifyContent: "flex-start",
      backgroundColor: "#fff",
      height: 18,
      width: 42,
      border: "3px solid #EBEBEB",
    },
    animationTwo: {
      //justifyContent: "flex-end",
      border: "3px solid #fff",
      backgroundColor: "#FFE9C4",
      height: 20,
    },
  };
  const PointVariants = {
    animationOne: {
      backgroundColor: "#FFF",
      height: 22,
      width: 22,
      borderRadius: "16px",
      border: "4px solid #ccc",
      left: -5,
    },
    animationTwo: {
      height: 26,
      width: 26,
      borderRadius: "16px",

      backgroundColor: "#fff",
      border: "4px solid #FAB953",
      /*       transition: {
        delay: 0.5,
      }, */
      left: 20,
    },
  };

  const [BtnAnimation, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );

  const spring = {
    type: "tween",
    duration: 0.3,
    //type: "spring",
    // stiffness: 700,
    //  damping: 30,
  };
  return (
    <div>
      <motion.div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          borderRadius: 50,
          top: 38,
          left: 280,
          backgroundColor: "#fff",
          height: 18,
          width: 42,
          border: "3px solid #EBEBEB",
          // cursor: "pointer",
        }}
        className="Switch"
        data-isOn={isOn}
        variants={BtnVariants}
        animate={BtnAnimation}
        transition={spring}
        onClick={(toggleSwitch, cycleAnimation)}
      >
        <motion.div
          className="Btn"
          style={{
            position: "absolute",
            backgroundColor: "#FFF",
            height: 22,
            width: 22,
            borderRadius: "16px",
            border: "4px solid #ccc",
            left: -5,
          }}
          variants={PointVariants}
          animate={BtnAnimation}
          className="Handle"
          transition={spring}
        />
      </motion.div>
    </div>
  );
};

export default SwitchBtn;
