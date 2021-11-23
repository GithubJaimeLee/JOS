import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactHeader from "../Img/ContactHeader.png";
import ContactWindow from "../Img/ContactWindow.png";
import NavBarPage from "../Component/NavBarPage";
import ContactSetBar from "../Img/ContactSetBar.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import Bg from "../Component/Bg";
import A from "../Img/A.png";
import F from "../Img/F.png";
import L from "../Img/L.png";
import "../App.css";

const boxPress = {
  position: "relative",
  right: -290,
  top: 50,
  width: 80,
  opacity: 1,
  height: 80,
  textAlign: "center",
  zIndex: 10,
  // backgroundColor: "blue",
};

const boxAnimation = {
  animationOne: {
    scale: 0,
    width: 131,
    height: 118,
    opacity: 1,
    left: -62,
    top: -1,
  },
  animationTwo: {
    scale: 1,

    left: -60,
    top: 40,
  },
};

const P1V = {
  animationOne: {
    scale: 1,
    zIndex: 100,
    top: 55,
    right: 22,
  },
  animationTwo: {
    top: 120,
    right: 22,
  },
};

const ContactHeaderStyle = {
  backgroundImage: `url(${ContactHeader})`,
  width: 375,
  height: 159,
  position: "fixed",
  zIndex: 1,
  top: 0,
};
const ContactBodyStyle = {
  backgroundImage: `url(${ContactBody})`,
  position: "absolute",
  top: 159,
  width: 375,
  height: 1169,
  zIndex: 0,
};
const ContactFooterStyle = {
  backgroundImage: `url(${ContactFooter})`,
  position: "absolute",
  bottom: 0,
  width: 375,
  height: 65,
  zIndex: 1,
};

const WindowJump = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const Info = (
    <p>
      <h6>弹出</h6>
      弹窗：
      <br />
      scale：30%~ 105%
      <br />
      time：200ms
      <br />
      bezier curve ：(0.37, 0.75, 0.46 ,1)
      <br />
      scale：105%~100%
      <br />
      time：200ms
      <br />
      bezier curve ：(0.3, 0, 0.5 ,1)
      <br />
      alpha：0～1
      <br />
      time：200ms
      <br />
      bezier curve ：(0.33, 0.1, 0.67 ,1)
      <br />
      <br />
      <h6>收起</h6>
      弹窗：
      <br />
      scale：100%~ 30%
      <br />
      time：300ms
      <br />
      bezier curve ：(0.28, 0.4, 0.2 ,1)
      <br />
      alpha：1～0
      <br />
      time：300ms
      <br />
      bezier curve ：(0.28, 0.4, 0.2 ,1)
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
          position: "absolute",

          top: 0,
        }}
      >
        <div
          className="ScreenPhoneSize"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            height: 812,
            top: 0,
          }}
        >
          <div className="ContactHeader" style={ContactHeaderStyle}>
            <div
              className="FingerClick"
              style={{
                backgroundImage: `url(${OneFingerClick})`,
                position: "absolute",
                top: 78,
                left: 326,
                width: 32,
                height: 60,
                backgroundRepeat: "no-repeat",
                zIndex: 1,
              }}
            />
            <motion.div
              className="RedPointOne"
              style={{
                position: "absolute",
                backgroundColor: "red",
                width: 10,
                height: 10,
                borderRadius: 5,
                scale: 1,
                zIndex: 100,
                top: 55,
                right: 22,
              }}
              variants={P1V}
              animate={animationBox}
              transition={{ type: "tween" }}
            />
            <div
              className="boxPress"
              onClick={() => cycleAnimation()}
              style={boxPress}
            >
              <motion.div
                className="boxChange"
                style={{
                  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.1)",
                  backgroundImage: `url(${ContactWindow})`,
                  borderRadius: 12,
                  position: "absolute",
                  transformOrigin: "131px 0px",
                  scale: 0,
                  width: 131,
                  height: 118,
                  opacity: 1,
                  left: -62,
                  top: -1,
                }}
                variants={boxAnimation}
                animate={animationBox}
                transition={{ type: "tween" }}
              >
                {/*    <motion.div
                  className="RedPointTwo"
                  style={{
                    position: "absolute",
                    backgroundColor: "red",
                    width: 10,
                    height: 10,
                    top: 30,
                    left: 70,
                    zIndex: 1,
                    scale: 0,
                    borderRadius: 5,
                  }}
                  variants={P2V}
                  animate={animationBox}
                /> */}
              </motion.div>
            </div>
          </div>
          <div
            className="ContactFooter"
            style={{
              backgroundImage: `url(${ContactFooter})`,
              width: 375,
              height: 65,
              position: "absolute",
              bottom: 0,
              opacity: 1,
              zIndex: 1000,
            }}
          />
          <div
            className="Body"
            style={{
              backgroundColor: "#f7f7f7",
              width: 375,
              height: 812,
              position: "absolute",
              top: 0,
              overflow: "scroll",
              opacity: 1,
              zIndex: -1,
            }}
          >
            <div
              className="ContactSetBar"
              style={{
                width: 20,
                height: 456,
                backgroundImage: `url(${ContactSetBar})`,
                top: 210,
                right: 0,
                zIndex: 1,
                position: "fixed",
              }}
            />
            <motion.div
              className="ContactBody"
              drag="y"
              dragConstraints={{ top: -580, bottom: 0 }}
              dragElastic={1}
              style={{
                backgroundImage: `url(${ContactBody})`,
                top: 159,
                width: 375,
                height: 1169,
                position: "absolute",
                opacity: 1,
                zIndex: 0,
              }}
            >
              <div
                className="MaskA"
                style={{
                  backgroundImage: `url(${A})`,
                  width: 375,
                  height: 50,
                  backgroundColor: "#ddd",
                  opacity: 1,
                  position: "sticky",
                  top: 159,
                  left: 0,
                  marginTop: 55,
                }}
              />
              <div
                className="MaskF"
                style={{
                  backgroundImage: `url(${F})`,
                  width: 375,
                  height: 50,
                  backgroundColor: "#ddd",
                  opacity: 1,
                  position: "sticky",
                  top: 159,
                  left: 0,
                  marginTop: 260,
                }}
              />
              <div
                className="MaskL"
                style={{
                  backgroundImage: `url(${L})`,
                  width: 375,
                  height: 50,
                  backgroundColor: "#ddd",
                  opacity: 1,
                  position: "sticky",
                  top: 159,
                  left: 0,
                  marginTop: 45,
                }}
              />
              <div
                className="MaskW"
                style={{
                  width: 375,
                  height: 50,
                  backgroundColor: "#ddd",
                  opacity: 0,
                  position: "sticky",
                  top: 159,
                  left: 0,
                  marginTop: 95,
                }}
              />
              <div
                className="MaskX"
                style={{
                  width: 375,
                  height: 50,
                  backgroundColor: "#ddd",
                  opacity: 0,
                  position: "sticky",
                  top: 159,
                  left: 0,
                  marginTop: 95,
                }}
              />
              <div
                className="MaskZ"
                style={{
                  width: 375,
                  height: 50,
                  backgroundColor: "#ddd",
                  opacity: 0,
                  position: "sticky",
                  top: 159,
                  left: 0,
                  marginTop: 215,
                }}
              />
            </motion.div>
            <div
              className="Background"
              style={{
                backgroundColor: "#f7f7f7",
                width: 375,
                height: 812,
                position: "absolute",
                top: 0,
                opacity: 1,
                zIndex: -1,
              }}
            />
          </div>
        </div>
        <Bg />
      </div>
    </div>
  );
};

export default WindowJump;
