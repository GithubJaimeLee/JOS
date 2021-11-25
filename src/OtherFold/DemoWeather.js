import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useCycle,
  useSpring,
} from "framer-motion";
import { Slider, InputNumber, Input, Switch, Tabs } from "antd";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import Set from "../Icon/Set.png";
import Close from "../Icon/Close.png";
import WeatherBg from "../Img/WeatherBg.png";
import "../App.css";
import "../css/Component.css";
import WeatherLine from "../Img/WeatherLine.png";
import WeatherLine2 from "../Img/WeatherLine2.png";
import O28 from "../Img/28.png";
import O26 from "../Img/26.png";
import O24 from "../Img/24.png";
import O22 from "../Img/22.png";
import O20 from "../Img/20.png";
import O18 from "../Img/18.png";
import O16 from "../Img/16.png";
import PointBg from "../Img/PointBg.png";
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

//值越大越容易拖动
const SetWindowVariants = {
  UPanimationOne: {
    y: 780,
  },
  UPanimationTwo: {
    y: 0,
  },
};

const DemoWeather = () => {
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
  const [Color, setColor] = useState("red");
  const [Yaxis, setYaxis] = useState(0);
  const [Xaxis, setXaxis] = useState(0);
  const x = useMotionValue(0);
  const xSmooth = useSpring(x, { damping: 50, stiffness: 400 });
  const Px = useTransform(
    x,
    [0, -48, -96, -144, -192, -240, -288, -336, -384, -432, -480, -525],
    [22, 22, 22, 22, 97, 97, 172, 172, 247, 247, 325, 325]
  );
  const Py = useTransform(
    x,
    [0, -48, -96, -144, -192, -240, -288, -336, -384, -432, -480, -525],
    [410, 418, 424, 436, 456, 475, 485, 485, 510, 505, 500, 480]
  );
  const PColor = useTransform(
    xSmooth,
    [0, -48, -96, -144, -192, -240, -288, -336, -384, -432, -480, -525],
    [
      "#FAA15B",
      "#F9B15F",
      "#DFBF6A",
      "#E2BF69",
      "#89D48F",
      "#89D48F",
      "#52D1AC",
      "#52D1AC",
      "#32B8C6",
      "#34B8C6",
      "#4DCEA8",
      "#4DCEA8",
    ]
  );
  const SO28 = useTransform(
    xSmooth,
    [0, -48, -96, -144, -192, -240, -288, -336, -384, -432, -480, -525],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  );
  const SO26 = useTransform(
    xSmooth,
    [0, -48, -96, -144, -192, -240, -288, -336, -384, -432, -480, -525],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  );
  const SO24 = useTransform(
    xSmooth,
    [0, -48, -96, -144, -192, -240, -288, -336, -384, -432, -480, -525],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
  );
  const SO22 = useTransform(
    xSmooth,
    [0, -48, -96, -144, -192, -240, -288, -336, -384, -432, -480, -525],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1]
  );
  const SO20 = useTransform(
    xSmooth,
    [0, -48, -96, -144, -192, -240, -288, -336, -384, -432, -480, -525],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1]
  );
  const SO18 = useTransform(
    xSmooth,
    [0, -48, -96, -144, -192, -240, -288, -336, -384, -432, -480, -525],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
  );
  const SO16 = useTransform(
    xSmooth,
    [0, -48, -96, -144, -192, -240, -288, -336, -384, -432, -480, -525],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0]
  );

  // const Pg = useTransform(x, [0, -150, -375], ["red", "500", "400"]);
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
          height: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: 0,
        }}
      >
        {/*        <div
          style={{
            width: 375,

            height: 812,
          }}
        ></div> */}
        <div
          className="SetBtn"
          onClick={() => UPcycleAnimation()}
          style={SetBtnStyle}
        />

        <div
          className="ThisBackground"
          style={{
            width: 375,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            height: 812,
            overflow: "scroll",
            backgroundColor: "#E6ECF4",
            backgroundImage: `url(${WeatherBg})`,
            overflow: "hidden",
            top: 0,
          }}
        >
          <motion.div
            className="VPoint"
            style={{
              width: 32,
              height: 32,
              borderRadius: 35,
              position: "absolute",
              zIndex: 20,
              top: Py,
              left: Px,
              //   scale: ThisScale,
              opacity: 1,
              border: "5px solid",
              backgroundColor: "#fff",
              borderColor: PColor,
              //     backgroundImage: `url(${Pbg})`,
              //   backgroundColor: PColor,
            }}
            // animate={{ backgroundColor: PColor }}
          >
            <div
              style={{
                backgroundImage: `url(${PointBg})`,
                position: "absolute",
                left: -28,
                top: -100,
                width: 75,
                height: 306,
                zIndex: -1,
                pointerEvents: "none",
              }}
            />
            <motion.img
              className="28"
              src={O28}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 22,
                height: 22,
                opacity: SO28,
                zIndex: 28,
              }}
              alt=""
            />
            <motion.img
              className="26"
              src={O26}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 22,
                height: 22,
                opacity: SO26,
                zIndex: 26,
              }}
              alt=""
            />
            <motion.img
              className="24"
              src={O24}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 22,
                height: 22,
                opacity: SO24,
                zIndex: 24,
              }}
              alt=""
            />
            <motion.img
              className="22"
              src={O22}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 22,
                height: 22,
                opacity: SO22,
                zIndex: 22,
              }}
              alt=""
            />
            <motion.img
              className="20"
              src={O20}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 22,
                height: 22,
                opacity: SO20,
                zIndex: 20,
              }}
              alt=""
            />
            <motion.img
              className="18"
              src={O18}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 22,
                height: 22,
                opacity: SO18,
                zIndex: 18,
              }}
              alt=""
            />
            <motion.img
              className="16"
              src={O16}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 22,
                height: 22,
                opacity: SO16,
                zIndex: 16,
              }}
              alt=""
            />
          </motion.div>

          <div
            className="Mask"
            style={{
              position: "absolute",
              overflow: "scroll",
              display: "flex",
              zIndex: 10,
              width: 900,
              height: 400,
              top: 412,
              left: 0,
            }}
          >
            <motion.div
              drag="x"
              className="WeatherLine"
              dragElastic={0}
              dragConstraints={{ left: -525, right: 0 }}
              style={{
                width: 900,
                height: 400,
                borderRadius: 0,
                position: "relative",
                zIndex: 2,
                top: 0,
                left: 0,
                x,

                //   backgroundColor: Color,
                backgroundImage: `url(${WeatherLine})`,
              }}
              dragTransition={{
                timeConstant: 80,
                power: 0,
                modifyTarget: (target) => Math.round(target / 75) * 75,
              }}
            />
            {/*  <motion.div
              drag="x"
              className="WeatherLine2"
              dragElastic={0}
              dragConstraints={{ left: -525, right: 0 }}
              style={{
                width: 525,
                height: 400,
                borderRadius: 0,
                position: "relative",
                zIndex: 1,
                top: 0,
                left: 0,

                x,
                backgroundColor: Color,
                backgroundImage: `url(${WeatherLine2})`,
              }}
              dragTransition={{
                timeConstant: 80,
                power: 0,
                modifyTarget: (target) => Math.round(target / 66) * 66,
              }}
            /> */}
          </div>
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

export default DemoWeather;
