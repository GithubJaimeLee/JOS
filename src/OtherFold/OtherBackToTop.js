import * as React from "react";
import { motion, useCycle } from "framer-motion";
import MusicHead from "../Img/MusicHead.png";
import MusicBodyRecommed from "../Img/MusicBodyRecommed.png";
import MusicFooter from "../Img/MusicFooter.png";
import MusicHeaderTap from "../Img/MusicHeaderTap.png";
import NavBarPage from "../Component/NavBarPage";
import "../App.css";

const BoxAnimation = {
  animationOne: {},
  animationTwo: {
    y: 0,
  },
};
const OtherBackToTop = () => {
  const Info = (
    <p>
      Hello,
      <br /> world!
    </p>
  );
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
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
          className="ScreenPhoneSize"
          style={{
            width: 375,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            height: 812,
            overflow: "scroll",
            top: 0,
          }}
        >
          <motion.div
            className="MusicHead"
            //    drag="y"
            // dragConstraints={{ top: -40, bottom: 0 }}
            //    dragElastic={0}
            style={{
              backgroundImage: `url(${MusicHead})`,
              top: 0,
              width: 375,
              height: 92,
              position: "fixed",
              opacity: 1,
              zIndex: 1,
            }}
          />

          <div
            className="MusicHeaderTap"
            style={{
              backgroundImage: `url(${MusicHeaderTap})`,
              top: 92,
              position: "fixed",
              width: 375,
              height: 38,
              zIndex: 1,
            }}
          />

          <motion.div
            className="MusicBody"
            variants={BoxAnimation}
            animate={animationBox}
            drag="y"
            dragConstraints={{ top: -578, bottom: 0 }}
            dragElastic={1}
            dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
            style={{
              backgroundImage: `url(${MusicBodyRecommed})`,
              backgroundColor: "#ddd",
              top: 130,
              width: 375,
              height: 1205,
              position: "absolute",
              opacity: 1,
              zIndex: 0,
            }}
            whileTap={{
              y: 0,
            }}
          />
        </div>
        <div
          className="MusicFooter"
          style={{
            backgroundImage: `url(${MusicFooter})`,
            bottom: 0,
            width: 375,
            height: 54,
            zIndex: 10,
            position: "absolute",
          }}
        >
          <motion.div
            ClassName="BackToTopBtn"
            onClick={() => cycleAnimation()}
            style={{
              width: 46,
              height: 46,
              position: "absolute",
              bottom: 2,
              left: 24,
              backgroundColor: "blue",
              zIndex: 11,
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OtherBackToTop;
