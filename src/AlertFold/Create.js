import { motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import { Slider, InputNumber } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import WindowInputKeyboard from "../Img/WindowInputKeyboard.png";
import Set from "../Icon/Set.png";
import Close from "../Icon/Close.png";

const KeyboardStyle = {
  width: 360,
  height: 290,

  backgroundImage: `url(${WindowInputKeyboard})`,
  position: "absolute",
  bottom: 100,
  zIndex: 20,
  y: 400,
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
const BGVariants = {
  BGanimationOne: {
    scale: 1.1,
    borderRadius: "0.1px",
  },
  BGAnimationTwo: {
    scale: 0.9,
    borderRadius: "30px",
    opacity: 0.5,
  },
};

const Create = () => {
  const [Damping, setDamping] = useState(32);
  const [Stiffness, setStiffness] = useState(280);
  const [BDamping, setBDamping] = useState(32);
  const [BStiffness, setBStiffness] = useState(280);
  const [KDuration, setKDuration] = useState(300);

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
              backgroundColor: "rgba(255,255,255,0.9)",
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
            {/*     <div
              className="DefaultKSpeed"
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
            </div> */}
          </motion.div>

          <motion.div
            className="DDDPage"
            onClick={() =>
              cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
            }
            style={{
              width: 360,
              height: 800,
              position: "absolute",
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                backgroundColor: "#ddd",

                width: 360,
                height: 800,
                // position: "absolute",
                opacity: 1,
                zIndex: 0,
                position: "relative",
              }}
              variants={BGVariants}
              animate={animationBG}
              transition={{
                type: "spring",
                //      damping: Damping,
                stiffness: Stiffness,
              }}
            />
          </motion.div>
          <motion.div
            className="FFFPage"
            onClick={() =>
              cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
            }
            style={{
              width: 360,
              height: 900,
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
          {/*     <motion.div
            className="KeyBoard"
            style={KeyboardStyle}
            variants={KeyBoardVariants}
            animate={animationKeyBoard}
            transition={{ type: "tween", duration: KDuration / 1000 }}
          /> */}
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
