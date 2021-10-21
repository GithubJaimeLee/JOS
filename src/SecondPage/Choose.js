import { motion } from 'framer-motion';
import background from "../Img/bg2.png";
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';
import ChooseDate from '../ChooseFold/ChooseDate';
import ChooseLoadingSwitch from '../ChooseFold/ChooseLoadingSwitch';
import ChooseMultipleChoice from '../ChooseFold/ChooseMultipleChoice';
import ChooseSingleChoice from '../ChooseFold/ChooseSingleChoice';
import ChooseSlider from '../ChooseFold/ChooseSlider';
import ChooseSwitch from '../ChooseFold/ChooseSwitch';
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


const Choose = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/Choose">
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
        OOS选择动效
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
              className="Gird"
              style={{
            display: "flex",
            justifyContent: 'center',
            }}
             >
            <div className="Row1">
         <Link to="/Choose/ChooseDate" style={{ textDecoration: 'none' }}>
         <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>日期滑动选择器</p></motion.div>
         </Link>
         <Link to="/Choose/ChooseSwitch" style={{ textDecoration: 'none' }}>
         <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>开关</p></motion.div>
         </Link>
         <Link to="/Choose/ChooseSlider" style={{ textDecoration: 'none' }}>
         <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>滑动条</p></motion.div>
      </Link>
      </div>
      <div className="Row2">
         <Link to="/Choose/ChooseLoadingSwitch" style={{ textDecoration: 'none' }}>
         <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>加载类开关</p> </motion.div>
         </Link>
         <Link to="/Choose/ChooseSingleChoice" style={{ textDecoration: 'none' }}>
         <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>单选框</p></motion.div>
         </Link>
         <Link to="/Choose/ChooseMultipleChoice" style={{ textDecoration: 'none' }}>
         <motion.div whileHover={cardHover} style={card} ><p style={{ paddingTop: 40 }}>复选框</p></motion.div>
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
        <Route path="/Choose/ChooseDate">
          <ChooseDate />
        </Route>
        <Route path="/Choose/ChooseLoadingSwitch">
          <ChooseLoadingSwitch/>
        </Route>
        <Route path="/Choose/ChooseMultipleChoice">
          <ChooseMultipleChoice />
        </Route>
        <Route path="/Choose/ChooseSwitch">
          <ChooseSwitch />
        </Route>
        <Route path="/Choose/ChooseSingleChoice">
          <ChooseSingleChoice />
        </Route>
        <Route path="/Choose/ChooseSlider">
          <ChooseSlider />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
export default Choose;