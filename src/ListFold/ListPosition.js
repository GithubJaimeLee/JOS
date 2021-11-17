import * as React from "react";
//import { useRef } from "react";
import { motion } from "framer-motion";
import background from "../Img/DeskOOS.png";
import NavBarPage from "../Component/NavBarPage";
import "../css/Component.css";
import Bg from "../Component/Bg";

const ListPosition = () => {
  // const constraintsRef = useRef(null);
  const Info = (
    <p>
      Hello,
      <br /> world!
    </p>
  );
  return (
    <div className="screen">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="All"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="Scroll"
          style={{
            overflow: "hidden",
            position: "absolute",
            top: 0,
            width: 375,
            height: 812,
          }}
        >
          <motion.div
            className="AlertCard"
            drag="x"
            dragElastic={4}
            dragTransition={{
              timeConstant: 80,
              power: 1,
              modifyTarget: (target) => Math.round(target / 240) * 240,
            }}
            dragConstraints={{ left: -220, top: 0, bottom: 0, right: 220 }}
            dragMomentum={true}
            style={{
              backgroundColor: "#fff",
              left: "20%",
              top: "15%",
              width: 225,
              height: "60%",
              position: "relative",
              borderRadius: 20,
              opacity: 1,
              zIndex: "20",
            }}
          ></motion.div>

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
              backgroundImage: `url(${background})`,
              width: 375,
              height: 812,
              position: "absolute",
              top: 0,
              opacity: 1,
              zIndex: "-1",
            }}
          ></div>
        </div>
        <Bg />
      </div>
    </div>
  );
};

export default ListPosition;
