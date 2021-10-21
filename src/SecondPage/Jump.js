import { motion } from 'framer-motion';
import background from "../Img/bg2.png";
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';
import JumpSecond from '../JumpFold/JumpSecond';
import JumpNew from '../JumpFold/JumpNew';
import JumpSearch from '../JumpFold/JumpSearch';
import JumpApp from '../JumpFold/JumpApp';
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

/* let card2={width: 160, height:100, backgroundColor:"#fff",
 margin:16, 
 borderRadius:12, 
 textAlign:'center', 
 boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
 opacity: 0.4,
 color: "#999"
} */

const cardHover = {
  scale: 1.1,
  boxShadow: "0px 0px 12px 0px rgba(65, 95, 255, 0.6)",
  fontWeight: 'bold',
  color: "#415fff",
  opacity: 1
}


const Jump = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Jump">
          <div>
            <motion.h1
              className="text-center"
              style={{
                padding: 18,
                color: "#333",
                y: 0
              }}

              transition={{ type: "spring", velocity: 120 }}
            >
              OOS界面跳转动效
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
                <Link to="/Jump/JumpSecond" style={{ textDecoration: 'none' }}>
                  <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>二级界面跳转</p></motion.div>
                </Link>

                <Link to="/Jump/JumpNew" style={{ textDecoration: 'none' }}>
                  <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>新建</p></motion.div>
                </Link>
              </div>

              <div className="Row2">
                <Link to="/Jump/JumpSearch" style={{ textDecoration: 'none' }}>
                  <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>搜索</p> </motion.div>
                </Link>

                <Link to="/Jump/JumpApp" style={{ textDecoration: 'none' }}>
                  <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>应用间跳转</p></motion.div>
                </Link>
              </div>
            </div>
            <div style={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100vh',
              position: 'absolute',
              top: 0,
              opacity: 1,
              zIndex: '-1'
            }}>
            </div>
          </div>
        </Route>

        <Route path="/Jump/JumpNew">
          <JumpNew />
        </Route>
        <Route path="/Jump/JumpSecond">
          <JumpSecond />
        </Route>
        <Route path="/Jump/JumpApp">
          <JumpApp />
        </Route>
        <Route path="/Jump/JumpSearch">
          <JumpSearch />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

export default Jump;