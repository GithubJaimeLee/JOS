import { motion } from 'framer-motion';
import background from "./Img/bg2.png";
import backIcon from "./Icon/back.png";
import { Link } from 'react-router-dom';
import AlertLoading from './AlertFold/AlertLoading';
import AlertNew from './AlertFold/AlertNew';
import AlertPage from './AlertFold/AlertPage';
import AlertPercent from './AlertFold/AlertPercent';
import AlertToast from './AlertFold/AlertToast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

let card = {
  width: 160, height: 100, backgroundColor: "#fff",
  margin: 16,
  borderRadius: 12,
  textAlign: 'center',
  boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
  opacity: 0.8,
  color: "#666"
}

const cardHover = {
  scale: 1.1,
  boxShadow: "0px 0px 12px 0px rgba(65, 95, 255, 0.6)",
  fontWeight: 'bold',
  color: "#415fff",
  opacity: 1
}

const Alert = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/Alert">
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
        OOS提示动效
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

      <div className="Alert">
             <Link to="/Alert/AlertNew" style={{ textDecoration: 'none' }}>
             <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>新事件标记</p></motion.div>
               </Link>
             <Link to="/Alert/AlertLoading" style={{ textDecoration: 'none' }}>
             <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>loading</p></motion.div>
               </Link>
             <Link to="/Alert/AlertToast" style={{ textDecoration: 'none' }}>
             <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>toast</p></motion.div>
               </Link>
      </div>
      <div style={{ marginLeft: 180, marginTop: -348 }}>
             <Link to="/Alert/AlertPage" style={{ textDecoration: 'none' }}>
             <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>页码指示</p> </motion.div>
               </Link>
             <Link to="/Alert/AlertPercent" style={{ textDecoration: 'none' }}>
             <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>进度指示器</p></motion.div>
               </Link>
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
        <Route path="/Alert/AlertNew">
          <AlertNew />
        </Route>
        <Route path="/Alert/AlertLoading">
          <AlertLoading />
        </Route>
        <Route path="/Alert/AlertPage">
          <AlertPage />
        </Route>
        <Route path="/Alert/AlertToast">
          <AlertToast />
        </Route>
        <Route path="/Alert/AlertPercent">
          <AlertPercent />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

export default Alert;