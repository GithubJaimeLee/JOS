import React from "react";
import { motion } from "framer-motion";
import background from "../Img/bg2.png";
import backIcon from "../Icon/back.png";
import { Link } from "react-router-dom";
import EditList from "../JumpFold/EditList";
import JumpSecond from "../JumpFold/JumpSecond";
import ChooseDate from "../JumpFold/ChooseDate";
import DeleteList from "../JumpFold/DeleteList";
import JumpNew from "../JumpFold/JumpNew";
import JumpMotion from "../JumpFold/OtherMotion";
import JumpSearch from "../JumpFold/JumpSearch";
import JumpApp from "../JumpFold/JumpApp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import WindowFlip from "../WindowFold/WindowFlip";
import WindowBottomWater from "../WindowFold/WindowBottomWater";

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

const Jump = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Slide">
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
            <Link to="/">
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
              className="Grid"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                top: 40,
              }}
            >
              <div className="Row1">
                <Link to="/Slide/ChooseDate" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>时间滚轮</p>{" "}
                  </motion.div>
                </Link>

                {/*           <Link to="/Jump/JumpSecond" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 30 }}>
                      应用间跳转
                      <br />
                    （横滑定位）
                    </p>
                  </motion.div>
                </Link> */}
                <Link to="/Slide/EditList" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>列表滑动</p>
                  </motion.div>
                </Link>
                <Link to="/Slide/Flip" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>翻页效果</p>
                  </motion.div>
                </Link>

                {/*      <Link to="/Jump/EditList" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>列表滑动</p>
                  </motion.div>
                </Link> */}
                {/*           <Link to="/Jump/JumpNew" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>新建</p>
                  </motion.div>
                </Link> */}
              </div>

              <div className="Row2">
                <Link to="/Slide/DeleteList" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>删除（横滑定位）</p>{" "}
                  </motion.div>
                </Link>
                <Link to="/Slide/JumpMotion" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>水面滑动(四角定位)</p>
                  </motion.div>
                </Link>
                <Link
                  to="/Slide/WindowBottomWater"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>底部弹窗(水面滑动)</p>
                  </motion.div>
                </Link>
                {/*                 <Link to="/Jump/JumpSearch" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>搜索</p>{" "}
                  </motion.div>
                </Link>

                <Link to="/Jump/JumpApp" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>二级界面跳转</p>
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
        <Route path="/Slide/Flip">
          <WindowFlip />
        </Route>
        <Route path="/Slide/EditList">
          <EditList />
        </Route>
        <Route path="/Slide/ChooseDate">
          <ChooseDate />
        </Route>
        <Route path="/Slide/JumpMotion">
          <JumpMotion />
        </Route>
        <Route path="/Slide/JumpNew">
          <JumpNew />
        </Route>
        <Route path="/Slide/JumpSecond">
          <JumpSecond />
        </Route>
        <Route path="/Slide/JumpApp">
          <JumpApp />
        </Route>
        <Route path="/Slide/DeleteList">
          <DeleteList />
        </Route>
        <Route path="/Slide/WindowBottomWater">
          <WindowBottomWater />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default Jump;
