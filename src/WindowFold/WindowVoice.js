import { motion, useCycle } from "framer-motion";
import * as React from "react";
import NavBarPage from "../Component/NavBarPage";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactBtnStyle = {
  position: "relative",
  left: 300,
  bottom: -500,
  width: 60,
  height: 60,
  backgroundColor: "#aaa",
  borderRadius: 20,
  textAlign: "center",
  zIndex: 1,
  opacity: 0.5,
};
const ContactBubbleStyle = {
  width: 60,
  height: 300,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  opacity: 1,
  background: "#666",
  borderRadius: 12,
  position: "absolute",
  x: 100,
  bottom: 100,
  zIndex: 20,
};
const BoxAnimation = {
  animationOne: {
    x: 100,
  },
  animationTwo: {
    x: 0,
  },
};

const ContactBodyStyle = {
  backgroundColor: "#EEEEEE",
  position: "absolute",
  width: 375,
  height: 812,
  zIndex: 1,
  overflow: "hidden",
};

const WindowVoice = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
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
            onClick={() => cycleAnimation()}
            style={ContactBtnStyle}
          >
            <motion.div
              className="boxChange"
              style={ContactBubbleStyle}
              variants={BoxAnimation}
              animate={animationBox}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowVoice;
