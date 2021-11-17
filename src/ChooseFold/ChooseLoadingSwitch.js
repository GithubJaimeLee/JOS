import React from "react";
import { useState } from "react";
import { Switch } from "antd";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import { motion, useCycle } from "framer-motion";

const ChooseLoadingSwitch = () => {
  const Info = <p>单选框</p>;
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const BtnVariants = {
    animationOne: {
      justifyContent: "flex-end",
      backgroundColor: "#5F7DF7",
    },
    animationTwo: {
      justifyContent: "flex-start",
      backgroundColor: "#ddd",
    },
  };
  const PointVariants = {
    animationOne: {
      height: 20,
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
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
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
            backgroundColor: "#E6ECF4",
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
              backgroundColor: "rgba(19, 3, 3, 0.4)",
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
            transition={spring}
            onClick={(toggleSwitch, cycleAnimation)}
          >
            <motion.div
              style={{
                position: "relative",
              }}
              variants={PointVariants}
              animate={BtnAnimation}
              className="Handle"
              transition={spring}
            />
          </motion.div>
          <Switch defaultChecked />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default ChooseLoadingSwitch;
