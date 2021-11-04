import { motion, useCycle, AnimatePresence } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import AlertNewBg from "../Img/AlertNewBg.png";
import OneFingerClick from "../Img/OneFingerClick.png";

const ContactBtnStyle = {
  position: "relative",

  bottom: -308,
  left: 38,
  width: 78,
  height: 78,
  //backgroundColor: "#666",
  color: "#fff",
  borderRadius: 20,
  textAlign: "center",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
};
const ContactBubbleStyle = {
  width: 22,
  height: 22,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  opacity: 1,
  background: "#FF4924",
  borderRadius: 11,
  position: "absolute",
  textAlign: "center",
  right: 0,
  bottom: 65,
  zIndex: 20,
};
const BoxAnimation = {
  animationOne: {
    scale: 0,
  },
  animationTwo: {
    scale: 1,
  },
};

const ContactBodyStyle = {
  backgroundImage: `url(${AlertNewBg})`,
  //backgroundColor: "#EEEEEE",
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: -1,
};

const AlertNew = () => {
  const Info = <p>新事件标记</p>;
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
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
          position: "absolute",
          top: 0,
        }}
      >
        <div className="ContactBody" style={ContactBodyStyle} />
        <AnimatePresence>
          <div
            className="ContactBtn"
            onClick={() => cycleAnimation()}
            style={ContactBtnStyle}
          >
            <div
              className="FingerClick"
              style={{
                backgroundImage: `url(${OneFingerClick})`,
                position: "relative",
                top: 36,
                width: 32,
                height: 60,
                backgroundRepeat: "no-repeat",
              }}
            />
            <motion.div
              className="boxChange"
              style={ContactBubbleStyle}
              variants={BoxAnimation}
              animate={animationBox}
            >
              8
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AlertNew;
