import { motion } from 'framer-motion';
import background from "./bg2.png";
import backIcon from "./Icon/back.png";
import { Link } from 'react-router-dom';
import Feed from './ClickFold/Feed';
import React from "react";
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

let card={width: 160, height:100, backgroundColor:"#fff",
 margin:16, 
 borderRadius:12, 
 textAlign:'center', 
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

const cardHover={
  scale: 1.1,
  boxShadow: "0px 0px 12px 0px rgba(65, 95, 255, 0.6)",
  fontWeight: 'bold',
  color: "#415fff",
  opacity: 1
}
 // color: "#415FFF",
const  Click = () => {
    return ( 
<Router> 
    <Switch>
        <Route exact path="/Click">
<div>

    <motion.h1  
    style={{
        padding:30,  
        color: "#333",
        marginLeft: 30,  
        y: 0
    }}

  transition={{ 
     type:"spring", 
     velocity: 120 
     }}   
   >
  OOS点击反馈动效
  </motion.h1>
  <Link to="/" >
  <img src={backIcon} alt=" " style={{
      width: 30, 
      position: 'absolute' , 
      top: 20, 
      left:20,
      opacity: 1,
      zIndex: '100'}}>
  </img>
  </Link>

<div className="Click">
   <Link to="/Click/Feed"  style={{ textDecoration: 'none'}}>
       <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>列表反馈</p></motion.div>
   </Link>
   <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>图标反馈</p></motion.div>
   <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>按钮反馈</p></motion.div>
</div>
   <div style={{marginLeft: 180, marginTop:-348}}>
   <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>数字键盘反馈</p> </motion.div>
   <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>卡片反馈</p></motion.div>
        </div>
        <div style={{ backgroundImage: `url(${background})` ,width: 375, height:812, position: 'absolute' , top: 0, 
   opacity: 1, 
zIndex: '-1'}}></div>
        </div>

</Route>
<Route path="/Click/Feed">
       <Feed />
</Route> 
<Route path="/">
       <App />
</Route> 
</Switch>
</Router>

     );
}
 
export default Click;