import List from "./SecondPage/List";
import Click from "./SecondPage/Click";
import Delete from "./SecondPage/Delete";
import Other from "./SecondPage/Other";
import Fold from "./SecondPage/Fold";
import Alert from "./SecondPage/Alert";
import Window from "./SecondPage/Window";
import Jump from "./SecondPage/Jump";
import Choose from "./SecondPage/Choose";
import Desk from "./SecondPage/Desk";
import Edit from "./SecondPage/Edit";
import Page404 from "./OtherFold/Page404";
import MenuIcon from "./Icon/Menu.png";
//导自定义组件
import NavBar from "./Component/NavBar";
//导入库
import { motion } from "framer-motion";
import background from "./Img/bg2.png";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

let cardActive = {
  width: 160,
  height: 100,
  backgroundColor: "#fff",
  margin: 8,
  borderRadius: 12,
  textAlign: "center",
  // boxShadow: "0px 0px 12px  rgba(65, 95, 255, 0.05)",
  boxShadow: "0px 0px 16px  rgba(0, 0, 0, 0.15)",
  opacity: 0.8,
  color: "#666",
};

let cardInactive = {
  width: 160,
  height: 100,
  backgroundColor: "#fff",
  margin: 8,
  borderRadius: 12,
  textAlign: "center",
  boxShadow: "0px 0px 16px  rgba(0, 0, 0, 0.15)",
  // boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
  opacity: 0.4,
  color: "#999",
};

const cardHover = {
  scale: 1.1,
  boxShadow: "0px 0px 16px rgba(65, 95, 255, 0.2)",
  fontWeight: "bold",
  color: "#415fff",
  opacity: 1,
};

function ProgressBar() {
  return (
    <div
      style={{
        position: "relative",
        top: -10,
        left: 10,
        width: 140,
        height: 10,
        backgroundColor: "#EEEEEE",
        borderRadius: 5,
        zIndex: -1,
      }}
    ></div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Link to="/">
            <img
              src={MenuIcon}
              alt=" "
              style={{
                width: 30,
                position: "absolute",
                top: 20,
                left: 20,
                opacity: 0.2,
                zIndex: "0",
              }}
            ></img>
          </Link>
          <NavBar />
          <div
            id="HomePageScreen"
            style={{
              display: "flex",
            }}
          >
            {/*             <motion.h1 className="text-center" style={{
              padding: 18
            }}
              initial={{
              
                fontSize: 28,
                y: -20
              }}
              animate={{           
                color: "#333",
                
                fontSize: 28,
                y: 0
              }}
              transition={{ type: "spring", velocity: 120 }}
            >OOS动效平台
            </motion.h1> */}

            <div
              className="Grid col-lg-5"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                marginTop: 14,
              }}
            >
              <div className="Row1">
                <Link to="/Desk" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    {" "}
                    <p style={{ paddingTop: 40 }}>OOS桌面75%</p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 0.75,
                          height: 10,
                          backgroundColor: "#415FFF",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>
                  </motion.div>
                </Link>
                <Link to="/Window" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>弹窗90%</p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 0.9,
                          height: 10,
                          backgroundColor: "#415FFF",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>
                  </motion.div>
                </Link>
                <Link to="/Jump" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>界面跳转5%</p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 0.05,
                          height: 10,
                          backgroundColor: "#415FFF",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>{" "}
                  </motion.div>
                </Link>
                <Link to="/Choose" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>选择类5%</p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 0.05,
                          height: 10,
                          backgroundColor: "#415FFF",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>{" "}
                  </motion.div>
                </Link>
                <Link to="/Edit" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>编辑类5%</p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 0.05,
                          height: 10,
                          backgroundColor: "#415FFF",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>{" "}
                  </motion.div>
                </Link>
                <Link to="/Other" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>其他45%</p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 0.45,
                          height: 10,
                          backgroundColor: "#415FFF",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>{" "}
                  </motion.div>
                </Link>
              </div>
              <div className="Row2">
                <Link to="/List" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>列表100%</p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 1,
                          height: 10,
                          backgroundColor: "#415FFF",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>{" "}
                  </motion.div>
                </Link>
                <Link to="/Click" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>点击反馈100%</p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 1,
                          height: 10,
                          backgroundColor: "#415FFF",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>{" "}
                  </motion.div>
                </Link>
                <Link to="/Alert" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>提示类25%</p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 0.25,
                          height: 10,
                          backgroundColor: "#415FFF",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>{" "}
                  </motion.div>
                </Link>
                <Link to="/Delete" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>删除类15%</p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 0.15,
                          height: 10,
                          backgroundColor: "#415FFF",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>{" "}
                  </motion.div>
                </Link>
                <Link to="/Fold" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>展开折叠类30%</p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 0.3,
                          height: 10,
                          backgroundColor: "#415FFF",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>{" "}
                  </motion.div>
                </Link>
              </div>
            </div>
            <div
              className="HomeRightBox col-lg-7"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                top: 20,
                right: 20,
              }}
            >
              <p
                style={{
                  fontSize: 30,
                }}
              >
                Vivo风格的多终端 动效 组件库
              </p>
            </div>
            <div
              className="Mbg"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                position: "absolute",
                opacity: 1,
                zIndex: "-2",
              }}
            ></div>
          </div>
        </Route>
        <Route path="/List">
          <List />
        </Route>
        <Route path="/Click">
          <Click />
        </Route>
        <Route path="/Fold">
          <Fold />
        </Route>
        <Route path="/Desk">
          <Desk />
        </Route>
        <Route path="/Delete">
          <Delete />
        </Route>
        <Route path="/Alert">
          <Alert />
        </Route>
        <Route path="/Other">
          <Other />
        </Route>
        <Route path="/Jump">
          <Jump />
        </Route>
        <Route path="/Window">
          <Window />
        </Route>
        <Route path="/Choose">
          <Choose />
        </Route>
        <Route path="/Edit">
          <Edit />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
