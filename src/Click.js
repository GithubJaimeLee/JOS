import { motion } from 'framer-motion';
import background from "./Img/bg2.png";
import Bback from "./Icon/back.png";
import ClickList from './ClickFold/ClickList';
import ClickBtn from './ClickFold/ClickBtn';
import ClickIcon from './ClickFold/ClickIcon';
import ClickCard from './ClickFold/ClickCard';
import ClickNum from './ClickFold/ClickNum';
import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

let cardActive = {
  width: 160, height: 100, backgroundColor: "#fff",
  margin: 16,
  borderRadius: 12,
  textAlign: 'center',
  boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
  opacity: 0.8,
  color: "#666",
}

const cardHover = {
  scale: 1.1,
  boxShadow: "0px 0px 12px 0px rgba(65, 95, 255, 0.6)",
  fontWeight: 'bold',
  color: "#415fff",
  opacity: 1
}
const List = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Click">
          <div >
            <motion.h1 style={{
              padding: 30,
              color: "#333",
              fontSize:28,
              marginLeft: 70,
              y: 0
            }}
              transition={{
                type: "spring",
                velocity: 120
              }}
            >
              OOS点击动效
            </motion.h1>
            <Link to="/">
              <img src={Bback} alt=" " style={{
                width: 30,
                position: 'absolute',
                top: 20,
                left: 20,
                opacity: 1,
                zIndex: '100'
              }}>
              </img>
            </Link>
            <div className="List">
            <Link to="/Click/ClickList" style={{ textDecoration: 'none' }}>
   <motion.div whileHover={cardHover} style={cardActive} ><p style={{paddingTop:40}}>列表反馈</p></motion.div>
   </Link>
   <Link to="/Click/ClickIcon" style={{ textDecoration: 'none' }}>
   <motion.div whileHover={cardHover} style={cardActive} ><p style={{paddingTop:40}}>图标反馈</p></motion.div>
   </Link>
   <Link to="/Click/ClickBtn" style={{ textDecoration: 'none' }}>
   <motion.div whileHover={cardHover} style={cardActive} ><p style={{paddingTop:40}}>按钮反馈</p></motion.div>
   </Link>
</div>
   <div style={{marginLeft: 180, marginTop:-348}}>
   <Link to="/Click/ClickNum" style={{ textDecoration: 'none' }}>
   <motion.div whileHover={cardHover} style={cardActive} ><p style={{paddingTop:40}}>数字键盘反馈</p> </motion.div>
   </Link>
   <Link to="/Click/ClickCard" style={{ textDecoration: 'none' }}>
   <motion.div whileHover={cardHover} style={cardActive} ><p style={{paddingTop:40}}>卡片反馈</p></motion.div>
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
        <Route path="/Click/ClickList">
          <ClickList />
        </Route>
        <Route path="/Click/ClickIcon">
          <ClickIcon />
        </Route>
        <Route path="/Click/ClickBtn">
          <ClickBtn />
        </Route>
        <Route path="/Click/ClickNum">
          <ClickNum />
        </Route>
        <Route path="/Click/ClickCard">
          <ClickCard />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

export default List;