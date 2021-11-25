import { motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import { Slider, InputNumber, Switch } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

import Zoom085 from "../Img/CameraIcon.png";

import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import Set from "../Icon/Set.png";
import Close from "../Icon/Close.png";
import Zoom09 from "../Img/Zoom09.png";
import Zoom088 from "../Img/Zoom088.png";
import Zoom091 from "../Img/Zoom091.png";
import Zoom093 from "../Img/Zoom093.png";

const ClickZoom = () => {
  const [SetWindowAnimation, UPcycleAnimation] = useCycle(
    "UPanimationOne",
    "UPanimationTwo"
  );
  const SetWindowVariants = {
    UPanimationOne: {
      y: 780,
    },
    UPanimationTwo: {
      y: 476,
    },
  };
  const [Scale, setScale] = useState(1);
  const [Duration, setDuration] = useState(0.1);
  //const [O, setO] = useState(0);

  const [O, setO] = useCycle(0, 0.4);

  const Info = <p>桌面图标</p>;
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
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
            //   backgroundImage: `url(${ClickOOS})`,
            position: "absolute",
            width: 360,
            backgroundColor: "#fff",
            height: 800,
            overflow: "hidden",
            display: "grid",
            justifyContent: "center",
            alignContent: " space-evenly",
            zIndex: 10,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 70,
              height: 680,

              display: "grid",
            }}
          >
            <div
              style={{
                width: 360,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                className="Btn"
                style={{
                  width: 52,
                  height: 52,
                  //   backgroundImage: `url(${Zoom085})`,
                  position: "relaitve",
                  zIndex: 11,
                  backgroundColor: "#eee",
                  borderRadius: 12,
                  top: 374,
                }}
                whileTap={{ scale: Scale * 0.85 }}
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
                    opacity: O,
                    transition: { duration: Duration },
                  }}
                />
              </motion.div>
              <div
                style={{
                  position: "relaitve",

                  fontSize: 12,
                  width: 100,
                  display: "flex",

                  justifyContent: "center",
                }}
              >
                缩放比例:0.85
              </div>
            </div>
            <div
              style={{
                width: 360,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                className="Btn"
                style={{
                  width: 52,
                  height: 112,
                  // backgroundImage: `url(${Zoom088})`,
                  backgroundColor: "#eee",
                  position: "relaitve",
                  zIndex: 11,

                  borderRadius: 12,
                  top: 374,
                }}
                whileTap={{ scale: Scale * 0.88 }}
                transition={{ duration: Duration }}
              >
                <motion.div
                  className="BtnMask"
                  style={{
                    width: 52,
                    height: 112,
                    backgroundColor: "#000",
                    borderRadius: 12,
                    opacity: 0,
                    zIndex: 1,
                  }}
                  whileTap={{
                    opacity: O,
                    transition: { duration: Duration },
                  }}
                />
              </motion.div>
              <div
                style={{
                  position: "relaitve",

                  fontSize: 12,
                  width: 100,
                  display: "flex",

                  justifyContent: "center",
                }}
              >
                缩放比例:0.88
              </div>
            </div>
            <div
              style={{
                width: 360,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                className="Btn"
                style={{
                  width: 112,
                  height: 112,
                  //  backgroundImage: `url(${Zoom09})`,
                  backgroundColor: "#eee",
                  position: "relaitve",
                  zIndex: 11,

                  borderRadius: 12,
                  top: 374,
                }}
                whileTap={{ scale: Scale * 0.9 }}
                transition={{ duration: Duration }}
              >
                <motion.div
                  className="BtnMask"
                  style={{
                    width: 112,
                    height: 112,
                    backgroundColor: "#000",
                    borderRadius: 12,
                    opacity: 0,
                    zIndex: 1,
                  }}
                  whileTap={{
                    opacity: O,
                    transition: { duration: Duration },
                  }}
                />
              </motion.div>
              <div
                style={{
                  position: "relaitve",

                  fontSize: 12,
                  width: 100,
                  display: "flex",

                  justifyContent: "center",
                }}
              >
                缩放比例:0.90
              </div>
            </div>
            <div
              style={{
                width: 360,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                className="Btn"
                style={{
                  width: 174,
                  height: 229,
                  //  backgroundImage: `url(${Zoom091})`,
                  backgroundColor: "#eee",
                  position: "relaitve",
                  zIndex: 11,

                  borderRadius: 12,
                  top: 374,
                }}
                whileTap={{ scale: Scale * 0.91 }}
                transition={{ duration: Duration }}
              >
                <motion.div
                  className="BtnMask"
                  style={{
                    width: 174,
                    height: 229,
                    backgroundColor: "#000",
                    borderRadius: 12,
                    opacity: 0,
                    zIndex: 1,
                  }}
                  whileTap={{
                    opacity: O,
                    transition: { duration: Duration },
                  }}
                />
              </motion.div>
              <div
                style={{
                  position: "relaitve",

                  fontSize: 12,
                  width: 100,
                  display: "flex",

                  justifyContent: "center",
                }}
              >
                缩放比例:0.91
              </div>
            </div>
            <div
              style={{
                width: 360,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                className="Btn"
                style={{
                  width: 221,
                  height: 52,
                  //  backgroundImage: `url(${Zoom093})`,
                  backgroundColor: "#eee",
                  position: "relaitve",
                  zIndex: 11,

                  borderRadius: 23,
                  top: 374,
                }}
                whileTap={{ scale: Scale * 0.93 }}
                transition={{ duration: Duration }}
              >
                <motion.div
                  className="BtnMask"
                  style={{
                    width: 221,
                    height: 52,
                    backgroundColor: "#000",
                    borderRadius: 23,
                    opacity: 0,
                    zIndex: 1,
                  }}
                  whileTap={{
                    opacity: O,
                    transition: { duration: Duration },
                  }}
                />
              </motion.div>
              <div
                style={{
                  position: "relaitve",

                  fontSize: 12,
                  width: 100,
                  display: "flex",

                  justifyContent: "center",
                }}
              >
                缩放比例:0.93
              </div>
            </div>
            <div
              className="Background"
              style={{
                position: "absolute",
                width: 360,
                height: 800,
                zIndex: 10,
              }}
            />
          </div>
          <motion.div
            className="SetWindow"
            style={{
              position: "absolute",
              top: 50,
              width: 350,
              height: 254,
              left: 12,
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
              <h6>Scale 全局缩放</h6>
              <p>在现有缩放比例基础上进行全局缩放</p>
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
              <div
                className="DefaultSetDrag"
                style={{
                  width: 120,
                  height: "auto",

                  marginTop: 12,
                }}
              >
                <h6
                  style={{
                    fontSize: 15,
                  }}
                >
                  开启1.0 遮罩效果
                </h6>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 18,
                  }}
                >
                  <Switch
                    style={{
                      marginTop: 5,
                    }}
                    onClick={setO}
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
