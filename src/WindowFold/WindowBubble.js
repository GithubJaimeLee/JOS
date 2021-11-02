import { motion, useCycle, AnimatePresence } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactHeader from "../Img/ContactHeader.png";
import NavBarPage from "../Component/NavBarPage";

const ContactBtnStyle = {
  position: "absolute",
  left: 110,
  bottom: 6,
  width: 60,
  height: 60,
  backgroundColor: "grey",
  borderRadius: 20,
  textAlign: "center",
  zIndex: 1,
  opacity: 0.5,
};
const ContactBubbleStyle = {
  width: 160,
  height: 60,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  opacity: 1,
  background: "grey",
  borderRadius: 12,
  position: "absolute",
  right: 200,
  bottom: 60,
  zIndex: 20,
};
const BoxAnimation = {
  animationOne: {
    width: 160,
    height: 60,
  },
  animationTwo: {
    scale: 0,
    width: 0,
    height: 0,
  },
};

const ContactHeaderStyle = {
  backgroundImage: `url(${ContactHeader})`,
  width: 375,
  height: 159,
  position: "fixed",
  zIndex: 2,
  top: 0,
};
const ContactBodyStyle = {
  backgroundImage: `url(${ContactBody})`,
  position: "absolute",
  top: 159,
  width: 375,
  height: 1169,
  zIndex: 1,
};
const ContactFooterStyle = {
  backgroundImage: `url(${ContactFooter})`,
  position: "absolute",
  bottom: 0,
  width: 375,
  height: 65,
  zIndex: 1,
};

const WindowBubble = () => {
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
        <div
          className="Mask"
          style={{
            height: 812,
            width: 375,
            position: "absolute",
            overflow: "scroll",
          }}
        >
          <div className="ContactHeader" style={ContactHeaderStyle} />
          <div className="ContactBody" style={ContactBodyStyle} />
        </div>
        <div className="ContactFooter" style={ContactFooterStyle}>
          <motion.div
            className="boxChange"
            style={ContactBubbleStyle}
            variants={BoxAnimation}
            animate={animationBox}
          />

          <div
            className="ContactBtn"
            onClick={() => cycleAnimation()}
            style={ContactBtnStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default WindowBubble;
