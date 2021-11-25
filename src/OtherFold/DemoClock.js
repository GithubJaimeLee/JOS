import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useCycle } from "framer-motion";
import { Slider, InputNumber, Input, Switch, Tabs } from "antd";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import Set from "../Icon/Set.png";
import Close from "../Icon/Close.png";
import ClockBg1 from "../Img/ClockBg1.png";
import ClockBg2 from "../Img/ClockBg2.png";
import ClockBg3 from "../Img/ClockBg3.png";
import ClockBg4 from "../Img/ClockBg4.png";
import "../App.css";
import "../css/Component.css";
import StopWatch from "../Component/StopWatch";
import SwitchBtn from "../Component/Switch";
import Clock from "../Component/Clock/Clock";
import Time from "../Component/Time";
import ClockSet from "../Img/ClockSet.png";
import ClockSet2 from "../Img/ClockSet2.png";
import TimerG from "../Icon/timer.gif";
import ClockG from "../Icon/clock.gif";
import WorldG from "../Icon/world.gif";
import CounterG from "../Icon/counter.gif";
import TimerP from "../Icon/timer.png";
import ClockP from "../Icon/clock.png";
import WorldP from "../Icon/world.png";
import CounterP from "../Icon/counter.png";

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
  zIndex: 10,
  y: 780,
};

const SetWindowVariants = {
  UPanimationOne: {
    y: 780,
  },
  UPanimationTwo: {
    y: 0,
  },
};

const OtherMotion = () => {
  /*  const y = useMotionValue(0);
  const rotate = useTransform(y, [0, 100], [180, 0]);
  const top = useTransform(y, [0, 100], [70, 170]); */
  const [Damping, setDamping] = useState(20);
  const [Stiffness, setStiffness] = useState(100);
  const [BounceDamping, setBounceDamping] = useState(20);
  const [BounceStiffness, setBounceStiffness] = useState(100);
  const [Velocity, setVelocity] = useState(1);
  const [TimeConstant, setTimeConstant] = useState(700);
  const [Mass, setMass] = useState(1);
  const [Drag, setDrag] = useState(false);
  const [Opacity, setOpacity] = useState(1);
  const [Scale, setScale] = useState(1);
  const [Rotate, setRotate] = useState("0");
  const [BorderRadius, setBorderRadius] = useState("12");
  const [Color, setColor] = useState("415FFF");
  const [Yaxis, setYaxis] = useState(0);
  const [Xaxis, setXaxis] = useState(0);

  const [TimerVar, setTimer] = useState(TimerG);
  const [ClockVar, setClock] = useState(ClockG);
  const [WorldVar, setWorld] = useState(WorldG);
  const [CounterVar, setCounter] = useState(CounterG);

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
      <br /> layout(布局动画)
      <br /> useSpring(曲线监测)
      <br /> useVelocity(速度监测)
    </p>
  );

  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  function onChange(checked) {
    setDrag(checked);
    console.log(checked);
  }

  const TransitionStyle = {
    type: "spring",
    restSpeed: 2,
    stiffness: Stiffness,
    damping: Damping,
    bounceDamping: BounceDamping,
    bounceStiffness: BounceStiffness,
    mass: Mass,
  };

  const [SetAnimation1, Setcyc1] = useCycle(
    "SetAnimationOne",
    "SetAnimationTwo"
  );
  const [SetAnimation2, Setcyc2] = useCycle(
    "SetAnimationOne",
    "SetAnimationTwo"
  );
  const [SetAnimation3, Setcyc3] = useCycle(
    "SetAnimationOne",
    "SetAnimationTwo"
  );
  const [SetAnimation4, Setcyc4] = useCycle(
    "SetAnimationOne",
    "SetAnimationTwo"
  );

  const SetVariants = {
    SetAnimationOne: {
      scale: 0,
    },
    SetAnimationTwo: {
      scale: 1,
    },
  };

  const [SetWindowAnimation, UPcycleAnimation] = useCycle(
    "UPanimationOne",
    "UPanimationTwo"
  );

  const [CardAnimation, Cardcycle] = useCycle(
    "CardAnimationOne",
    "CardAnimationTwo"
  );

  const CardVariants = {
    CardAnimationOne: {
      color: "#CDCDCD",
      boxShadow: "none",
    },
    CardAnimationTwo: {
      color: "#000",
      boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.03)",
    },
  };
  const PVariants = {
    CardAnimationOne: {
      color: "#CDCDCD",
      boxShadow: "none",
    },
    CardAnimationTwo: {
      color: "#8F8F8F",
    },
  };
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
  const date = new Date().toLocaleDateString();
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
        {/*        <div
          className="SetBtn"
          onClick={() => UPcycleAnimation()}
          style={SetBtnStyle}
        /> */}
        <Tabs
          id="Clock"
          defaultActiveKey="1"
          style={{
            zIndex: 1,
            width: 360,
            position: "absolute",
          }}
          onChange={callback}
        >
          <TabPane tab="闹钟" key="1" id="Clock1">
            <img
              src={ClockVar}
              style={{
                position: "absolute",
                bottom: 26,
                width: 40,
                left: 26,
              }}
              alt=""
            />
            <div
              onClick={Setcyc1}
              className="SetBtn"
              style={{
                width: 60,
                height: 60,
                position: "absolute",
                zIndex: 20000,
                backgroundColor: "red",
                borderRadius: 16,
                top: 25,
                right: 10,
                opacity: 0,
              }}
            />
            <motion.div
              className="ClockSet"
              style={{
                backgroundImage: `url(${ClockSet2})`,
                width: 131,
                height: 115,
                position: "absolute",
                zIndex: 1,
                boxShadow: "0px 0px 6px 6px rgba(0,0,0,0.04)",
                borderRadius: 16,
                top: 80,
                scale: 0,
                right: 30,
                transformOrigin: "131px 0px",
              }}
              transition={{
                left: { type: "tween" },
                top: { type: "tween" },
                scale: { type: "spring", damping: 13 },
              }}
              variants={SetVariants}
              animate={SetAnimation1}
            />
            <div
              style={{
                position: "absolute",
                top: 130,
                right: 20,
                width: 360,
                left: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                className="ClockCard"
                style={{
                  position: "absolute",
                  width: 340,
                  height: 110,
                  borderRadius: 16,
                  backgroundColor: "#FFFFFF",
                  opacity: 1,
                  color: "#CDCDCD",
                  boxShadow: "none",
                }}
                variants={CardVariants}
                animate={CardAnimation}
              >
                <div onClick={Cardcycle}>
                  <SwitchBtn />
                </div>
                <p
                  style={{
                    position: "absolute",
                    fontSize: 36,
                    top: 6,
                    left: 16,
                    fontFamily: "math",
                    fontWeight: "bold",
                  }}
                >
                  08:30
                </p>
                <motion.p
                  style={{
                    position: "absolute",
                    fontSize: 15,
                    left: 16,
                    top: 60,
                  }}
                  variants={PVariants}
                  animate={CardAnimation}
                >
                  周一 周二 周三 周四 周五
                </motion.p>
              </motion.div>
            </div>
            <div
              style={{
                width: 360,
                height: 800,
                backgroundImage: `url(${ClockBg1})`,
              }}
            ></div>
          </TabPane>
          <TabPane tab="世界时钟" key="2" id="Clock2">
            <img
              src={WorldVar}
              style={{
                position: "absolute",
                bottom: 26,
                width: 40,
                left: 116,
              }}
              alt=""
            />
            <div
              onClick={Setcyc2}
              className="SetBtn"
              style={{
                width: 60,
                height: 60,
                position: "absolute",
                zIndex: 20000,
                backgroundColor: "red",
                borderRadius: 16,
                top: 25,
                right: 10,
                opacity: 0,
              }}
            />
            <motion.div
              className="ClockSet"
              style={{
                backgroundImage: `url(${ClockSet})`,
                width: 131,
                height: 66,
                position: "absolute",
                zIndex: 1,
                boxShadow: "0px 0px 6px 6px rgba(0,0,0,0.04)",
                borderRadius: 16,
                top: 80,
                scale: 0,
                right: 30,
                transformOrigin: "131px 0px",
              }}
              transition={{
                left: { type: "tween" },
                top: { type: "tween" },
                scale: { type: "spring", damping: 13 },
              }}
              variants={SetVariants}
              animate={SetAnimation2}
            />

            <div
              style={{
                position: "absolute",
                display: "flex",
                width: 360,
                top: 126,
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 302,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {/*     {date[0]}
                {date[1]}
                {date[2]}
                {date[3]}年 */}
                {date[5]}
                {date[6]}月{date[8]}
                {date[9]}日
              </div>
              <Clock digital />
            </div>
            <div
              style={{
                width: 360,
                height: 800,
                backgroundImage: `url(${ClockBg2})`,
              }}
            ></div>
          </TabPane>
          <TabPane tab="秒表" key="3" id="Clock3">
            <img
              //   onClick={() => setTimer(TimerG)}
              src={TimerVar}
              style={{
                position: "absolute",
                bottom: 26,
                width: 40,
                left: 206,
              }}
              alt=""
            />
            <div
              //    whileTap={setTimer(TimerG)}
              onClick={Setcyc3}
              className="SetBtn"
              style={{
                width: 60,
                height: 60,
                position: "absolute",
                zIndex: 20000,
                backgroundColor: "red",
                borderRadius: 16,
                top: 25,
                right: 10,
                opacity: 0,
              }}
            />
            <motion.div
              className="ClockSet"
              style={{
                backgroundImage: `url(${ClockSet})`,
                width: 131,
                height: 66,
                position: "absolute",
                zIndex: 1,
                boxShadow: "0px 0px 6px 6px rgba(0,0,0,0.04)",
                borderRadius: 16,
                top: 80,
                scale: 0,
                right: 30,
                transformOrigin: "131px 0px",
              }}
              transition={{
                left: { type: "tween" },
                top: { type: "tween" },
                scale: { type: "spring", damping: 13 },
              }}
              variants={SetVariants}
              animate={SetAnimation3}
            />
            <StopWatch />
            <div
              style={{
                width: 360,
                height: 800,
                backgroundImage: `url(${ClockBg3})`,
              }}
            ></div>
          </TabPane>

          <TabPane
            onClick={() => setCounter(CounterG)}
            tab="计时器"
            key="4"
            id="Clock4"
          >
            <div
              onClick={Setcyc4}
              className="SetBtn"
              style={{
                width: 60,
                height: 60,
                position: "absolute",
                zIndex: 20000,
                backgroundColor: "red",
                borderRadius: 16,
                top: 25,
                right: 10,
                opacity: 0,
              }}
            />
            <motion.div
              className="ClockSet"
              style={{
                backgroundImage: `url(${ClockSet2})`,
                width: 131,
                height: 115,
                position: "absolute",
                zIndex: 10,
                boxShadow: "0px 0px 6px 6px rgba(0,0,0,0.04)",
                borderRadius: 16,
                top: 80,
                scale: 0,
                right: 30,
                transformOrigin: "131px 0px",
              }}
              transition={{
                left: { type: "tween" },
                top: { type: "tween" },
                scale: { type: "spring", damping: 13 },
              }}
              variants={SetVariants}
              animate={SetAnimation4}
            />
            <img
              src={CounterVar}
              style={{
                //    backgroundImage: `url(${CounterVar})`,
                position: "absolute",
                bottom: 26,
                width: 40,
                left: 293,
              }}
              alt=""
            />
            <Time />
            <div
              style={{
                width: 360,
                height: 800,
                backgroundImage: `url(${ClockBg4})`,
              }}
            ></div>
          </TabPane>
        </Tabs>

        <div
          className="ThisBackground"
          style={{
            width: 360,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            height: 800,
            overflow: "scroll",
            backgroundColor: "#E6ECF4",
            overflow: "hidden",
            top: 0,
          }}
        >
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
                width: 16,
                height: 16,
                right: 20,
                top: 16,
                zIndex: 10,
                position: "absolute",
              }}
            />

            <div className="SetText">
              <Tabs
                defaultActiveKey="1"
                style={{
                  width: 300,
                }}
                onChange={callback}
              >
                <TabPane tab="基本参数" key="1">
                  <div
                    className="SwitchInput"
                    style={
                      {
                        // display: "none",
                      }
                    }
                  ></div>
                </TabPane>
                <TabPane tab="更多参数" key="2"></TabPane>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default OtherMotion;
