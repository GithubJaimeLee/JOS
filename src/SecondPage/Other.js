import { motion } from 'framer-motion';
import background from "../Img/bg2.png";
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';
import OtherBackToTop from '../OtherFold/OtherBackToTop';
import OtherPull from '../OtherFold/OtherPull';
import OtherOpen from '../OtherFold/OtherOpen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';

let card = {
  width: 160, height: 100, backgroundColor: "#fff",
  margin: 8,
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


const Other = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Other">
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
              OOS其他动效
            </motion.h1>
            <Link to="/">
              <img src={backIcon} alt=" " style={{
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
      className="Grid"
      style={{
            display: "flex",
            justifyContent: 'center',
            }}
            >
      <div className="Row1">
              <Link to="/Other/OtherBackToTop" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>状态、标题栏置顶</p></motion.div>
              </Link>

   
            </div>
            <div className="Row2">
            <Link to="/Other/OtherPull" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>下拉刷新</p></motion.div>
              </Link>
             
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
        <Route path="/Other/OtherBackToTop">
          <OtherBackToTop />
        </Route>
        <Route path="/Other/OtherOpen">
          <OtherOpen />
        </Route>

        <Route path="/Other/OtherPull">
          <OtherPull />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

export default Other;