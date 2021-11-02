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
import "../css/App.css";

const ListBtn = () => {
  return (
    <motion.div
      whileTap={{ scaleY: 0.8 }}
      style={{
        width: 375,
        height: 90,
        opacity: 0.3,
        backgroundColor: "grey",
        left: 0,
        zIndex: 1,
        position: "relative",
        marginBottom: 2,
      }}
    />
  );
};

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
              }}
            >
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
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
              <ListBtn />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickList;
