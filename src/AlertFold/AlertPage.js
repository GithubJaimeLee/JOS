import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../Component/Component.css";
import NavBarPage from "../Component/NavBarPage";
import AlertPageBgOne from "../Img/AlertPageBgOne.png";
import AlertPageBgTwo from "../Img/AlertPageBgTwo.png";
import AlertPageBg from "../Img/AlertPageBg.png";
import { motion } from "framer-motion";
const AlertPage = () => {
  const VarLeft = ["375", "-375"];

  const [Left, setLeft] = useState(VarLeft[0]);

  const Info = <p>页码指示</p>;
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="CenterScreen"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="Mask"
          style={{
            backgroundColor: "#eee",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            display: "flex",
            opacity: 1,
            zIndex: 2,
            // overflow: "hidden",
          }}
        >
          <div
            onClick={() => setLeft()}
            className="PointSetLeft"
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#FFFFFF",
              position: "absolute",
              zIndex: 2,
              top: 685,
              left: 190,
            }}
          />
          <div
            className="PointSetRight"
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#FFFFFF",
              position: "absolute",
              zIndex: 1,
              top: 685,
              left: 210,
            }}
          />

          <motion.div
            //  animate={{ x: VarLeft }} 给两个一样的usecycle
            className="Icons"
            style={{
              display: "flex",
              x: 0,
            }}
          >
            <img
              src={AlertPageBgOne}
              alt="First"
              style={{
                height: 812,
                width: 375,
                zIndex: "10",
              }}
            />
            <img
              src={AlertPageBgTwo}
              alt="Second"
              style={{
                height: 812,
                width: 375,
                zIndex: "10",
              }}
            />{" "}
          </motion.div>
          <div
            style={{
              backgroundImage: `url(${AlertPageBg})`,
              position: "absolute",
              width: 375,
              height: 812,
              zIndex: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AlertPage;
