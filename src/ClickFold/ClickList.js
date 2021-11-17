import * as React from "react";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useElementScroll,
} from "framer-motion";
import SetHeader from "../Img/WSetHeader.png";
import SetBody from "../Img/SetBody.png";
import NavBarPage from "../Component/NavBarPage";
import OneFingerClick from "../Img/OneFingerClick.png";
import "../App.css";
import Bg from "../Component/Bg";

const ClickList = () => {
  const ref = useRef();
  const { scrollYProgress } = useElementScroll(ref);
  const y = useMotionValue(0);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["26px", "14px", "14px"]
  );
  const Info = (
    <p>
      Hello,
      <br /> world!
    </p>
  );
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: 0,
        }}
      >
        <div
          className="allImportant"
          ref={ref}
          style={{
            height: 812,
            overflow: "scroll",
          }}
        >
          <div className="GridCenter">
            <div
              className="HeadCard"
              style={{
                backgroundImage: `url(${SetHeader})`,
                top: 0,
                width: 375,
                height: 148,
                position: "fixed",
                opacity: 1,
                zIndex: 1,
                display: "flex",
              }}
            >
              <div
                className="OneFingerClick"
                style={{
                  width: 32,
                  height: 60,
                  backgroundImage: `url(${OneFingerClick})`,
                  position: "relative",
                  top: 300,
                  left: 28,
                  zIndex: 11,
                }}
              />
              <motion.p
                className="SetP"
                style={{
                  fontSize: scale,
                  position: "relative",
                  top: 52,
                  left: 20,
                  margin: 0,
                  fontWeight: "bold",
                  zIndex: 10,
                }}
              >
                {" "}
                设置
              </motion.p>
            </div>

            <motion.div
              className="MoveBackground"
              drag="y"
              //   draggable="false"
              dragConstraints={{ top: -960, bottom: 0 }}
              dragElastic={1}
              dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
              style={{
                y,
                backgroundImage: `url(${SetBody})`,
                top: 148,
                width: 375,
                height: 1590,
                position: "relative",
                opacity: 1,
                zIndex: 0,
              }}
            >
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 70,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 30,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 70,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 30 + 70,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 100,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 30 + 70 * 2,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 60,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 130 + 70 * 2,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 60,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 130 + 70 * 2 + 60,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 60,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 270 + 60 * 2,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 60,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 270 + 60 * 3,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 65,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 270 + 60 * 4,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 60 * 4,
                }}
              />

              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 60 * 4 + 55,
                }}
              />

              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 60 * 4 + 55 * 2,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 3,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 70,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 4 + 10,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 4 + 80,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 5 + 80,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 6 + 80,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 7 + 80,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 8 + 80,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 240 + 55 * 9 + 80,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 65,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 575 + 55 * 10 + 90,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 335 + 55 * 10 + 395,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 575 + 55 * 11 + 155,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 575 + 55 * 12 + 155,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 575 + 55 * 12 + 225,
                }}
              />
              <motion.div
                whileTap={{ opacity: 0.5 }}
                style={{
                  width: 375,
                  height: 55,
                  opacity: 0,
                  backgroundColor: "grey",
                  left: 0,
                  zIndex: 1,
                  position: "absolute",
                  marginTop: 575 + 55 * 13 + 225,
                }}
              />
            </motion.div>
            <div
              className="Background"
              style={{
                backgroundColor: "#f7f7f7",
                width: 375,
                height: 812,
                position: "absolute",
                top: 0,
                opacity: 1,
                zIndex: -1,
              }}
            />
            <Bg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickList;
