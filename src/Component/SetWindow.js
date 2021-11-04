import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";
import WSet from "../Icon/Set.png";
import NoteAndroid from "../Img/NoteAndroid.png";
import NoteBg from "../Img/NoteBg.png";
import Background from "../Img/NoteAndroidDesk.png";
import "../Component/Component.css";
import Close from "../Icon/Close.png";

const SetIconBgStyle = {
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

const SetWindowStyle = {
  position: "relative",
  top: 400,
  width: 350,
  height: 300,
  borderRadius: 12,
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
  backgroundColor: "#FFFFFF",
  /*   border:'1px solid #ddd', */
  boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
  zindex: 1,
  y: 500,
};

const AppWindowStyle = {
  width: 152,
  height: 152,
  x: 82,
  top: 70,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  color: "#415fff",
  opacity: 1,
  backgroundColor: "#FFFFFF",
  borderRadius: 14,
  position: "absolute",
  zIndex: 0,
  overflow: "hidden",
  backgroundRepeat: "no-repeat",
};

/////*//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//*/

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

const NoteBgVariants = {
  NoteBgAnimationOne: {
    opacity: [0.1, 0.3, 1],
    y: -355,
    x: -300,
    scale: 0.2,
  },
  NoteBgAnimationTwo: {
    y: -100,
    x: -100,
    scale: 2,
    opacity: [0.1, 0],
  },
};

/*//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//*/

const AppWindowVariants = {
  animationOne: {
    width: 152,
    height: 152,
    y: 0,
    backgroundImage: null,
  },
  animationTwo: {
    backgroundImage: `url(${NoteAndroid})`,
    /*   width: "100vw",
    height: "100vh", */
    width: 375,
    height: 812,
    x: 0,
    y: 56,
    top: -56,
    scale: 1.02,
    // backgroundSize: "375px 100vh",
    backgroundSize: "375px 812px",
  },
};

export default function SetWindow() {
  // const y = useMotionValue(0);
  // const scale = useTransform(y, [0,200, 500, 750], [ 0.1, 0.2, 0.8, 1]);

  const [AppWindowAnimation, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [SetWindowAnimation, UPcycleAnimation] = useCycle(
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
  //  const [DragBox, cycleDrag] = useCycle(false, true);

  /* const [Speed, setSpeed] = useState("1"); */
  //const [Scale, setScale] = useState("1.1");
  const [Stiffness, setStiffness] = useState("100");
  const [Damping, setDamping] = useState("20");

  /*  function HandleSpeedChange(e) {
      const newValue = e.target.value;
      setSpeed(newValue);
      console.log(newValue);
    }  */
  /*   function HandleScaleChange(e) {
      const newValue = e.target.value;
      setScale(newValue);
      console.log(newValue);
    } */
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
    //duration: 2,
    restSpeed: 2,
    stiffness: Stiffness,
    damping: Damping,
  };

  const ImgBgVariants = {
    ImgBgAnimationOne: {
      scale: 1,
    },
    ImgBgAnimationTwo: {
      scale: 1.1,
      filter: "blur(4px)",
    },
  };

  return (
    <div>
      <div
        className="SetWindowAll"
        style={{
          zindex: 10,
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
          className="SetBtn"
          onClick={() => UPcycleAnimation()}
          style={SetBtnStyle}
        ></div>

        <div
          className="Mask"
          style={{
            display: "flex",
            justifyContent: "center",
            width: 375,
            height: 812,
            overflow: "hidden",
            position: "absolute",
          }}
        >
          <div className="JumpWindow">
            <motion.div
              className="SetWindow"
              style={SetWindowStyle}
              variants={UPBoxAnimation}
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
                  top: 20,
                  position: "absolute",
                }}
              />
              <div className="SetText">
                {/*               <div className="DefaultSet"
                style={{
                  width: 220,
                  height: 'auto',
                  fontSize: 14,
                marginTop: 20
                }}>
                 <h6>Scale缩放设置</h6> 
                <h6>Speed速度设置</h6>
                <p
                  style={{
                    color: '#666',
                    marginBottom: 6
                  }}
                > (默认值为1，值需大于等于1，值可为小数)(默认值为1，越接近0速度越快，值可为小数) </p>
                   <input
                className="in"
                type="text"
                value={Speed}
                onChange={HandleSpeedChange}
                style={{
                  margin: 0,
                  height: 30,
                  width: 220,
                  borderRadius: 6,
                }}
              /> 
              </div>*/}

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
            //   value={Speed}
            whileTap={{ scale: 0.8 }}
            //   onChange={HandleSpeedChange}
            style={AppWindowStyle}
            // style={{y, scale}}
            variants={AppWindowVariants}
            animate={AppWindowAnimation}
            transition={style}
            // drag={DragBox}
            // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            //  dragElastic={1}
            //onClick={() => cycleAnimation() & cycleDrag() & CycleNoteBgAnimation() & CycleImgBgAnimation()}
            onClick={() =>
              cycleAnimation() & CycleNoteBgAnimation() & CycleImgBgAnimation()
            }
          >
            <motion.div
              variants={NoteBgVariants}
              animate={NoteBgAnimation}
              transition={style}
              style={SetIconBgStyle}
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
              backgroundImage: `url(${Background})`,
              width: 375,
              height: 812,
              top: 0,
              opacity: 1,
              zIndex: "-1",
              position: "absolute",
            }}
          />
        </div>
      </div>
    </div>
  );
}
