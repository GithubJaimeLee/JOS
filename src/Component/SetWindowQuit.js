import React, { useState } from "react";
import { motion, useCycle, useMotionValue, useTransform } from "framer-motion";
import WSet from "../Icon/Set.png";
import NoteAndroid from "../Img/NoteAndroid.png";
import NoteBg from "../Img/NoteBg.png";
import Close from "../Icon/Close.png";
import DeskBackBg from "../Img/DeskBackBg.png";
import DeskFrontBg from "../Img/DeskFrontBg.png";
import "../css/Component.css";
//下一步还原SliderInput在本文件中
import { Slider, InputNumber } from "antd";
import "antd/dist/antd.css";
import Velocity from "../Component/Action";
//上一步还原结束

const AppNoteBgStyle = {
  backgroundImage: `url(${NoteBg})`,
  width: 690,
  height: 812,
  position: "relative",
  backgroundColor: "#FFFFFF",
  borderColor: "#FFFFFF",
  y: -355,
  x: -300,
  scale: 0.2,
  opacity: 1,
  zIndex: 100,
};

const AppNoteBgVariants = {
  NoteBgAnimationOne: {
    //  opacity: 1,
    // width: 138,
    // height: 162.4,
    scale: 0.2,

    //  scale: [1, 0.8, 0.6, 0.4, 0.2],
  },
  NoteBgAnimationTwo: {
    opacity: [1, 0, 0, 0, 0],
    // y: -100,
    //  x: -100,

    scale: 1,
  },
};

const SetWindowStyle = {
  position: "relative",
  top: 400,
  width: 350,
  height: 418,
  borderRadius: 12,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
  zIndex: 1,
  y: 500,
};

const SetWindowVariants = {
  UPanimationOne: {
    y: 500,
    zIndex: 1,
  },
  UPanimationTwo: {
    y: -20,
    zIndex: 1,
  },
};

const SetBtnStyle = {
  position: "absolute",
  filter: "drop-shadow(0px 0px 2px #fff) drop-shadow(0px 0px 8px #fff)",
  backgroundImage: `url(${WSet})`,
  top: 13,
  right: 80,
  width: 30,
  height: 30,
  borderRadius: 20,
  textAlign: "center",
  zIndex: 1001,
  display: "flex",
  justifyContent: "center",
};

export default function SetWindow() {
  const y = useMotionValue(0);
  const scale = useTransform(y, [0, -150], [1.02, 0.3]);

  const [AppWindowAnimation, cycleAnimation] = useCycle(
    "AppWindowAnimationOne",
    "AppWindowAnimationTwo"
  );
  const [SetWindowAnimation, UPcycleAnimation] = useCycle(
    "UPanimationOne",
    "UPanimationTwo"
  );
  const [AppNoteBgAnimation, CycleNoteBgAnimation] = useCycle(
    "NoteBgAnimationOne",
    "NoteBgAnimationTwo"
  );
  const [ImgBgAnimation, CycleImgBgAnimation] = useCycle(
    "ImgBgAnimationOne",
    "ImgBgAnimationTwo"
  );
  const [BackBgAnimation, CycleBackBgAnimation] = useCycle(
    "BackBgAnimationOne",
    "BackBgAnimationTwo"
  );

  const [DragApp, cycleDrag] = useCycle(false, true);
  const [TapApp, cycleTap] = useCycle({ scale: 0.9 }, false);
  const [Stiffness, setStiffness] = useState("100");
  const [Damping, setDamping] = useState("10");
  const [Velocity, setVelocity] = useState("0");
  //const [Y, setY] = useState(0);

  const AppWindowVariants = {
    AppWindowAnimationOne: {
      x: 195,
      top: 62,
      width: 148,
      height: 148,
      backgroundImage: `url(${NoteAndroid})`,
      backgroundImage: null,
    },
    AppWindowAnimationTwo: {
      backgroundImage: `url(${NoteAndroid})`,
      width: 375,
      height: 812,
      scale: 1.02,
      backgroundSize: "375px 812px",
      x: 0,
      top: 0,
    },
  };
  /*   function InputStiffnessChange(e) {
    const NewStiffnessValue = e.target.value;
    setStiffness(NewStiffnessValue);
    console.log(NewStiffnessValue);
  }
  function InputDampingChange(e) {
    const NewDampingValue = e.target.value;
    setDamping(NewDampingValue);
    console.log(NewDampingValue);
  } */

  const TransitionStyle = {
    type: "spring",
    stiffness: Stiffness,
    damping: Damping,
    // duration: 5,
    velocity: Velocity,
  };

  const ImgBgVariants = {
    ImgBgAnimationOne: {
      scale: 1,
    },
    ImgBgAnimationTwo: {
      scale: 0.9,
      filter: "blur(4px)",
    },
  };
  const BackBgVariants = {
    BackBgAnimationOne: {},
    BackBgAnimationTwo: {
      filter: "blur(4px)",
    },
  };
  const ClickFunctionBundle = () => {
    cycleAnimation();
    CycleNoteBgAnimation();
    CycleImgBgAnimation();
    CycleBackBgAnimation();
    cycleDrag();
    cycleTap();
  };

  return (
    <div>
      <div
        className="SetBtn"
        onClick={() => UPcycleAnimation()}
        style={SetBtnStyle}
      />
      <div
        className="SetWindowAll"
        style={{
          zIndex: 10,
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          display: "flex",
          top: 0,
          position: "relative",
          justifyContent: "center",
        }}
      >
        <div
          className="DeskQuitMask"
          style={{
            display: "grid",
            justifyContent: "center",
            width: 375,
            height: 812,
            overflow: "hidden",
            position: "absolute",
          }}
        >
          <div>
            <motion.div
              className="SetWindow"
              style={SetWindowStyle}
              variants={SetWindowVariants}
              animate={SetWindowAnimation}
            >
              <motion.img
                className="CloseBtn"
                onClick={() => UPcycleAnimation()}
                src={Close}
                alt=""
                style={{
                  width: 20,
                  height: 20,
                  right: 20,
                  top: 18,
                  position: "absolute",
                }}
              />
              <div className="SetText">
                <div
                  className="DefaultSet"
                  style={{
                    width: 220,
                    height: "auto",
                    fontSize: 14,
                    marginTop: 18,
                  }}
                >
                  <div
                    className="ImportSliderInput"
                    style={{
                      position: "absolute",
                      top: 300,
                      zIndex: 10000,
                    }}
                  >
                    {/*<SliderInput /> 开始还原*/}

                    {/*       //上一步还原结束 */}
                  </div>

                  <h6>Damping 阻尼系数设置</h6>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: 6,
                    }}
                  >
                    (默认值为20，如果设置为0，弹力将无限振荡)
                  </p>
                  {/*         <input
                    className="in"
                    type="text"
                    value={Damping}
                    onChange={InputDampingChange}
                    style={{
                      margin: 0,
                      height: 30,
                      width: 220,
                      borderRadius: 6,
                    }}
                  /> */}
                  <Slider
                    min={5}
                    max={50}
                    onChange={setDamping}
                    value={Damping}
                    step={0.1}
                  />
                  <InputNumber
                    min={5}
                    max={50}
                    style={{
                      margin: 0,
                      height: 30,
                      width: 220,
                      borderRadius: 6,
                    }}
                    step={0.1}
                    onChange={setDamping}
                    value={Damping}
                  />
                </div>

                <div
                  className="DefaultSet"
                  style={{
                    width: 220,
                    height: "auto",
                    fontSize: 14,
                    marginTop: 18,
                  }}
                >
                  <h6>Stiffness 刚度设置</h6>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: 6,
                    }}
                  >
                    (默认值为100，更高的值将使运动更突然)
                  </p>
                  {/*        <input
                    className="in"
                    type="text"
                    value={Stiffness}
                    onChange={InputStiffnessChange}
                    style={{
                      margin: 0,
                      height: 30,
                      width: 220,
                      borderRadius: 6,
                    }}
                  /> */}
                  <Slider
                    min={0}
                    max={200}
                    onChange={setStiffness}
                    value={Stiffness}
                    step={1}
                  />
                  <InputNumber
                    min={0}
                    max={200}
                    style={{
                      margin: 0,
                      height: 30,
                      width: 220,
                      borderRadius: 6,
                    }}
                    step={1}
                    onChange={setStiffness}
                    value={Stiffness}
                  />
                </div>
                <div
                  className="DefaultSet"
                  style={{
                    width: 220,
                    height: "auto",
                    fontSize: 14,
                    marginTop: 18,
                  }}
                >
                  <h6>Velocity 初速度(谨慎选择)</h6>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: 6,
                    }}
                  ></p>

                  <Slider
                    min={0}
                    max={10}
                    onChange={setVelocity}
                    value={Velocity}
                    step={1}
                  />
                  <InputNumber
                    min={0}
                    max={10}
                    style={{
                      margin: 0,
                      height: 30,
                      width: 220,
                      borderRadius: 6,
                    }}
                    step={1}
                    onChange={setVelocity}
                    value={Velocity}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="AppWindow"
            style={{
              width: 148,
              height: 148,
              x: 195,
              top: 62,
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
              color: "#415fff",
              opacity: 1,
              backgroundColor: "#FFFFFF",
              borderRadius: 14,
              position: "absolute",
              zIndex: 0,
              overflow: "hidden",
              backgroundRepeat: "no-repeat",
              //   backgroundImage: null,
              y,
              scale,
            }}
            whileTap={TapApp}
            drag={DragApp}
            variants={AppWindowVariants}
            animate={AppWindowAnimation}
            transition={TransitionStyle}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: -0 }}
            dragElastic={0.25}
            onClick={() =>
              cycleAnimation() &
              CycleNoteBgAnimation() &
              CycleImgBgAnimation() &
              CycleBackBgAnimation() &
              cycleDrag() &
              cycleTap()
            }
            onClick={() => ClickFunctionBundle()}
            onDragEnd={function (event, info) {
              if (info.point.y <= 260) {
                ClickFunctionBundle();
              } //else if (info.point.y >= 260) {
              //console.log(info.point.y);
              // }
              console.log(info.point.y);
            }}
          >
            <motion.div
              variants={AppNoteBgVariants}
              animate={AppNoteBgAnimation}
              transition={TransitionStyle}
              style={AppNoteBgStyle}
            />
          </motion.div>

          <motion.div
            layout
            className="BgImg"
            variants={ImgBgVariants}
            animate={ImgBgAnimation}
            transition={TransitionStyle}
            //transition={{ duration: 0.5 }}
            //  transition={{type:'spring', duration: 20 }}
            style={{
              backgroundImage: `url(${DeskFrontBg})`,
              width: 375,
              height: 738,
              top: 60,
              opacity: 1,
              zIndex: -1,
              scale: 1,
              position: "absolute",
            }}
          />
          <motion.div
            className="BgBack"
            variants={BackBgVariants}
            animate={BackBgAnimation}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url(${DeskBackBg})`,
              width: 375,
              height: 812,
              top: 0,
              zIndex: -2,
              scale: 1.05,
              position: "absolute",
            }}
          />
          <div
            className="BgBlack"
            style={{
              backgroundColor: "#202020",
              width: 375,
              height: 812,
              top: 0,
              zIndex: -10,
              position: "absolute",
            }}
          />
        </div>
      </div>
    </div>
  );
}
