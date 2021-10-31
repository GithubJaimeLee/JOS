import React from "react";
import { motion } from "framer-motion";
import background from "../Img/bg2.png";
import backIcon from "../Icon/back.png";
import { Link } from "react-router-dom";
import EditCard from "../EditFold/EditCard";
import EditEnter from "../EditFold/EditEnter";
import EditGrid from "../EditFold/EditGrid";
import EditList from "../EditFold/EditList";
import EditServiceList from "../EditFold/EditServiceList";

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

const Edit = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Edit">
          <div>
            <motion.h1
              className="text-center"
              style={{
                padding: 18,
                fontSize: 22,
                color: "#333",
                y: 0,
              }}
              transition={{ type: "spring", velocity: 120 }}
            >
              OOS编辑类动效
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
              className="Gird"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="Row1">
                <Link to="/Edit/EditList" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>列表编辑排序</p>
                  </motion.div>
                </Link>
                <Link to="/Edit/EditCard" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>卡片编辑排序</p>
                  </motion.div>
                </Link>
                <Link to="/Edit/EditEnter" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>进入编辑</p>
                  </motion.div>
                </Link>
              </div>
              <div className="Row2">
                <Link
                  to="/Edit/EditServiceList"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>服务编辑列表</p>
                  </motion.div>
                </Link>
                <Link to="/Edit/EditGrid" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={card}>
                    <p style={{ paddingTop: 40 }}>服务编辑宫格</p>
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
        <Route path="/Edit/EditCard">
          <EditCard />
        </Route>
        <Route path="/Edit/EditEnter">
          <EditEnter />
        </Route>
        <Route path="/Edit/EditGrid">
          <EditGrid />
        </Route>
        <Route path="/Edit/EditList">
          <EditList />
        </Route>
        <Route path="/Edit/EditServiceList">
          <EditServiceList />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default Edit;
