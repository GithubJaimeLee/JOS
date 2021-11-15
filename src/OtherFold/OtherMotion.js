import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useCycle } from "framer-motion";
import { Slider, InputNumber } from "antd";
import MusicHead from "../Img/MusicHead.png";
import MusicBodyRecommend from "../Img/MusicBodyRecommend.png";
import MusicFooter from "../Img/MusicFooter.png";
import MusicHeaderTap from "../Img/MusicHeaderTap.png";
import Arrow from "../Icon/Arrow.png";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import Set from "../Icon/Set.png";
import Close from "../Icon/Close.png";
import "../App.css";

const UPBoxAnimation = {
  UPanimationOne: {
    y: 500,
    zIndex: 1,
  },
  UPanimationTwo: {
    y: 0,
    zIndex: 1,
  },
};

const SetBtnStyle = {
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
};

const SetWindowStyle = {
  position: "relative",
  top: 400,
  width: 350,
  height: 318,
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
    y: 0,
    zIndex: 1,
  },
};

const OtherMotion = () => {
  const y = useMotionValue(0);
  const rotate = useTransform(y, [0, 100], [180, 0]);
  const top = useTransform(y, [0, 100], [70, 170]);
  const [Damping, setDamping] = useState("20");
  const [Stiffness, setStiffness] = useState("100");

  const TransitionStyle = {
    type: "spring",
    restSpeed: 2,
    stiffness: Stiffness,
    damping: Damping,
  };

  const Info = (
    <p>
      scale(缩放)
      <br /> opacity(透明度)
      <br /> color(颜色)
      <br /> x(x轴)
      <br /> y(y轴)
      <br /> y(y轴)
      <br /> rotate(旋转)
      <br /> duration(持续时间)
      <br /> borderRadius(圆角)
      <br /> delay 延时(秒)
      <br /> delayChildren 子组件延时(秒)
      <br /> spring(拟物曲线动画)
      <br /> drag(是否可拖动)
      <br /> staggerChildren
      错开(若为0.01，第一个孩子将被延迟0秒，第二个孩子将被延迟0.01，第三个孩子将被延迟0.02，依此类推)
      <br /> when: false | "beforeChildren" | "afterChildren" |(时间顺序)
      <br /> repeat: Infinity |数字 |(循环次数)
      <br /> repeat: loop从头到尾,reverse反向循环,mirror交替循环 |(循环状态)
      <br /> repeatDelay|(循环延时)
      <br /> linear(线性匀速动画)
      <br /> tween(补间动画)
      <br /> linear:cubic bezier curve贝塞尔曲线(贝塞尔曲线)
      贝塞尔曲线子项:"ease"、"linear"、"easeIn"、"easeOut"、"easeInOut"、"circIn"、"circOut"、"circInOut"、"backIn"、"backOut"、"backInOut"、"anticipate"
      <br /> from(关键帧断点)
      <br /> times: [0.1, 0.1, 0.1, 0.1](关键帧持续时间)
      <br /> bounce(弹力)
      <br /> damping(阻尼,会覆盖bounce,duration)
      <br /> mass(缓动,会覆盖bounce,duration)
      <br /> stiffness(刚度,会覆盖bounce,duration)
      <br /> velocity(初速度)
      <br /> restSpeed(低速结束动画)
      <br /> restDelta(距离结束动画)
      <br /> inertia(惯性曲线动画，可与velocity初速度配合使用)
      <br /> modifyTarget(网格运动)
      <br /> bounceStiffness(弹力刚度)
      <br /> bounceDamping(弹力阻尼)
      <br /> power(拖拽准心准确度,值越大准确度越高)
      <br /> timeConstant(减速时间)
      <br /> transition(过度)
      <br /> transitionEnd(结束过度方式)
      <br /> useTransform(联动)
      <br /> start(开始)
      <br /> stop(停止)
      <br /> await(异步动画)
    </p>
  );

  const [SetWindowAnimation, UPcycleAnimation] = useCycle(
    "UPanimationOne",
    "UPanimationTwo"
  );

  function HandleDampingChange(e) {
    const newValue = e.target.value;
    setDamping(newValue);
    console.log(newValue);
  }
  function HandleStiffnessChange(e) {
    const newValue = e.target.value;
    setStiffness(newValue);
    console.log(newValue);
  }
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          height: 812,
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: 0,
        }}
      >
        <div
          className="SetBtn"
          onClick={() => UPcycleAnimation()}
          style={SetBtnStyle}
        />
        <div
          className="Background"
          style={{
            width: 375,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            height: 812,
            overflow: "scroll",
            backgroundColor: "#E6ECF4",
            overflow: "hidden",
            top: 0,
          }}
        >
          <motion.div
            className="Box"
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#415FFF",
              borderRadius: 12,
              zIndex: 1,
              position: "absolute",
              top: 200,
            }}
            transition={TransitionStyle}
            whileTap={{ scale: 0.1 }}
          />
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
                  <div
                    className="InputTest"
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      className="SliderInput"
                      style={{
                        width: 160,
                        height: 80,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 30,
                        height: 80,
                      }}
                      className="InputNumberBox"
                    ></div>
                  </div>
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

                <Slider
                  min={5}
                  max={50}
                  onChange={setStiffness}
                  value={Stiffness}
                  step={0.1}
                />
                <InputNumber
                  min={5}
                  max={100}
                  style={{
                    margin: 0,
                    height: 30,
                    width: 220,
                    borderRadius: 6,
                  }}
                  step={0.1}
                  onChange={setStiffness}
                  value={Stiffness}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default OtherMotion;
<div
  className="Box"
  style={{
    width: 100,
    height: 100,
    backgroundColor: "#415FFF",
    borderRadius: 12,
    zIndex: 1,
    position: "relative",
    top: 70,
  }}
></div>;
