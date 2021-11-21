import React, { useEffect } from "react";
import { useState } from "react";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import { motion, useCycle } from "framer-motion";

const SwitchBtn = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const BtnVariants = {
    animationTwo: {
      //justifyContent: "flex-end",
      backgroundColor: "#FFE9C4",
      height: 18,
      /*       transition: {
        when: "afterChildren",
        delay: 2,
        
      }, */
      //  border: "4px solid #ccc",
    },
    animationOne: {
      //  justifyContent: "flex-start",
      backgroundColor: "#fff",
      height: 18,
      width: 42,
      border: "3px solid #EBEBEB",
      /*     transition: {

        when: "afterChildren",
        delay: 2,
      }, */
    },
  };
  const PointVariants = {
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
    animationOne: {
      backgroundColor: "#FFF",
      height: 22,
      width: 22,
      borderRadius: "16px",
      border: "4px solid #ccc",
      /*       transition: {
        delay: 0.5,
      }, */
      left: -5,
    },
  };
  const RotateVariants = {
    animationOne: {
      height: 16,
      width: 8,
      borderRadius: "4px",
      backgroundColor: "#fff",
    },
    animationTwo: {
      backgroundColor: "#b2b2b2",
      height: 16,
      width: 16,
      borderRadius: "16px",
    },
  };

  const [BtnAnimation, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [RotateAnimation, cycleRotateAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <div>
      <motion.div
        style={{
          width: 45,
          height: 16,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          borderRadius: 50,
          top: 38,
          left: 280,
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
