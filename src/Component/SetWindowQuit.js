import React, { useState } from "react";
import { motion, useCycle, useMotionValue, useTransform } from "framer-motion";
import WSet from "../Icon/Set.png";
import NoteAndroid from "../Img/NoteAndroid.png";
import NoteBg from "../Img/NoteBg.png";
import Background from "../Img/NoteAndroidDesk.png";
import "../Component/Component.css";
import Close from "../Icon/Close.png";
import DeskBackBg from "../Img/DeskBackBg.png";
import DeskFrontBg from "../Img/DeskFrontBg.png";

const NoteBgStyle = {
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

const NoteBgVariants = {
  /*  NoteBgAnimationOne: {
    y: -100,
    x: -100,
    scale: 2,
    opacity: 0,
  },
  NoteBgAnimationTwo: {
    opacity: [0.1, 0.1, 1],
    y: -355,
    x: -300,
    scale: 0.2,
  }, */
  NoteBgAnimationOne: {
    opacity: 1,
    y: -355,
    x: -300,
    scale: 0.2,

    // scale: 0.2,
  },
  NoteBgAnimationTwo: {
    opacity: [1, 0, 0, 0, 0],
    y: -100,
    x: -100,
    scale: 1,
  },
};

const UPBoxStyle = {
  position: "relative",
  top: 400,
  width: 350,
  height: 280,
  borderRadius: 12,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
  zIndex: 1,
  y: 500,
};

const UPBoxVariants = {
  UPanimationOne: {
    y: 500,
    zIndex: 1,
  },
  UPanimationTwo: {
    y: 10,
    zIndex: 1,
  },
};

const SetBtnStyle = {
  position: "absolute",
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
    "animationOne",
    "animationTwo"
  );
  const [UPBoxAnimation, UPcycleAnimation] = useCycle(
    "UPanimationOne",
    "UPanimationTwo"
  );
  const [NoteBgAnimation, CycleNoteBgAnimation] = useCycle(
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

  const [DragBox, cycleDrag] = useCycle(false, true);
  const [TapBox, cycleTap] = useCycle({ scale: 0.9 }, false);
  const [Stiffness, setStiffness] = useState("100");
  const [Damping, setDamping] = useState("20");

  const AppWindowVariants = {
    animationOne: {
      x: 195,
      top: 62,
      width: 148,
      height: 148,
      backgroundImage: null,
    },
    animationTwo: {
      backgroundImage: `url(${NoteAndroid})`,
      width: 375,
      height: 812,
      scale: 1.02,
      backgroundSize: "375px 812px",
      x: 0,
      top: 0,
    },
  };
  function HandleStiffnessChange(e) {
    const newValue = e.target.value;
    setStiffness(newValue);
    console.log(newValue);
  }
  function HandleDampingChange(e) {
    const newValue = e.target.value;
    setDamping(newValue);
    console.log(newValue);
  }

  const TSstyle = {
    type: "spring",
    restSpeed: 2,
    stiffness: Stiffness,
    damping: Damping,
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
  const FourToOne = () => {
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
              style={UPBoxStyle}
              variants={UPBoxVariants}
              animate={UPBoxAnimation}
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
                  top: 20,
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
                    marginTop: 20,
                  }}
                >
                  <h6>Damping 阻尼系数设置</h6>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: 6,
                    }}
                  >
                    (默认值为20，如果设置为0，弹力将无限振荡)
                  </p>
                  <input
                    className="in"
                    type="text"
                    value={Damping}
                    onChange={HandleDampingChange}
                    style={{
                      margin: 0,
                      height: 30,
                      width: 220,
                      borderRadius: 6,
                    }}
                  />
                </div>

                <div
                  className="DefaultSet"
                  style={{
                    width: 220,
                    height: "auto",
                    fontSize: 14,
                    marginTop: 20,
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
                  <input
                    className="in"
                    type="text"
                    value={Stiffness}
                    onChange={HandleStiffnessChange}
                    style={{
                      margin: 0,
                      height: 30,
                      width: 220,
                      borderRadius: 6,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="AppWindow"
            whileTap={{ scale: 0.8 }}
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
              backgroundImage: null,
              y,
              scale,
            }}
            whileTap={TapBox}
            drag={DragBox}
            variants={AppWindowVariants}
            animate={AppWindowAnimation}
            transition={TSstyle}
            drag={DragBox}
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
            //  onClick={() => cycleAnimation() & CycleNoteBgAnimation() & CycleImgBgAnimation() &cycleDrag()}
            //  onDragStart ={ }
            onDragEnd={function (event, info) {
              if (info.point.y < 300) {
                FourToOne();
              }
              // else {
              //     cycleAnimation("animationOne");
              //      }
            }}
          >
            <motion.div
              variants={NoteBgVariants}
              animate={NoteBgAnimation}
              transition={TSstyle}
              style={NoteBgStyle}
            />
          </motion.div>

          <motion.div
            className="BgImg"
            // whileTap={{ scale: 0.8}}
            variants={ImgBgVariants}
            animate={ImgBgAnimation}
            transition={{ duration: 0.5 }}
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
            // whileTap={{ scale: 0.8}}
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
        </div>
      </div>
    </div>
  );
}
