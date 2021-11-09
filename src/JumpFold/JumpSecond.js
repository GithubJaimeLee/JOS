import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
//import { useRef } from "react";
import background from "../Img/DeskOOS.png";
import NavBarPage from "../Component/NavBarPage";
import "../Component/Component.css";
import Bg from "../Component/Bg";

const JumpSecond = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-375, -188, 0, 188, 375], [1, 0.9, 1, 0.9, 1]);
  const borderRadius = useTransform(
    x,
    [-375, -188, 0, 188, 375],
    [0, 26, 0, 26, 0]
  );
  //const top = useTransform(x, [0, 100], [70, 170]);
  // const constraintsRef = useRef(null);
  const MoveCard = {
    // backgroundColor: "#fff",
    backgroundColor: "#eee",
    // top: "15%",
    width: 375,
    height: 812,
    position: "relative",
    borderRadius,
    opacity: 1,
    scale,
    zIndex: 20,
    /*  marginLeft: 20,
    marginRight: 20, */
  };

  const Info = (
    <p>
      Hello,
      <br /> world!
    </p>
  );
  return (
    <div
      className="screen"
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="All"
        style={{
          position: "absolute",
          display: "flex",
          width: 375,
          height: 812,
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          className="Scroll"
          dragElastic={0.2}
          dragTransition={{
            timeConstant: 80,
            power: 1,
            modifyTarget: (target) => Math.round(target / 375) * 375,
          }}
          dragConstraints={{ left: -376, top: 0, bottom: 0, right: 376 }}
          dragMomentum={true}
          drag="x"
          style={{
            x,
            display: "flex",
            overflow: "hidden",
            position: "absolute",
            top: 0,

            //width: 375 * 3,
            height: 812,
            zIndex: 3,
          }}
        >
          <motion.div className="AlertCard" style={MoveCard} />
          <motion.div className="AlertCard" style={MoveCard} />
          <motion.div className="AlertCard" style={MoveCard} />
        </motion.div>
      </div>
      <div
        className="Background"
        style={{
          width: 375,
          position: "absolute",
        }}
      >
        <div
          className="blackMask"
          style={{
            backgroundColor: "#000000",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 0.5,
            zIndex: 2,
          }}
        />
        <div
          className="BlurBackground"
          style={{
            backgroundImage: `url(${background})`,
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            filter: "blur(4px)",
            zIndex: -1,
          }}
        />
      </div>
      <Bg />
    </div>
  );
};

export default JumpSecond;
