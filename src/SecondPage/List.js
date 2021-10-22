import { motion } from 'framer-motion';
import background from "../Img/bg2.png";
import Bback from "../Icon/back.png";
import Scroll from '../ListFold/Scroll';
import ScrollJump from '../ListFold/ScrollJump';
import ScrollTitle from '../ListFold/ScrollTitle';
import ScrollTap from '../ListFold/ScrollTap';
import ScrollTitleList from '../ListFold/ScrollTitleList';
import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';

let cardActive = {
  width: 160, height: 100, backgroundColor: "#fff",
  margin: 8,
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
        <Route exact path="/List">
          <div >
            <motion.h1
             className="text-center" 
             style={{
              padding: 18,
              color: "#333",
              fontSize:28,
              y: 0
            }}
              transition={{
                type: "spring",
                velocity: 120
              }}
            >
              OOS列表动效
            </motion.h1>
            <Link to="/">
              <img src={Bback} alt=" " style={{
                width: 30,
                position: 'absolute',
                top: 16,
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
            <div 
            className="Row1">
            <Link to="/List/ScrollJump" style={{ textDecoration: 'none' }}>
              <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>列表滑动及回弹</p></motion.div>
              </Link>
              <Link to="/List/Scroll" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>横滑定位</p></motion.div>
              </Link>
              <Link to="/List/ScrollTitle" style={{ textDecoration: 'none' }}>
              <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>标题栏</p></motion.div>
              </Link>
            </div>
            <div 
            className="Row2" 
            >
            <Link to="/List/ScrollTap" style={{ textDecoration: 'none' }}>
              <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>子页签(Tap)</p> </motion.div>
              </Link>
              <Link to="/List/ScrollTitleList" style={{ textDecoration: 'none' }}>
              <motion.div whileHover={cardHover} style={cardActive} ><p style={{ paddingTop: 40 }}>子标题交替悬停</p></motion.div>
              </Link>
            </div>
           </div>
            <div 
            className="Bg"
            style={{
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
        <Route path="/List/ScrollJump">
        <ScrollJump />
        </Route>
        <Route path="/List/Scroll">
          <Scroll />
        </Route>
        <Route path="/List/ScrollTitle">
          <ScrollTitle />
        </Route>
        <Route path="/List/ScrollTap">
          <ScrollTap />
        </Route>
        <Route path="/List/ScrollTitleList">
          <ScrollTitleList />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

export default List;