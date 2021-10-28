import * as React from "react";
import { motion } from "framer-motion";
import MusicHead from "../Img/MusicHead.png";
import MusicBodyRecommed from "../Img/MusicBodyRecommed.png";
import MusicFooter from "../Img/MusicFooter.png";
import MusicHeaderTap from "../Img/MusicHeaderTap.png";
import Arrow from "../Icon/Arrow.png";
import NavBarPage from "../Component/NavBarPage";
import "../App.css";

const DeskPull = () => {
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
          ></div>
          <motion.div
            className="MusicBodyRecommed"
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
          >
            {" "}
            <img
              src={Arrow}
              alt=" "
              style={{
                width: 30,
                position: "relative",
                top: -70,
                left: 170,
                opacity: 1,
              }}
            />
          </motion.div>
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
    </div>
  );
};

export default DeskPull;
