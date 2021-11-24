import { motion } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DeskOOS from "../Img/DeskOOS.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";

const boxChange = {
  width: 300,
  height: 500,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  color: "#415fff",
  opacity: 1,
  background: "#fff",
  borderRadius: 12,
  position: "relative",
  left: -15,
  top: 100,
  zIndex: 20,
};

const ClickCard = () => {
  const Info = <p>卡片反馈</p>;
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
          className="OneFingerClick"
          style={{
            width: 32,
            height: 60,
            backgroundImage: `url(${OneFingerClick})`,
            position: "relative",
            top: 560,
            left: 260,
            zIndex: 21,
          }}
        />

        <div
          className="blackMask"
          style={{
            backgroundColor: "#000000",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 0.4,
            zIndex: "2",
          }}
        ></div>
        <div
          className="BlurBackground"
          style={{
            backgroundImage: `url(${DeskOOS})`,
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "-1",
          }}
        />

        <motion.div
          className="boxChange"
          style={boxChange}
          whileTap={{ scale: 0.95 }}
        >
          <p
            style={{
              color: "#666",
              fontWeight: "bold",
              position: "absolute",
              top: 10,
              left: 10,
              fontSize: 14,
            }}
          >
            {/*  Press me */}
          </p>
        </motion.div>
      </div>
      <Bg />
    </div>
  );
};

export default ClickCard;
