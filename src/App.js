import List from './List';
import Click from './Click';
import Delete from './Delete';
import Other from './Other';
import Fold from './Fold';
import Alert from './Alert';
import Window from './Window';
import Jump from './Jump';
import Choose from './Choose';
import Desk from './Desk';
import Edit from './Edit';

//导入库
import { motion } from 'framer-motion';
import background from "./Img/bg.png";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

let cardActive = {
  width: 160, height: 100, backgroundColor: "#fff",
  margin: 16,
  borderRadius: 12,
  textAlign: 'center',
  boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
  opacity: 0.8,
  color: "#666",
}


let cardInactive = {
  width: 160, height: 100, backgroundColor: "#fff",
  margin: 16,
  borderRadius: 12,
  textAlign: 'center',
  boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
  opacity: 0.4,
  color: "#999"
}

const cardHover = {
  scale: 1.1,
  boxShadow: "0px 0px 12px 0px rgba(65, 95, 255, 0.6)",
  fontWeight: 'bold',
  color: "#415fff",
  opacity: 1
}


function ProgressBar() {

  return (


    <div
      style={{
        position: 'relative',
        top: -10,
        left: 10,
        width: 140,
        height: 10,
        backgroundColor: '#EEEEEE',
        borderRadius: 5,
        zIndex: -1
      }}>
    </div>

  );
}

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <motion.div  >
            <motion.h1 style={{
              padding: 30
            }}
              initial={{
                marginLeft: 30,
                fontSize: 28,
                y: -20
              }}
              animate={{           
                color: "#333",
                // color: "#415FFF",
                marginLeft: 66,
                fontSize: 28,
                y: 0
              }}
              transition={{ type: "spring", velocity: 120 }}
            >OOS动效平台
            </motion.h1>
            <div>
              <Link to="/Desk" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} >   <p style={{ paddingTop: 40 }}>OOS桌面85%</p>
                  <div>
                    <div
                      style={{
                        position: 'relative',
                        top: 0,
                        left: 10,
                        width: 140 * 0.85,
                        height: 10,
                        backgroundColor: '#415FFF',
                        zIndex: 1,
                        borderRadius: 5
                      }}>
                    </div>
                    <ProgressBar /></div>
                </motion.div>
              </Link>
              <Link to="/Window" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>弹窗15%</p>
                  <div>
                    <div
                      style={{
                        position: 'relative',
                        top: 0,
                        left: 10,
                        width: 140 * 0.15,
                        height: 10,
                        backgroundColor: '#415FFF',
                        zIndex: 1,
                        borderRadius: 5
                      }}>
                    </div>
                    <ProgressBar /></div>   </motion.div>
              </Link>
              <Link to="/Jump" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>界面跳转0%</p>
                  <div>
                    <div
                      style={{
                        position: 'relative',
                        top: 0,
                        left: 10,
                        width: 140 * 0.0,
                        height: 10,
                        backgroundColor: '#415FFF',
                        zIndex: 1,
                        borderRadius: 5
                      }}>
                    </div>
                    <ProgressBar /></div>   </motion.div>
              </Link>
              <Link to="/Choose" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>选择类0%</p>
                  <div>
                    <div
                      style={{
                        position: 'relative',
                        top: 0,
                        left: 10,
                        width: 140 * 0.0,
                        height: 10,
                        backgroundColor: '#415FFF',
                        zIndex: 1,
                        borderRadius: 5
                      }}>
                    </div>
                    <ProgressBar /></div>   </motion.div>
              </Link>
              <Link to="/Edit" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>编辑类0%</p>
                  <div>
                    <div
                      style={{
                        position: 'relative',
                        top: 0,
                        left: 10,
                        width: 140 * 0.0,
                        height: 10,
                        backgroundColor: '#415FFF',
                        zIndex: 1,
                        borderRadius: 5
                      }}>
                    </div>
                    <ProgressBar /></div>   </motion.div>
              </Link>
              <Link to="/Other" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>其他类5%</p>
                  <div>
                    <div
                      style={{
                        position: 'relative',
                        top: 0,
                        left: 10,
                        width: 140 * 0.05,
                        height: 10,
                        backgroundColor: '#415FFF',
                        zIndex: 1,
                        borderRadius: 5
                      }}>
                    </div>
                    <ProgressBar /></div>   </motion.div>
              </Link>
            </div>
            <div style={{ marginLeft: 180, marginTop: -696 }}>
              <Link to="/List" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>列表15%</p>

                  <div>
                    <div
                      style={{
                        position: 'relative',
                        top: 0,
                        left: 10,
                        width: 140 * 0.15,
                        height: 10,
                        backgroundColor: '#415FFF',
                        zIndex: 1,
                        borderRadius: 5
                      }}>
                    </div>
                    <ProgressBar /></div>   </motion.div>
              </Link>
              <Link to="/Click" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>点击反馈5%</p>

                  <div>
                    <div
                      style={{
                        position: 'relative',
                        top: 0,
                        left: 10,
                        width: 140 * 0.05,
                        height: 10,
                        backgroundColor: '#415FFF',
                        zIndex: 1,
                        borderRadius: 5
                      }}>
                    </div>
                    <ProgressBar /></div>   </motion.div>
              </Link>
              <Link to="/Alert" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>提示类0%</p>

                  <div>
                    <div
                      style={{
                        position: 'relative',
                        top: 0,
                        left: 10,
                        width: 140 * 0.0,
                        height: 10,
                        backgroundColor: '#415FFF',
                        zIndex: 1,
                        borderRadius: 5
                      }}>
                    </div>
                    <ProgressBar /></div>   </motion.div>
              </Link>
              <Link to="/Delete" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>删除类10%</p>

                  <div>
                    <div
                      style={{
                        position: 'relative',
                        top: 0,
                        left: 10,
                        width: 140 * 0.1,
                        height: 10,
                        backgroundColor: '#415FFF',
                        zIndex: 1,
                        borderRadius: 5
                      }}>
                    </div>
                    <ProgressBar /></div>   </motion.div>
              </Link>
              <Link to="/Fold" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>展开折叠类10%</p>
                  <div>
                    <div
                      style={{
                        position: 'relative',
                        top: 0,
                        left: 10,
                        width: 140 * 0.1,
                        height: 10,
                        backgroundColor: '#415FFF',
                        zIndex: 1,
                        borderRadius: 5
                      }}>
                    </div>
                    <ProgressBar /></div>   </motion.div>
              </Link>
            </div>
            <div style={{
              backgroundImage: `url(${background})`,
              width: 375,
              height: 812, 
              position: 'absolute', 
              top: 0,
              opacity: 1,
              zIndex: '-2'
            }}></div>
          </motion.div>
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
      </Switch>
    </Router>
  );
}

export default App;