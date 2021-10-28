import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ClickB from "../Img/ClickB.png";
import ClickBtn from "../Img/ClickBtn.png";
import { motion } from "framer-motion";
import OneFingerClick from "../Img/OneFingerClick.png";
import NavBarPage from "../Component/NavBarPage";

const ClickBtnStyle = {
  width: 291,
  height: 42,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  backgroundImage: `url(${ClickBtn})`,
  borderRadius: 12,
  position: "absolute",
  left: 42,
  top: 700,
  zIndex: 20,
};

const ClickCard = () => {
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
          className="Background"
          style={{
            backgroundImage: `url(${ClickB})`,
            position: "absolute",
            width: 375,
            height: 812,
            zIndex: 10,
          }}
        >
          <motion.div
            className="boxChange"
            style={ClickBtnStyle}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="BtnMask"
              style={{
                width: 291,
                height: 42,
                borderRadius: 12,
                backgroundColor: "#000000",
                opacity: 0,
              }}
              whileTap={{
                opacity: 0.2,
              }}
            />
          </motion.div>
          <div
            className="OneFingerClick"
            style={{
              width: 32,
              height: 60,
              backgroundImage: `url(${OneFingerClick})`,
              position: "absolute",
              top: 745,
              left: 260,
              zIndex: 11,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ClickCard;
