import { motion } from "framer-motion";
import background from "../Img/bg2.png";
import Click from "../SecondPage/Click";
import Bback from "../Icon/back.png";
import ClickCard from "../ClickFold/ClickCard";
import ClickNum from "../ClickFold/ClickNum";
import ClickIcon from "../ClickFold/ClickIcon";
import ClickBtn from "../ClickFold/ClickBtn";
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";

let cardActive = {
  width: 160,
  height: 100,
  backgroundColor: "#fff",
  margin: 8,
  borderRadius: 12,
  textAlign: "center",
  boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
  opacity: 1,
  color: "#666",
};

const cardHover = {
  scale: 1.1,
  boxShadow: "0px 0px 12px 0px rgba(65, 95, 255, 0.6)",
  fontWeight: "bold",
  color: "#415fff",
  opacity: 1,
};
const ClickOther = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Click/ClickOther">
          <div>
            <motion.h1
              className="text-center"
              style={{
                padding: 18,
                color: "#333",
                fontSize: 22,
                y: 0,
              }}
              transition={{
                type: "spring",
                velocity: 120,
              }}
            >
              OOS点击动效
            </motion.h1>
            <Link to="/Click">
              <img
                src={Bback}
                alt=" "
                style={{
                  width: 30,
                  position: "absolute",
                  top: 16,
                  left: 20,
                  opacity: 1,
                  zIndex: "100",
                }}
              />
            </Link>
            <div
              className="Grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="Row1">
                <Link to="/Click/ClickBtn" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>按钮反馈</p>
                  </motion.div>
                </Link>
                <Link to="/Click/ClickNum" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>数字键盘反馈</p>{" "}
                  </motion.div>
                </Link>
              </div>
              <div className="Row2">
                <Link to="/Click/ClickCard" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>卡片反馈</p>
                  </motion.div>
                </Link>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                width: "100%",
                height: "100vh",
                position: "absolute",
                top: 0,
                opacity: 1,
                zIndex: "-1",
              }}
            ></div>
          </div>
        </Route>
        <Route path="/Click/ClickIcon">
          <ClickIcon />
        </Route>
        <Route path="/Click/ClickBtn">
          <ClickBtn />
        </Route>
        <Route path="/Click/ClickNum">
          <ClickNum />
        </Route>
        <Route path="/Click/ClickCard">
          <ClickCard />
        </Route>
        <Route path="/Click">
          <Click />
        </Route>
      </Switch>
    </Router>
  );
};

export default ClickOther;
