import { motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import { Slider, InputNumber } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import ClickOOS from "../Img/ClickOOS.png";
import CameraIcon from "../Img/CameraIcon.png";
import Set from "../Icon/Set.png";
import Close from "../Icon/Close.png";

import { useRef } from "react";
import { useMotionValue, useTransform, useElementScroll } from "framer-motion";
import SetHeader from "../Img/WSetHeader.png";
import SetBody from "../Img/SetBody.png";
import NavBarPage from "../Component/NavBarPage";
import OneFingerClick from "../Img/OneFingerClick.png";
import "../App.css";
import Bg from "../Component/Bg";

const SetWindowVariants = {
  UPanimationOne: {
    y: 780,
  },
  UPanimationTwo: {
    y: 0,
  },
};
const ClickShadow = () => {
  const [SetWindowAnimation, UPcycleAnimation] = useCycle(
    "UPanimationOne",
    "UPanimationTwo"
  );
  const [Scale, setScale] = useState(1);
  const [Opacity, setOpacity] = useState(0.5);
  const ref = useRef();
  const { scrollYProgress } = useElementScroll(ref);
  const y = useMotionValue(0);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["26px", "14px", "14px"]
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
          position: "absolute",

          top: 0,
        }}
      >
        <div
          className="SetBtn"
          onClick={() => UPcycleAnimation()}
          style={{
            position: "absolute",
            backgroundImage: `url(${Set})`,
            top: 13,
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
        <div
          className="allImportant"
          ref={ref}
          style={{
            height: 812,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="GridCenter">
            <div
              className="HeadCard"
              style={{
                backgroundImage: `url(${SetHeader})`,
                top: 0,
                width: 375,
                height: 148,
                position: "fixed",
                opacity: 1,
                zIndex: 1,
                display: "flex",
              }}
            >
              <div
                className="OneFingerClick"
                style={{
                  width: 32,
                  height: 60,
                  backgroundImage: `url(${OneFingerClick})`,
                  position: "relative",
                  top: 300,
                  left: 28,
                  zIndex: 11,
                }}
              />
              <motion.p
                className="SetP"
                style={{
                  fontSize: scale,
                  position: "relative",
                  top: 52,
                  left: 20,
                  margin: 0,
                  fontWeight: "bold",
                  zIndex: 10,
                }}
              >
                {" "}
                设置
              </motion.p>
            </div>

            <motion.div
              className="MoveBackground"
              drag="y"
              //   draggable="false"
              dragConstraints={{ top: -960, bottom: 0 }}
              dragElastic={1}
              dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
              style={{
                y,
                backgroundImage: `url(${SetBody})`,
                top: 148,
                width: 375,
                height: 1590,
                position: "relative",
                opacity: 1,
                zIndex: 0,
              }}
            >
              <motion.div
                whileTap={{ opacity: Opacity, scaleY: Scale }}
                style={{
                  width: 375,
                  height: 70,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 30,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 70,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 30 + 70,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 100,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 30 + 70 * 2,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 60,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 130 + 70 * 2,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 60,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 130 + 70 * 2 + 60,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 60,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 270 + 60 * 2,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 60,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 270 + 60 * 3,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 65,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 270 + 60 * 4,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 60 * 4,
                }}
              />

              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 60 * 4 + 55,
                }}
              />

              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 60 * 4 + 55 * 2,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 3,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 70,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 4 + 10,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 4 + 80,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 5 + 80,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 6 + 80,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 7 + 80,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 8 + 80,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 9 + 80,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 65,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 575 + 55 * 10 + 90,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 55 * 10 + 395,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 575 + 55 * 11 + 155,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 575 + 55 * 12 + 155,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 575 + 55 * 12 + 225,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 575 + 55 * 13 + 225,
                }}
              />
            </motion.div>

            <motion.div
              className="SetWindow"
              style={{
                position: "absolute",
                top: 50,
                width: 350,
                height: 740,
                borderRadius: 12,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                backgroundColor: "rgba(255,255,255,0.7)",
                // filter: "blur(2px)",
                boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
                zIndex: 100,
                y: 780,
              }}
              variants={SetWindowVariants}
              animate={SetWindowAnimation}
            >
              <motion.img
                className="CloseBtn"
                onClick={() => UPcycleAnimation()}
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
                className="DefaultSetScale"
                style={{
                  width: 300,
                  height: "auto",
                  fontSize: 14,
                  marginTop: 12,
                }}
              >
                <h6>Scale 缩放</h6>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Slider
                    min={0}
                    max={2}
                    onChange={setScale}
                    value={Scale}
                    step={0.1}
                    style={{
                      width: 220,
                    }}
                  />
                  <InputNumber
                    min={0}
                    max={2}
                    style={{
                      margin: 0,
                      height: 30,
                      width: 80,
                      borderRadius: 6,
                    }}
                    step={0.1}
                    onChange={setScale}
                    value={Scale}
                  />
                </div>
                <div
                  className="DefaultOpacity"
                  style={{
                    width: 300,
                    height: "auto",
                    fontSize: 14,
                    marginTop: 12,
                  }}
                >
                  <h6>Opacity 透明度</h6>

                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                    }}
                  >
                    <Slider
                      min={0}
                      max={1}
                      onChange={setOpacity}
                      value={Opacity}
                      step={0.1}
                      style={{
                        width: 220,
                      }}
                    />
                    <InputNumber
                      min={0}
                      max={1}
                      style={{
                        margin: 0,
                        height: 30,
                        width: 70,
                        borderRadius: 6,
                      }}
                      step={0.1}
                      onChange={setOpacity}
                      value={Opacity}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <div
              className="Background"
              style={{
                width: 375,
                height: 812,
                position: "absolute",
                top: 0,
                opacity: 1,
                zIndex: -1,
                overflow: "hidden",
              }}
            />
          </div>
        </div>
        <Bg />
      </div>
    </div>
  );
};

export default ClickShadow;
