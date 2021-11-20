import { motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import { Slider, InputNumber } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import ClickOOS from "../Img/ClickOOS.png";
import CameraIcon from "../Img/CameraIcon.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import Set from "../Icon/Set.png";
import Close from "../Icon/Close.png";

const SetWindowVariants = {
  UPanimationOne: {
    y: 780,
  },
  UPanimationTwo: {
    y: 0,
  },
};
const ClickZoom = () => {
  const [SetWindowAnimation, UPcycleAnimation] = useCycle(
    "UPanimationOne",
    "UPanimationTwo"
  );
  const [Scale, setScale] = useState(0.85);
  const [Duration, setDuration] = useState(0.1);

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
          className="ThisBackground"
          style={{
            backgroundImage: `url(${ClickOOS})`,
            position: "absolute",
            width: 375,
            height: 812,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <motion.div
            className="boxChange"
            style={{
              width: 52,
              height: 52,

              backgroundImage: `url(${CameraIcon})`,
              position: "absolute",
              zIndex: 11,
              borderRadius: 12,
              top: 374,
              left: 205,
            }}
            whileTap={{ scale: Scale }}
            transition={{ duration: Duration }}
          >
            <motion.div
              className="BtnMask"
              style={{
                width: 52,
                height: 52,
                backgroundColor: "#000",
                borderRadius: 12,
                opacity: 0,
                zIndex: 1,
              }}
              whileTap={{
                opacity: 0.4,
                transition: { duration: Duration },
              }}
            />
          </motion.div>
          <div
            className="Background"
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              position: "absolute",
              width: 375,
              height: 812,
              zIndex: 10,
            }}
          />
          <div
            className="OneFingerClick"
            style={{
              width: 32,
              height: 60,
              backgroundImage: `url(${OneFingerClick})`,
              position: "absolute",
              top: 430,
              left: 240,
              zIndex: 10,
            }}
          />
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
                className="DefaultDuration"
                style={{
                  width: 300,
                  height: "auto",
                  fontSize: 14,
                  marginTop: 12,
                }}
              >
                <h6>Duration 持续时间</h6>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Slider
                    min={0}
                    max={1}
                    onChange={setDuration}
                    value={Duration}
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
                    onChange={setDuration}
                    value={Duration}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default ClickZoom;
