import { motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import { Slider, InputNumber } from "antd";
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
import Set from "../Icon/Set.png";
import Close from "../Icon/Close.png";
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

  backgroundColor: "#fff",
  position: "absolute",

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
    backgroundColor: "#000",
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
  // backgroundImage: `url(${ContactHeader})`,
  backgroundColor: "#eee",
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
  // backgroundImage: `url(${ContactFooter})`,
  backgroundColor: "#FFFFFF",
  position: "absolute",
  bottom: 0,
  width: 360,
  height: 65,
  zIndex: 1,
};

const Create = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(400);
  const [Damping, setDamping] = useState(27);
  const [Stiffness, setStiffness] = useState(320);
  const [BDamping, setBDamping] = useState(27);
  const [BStiffness, setBStiffness] = useState(320);
  const [KDuration, setKDuration] = useState(300);
  const [KDamping, setKDamping] = useState(27);
  const [KStiffness, setKStiffness] = useState(320);
  const [animationBg, BgCycleAnimation] = useCycle(
    "BgAnimationOne",
    "BgAnimationTwo"
  );

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

  const [SetAnimation, SetCycle] = useCycle(
    "SetanimationOne",
    "SetanimationTwo"
  );
  const SetVariants = {
    SetanimationOne: {
      y: 780,
    },
    SetanimationTwo: {
      y: 200,
    },
  };
  const Info = <p>新建动画</p>;
  return (
    <div className="All">
      <div
        className="SetMenu"
        onClick={() => SetCycle()}
        style={{
          position: "absolute",
          backgroundImage: `url(${Set})`,
          top: 25,
          right: 80,
          width: 30,
          height: 30,
          borderRadius: 20,
          textAlign: "center",
          zIndex: 1001,
          display: "flex",
          justifyContent: "center",
        }}
      />
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
            className="SetWindow"
            style={{
              position: "absolute",
              top: 50,
              width: 350,
              height: 500,
              borderRadius: 12,
              display: "grid",
              alignContent: "space-evenly",
              justifyContent: "center",
              // alignContent: "center",
              backgroundColor: "rgba(255,255,255,0.9)",
              // filter: "blur(2px)",
              boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
              zIndex: 100,
              y: 780,
            }}
            variants={SetVariants}
            animate={SetAnimation}
          >
            <motion.img
              className="CloseBtn"
              onClick={() => SetCycle()}
              src={Close}
              alt=""
              style={{
                width: 16,
                height: 16,
                right: 20,
                top: 16,
                zIndex: 1000,
                position: "absolute",
              }}
            />

            <div
              className="DefaultDamping"
              style={{
                width: 300,
                height: "auto",
                fontSize: 14,
                marginTop: 12,
              }}
            >
              <h6>灰色页面(Damping阻尼)</h6>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Slider
                  min={0}
                  max={100}
                  onChange={setDamping}
                  value={Damping}
                  step={1}
                  style={{
                    width: 220,
                  }}
                />
                <InputNumber
                  min={0}
                  max={100}
                  style={{
                    margin: 0,
                    height: 30,
                    width: 70,
                    borderRadius: 6,
                  }}
                  step={1}
                  onChange={setDamping}
                  value={Damping}
                />
              </div>
            </div>
            <div
              className="DefaultStiffness"
              style={{
                width: 300,
                height: "auto",
                fontSize: 14,
                marginTop: 12,
              }}
            >
              {/* <br /> */}
              <h6>灰色页面(Stiffness刚度)</h6>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Slider
                  min={1}
                  max={1000}
                  onChange={setStiffness}
                  value={Stiffness}
                  step={1}
                  style={{
                    width: 220,
                  }}
                />
                <InputNumber
                  min={1}
                  max={1000}
                  style={{
                    margin: 0,
                    height: 30,
                    width: 70,
                    borderRadius: 6,
                  }}
                  step={1}
                  onChange={setStiffness}
                  value={Stiffness}
                />
              </div>
            </div>

            <div
              className="DefaultBDamping"
              style={{
                width: 300,
                height: "auto",
                fontSize: 14,
                marginTop: 12,
              }}
            >
              <h6>白色页面(Damping阻尼)</h6>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Slider
                  min={0}
                  max={100}
                  onChange={setBDamping}
                  value={BDamping}
                  step={1}
                  style={{
                    width: 220,
                  }}
                />
                <InputNumber
                  min={0}
                  max={100}
                  style={{
                    margin: 0,
                    height: 30,
                    width: 70,
                    borderRadius: 6,
                  }}
                  step={1}
                  onChange={setBDamping}
                  value={BDamping}
                />
              </div>
            </div>
            <div
              className="DefaultBStiffness"
              style={{
                width: 300,
                height: "auto",
                fontSize: 14,
                marginTop: 12,
              }}
            >
              {/* <br /> */}
              <h6>白色页面(Stiffness刚度)</h6>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Slider
                  min={1}
                  max={1000}
                  onChange={setBStiffness}
                  value={BStiffness}
                  step={1}
                  style={{
                    width: 220,
                  }}
                />
                <InputNumber
                  min={1}
                  max={1000}
                  style={{
                    margin: 0,
                    height: 30,
                    width: 70,
                    borderRadius: 6,
                  }}
                  step={1}
                  onChange={setBStiffness}
                  value={BStiffness}
                />
              </div>
            </div>
            <div
              className="DefaultBDamping"
              style={{
                width: 300,
                height: "auto",
                fontSize: 14,
                marginTop: 12,
              }}
            >
              <h6>键盘动画速度(毫秒)</h6>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Slider
                  min={0}
                  max={10000}
                  onChange={setKDuration}
                  value={KDuration}
                  step={1}
                  style={{
                    width: 220,
                  }}
                />
                <InputNumber
                  min={0}
                  max={10000}
                  style={{
                    margin: 0,
                    height: 30,
                    width: 70,
                    borderRadius: 6,
                  }}
                  step={1}
                  onChange={setKDuration}
                  value={KDuration}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FingerVariants}
            animate={animationBox}
            transition={{ type: "tween" }}
            className="ContactBtn"
            onClick={() =>
              cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
            }
            //   style={FingerStyle}
          />
          <motion.div
            className="DDDPage"
            onClick={() =>
              cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
            }
            className="BG"
            variants={BGVariants}
            animate={animationBG}
            transition={{
              type: "spring",
              damping: Damping,
              stiffness: Stiffness,
            }}
            style={{
              width: 360,
              height: 800,
              position: "absolute",
              overflow: "hidden",
            }}
          >
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
                style={{
                  //  backgroundImage: `url(${ContactBody})`,
                  backgroundColor: "#ddd",
                  top: 0,
                  width: 360,
                  height: 800,
                  position: "absolute",
                  opacity: 1,
                  zIndex: 0,
                }}
              />
            </div>
          </motion.div>
          <motion.div
            className="FFFPage"
            onClick={() =>
              cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
            }
            style={{
              width: 360,
              height: 812,
              opacity: 1,
              y: 812,
              backgroundColor: "#fff",
              position: "absolute",
              zIndex: 20,
            }}
            variants={BoxVariants}
            animate={animationBox}
            transition={{
              type: "spring",
              damping: BDamping,
              stiffness: BStiffness,
            }}
          />
          <motion.div
            className="KeyBoard"
            style={KeyboardStyle}
            variants={KeyBoardVariants}
            animate={animationKeyBoard}
            transition={{ type: "tween", duration: KDuration / 1000 }}
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
          />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default Create;
