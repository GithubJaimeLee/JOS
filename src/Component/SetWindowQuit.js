import React, { useState } from "react";
import { motion, useCycle, useMotionValue, useTransform } from "framer-motion";
import WSet from "../Icon/Set.png";
import NoteAndroid from "../Img/NoteAndroid.png";
import NoteBg from "../Img/NoteBg.png";
import Background from "../Img/NoteAndroidDesk.png";
import "../Component/Component.css";

/* const AppWindowStyle = {
  width: '100vw',
  height:'100vh',
  x: 0,
  top: 0,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  color: "#415fff",
  opacity: 1,
  backgroundColor: '#FFFFFF',
  borderRadius: 14,
  position: 'absolute',
  zIndex: 0,
  overflow: 'hidden',
  backgroundRepeat: 'no-repeat'
}
 */

const NoteBgStyle = {
  backgroundImage: `url(${NoteBg})`,
  width: 690,
  height: 812,
  position: "relative",
  backgroundColor: "#FFFFFF",
  borderColor: "#FFFFFF",
  y: -100,
  x: -100,
  scale: 2,
  opacity: 0,
  zIndex: 100,
};

const NoteBgVariants = {
  NoteBgAnimationOne: {
    y: -100,
    x: -100,
    scale: 2,
    //opacity: [0.1, 0],
    opacity: 0,
  },
  NoteBgAnimationTwo: {
    opacity: [0.1, 0.1, 1],
    // opacity: [0.1, 0.3, 1],
    y: -355,
    x: -300,
    scale: 0.2,
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
  zindex: 1,
  y: 500,
};

const UPBoxVariants = {
  UPanimationOne: {
    y: 500,
    zIndex: 1,
  },
  UPanimationTwo: {
    y: 60,
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
  const scale = useTransform(y, [0, -150], [1, 0.3]);

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
  //const [DragBox, cycleDrag] = useCycle('y', false);
  const [DragBox, cycleDrag] = useCycle(true, false);
  const [Stiffness, setStiffness] = useState("100");
  const [Damping, setDamping] = useState("20");

  const AppWindowVariants = {
    animationOne: {
      backgroundImage: `url(${NoteAndroid})`,
      width: "100vw",
      height: "100vh",
      scale: 1.01,
      backgroundSize: "100vw 100vh",
      y: 0,
    },
    animationTwo: {
      x: 82,
      y: 72,
      width: 152,
      height: 152,
      backgroundImage: null,
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

  const style = {
    type: "spring",
    restSpeed: 2,
    stiffness: Stiffness,
    damping: Damping,
  };

  const ImgBgVariants = {
    ImgBgAnimationOne: {
      scale: 1.05,
    },
    ImgBgAnimationTwo: {
      scale: 1,
    },
  };
  const FourToOne = () => {
    cycleAnimation();
    CycleNoteBgAnimation();
    CycleImgBgAnimation();
    cycleDrag();
  };

  return (
    <div>
      <div
        className="All"
        style={{
          zindex: 10,
          height: 812 - 56,
          width: "100vw",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <motion.div
            className="SetWindow"
            style={UPBoxStyle}
            variants={UPBoxVariants}
            animate={UPBoxAnimation}
          >
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

        <div
          className="SetBtn"
          onClick={() => UPcycleAnimation()}
          style={SetBtnStyle}
        ></div>

        <motion.div
          className="AppWindow"
          //whileTap={{ scale: 0.8 }}
          style={{
            width: "100vw",
            height: "100vh",
            x: 0,
            top: 0,
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
            color: "#415fff",
            opacity: 1,
            backgroundColor: "#FFFFFF",
            borderRadius: 14,
            position: "absolute",
            zIndex: 0,
            overflow: "hidden",
            backgroundRepeat: "no-repeat",
            y,
            scale,
          }}
          variants={AppWindowVariants}
          animate={AppWindowAnimation}
          transition={style}
          drag={DragBox}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: -0 }}
          dragElastic={0.25}
          onClick={() =>
            cycleAnimation() &
            CycleNoteBgAnimation() &
            CycleImgBgAnimation() &
            cycleDrag()
          }
          //  onClick={() => cycleAnimation() & CycleNoteBgAnimation() & CycleImgBgAnimation() &cycleDrag()}
          //  onDragStart ={ }
          onDragEnd={function (event, info) {
            if (info.point.y < 300) {
              FourToOne();
            }
          }}
        >
          <motion.div
            variants={NoteBgVariants}
            animate={NoteBgAnimation}
            transition={style}
            style={NoteBgStyle}
          />
        </motion.div>
        {/*       <div
          style={{

          width: '100vw',
         height: '100vh-56',
          overflow: 'hidden'
        }}
        > */}
        <motion.div
          className="BgImg"
          // whileTap={{ scale: 0.8}}
          variants={ImgBgVariants}
          animate={ImgBgAnimation}
          transition={{ duration: 0.5 }}
          //  transition={{type:'spring', duration: 20 }}
          style={{
            backgroundImage: `url(${Background})`,
            width: 375,
            height: 812,
            top: 0,
            opacity: 1,
            zIndex: "-1",
            scale: 1.05,
            position: "absolute",
          }}
        />
        {/*      </div> */}
      </div>
    </div>
  );
}
