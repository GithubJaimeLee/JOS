import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import MusicHead from "../Img/MusicHead.png";
import MusicBodyRecommend from "../Img/MusicBodyRecommend.png";
import MusicFooter from "../Img/MusicFooter.png";
import MusicHeaderTap from "../Img/MusicHeaderTap.png";
import Arrow from "../Icon/Arrow.png";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import "../App.css";

const OtherMotion = () => {
  const y = useMotionValue(0);
  const rotate = useTransform(y, [0, 100], [180, 0]);
  const top = useTransform(y, [0, 100], [70, 170]);
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
            backgroundColor: "#f7f7f7",
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
          ></motion.div>
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
            className="Arrow"
            style={{
              rotate,
              top,
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${Arrow})`,
              width: 20,
              height: 30,
              position: "absolute",
              //top: -70,
              left: 170,
              opacity: 1,
            }}
          />
          <motion.div
            className="MusicBodyRecommend"
            drag="y"
            dragConstraints={{ top: -578, bottom: 0 }}
            dragElastic={1}
            dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
            style={{
              y,
              backgroundImage: `url(${MusicBodyRecommend})`,
              backgroundColor: "#ddd",
              top: 130,
              width: 375,
              height: 1205,
              position: "absolute",
              opacity: 1,
              zIndex: 0,
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
        />
      </div>
      <Bg />
    </div>
  );
};

export default OtherMotion;
