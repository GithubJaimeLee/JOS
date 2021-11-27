import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";
import { Tabs } from "antd";
import Lottie from "react-lottie-player";
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

import test1 from "../Icon/svg/naozhogn.json";
import test2 from "../Icon/svg/shijieshizhong.json";
import test3 from "../Icon/svg/miaobiao.json";
import test4 from "../Icon/svg/jishiqi.json";
import Rclock from "../Icon/Rclock.png";
import test5 from "../Icon/svg/naozhogn-off.json";
import test6 from "../Icon/svg/shijieshizhong-off.json";
import test7 from "../Icon/svg/miaobiao-off.json";
import test8 from "../Icon/svg/jishiqi-off.json";

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

  const [TimerVar, setTimer] = useState(TimerP);
  const [ClockVar, setClock] = useState(ClockP);
  const [WorldVar, setWorld] = useState(WorldP);
  const [CounterVar, setCounter] = useState(CounterP);

  //const [Play1, setPlay1] = useCycle(true, false, false, false, false,);

  const [Play1, setPlay1] = useState(false);

  const [Play2, setPlay2] = useState(false);

  const [Play3, setPlay3] = useState(false);

  const [Play4, setPlay4] = useState(false);

  const [O1, setO1] = useState(1);

  const [O2, setO2] = useState(0);

  const [O3, setO3] = useState(0);

  const [O4, setO4] = useState(0);

  const [D1, setD1] = useState("block");

  const [D2, setD2] = useState("none");

  const [D3, setD3] = useState("none");

  const [D4, setD4] = useState("none");

  const [Z1, setZ1] = useState(1000);

  const [Z2, setZ2] = useState(100);

  const [Z3, setZ3] = useState(100);

  const [Z4, setZ4] = useState(100);

  const [C1, setC1] = useState("#FA5F6E");

  const [C2, setC2] = useState("#B8B8B8");

  const [C3, setC3] = useState("#B8B8B8");

  const [C4, setC4] = useState("#B8B8B8");

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
      opacity: 0,
    },
    SetAnimationTwo: {
      scale: 1,
      opacity: 1,
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
      boxShadow: "0px 0px 18px 6px rgba(0,0,0,0.05)",
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
  /* 
  const defaultOptions = {
    // animationData: { test2 },
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }; */

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
          className="PhoneScreen"
          style={{
            width: 360,
            height: 800,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: 0,
          }}
        >
          <div
            className="Footer"
            style={{
              position: "absolute",
              width: 360,
              height: 65,
              bottom: 0,
              zIndex: 100,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              onClick={() => {
                setD1("block");
                setD2("none");
                setD3("none");
                setD4("none");
                setPlay1(test1);
                setPlay2(false);
                setPlay3(false);
                setPlay4(false);
                setO1(1);
                setO2(0);
                setO3(0);
                setO4(0);
                setC1("#FA5F6E");
                setC2("#B8B8B8");
                setC3("#B8B8B8");
                setC4("#B8B8B8");
                setZ1(1000);
                setZ2(100);
                setZ3(100);
                setZ4(100);
              }}
              className="Tab1"
              style={{
                position: "relative",
                display: "grid",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Lottie
                play
                loop={1}
                segments={[0, 50]}
                //  autoplay
                animationData={Play1}
                //   stop={true}
                style={{
                  position: "absolute",
                  // position: "relative",
                  preserveAspectRatio: "xMidYMid slice",
                  width: 40,
                  height: 40,
                  opacity: 1,

                  zIndex: 100,
                }}
              />
              <img
                id="ClockIcon"
                src={ClockVar}
                style={{
                  position: "absolute",
                  pointerEvents: "auto",
                  zIndex: 99,
                  width: 40,
                }}
                alt=""
              />{" "}
              <img
                id="ClockIcon"
                src={Rclock}
                style={{
                  position: "relative",
                  pointerEvents: "auto",
                  zIndex: 99,
                  width: 40,
                  opacity: O1,
                }}
                alt=""
              />
              <div
                style={{
                  position: "relative",
                  fontSize: 9,
                  fontWeight: "bold",
                  color: C1,
                }}
              >
                闹钟
              </div>
            </div>
            <div
              onClick={() => {
                setD1("none");
                setD2("block");
                setD3("none");
                setD4("none");
                setPlay1(false);
                setPlay2(test2);
                setPlay3(false);
                setPlay4(false);
                setO1(0);
                setO2(1);
                setO3(0);
                setO4(0);
                setC1("#B8B8B8");
                setC2("#FA5F6E");
                setC3("#B8B8B8");
                setC4("#B8B8B8");
                setZ1(100);
                setZ2(1000);
                setZ3(100);
                setZ4(100);
              }}
              className="Tab2"
              style={{
                position: "relative",
                display: "grid",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Lottie
                play
                loop={1}
                segments={[0, 35]}
                // autoplay={true}
                animationData={Play2}
                //   stop={true}
                style={{
                  position: "absolute",
                  // position: "relative",,
                  preserveAspectRatio: "xMidYMid slice",
                  width: 40,
                  height: 40,
                  zIndex: 100,
                  opacity: 1,

                  zIndex: 100,
                }}
              />
              <img
                src={WorldVar}
                style={{
                  position: "relative",
                  zIndex: 90,
                  width: 40,
                }}
                alt=""
              />
              <div
                style={{
                  color: C2,
                  fontSize: 9,
                  fontWeight: "bold",
                }}
              >
                世界时钟
              </div>
            </div>
            <div
              onClick={() => {
                setD1("none");
                setD2("none");
                setD3("block");
                setD4("none");
                setPlay1(false);
                setPlay2(false);
                setPlay3(test3);
                setPlay4(false);
                setO1(0);
                setO2(0);
                setO3(1);
                setO4(0);
                setC1("#B8B8B8");
                setC2("#B8B8B8");
                setC3("#FA5F6E");
                setC4("#B8B8B8");
                setZ1(100);
                setZ2(100);
                setZ3(1000);
                setZ4(100);
              }}
              className="Tab3"
              style={{
                position: "relative",
                display: "grid",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Lottie
                play
                autoplay
                loop={1}
                segments={[0, 35]}
                // autoplay={true}
                animationData={Play3}
                //   stop={true}
                style={{
                  position: "absolute",
                  // position: "relative",
                  preserveAspectRatio: "xMidYMid slice",
                  width: 40,
                  height: 40,

                  opacity: 1,

                  zIndex: 100,
                }}
              />{" "}
              <img
                src={TimerVar}
                style={{
                  position: "relative",
                  zIndex: 99,
                  width: 40,
                }}
                alt=""
              />
              <div
                style={{
                  color: C3,
                  fontSize: 9,
                  fontWeight: "bold",
                }}
              >
                秒表
              </div>
            </div>
            <div
              onClick={() => {
                setD1("none");
                setD2("none");
                setD3("none");
                setD4("block");
                setPlay1(false);
                setPlay2(false);
                setPlay3(false);
                setPlay4(test4);
                setO1(0);
                setO2(0);
                setO3(0);
                setO4(1);
                setC1("#B8B8B8");
                setC2("#B8B8B8");
                setC3("#B8B8B8");
                setC4("#FA5F6E");
                setZ1(100);
                setZ2(100);
                setZ3(100);
                setZ4(1000);
              }}
              className="Tab4"
              style={{
                position: "relative",
                display: "grid",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Lottie
                play
                autoplay
                loop={1}
                segments={[5, 50]}
                // autoplay={true}
                animationData={Play4}
                //   stop={true}
                style={{
                  position: "absolute",
                  // position: "relative",
                  preserveAspectRatio: "xMidYMid slice",
                  width: 40,
                  opacity: 1,
                  height: 40,

                  zIndex: 100,
                }}
              >
                {/*             <div
              style={{
                width: 40,
                backgroundColor: "#FFFFFF",
                height: 40,
              }}
            ></div> */}
              </Lottie>{" "}
              <img
                //   onClick={() => setTimer(TimerG)}
                src={CounterVar}
                style={{
                  position: "relative",
                  zIndex: 99,
                  width: 40,
                }}
                alt=""
              />
              <div
                style={{
                  fontSize: 9,
                  fontWeight: "bold",
                  color: C4,
                }}
              >
                计时器
              </div>
            </div>
          </div>
        </div>
        <div
          id="Clock"
          style={{
            zIndex: 1,
            width: 360,
            height: 800,
            position: "relative",
            top: 0,
            left: 0,
          }}
          //    onClick={() => setClock(ClockG)}
        >
          <div
            className="ClockPageOne"
            style={{
              position: "absolute",
              //    display: Display1,
              opacity: O1,
              display: D1,
              top: 0,
              left: 0,
              zIndex: 10,
              width: 360,
              height: 800,
            }}
            // onClick={() => setPlay1(!Play1)}
          >
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
                scale: { type: "spring", damping: 24, stiffness: 300 },
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
                backgroundSize: "360px 800px",
              }}
            ></div>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 7,
              width: 360,
              height: 800,
              opacity: O2,

              //  display: Display2,
            }}
            className="ClockPageTwo"
          >
            <div
              onClick={Setcyc2}
              className="SetBtn"
              style={{
                width: 60,
                display: D2,
                height: 60,
                position: "absolute",
                zIndex: 200,
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
                scale: { type: "spring", damping: 24, stiffness: 300 },
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
                backgroundSize: "360px 800px",
              }}
            ></div>
          </div>
          <div
            className="ClockPageThree"
            style={{
              position: "relative",
              //display: Display3,
              display: D3,
              opacity: O3,
              top: 0,
              left: 0,
              zIndex: 8,
              width: 360,
              height: 800,
            }}
          >
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
                scale: { type: "spring", damping: 24, stiffness: 300 },
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
                backgroundSize: "360px 800px",
              }}
            ></div>
          </div>

          <div
            className="ClockPageFour"
            style={{
              position: "absolute",
              //   display: Display4,
              display: D4,
              opacity: O4,
              top: 0,
              left: 0,
              zIndex: 7,
              width: 360,
              height: 800,
            }}
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
                scale: { type: "spring", damping: 24, stiffness: 300 },
              }}
              variants={SetVariants}
              animate={SetAnimation4}
            />

            <Time />
            <div
              style={{
                width: 360,
                height: 800,
                backgroundImage: `url(${ClockBg4})`,
                backgroundSize: "360px 800px",
              }}
            ></div>
          </div>
        </div>

        <div
          className="ThisBackground"
          style={{
            width: 360,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            height: 800,
            overflow: "scroll",
            //   backgroundColor: "#fff",
            overflow: "hidden",
            zIndex: 0,
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
                zIndex: 11,
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
