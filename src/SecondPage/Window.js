import React from "react";
import { motion } from "framer-motion";
import background from "../Img/bg2.png";
import backIcon from "../Icon/back.png";
import { Link } from "react-router-dom";
import WindowJump from "../WindowFold/WindowJump";
import WindowPull from "../WindowFold/WindowPull";
import WindowBubble from "../WindowFold/WindowBubble";
import WindowAlert from "../WindowFold/WindowAlert";
import WindowFlip from "../WindowFold/WindowFlip";
import WindowBottom from "../WindowFold/WindowBottom";
import WindowCenter from "../WindowFold/WindowCenter";
import WindowInput from "../WindowFold/WindowInput";
import WindowSide from "../WindowFold/WindowSide";
import WindowVoice from "../WindowFold/WindowVoice";
import App from "../App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Click from "../SecondPage/Click";

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

/* let cardInactive = {
  width: 160,
  height: 100,
  backgroundColor: "#fff",
  margin: 8,
  borderRadius: 12,
  textAlign: "center",
  boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
  opacity: 0.4,
  color: "#999",
}; */

const cardHover = {
  scale: 1.1,
  boxShadow: "0px 0px 12px 0px rgba(65, 95, 255, 0.6)",
  fontWeight: "bold",
  color: "#415fff",
  opacity: 1,
};

const Window = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Click/Window">
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
            ></motion.h1>
            <Link to="/Click">
              <img
                src={backIcon}
                alt=" "
                style={{
                  width: 30,
                  position: "absolute",
                  top: 25,
                  left: 20,
                  opacity: 1,
                  zIndex: "100",
                }}
              ></img>
            </Link>
            <div
              className="Gird"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                top: 40,
              }}
            >
              <div className="Row1">
                <Link
                  to="/Click/Window/WindowCenter"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>中心弹窗</p>
                  </motion.div>
                </Link>

                {/*         <Link
                  to="/Window/WindowPull"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>下拉弹窗</p>
                  </motion.div>
                </Link> */}
                <Link
                  to="/Click/Window/WindowAlert"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>悬浮通知</p>
                  </motion.div>
                </Link>
                {/*    <Link
                  to="/Click/Window/WindowInput"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>列表键盘类？</p>
                  </motion.div>{" "}
                </Link>
                <Link
                  to="/Click/Window/WindowSide"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>侧边菜单?</p>
                  </motion.div>
                </Link> */}
              </div>
              <div className="Row2">
                <Link
                  to="/Click/Window/WindowBottom"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>底部弹窗</p>
                  </motion.div>
                </Link>
                {/*      <Link
                  to="/Click/Window/WindowFlip"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>翻页</p>{" "}
                  </motion.div>{" "}
                </Link>
                {/*                <Link
                  to="/Window/WindowVoice"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>侧边音量</p>{" "}
                  </motion.div>{" "}
                </Link> */}
                {/*   <Link
                  to="/Window/WindowBubble"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>气泡</p>
                  </motion.div>
                </Link> */}
                <Link
                  to="/Click/Window/WindowJump"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>菜单栏气泡</p>
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
        <Route path="/Click/Window/WindowFlip">
          <WindowFlip />
        </Route>
        <Route path="/Click/Window/WindowJump">
          <WindowJump />
        </Route>
        <Route path="/Click/Window/WindowPull">
          <WindowPull />
        </Route>
        <Route path="/Click/Window/WindowBubble">
          <WindowBubble />
        </Route>

        <Route path="/Click/Window/WindowAlert">
          <WindowAlert />
        </Route>
        <Route path="/Click/Window/WindowBottom">
          <WindowBottom />
        </Route>
        <Route path="/Click/Window/WindowCenter">
          <WindowCenter />
        </Route>

        <Route path="/Click/Window/WindowInput">
          <WindowInput />
        </Route>
        <Route path="/Click/Window/WindowSide">
          <WindowSide />
        </Route>
        <Route path="/Click/Window/WindowVoice">
          <WindowVoice />
        </Route>
        <Route path="/Click/Window">
          <App />
        </Route>
        <Route path="/Click">
          <Click />
        </Route>
      </Switch>
    </Router>
  );
};

export default Window;
