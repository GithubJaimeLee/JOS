//图片
import background from "../Img/bg2.png";
import backIcon from "../Icon/back.png";
//页码
import WindowPull from "../DeskFold/Lock";
import App from "../App";
import DApp from "../DeskFold/DeskMove";
import DChange from "../DeskFold/DeskChange";
import DZoom from "../DeskFold/DeskZoom";
import DDirection from "../DeskFold/DeskDirection";
import DeskQuit from "../DeskFold/DeskQuit";
import DeskFolder from "../DeskFold/DeskFolder";
import DeskMultiDrag from "../DeskFold/DeskMultiDrag";
//import {DraggableStory ,Grid }  from './DeskFold/deskGrid';
import DGrid from "../DeskFold/DeskGrid";
//库
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

let cardInactive = {
  width: 160,
  height: 100,
  backgroundColor: "#fff",
  margin: 8,
  borderRadius: 12,
  textAlign: "center",
  boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
  opacity: 0.4,
  color: "#999",
};

const cardHover = {
  scale: 1.1,
  boxShadow: "0px 0px 12px 0px rgba(65, 95, 255, 0.6)",
  fontWeight: "bold",
  color: "#415fff",
  opacity: 1,
};
// color: "#415FFF",
const Desk = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Desk">
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
              长按
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
                {/*                 <Link to="/Desk/deskMove" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>图标移动自动补位</p>
                  </motion.div>
                </Link> */}
                {/*           <Link
                  to="/Desk/deskDirection"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>图标变形（方向）</p>
                  </motion.div>
                </Link> */}
                {/*        <Link
                  to="/Desk/DeskOpenAndQuit"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>打开/退出应用</p>{" "}
                  </motion.div>
                </Link> */}{" "}
                <Link to="/Desk/windowPull" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>锁屏</p>
                  </motion.div>
                </Link>
                {/*  <Link
                  to="/Desk/DeskMultiDrag"
                  style={{ textDecoration: "none" }}
                >
                     <motion.div whileHover={cardHover} style={cardInactive}>
                    <p style={{ paddingTop: 40 }}>多选拖动</p>
                  </motion.div> 
                </Link>*/}
              </div>
              <div className="Row2">
                <Link to="/Desk/deskChange" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>图标变形</p>
                  </motion.div>
                </Link>

                {/*            <Link to="/Desk/deskZoom" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>图标变形（缩放）</p>
                  </motion.div>
                </Link> */}

                {/*          <Link to="/Desk/deskGrid" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>图标Grid</p>
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
            />
          </div>
        </Route>
        <Route path="/Desk/windowPull">
          <WindowPull />
        </Route>
        <Route path="/Desk/deskMove">
          <DApp />
        </Route>
        <Route path="/Desk/deskChange">
          <DChange />
        </Route>
        <Route path="/Desk/deskZoom">
          <DZoom />
        </Route>
        <Route path="/Desk/deskDirection">
          <DDirection />
        </Route>
        <Route path="/Desk/deskGrid">
          <DGrid />
        </Route>
        <Route path="/Desk/DeskOpenAndQuit">
          <DeskQuit />
        </Route>
        <Route path="/Desk/DeskFolder">
          <DeskFolder />
        </Route>
        <Route path="/Desk/DeskMultiDrag">
          <DeskMultiDrag />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default Desk;
