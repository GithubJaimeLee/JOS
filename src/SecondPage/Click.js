import { motion } from "framer-motion";
import background from "../Img/bg2.png";
import Bback from "../Icon/back.png";
import ClickList from "../ClickFold/ClickList";
import ClickBtn from "../ClickFold/ClickBtn";
import ClickIcon from "../ClickFold/ClickIcon";

import ClickAlert from "../ClickFold/ClickAlert";
import ClickShadow from "../ClickFold/ClickShadow";
import ClickOther from "../ClickFold/ClickOther";
import ClickZoom from "../ClickFold/ClickZoom";
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import Feedback from "../SecondPage/Feedback";
import Alert from "../SecondPage/Alert";
import Window from "../SecondPage/Window";
import ChooseLoadingSwitch from "../AlertFold/ChooseLoadingSwitch";
import DeskChange from "../DeskFold/DeskChange";

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
const Click = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Click">
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
            ></motion.h1>
            <Link to="/">
              <img
                src={Bback}
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
              className="Grid"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                top: 40,
              }}
            >
              <div className="Row1">
                <Link to="/Click/Feedback" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>点击反馈</p>
                  </motion.div>
                </Link>

                <Link to="/Click/Window" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>弹窗</p>
                  </motion.div>
                </Link>
                <Link to="/Click/DeskChange" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>桌面图标</p>
                  </motion.div>
                </Link>
                {/*    <Link to="/Click/ClickAlert" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>暗示</p>
                  </motion.div>
                </Link> */}
                {/*           <Link
                  to="/Click/ClickShadow"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>阴影</p>
                  </motion.div>
                </Link>
                <Link to="/Click/ClickOther" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>其他</p>
                  </motion.div>
                </Link>

                {/*                 <Link to="/Click/ClickList" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>列表反馈</p>
                  </motion.div>
                </Link>
                <Link to="/Click/ClickIcon" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>图标反馈</p>
                  </motion.div>
                </Link>
                <Link to="/Click/ClickBtn" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>按钮反馈</p>
                  </motion.div>
                </Link> */}
              </div>
              <div className="Row2">
                <Link to="/Click/SecondPage" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>二级页面</p>
                  </motion.div>
                </Link>
                <Link to="/Click/Boolean" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>布尔开关(支持滑动)</p>
                  </motion.div>
                </Link>

                {/*                <Link to="/Click/ClickOther" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>其他</p>
                  </motion.div>
                </Link> */}
                {/*           <Link to="/Click/ClickNum" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>数字键盘反馈</p>{" "}
                  </motion.div>
                </Link>
                <Link to="/Click/ClickCard" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>卡片反馈</p>
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

        <Route path="/Click/Feedback">
          <Feedback />
        </Route>

        <Route path="/Click/SecondPage">
          <Alert />
        </Route>
        <Route path="/Click/Window">
          <Window />
        </Route>
        <Route path="/Click/Boolean">
          <ChooseLoadingSwitch />
        </Route>

        <Route path="/Click/DeskChange">
          <DeskChange />
        </Route>

        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default Click;
