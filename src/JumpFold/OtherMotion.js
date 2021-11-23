import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useCycle } from "framer-motion";
import { Slider, InputNumber, Input, Switch, Tabs } from "antd";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import Set from "../Icon/Set.png";
import Close from "../Icon/Close.png";
import "../App.css";

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

const JumpMotion = () => {
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
    // restSpeed: 2,
    // stiffness: Stiffness,
    damping: 36,
    //  bounceDamping: BounceDamping,
    //   bounceStiffness: BounceStiffness,
    //   mass: Mass,
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
          className="ThisBackground"
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
            drag={true}
            dragElastic={0.1}
            dragConstraints={{ left: -80, right: 80, top: -100, bottom: 380 }}
            animate={{
              y: Yaxis,
              x: Xaxis,
              //  scale: Scale,
              borderRadius: BorderRadius,
            }}
            style={{
              opacity: Opacity,
              rotate: Rotate,
              top: 200,
              width: 100,
              height: 100,
              backgroundColor: `#${Color}`,
              borderRadius: 12,
              zIndex: 2,
              position: "absolute",
            }}
            transition={TransitionStyle}
            //whileTap={{ scale: Scale * 0.6 }}
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
                  >
                    {/*            <div
                      className="DefaultSetDamping"
                      style={{
                        width: 300,
                        height: "auto",
                        fontSize: 14,
                        marginTop: 12,
                      }}
                    >
                      <h6>Damping 阻尼系数</h6>
                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                        }}
                      >
                        <Slider
                          min={0}
                          max={50}
                          onChange={setDamping}
                          value={Damping}
                          step={0.1}
                          style={{
                            width: 220,
                          }}
                        />
                        <InputNumber
                          min={0}
                          max={50}
                          style={{
                            margin: 0,
                            height: 30,
                            width: 70,
                            top: 0,
                            borderRadius: 6,
                          }}
                          step={0.1}
                          onChange={setDamping}
                          value={Damping}
                        />
                      </div>
                    </div>
                    <div
                      className="DefaultSetStiffness"
                      style={{
                        width: 300,
                        height: "auto",
                        fontSize: 14,
                        marginTop: 12,
                      }}
                    >
                      <h6>Stiffness 刚度</h6>

                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                        }}
                      >
                        <Slider
                          min={0}
                          max={100}
                          onChange={setStiffness}
                          value={Stiffness}
                          step={0.1}
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
                          step={0.1}
                          onChange={setStiffness}
                          value={Stiffness}
                        />
                      </div>
                    </div>
                    <div
                      className="DefaultSetMass"
                      style={{
                        width: 300,
                        height: "auto",
                        fontSize: 14,
                        marginTop: 12,
                      }}
                    >
                      <h6>Mass 缓动</h6>
                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                        }}
                      >
                        <Slider
                          min={1}
                          max={50}
                          onChange={setMass}
                          value={Mass}
                          step={0.1}
                          style={{
                            width: 220,
                          }}
                        />
                        <InputNumber
                          min={1}
                          max={50}
                          style={{
                            margin: 0,
                            height: 30,
                            width: 70,
                            borderRadius: 6,
                          }}
                          step={0.1}
                          onChange={setMass}
                          value={Mass}
                        />
                      </div>
                    </div> */}
                  </div>

                  <div
                    className="DefaultSetOpacity"
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
                          width: 80,
                          borderRadius: 6,
                        }}
                        step={0.1}
                        onChange={setOpacity}
                        value={Opacity}
                      />
                    </div>
                  </div>
                  {/*  <div
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
                        max={2.5}
                        onChange={setScale}
                        value={Scale}
                        step={0.1}
                        style={{
                          width: 220,
                        }}
                      />
                      <InputNumber
                        min={0}
                        max={2.5}
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
                  </div> */}
                  <div
                    className="DefaultSetRotate"
                    style={{
                      width: 300,
                      height: "auto",
                      fontSize: 14,
                      marginTop: 12,
                    }}
                  >
                    <h6>Rotate 旋转</h6>
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                      }}
                    >
                      <Slider
                        min={-360}
                        max={360}
                        onChange={setRotate}
                        value={Rotate}
                        step={1}
                        style={{
                          width: 220,
                        }}
                      />
                      <InputNumber
                        min={-360}
                        max={360}
                        style={{
                          margin: 0,
                          height: 30,
                          width: 80,
                          borderRadius: 6,
                        }}
                        step={1}
                        onChange={setRotate}
                        value={Rotate}
                      />
                    </div>
                  </div>
                  <div
                    className="Btns"
                    style={{
                      display: "flex",
                      position: "relative",
                    }}
                  >
                    <div
                      className="DefaultSetColor"
                      style={{
                        width: 230,
                        height: "auto",
                        fontSize: 14,
                        marginTop: 12,
                      }}
                    >
                      <h6
                        style={{
                          fontSize: 15,
                        }}
                      >
                        Color
                      </h6>
                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                          fontSize: 18,
                        }}
                      >
                        #
                        <Input
                          style={{
                            margin: 0,
                            height: 30,
                            width: 80,
                            borderRadius: 6,
                          }}
                          onChange={(e) => setColor(e.target.value)}
                          value={Color}
                        />
                      </div>
                    </div>
                    {/*            <div
                      className="DefaultSetDrag"
                      style={{
                        width: 80,
                        height: "auto",

                        marginTop: 12,
                      }}
                    >
                      <h6
                        style={{
                          fontSize: 15,
                        }}
                      >
                        拖拽 Drag
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
                          //   defaultChecked
                          onChange={onChange}
                        />
                      </div>
                    </div> */}
                  </div>
                  <div
                    className="DefaultSetXaxis"
                    style={{
                      width: 300,
                      height: "auto",
                      fontSize: 14,
                      marginTop: 12,
                    }}
                  >
                    <h6>X 轴</h6>
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                      }}
                    >
                      <Slider
                        min={-100}
                        max={100}
                        onChange={setXaxis}
                        value={Xaxis}
                        step={0.1}
                        style={{
                          width: 220,
                        }}
                      />
                      <InputNumber
                        min={-100}
                        max={100}
                        style={{
                          margin: 0,
                          height: 30,
                          width: 80,
                          borderRadius: 6,
                        }}
                        step={0.1}
                        onChange={setXaxis}
                        value={Xaxis}
                      />
                    </div>
                  </div>
                  <div
                    className="DefaultSetYaxis"
                    style={{
                      width: 300,
                      height: "auto",
                      fontSize: 14,
                      marginTop: 12,
                    }}
                  >
                    <h6>Y 轴</h6>
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                      }}
                    >
                      <Slider
                        min={-100}
                        max={100}
                        onChange={setYaxis}
                        value={Yaxis}
                        step={0.1}
                        style={{
                          width: 220,
                        }}
                      />
                      <InputNumber
                        min={-100}
                        max={100}
                        style={{
                          margin: 0,
                          height: 30,
                          width: 80,
                          borderRadius: 6,
                        }}
                        step={0.1}
                        onChange={setYaxis}
                        value={Yaxis}
                      />
                    </div>
                  </div>
                </TabPane>
                {/*    <TabPane tab="更多参数" key="2">
                  <div
                    className="DefaultSetBounceStiffness"
                    style={{
                      width: 300,
                      height: "auto",
                      fontSize: 14,
                      marginTop: 12,
                    }}
                  >
                    <h6>Bounce Stiffness (刚度弹力)</h6>

                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                      }}
                    >
                      <Slider
                        min={0}
                        max={100}
                        onChange={setBounceStiffness}
                        value={BounceStiffness}
                        step={0.1}
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
                        step={0.1}
                        onChange={setBounceStiffness}
                        value={BounceStiffness}
                      />
                    </div>
                  </div>
                  <div
                    className="DefaultSetBounceDamping"
                    style={{
                      width: 300,
                      height: "auto",
                      fontSize: 14,
                      marginTop: 12,
                    }}
                  >
                    <h6>Bounce Damping (阻尼弹力)</h6>

                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                      }}
                    >
                      <Slider
                        min={0}
                        max={100}
                        onChange={setBounceDamping}
                        value={BounceDamping}
                        step={0.1}
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
                        step={0.1}
                        onChange={setBounceDamping}
                        value={BounceDamping}
                      />
                    </div>
                  </div>
                  <div
                    className="DefaultSetVelocity"
                    style={{
                      width: 300,
                      height: "auto",
                      fontSize: 14,
                      marginTop: 12,
                    }}
                  >
                    <h6>Velocity 初始速度</h6>

                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                      }}
                    >
                      <Slider
                        min={1}
                        max={10}
                        onChange={setVelocity}
                        value={Velocity}
                        step={0.1}
                        style={{
                          width: 220,
                        }}
                      />
                      <InputNumber
                        min={1}
                        max={10}
                        style={{
                          margin: 0,
                          height: 30,
                          width: 70,
                          borderRadius: 6,
                        }}
                        step={0.1}
                        onChange={setVelocity}
                        value={Velocity}
                      />
                    </div>
                  </div>
                  <div
                    className="DefaultSetBorderRadius"
                    style={{
                      width: 300,
                      height: "auto",
                      fontSize: 14,
                      marginTop: 12,
                    }}
                  >
                    <h6>BorderRadius 圆角</h6>

                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                      }}
                    >
                      <Slider
                        min={0}
                        max={50}
                        onChange={setBorderRadius}
                        value={BorderRadius}
                        step={1}
                        style={{
                          width: 220,
                        }}
                      />
                      <InputNumber
                        min={0}
                        max={50}
                        style={{
                          margin: 0,
                          height: 30,
                          width: 70,
                          borderRadius: 6,
                        }}
                        step={1}
                        onChange={setBorderRadius}
                        value={BorderRadius}
                      />
                    </div>
                  </div>

                  {/*      <div
                    className="DefaultSetTimeConstant"
                    style={{
                      width: 300,
                      height: "auto",
                      fontSize: 14,
                      marginTop: 12,
                    }}
                  >
                    <h6>TimeConstant 持续时间</h6>

                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                      }}
                    >
                      <Slider
                        min={100}
                        max={2000}
                        onChange={setTimeConstant}
                        value={TimeConstant}
                        step={1}
                        style={{
                          width: 220,
                        }}
                      />
                      <InputNumber
                        min={100}
                        max={2000}
                        style={{
                          margin: 0,
                          height: 30,
                          width: 70,
                          borderRadius: 6,
                        }}
                        step={1}
                        onChange={setTimeConstant}
                        value={TimeConstant}
                      />
                    </div>
                  </div> 
                </TabPane> */}
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default JumpMotion;
