import { motion } from 'framer-motion';
import background from "./Img/bg2.png";
import backIcon from "./Icon/back.png";
import { Link } from 'react-router-dom';
import WindowJump from './WindowFold/WindowJump';
import WindowPull from './WindowFold/WindowPull';
import WindowBubble from './WindowFold/WindowBubble';
import WindowAlert from './WindowFold/WindowAlert';
import WindowBottom from './WindowFold/WindowBottom';
import WindowCenter from './WindowFold/WindowCenter';
import WindowInput from './WindowFold/WindowInput';
import WindowSide from './WindowFold/WindowSide';
import WindowVoice from './WindowFold/WindowVoice';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

let cardActive = {
  width: 160, height: 100, backgroundColor: "#fff",
  margin: 8,
  borderRadius: 12,
  textAlign: 'center',
  boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
  opacity: 0.8,
  color: "#666",
}

let cardInactive = {
  width: 160, height: 100, backgroundColor: "#fff",
  margin: 8,
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
             className="text-center" 
              style={{
                padding: 18,
                color: "#333",
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
             <div
              className="Gird"
              style={{
            display: "flex",
            justifyContent: 'center',
            }}
             >
            <div className="Row1">
              <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>底部弹窗</p></motion.div>
              <Link to="/Window/WindowPull" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>下拉弹窗</p></motion.div>
              </Link>
              <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>悬浮通知</p></motion.div>
              <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>输入式弹窗</p></motion.div>
              <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>侧边菜单</p></motion.div>
            </div>
            <div className="Row2">
              <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>侧边音量</p> </motion.div>
              <Link to="/Window/WindowBubble" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>气泡</p></motion.div>
              </Link>
              <Link to="/Window/WindowJump" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>菜单弹窗</p> </motion.div>
              </Link>
              <motion.div whileHover={cardHover} style={cardInactive} ><p style={{ paddingTop: 40 }}>中心弹窗</p></motion.div>
            </div>
            </div>
            <div style={{
              backgroundImage: `url(${background})`,
              backgroundSize:'cover',
              width: '100%', 
    height:'100vh', 
              position: 'absolute',
              top: 0,
              opacity: 1,
              zIndex: '-1'
            }}>
            </div>
          </div>
        </Route>
        <Route path="/Window/WindowJump">
          <WindowJump />
        </Route>
        <Route path="/Window/WindowPull">
          <WindowPull />
        </Route>
        <Route path="/Window/WindowBubble">
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