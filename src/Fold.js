import { motion } from 'framer-motion';
import background from "./Img/bg2.png";
import backIcon from "./Icon/back.png";
import { Link } from 'react-router-dom';
import FoldContext from './FoldFold/FoldContext';
import FoldCard from './FoldFold/FoldCard';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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


const Fold = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Fold">
          <div >
            <motion.h1
              style={{
                padding: 30,
                fontSize: 28,
                color: "#333",
                marginLeft: 40,
                y: 0
              }}

              transition={{ type: "spring", velocity: 120 }}
            >
              OOS展开折叠动效
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

            <div className="Fold">
              <Link to="/Fold/FoldContext" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>内容展开折叠</p></motion.div>
              </Link>
            </div>
            <div style={{ marginLeft: 180, marginTop: -116 }}>
              <Link to="/Fold/FoldCard" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>卡片展开折叠</p> </motion.div>
              </Link>
            </div>
            <div style={{
              backgroundImage: `url(${background})`,
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              opacity: 1,
              zIndex: '-1'
            }}>
            </div>
          </div>
        </Route>
        <Route path="/Fold/FoldContext">
          <FoldContext />
        </Route>
        <Route path="/Fold/FoldCard">
          <FoldCard />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

export default Fold;