import React from "react";
import { motion } from "framer-motion";
import background from "../Img/bg2.png";
import backIcon from "../Icon/back.png";
import { Link } from "react-router-dom";
import AlertLoading from "../AlertFold/AlertLoading";
import AlertNew from "../AlertFold/AlertNew";
import ChooseLoadingSwitch from "../AlertFold/ChooseLoadingSwitch";
import SearchJump from "../AlertFold/SearchJump";
import JumpIn from "../AlertFold/JumpIn";
import AlertPage from "../AlertFold/AlertPage";
import AlertPercent from "../AlertFold/AlertPercent";
import AlertToast from "../AlertFold/AlertToast";
import Create from "../AlertFold/Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";

let card = {
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

const Alert = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Alert">
          <div>
            <motion.h1
              className="text-center"
              style={{
                padding: 18,
                color: "#333",
                fontSize: 22,
                y: 0,
              }}
              transition={{ type: "spring", velocity: 120 }}
            >
              二级页面
            </motion.h1>
            <Link to="/">
              <img
                src={backIcon}
                alt=" "
                style={{
                  width: 30,
                  position: "absolute",
                  top: 16,
                  left: 20,
                  opacity: 1,
                  zIndex: "100",
                }}
              ></img>
            </Link>
            <div
              className="Grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="Row1">
                <Link to="/Alert/Create" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>新建</p>
                  </motion.div>
                </Link>
                <Link to="/Alert/SearchJump" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>搜索框</p>
                  </motion.div>
                </Link>
                {/*   <Link to="/Alert/AlertNew" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>新事件标记</p>
                  </motion.div>
                </Link> */}
                {/*           <Link
                  to="/Alert/AlertLoading"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>Loading</p>
                  </motion.div>
                </Link> */}
                {/*       <Link to="/Alert/AlertToast" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>Toast</p>
                  </motion.div>
                </Link> */}
              </div>
              <div className="Row2">
                <Link
                  to="/Alert/ChooseLoadingSwitch"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>布尔开关</p>
                  </motion.div>
                </Link>
                <Link to="/Alert/JumpIn" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>弹入</p>
                  </motion.div>
                </Link>
                {/*          <Link to="/Alert/AlertPage" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>页码指示</p>{" "}
                  </motion.div>
                </Link>
                <Link
                  to="/Alert/AlertPercent"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>进度指示器</p>
                  </motion.div>
                </Link> */}
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

        <Route path="/Alert/ChooseLoadingSwitch">
          <ChooseLoadingSwitch />
        </Route>
        <Route path="/Alert/Create">
          <Create />
        </Route>
        <Route path="/Alert/SearchJump">
          <SearchJump />
        </Route>
        <Route path="/Alert/JumpIn">
          <JumpIn />
        </Route>
        <Route path="/Alert/AlertPage">
          <AlertPage />
        </Route>
        <Route path="/Alert/AlertToast">
          <AlertToast />
        </Route>
        <Route path="/Alert/AlertPercent">
          <AlertPercent />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default Alert;
