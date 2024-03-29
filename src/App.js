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
import PhoneIcon from "./Icon/PhoneIcon.svg";
import Building from "./Icon/Building.png";
import ListIcon from "./Icon/ListIcon.png";
import WindowIcon from "./Icon/WindowIcon.png";
import ClickIcon from "./Icon/ClickIcon.png";
import JumpIcon from "./Icon/JumpIcon.png";
import AlertIcon from "./Icon/AlertIcon.png";
import OtherIcon from "./Icon/OtherIcon.png";
import ChooseIcon from "./Icon/ChooseIcon.png";
import DeskIcon from "./Icon/DeskIcon.png";
import DemoIcon from "./Icon/DemoIcon.png";
//导自定义组件
import NavBar from "./Component/NavBar";
//导入库
import { motion } from "framer-motion";
import background from "./Img/bg2.png";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const urlToDownload = "https://speed.hetzner.de/100MB.bin";

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
  color: "#333",
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
  const [download, setDownload] = useState(false);
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
            />
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
                <Link to="/Click" style={{ textDecoration: "none" }}>
                  <motion.div
                    whileTap={{ scale: 0.91 }}
                    whileHover={cardHover}
                    style={cardActive}
                  >
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={ClickIcon}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      控件(点击)
                    </p>
                  </motion.div>
                </Link>
                <Link to="/other" style={{ textDecoration: "none" }}>
                  <motion.div
                    whileTap={{ scale: 0.91 }}
                    whileHover={cardHover}
                    style={cardActive}
                  >
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={DemoIcon}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      模块demo
                    </p>
                  </motion.div>
                </Link>
                {/*      <Link to="/Window" style={{ textDecoration: "none" }}>
                  <motion.div
                    whileTap={{ scale: 0.91 }}
                    whileHover={cardHover}
                    style={cardActive}
                  >
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={WindowIcon}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      弹窗
                    </p>
                  </motion.div>
                </Link> */}

                {/*  <Link to="/Choose" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={ChooseIcon}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      选择类
                    </p>
                    <div></div>
                  </motion.div>
                </Link> */}
                {/*     <Link to="/Edit" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={Building}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      编辑类5%
                    </p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 0.05,
                          height: 10,
                          backgroundColor: "#ccc",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>
                  </motion.div>
                </Link> */}
                {/*           <Link to="/Other" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={OtherIcon}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      其他
                    </p>
                  </motion.div>
                </Link> */}
              </div>
              <div className="Row2">
                {/*       <Link to="/Desk" style={{ textDecoration: "none" }}>
                  <motion.div
                    whileTap={{ scale: 0.91 }}
                    whileHover={cardHover}
                    style={cardActive}
                  >
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={DeskIcon}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      长按
                    </p>
                    <div></div>
                  </motion.div>
                </Link>
                <Link to="/List" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={ListIcon}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      列表
                    </p>
                  </motion.div>
                </Link> */}
                {/*          <Link to="/Desk" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={DeskIcon}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      长按
                    </p>
                    <div></div>
                  </motion.div>
                </Link> */}
                <Link to="/Slide" style={{ textDecoration: "none" }}>
                  <motion.div
                    whileTap={{ scale: 0.91 }}
                    whileHover={cardHover}
                    style={cardActive}
                  >
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={JumpIcon}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      滑动
                    </p>
                  </motion.div>
                </Link>

                {/*        <Link to="/Alert" style={{ textDecoration: "none" }}>
                  <motion.div
                    whileTap={{ scale: 0.91 }}
                    whileHover={cardHover}
                    style={cardActive}
                  >
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={AlertIcon}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      二级页面
                    </p>
                  </motion.div>
                </Link>*/}

                {/*      <Link to="/Other" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={OtherIcon}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      其他
                    </p>
                  </motion.div>
                </Link> */}
                {/*     <Link to="/Delete" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={Building}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      删除类70%
                    </p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 0.7,
                          height: 10,
                          backgroundColor: "#ccc",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>
                  </motion.div>
                </Link> */}
                {/*            <Link to="/Fold" style={{ textDecoration: "none" }}>
                  <motion.div whileHover={cardHover} style={cardActive}>
                    <p style={{ paddingTop: 40 }}>
                      <img
                        src={Building}
                        alt=""
                        style={{
                          display: "inline-block",
                          width: 18,
                          marginRight: 8,
                          verticalAlign: "text-bottom",
                        }}
                      />
                      展开折叠类50%
                    </p>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          top: 0,
                          left: 10,
                          width: 140 * 0.5,
                          height: 10,
                          backgroundColor: "#ccc",
                          zIndex: 1,
                          borderRadius: 5,
                        }}
                      ></div>
                      <ProgressBar />
                    </div>
                  </motion.div>
                </Link> */}
              </div>
            </div>
            <div
              className="HomeRightBox col-lg-7"
              style={{
                display: "grid",
                alignContent: "center",
                justifyItems: "center",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                top: 20,
                //   right: 20,
              }}
            >
              <div>
                <p
                  className="MainTitle"
                  style={{
                    position: "relative",
                    fontSize: 30,
                  }}
                >
                  多终端 动效 UI案例
                </p>
              </div>
              <a
                className="DownloadText"
                style={{
                  color: "#415FFF",
                  fontSize: 16,
                }}
              >
                <img
                  src={PhoneIcon}
                  alt=""
                  style={{
                    display: "inline-block",
                    width: 18,
                    marginRight: 8,
                    verticalAlign: "text-bottom",
                  }}
                />
                1.31 Beta版
              </a>
              <Link to="/Apk/OOSbeta1.31.apk" target="_blank" download>
                <div
                  className="DownloadBtn"
                  style={{
                    marginTop: 30,
                    position: "relative",
                    color: "#fff",
                    background: "#415FFF",
                    fontSize: 15,
                    padding: "8px 22px",
                    width: 168,
                    height: 42,
                    borderRadius: 32,
                    display: "flex",
                    justifyContent: "center",
                    //   alignItems: "center",
                  }}
                >
                  下载Android App
                </div>
              </Link>
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
        <Route path="/Slide">
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
