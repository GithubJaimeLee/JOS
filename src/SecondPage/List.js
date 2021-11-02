import { motion } from "framer-motion";
import background from "../Img/bg2.png";
import Bback from "../Icon/back.png";
import ListPosition from "../ListFold/ListPosition";
import ListJump from "../ListFold/ListJump";
import ListTitle from "../ListFold/ListTitle";
import { ListTab } from "../ListFold/ListTab";
import ListTitleList from "../ListFold/ListTitleList";
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
const List = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/List">
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
              OOS列表动效
            </motion.h1>
            <Link to="/">
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
              ></img>
            </Link>
            <div
              className="Gird"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="Row1">
                <Link to="/List/ListJump" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>列表滑动及回弹</p>
                  </motion.div>
                </Link>
                <Link
                  to="/List/ListPosition"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>横滑定位</p>
                  </motion.div>
                </Link>
                <Link to="/List/ListTitle" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>标题栏</p>
                  </motion.div>
                </Link>
              </div>
              <div className="Row2">
                <Link to="/List/ListTab" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>子页签(Tap)</p>{" "}
                  </motion.div>
                </Link>
                <Link
                  to="/List/ListTitleList"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>子标题交替悬停</p>
                  </motion.div>
                </Link>
              </div>
            </div>
            <div
              className="Bg"
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
        <Route path="/List/ListJump">
          <ListJump />
        </Route>
        <Route path="/List/ListPosition">
          <ListPosition />
        </Route>
        <Route path="/List/ListTitle">
          <ListTitle />
        </Route>
        <Route path="/List/ListTab">
          <ListTab />
        </Route>
        <Route path="/List/ListTitleList">
          <ListTitleList />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default List;
