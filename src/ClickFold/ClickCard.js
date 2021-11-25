import { motion } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MaskDeskOOS from "../Img/MaskDeskOOS.png";
import COne from "../Img/C1.png";
import CTwo from "../Img/C2.png";

import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";

const ClickCard = () => {
  const Info = <p>卡片反馈</p>;
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: 0,
        }}
      >
        <div
          className="flex"
          style={{
            width: 360,
            height: 800,
            display: "grid",
            justifyContent: "center",
          }}
        >
          <motion.div
            className="C1"
            style={{
              width: 318,
              height: 155,
              backgroundImage: `url(${COne})`,
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",

              opacity: 1,

              borderRadius: 15,
              position: "relative",

              top: 130,
              zIndex: 20,
            }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.div
            className="C2"
            style={{
              width: 318,
              height: 255,
              backgroundImage: `url(${CTwo})`,
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",

              opacity: 1,

              borderRadius: 15,
              position: "relative",

              top: -47,
              zIndex: 20,
            }}
            whileTap={{ scale: 0.95 }}
          />

          <div
            className="Background"
            style={{
              backgroundImage: `url(${MaskDeskOOS})`,
              width: 360,
              height: 800,
              position: "absolute",
              top: 0,
              opacity: 1,
              zIndex: "-1",
            }}
          />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default ClickCard;
