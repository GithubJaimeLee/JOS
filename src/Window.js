import { motion } from 'framer-motion';
import background from "./bg2.png";
import backIcon from "./Icon/back.png";
import { Link } from 'react-router-dom';
import WindowJump from './WindowFold/WindowJump';
import WindowPull from './WindowFold/WindowPull';
import WindowBubble from './WindowFold/WindowBubble';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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


const Window = () => {
  return (

    <Router>
      <Switch>
        <Route exact path="/Window">
          <div >
            <motion.h1
              style={{
                padding: 30,
                color: "#333",
                marginLeft: 60,
                fontSize: 28,
                y: 0
              }}

              transition={{ type: "spring", velocity: 120 }}
            >
              OOS弹窗动效
            </motion.h1>
            <Link to="/">
              <img src={backIcon} alt=" " style={{
                width: 30,
                position: 'absolute',
                top: 20,
                left: 20,
                opacity: 1,
                zIndex: '100'
              }}>
              </img>
            </Link>

            <div className="Window">
              <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>底部弹窗</p></motion.div>
              <Link to="/List/WindowPull" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>下拉弹窗</p></motion.div>
              </Link>
              <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>悬浮通知</p></motion.div>
              <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>输入式弹窗</p></motion.div>
              <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>侧边音量</p></motion.div>
            </div>
            <div style={{ marginLeft: 180, marginTop: -580 }}>
              <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>侧边音量</p> </motion.div>
              <Link to="/List/WindowBubble" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>气泡</p></motion.div>
              </Link>
              <Link to="/List/WindowJump" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>菜单弹窗</p> </motion.div>
              </Link>
              <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>中心弹窗</p></motion.div>
            </div>
            <div style={{
              backgroundImage: `url(${background})`,
              width: 375,
              height: 812,
              position: 'absolute',
              top: 0,
              opacity: 1,
              zIndex: '-1'
            }}>
            </div>
          </div>
        </Route>
        <Route path="/List/WindowJump">
          <WindowJump />
        </Route>
        <Route path="/List/WindowPull">
          <WindowPull />
        </Route>
        <Route path="/List/WindowBubble">
          <WindowBubble />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>

  );
}

export default Window;