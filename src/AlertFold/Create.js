import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactHeader from "../Img/ContactHeader.png";
import Bg from "../Component/Bg";
import FingerClick from "../Img/OneFingerClick.png";
import WindowInputKeyboard from "../Img/WindowInputKeyboard.png";
import NewContact from "../Img/NewContact.png";
import ContactSetBar from "../Img/ContactSetBar.png";
import A from "../Img/A.png";
import F from "../Img/F.png";
import L from "../Img/L.png";

const FingerStyle = {
  y: -40,
  x: 118,
  width: 100,
  height: 100,
  backgroundImage: `url(${FingerClick})`,
  position: "relative",
  top: 88,
  backgroundPosition: "25px 25px",
  zIndex: 100,
  backgroundRepeat: "no-repeat",
};
const ContactBubbleStyle = {
  width: 360,
  height: 812,

  opacity: 1,
  y: 812,
  backgroundImage: `url(${NewContact})`,
  position: "absolute",
  //bottom: -420,
  zIndex: 20,
};
const KeyboardStyle = {
  width: 360,
  height: 290,

  backgroundImage: `url(${WindowInputKeyboard})`,
  position: "absolute",
  bottom: 100,
  zIndex: 20,
  y: 400,
};

const BgVariants = {
  animationOne: {
    backgroundColor: "#fff",
  },
  animationTwo: {
    backgroundColor: "#000",
  },
};
const BoxVariants = {
  animationOne: {
    y: 812,
  },
  animationTwo: {
    y: 0,
  },
};
const FingerVariants = {
  animationOne: {
    y: -40,
    x: 118,
  },
  animationTwo: {
    y: -30,
    x: -138,
  },
};
const KeyBoardVariants = {
  KAnimationOne: {
    y: 400,
  },
  KAnimationTwo: {
    y: 100,
  },
};

const ContactHeaderStyle = {
  backgroundImage: `url(${ContactHeader})`,
  width: 360,
  height: 159,
  position: "fixed",
  zIndex: 2,
  top: 0,
};

const BGVariants = {
  BGanimationOne: {
    y: 0,
  },
  BGAnimationTwo: {
    y: -10,
    scale: 0.9,
    borderRadius: "30px",
    opacity: 0.5,
  },
};
const ContactFooterStyle = {
  backgroundImage: `url(${ContactFooter})`,
  position: "absolute",
  bottom: 0,
  width: 360,
  height: 65,
  zIndex: 1,
};

const Create = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [animationKeyBoard, KcycleAnimation] = useCycle(
    "KAnimationOne",
    "KAnimationTwo"
  );
  const [animationBG, BGcycleAnimation] = useCycle(
    "BGAnimationOne",
    "BGAnimationTwo"
  );
  const Info = <p>新建动画</p>;
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          overflow: "hidden",
          position: "absolute",

          top: 0,
        }}
      >
        <div
          className="mask"
          style={{
            width: 360,
            height: 800,
            position: "absolute",
            top: 0,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.div
            variants={FingerVariants}
            animate={animationBox}
            transition={{ type: "tween" }}
            className="ContactBtn"
            onClick={() =>
              cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
            }
            style={FingerStyle}
          />
          <motion.div
            onClick={() =>
              cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
            }
            className="BG"
            variants={BGVariants}
            animate={animationBG}
            transition={{
              type: "tween",
            }}
            style={{
              width: 360,
              height: 812,
              position: "absolute",
              overflow: "hidden",
            }}
          >
            <div className="ContactHeader" style={ContactHeaderStyle} />
            {/*           <div
            className="ScrollBody"
            style={{
              height: 812,

              width: 375,
              position: "absolute",
              top: 0,
              overflow: "scroll",
            }}
          ></div> */}
            <div
              className="Fix"
              style={{
                width: 360,
                position: "absolute",
                height: 800,
                display: "grid",
                justifyItems: "end",

                top: 0,
              }}
            >
              <div
                className="ContactFooter"
                style={{
                  backgroundImage: `url(${ContactFooter})`,
                  width: 360,
                  height: 65,
                  position: "fixed",
                  top: 735,
                  opacity: 1,
                  zIndex: 1000,
                }}
              />
              <div
                className="ContactSetBar"
                style={{
                  width: 20,
                  height: 456,
                  backgroundImage: `url(${ContactSetBar})`,
                  top: 210,
                  zIndex: 1,
                  display: "grid",
                  justifyContent: "end",
                  position: "fixed",
                }}
              />
            </div>
            <div
              className="mask"
              style={{
                position: "absolute",
                top: 0,
                width: 360,
                height: 800,
                overflow: "scroll",
              }}
            >
              <motion.div
                className="ContactBody"
                drag="y"
                dragConstraints={{ top: -580, bottom: 0 }}
                dragElastic={1}
                style={{
                  backgroundImage: `url(${ContactBody})`,
                  top: 159,
                  width: 360,
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
                    width: 360,
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
                    width: 360,
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
                    width: 360,
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
                    width: 360,
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
                    width: 360,
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
                    width: 360,
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
            </div>
          </motion.div>
          <motion.div
            className="boxChange"
            style={ContactBubbleStyle}
            variants={BoxVariants}
            animate={animationBox}
            transition={{
              type: "spring",
              damping: 32,
              stiffness: 300,
            }}
          />
          <motion.div
            className="KeyBoard"
            style={KeyboardStyle}
            variants={KeyBoardVariants}
            animate={animationKeyBoard}
            transition={{ type: "tween" }}
          />

          <motion.div
            className="blackBg"
            style={{
              position: "absolute",
              width: 360,
              height: 800,
              zIndex: -10,
              backgroundColor: "#000",
            }}
            variants={BgVariants}
            animate={animationBox}
            transition={{
              type: "spring",
              damping: 32,
              stiffness: 300,
              backgroundColor: { type: "tween", duration: 0.1 },
            }}
          />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default Create;
