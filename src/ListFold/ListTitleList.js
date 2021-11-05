import * as React from "react";
import { motion } from "framer-motion";
import NavBarPage from "../Component/NavBarPage";
import ContactHeader from "../Img/ContactHeader.png";
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactSetBar from "../Img/ContactSetBar.png";
import Bg from "../Component/Bg";
import A from "../Img/A.png";
import F from "../Img/F.png";
import L from "../Img/L.png";
import "../css/App.css";

const ClickStyle = {
  width: 375,
  height: 50,
  backgroundColor: "#ddd",
  opacity: 0.5,
  position: "sticky",
  top: 159,
  left: 0,
  marginBottom: 50,
};
const ListTitleList = () => {
  const Info = <p>子标题交替悬停</p>;
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
          className="ScreenPhoneSize"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            height: 812,
            top: 0,
          }}
        >
          <motion.div
            className="ContactHeader"
            drag="y"
            dragConstraints={{ top: -40, bottom: 0 }}
            dragElastic={0}
            style={{
              backgroundImage: `url(${ContactHeader})`,

              top: 0,
              width: 375,
              height: 159,
              position: "fixed",
              opacity: 1,
              zIndex: 2,
            }}
          />
          <div
            className="ContactFooter"
            style={{
              backgroundImage: `url(${ContactFooter})`,
              width: 375,
              height: 65,
              position: "absolute",
              bottom: 0,
              opacity: 1,
              zIndex: 1000,
            }}
          />
          <div
            className="Body"
            style={{
              backgroundColor: "#f7f7f7",
              width: 375,
              height: 812,
              position: "absolute",
              top: 0,
              overflow: "scroll",
              opacity: 1,
              zIndex: -1,
            }}
          >
            <div
              className="ContactSetBar"
              style={{
                width: 20,
                height: 456,
                backgroundImage: `url(${ContactSetBar})`,
                top: 210,
                right: 0,
                zIndex: 1,
                position: "fixed",
              }}
            />
            <motion.div
              className="ContactBody"
              drag="y"
              dragConstraints={{ top: -580, bottom: 0 }}
              dragElastic={1}
              style={{
                backgroundImage: `url(${ContactBody})`,
                top: 159,
                width: 375,
                height: 1169,
                position: "absolute",
                opacity: 1,
                zIndex: 0,
              }}
            >
              <div
                className="MaskA"
                style={{
                  backgroundImage: `url(${A})`,
                  width: 375,
                  height: 50,
                  backgroundColor: "#ddd",
                  opacity: 1,
                  position: "sticky",
                  top: 159,
                  left: 0,
                  marginTop: 55,
                }}
              />
              <div
                className="MaskF"
                style={{
                  backgroundImage: `url(${F})`,
                  width: 375,
                  height: 50,
                  backgroundColor: "#ddd",
                  opacity: 1,
                  position: "sticky",
                  top: 159,
                  left: 0,
                  marginTop: 260,
                }}
              />
              <div
                className="MaskL"
                style={{
                  backgroundImage: `url(${L})`,
                  width: 375,
                  height: 50,
                  backgroundColor: "#ddd",
                  opacity: 1,
                  position: "sticky",
                  top: 159,
                  left: 0,
                  marginTop: 45,
                }}
              />
              <div
                className="MaskW"
                style={{
                  width: 375,
                  height: 50,
                  backgroundColor: "#ddd",
                  opacity: 0,
                  position: "sticky",
                  top: 159,
                  left: 0,
                  marginTop: 95,
                }}
              />
              <div
                className="MaskX"
                style={{
                  width: 375,
                  height: 50,
                  backgroundColor: "#ddd",
                  opacity: 0,
                  position: "sticky",
                  top: 159,
                  left: 0,
                  marginTop: 95,
                }}
              />
              <div
                className="MaskZ"
                style={{
                  width: 375,
                  height: 50,
                  backgroundColor: "#ddd",
                  opacity: 0,
                  position: "sticky",
                  top: 159,
                  left: 0,
                  marginTop: 215,
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
          </div>
        </div>
        <Bg />
      </div>
    </div>
  );
};

export default ListTitleList;
