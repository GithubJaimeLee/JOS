import { motion } from 'framer-motion';
import background from "./bg2.png";
import backIcon from "./Icon/back.png";
import Scroll from './ListFold/Scroll';
import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';


let card={width: 160, height:100, backgroundColor:"#fff",
 margin:16, 
 borderRadius:12, 
 textAlign:'center', 
 boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
 opacity: 0.8,
 color: "#666"
}

let card2={width: 160, height:100, backgroundColor:"#fff",
 margin:16, 
 borderRadius:12, 
 textAlign:'center', 
 boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
 opacity: 0.4,
 color: "#999"
}


const cardHover={
  scale: 1.1,
  boxShadow: "0px 0px 12px 0px rgba(65, 95, 255, 0.6)",
  fontWeight: 'bold',
  color: "#415fff",
  opacity: 1
}
 // color: "#415FFF",
const   List = () => {
    return ( 
<Router> 
    <Switch>
        <Route exact path="/List">
             <div>
                    <motion.h1  style={{
                                      padding:30,  
                                      color: "#333",
                                      marginLeft: 60,  
                                      y: 0          
                                  }}                     
                                 transition={{ 
                                    type:"spring", 
                                    velocity: 120 
                                    }}  
                           >
                          OOS列表动效
                     </motion.h1>
                    <Link to="/">
                            <img src={backIcon} style={{
                                width: 30, 
                                position: 'absolute' , 
                                top: 20, 
                                left:20,
                                opacity: 1,
                                zIndex: '100'}}>
                            </img>
                     </Link>
                    <div className="List">
                         <Link to="/List/Scroll"  style={{ textDecoration: 'none'}}>
                         <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>滑动对位</p></motion.div>
                         </Link>
                         <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>滑动对位</p></motion.div>
                         <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>子标题 </p></motion.div>
                   </div>
                    <div style={{marginLeft: 180, marginTop:-348}}>
                          <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>子页签</p> </motion.div>
                          <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>滑动及回弹 </p></motion.div>
                    </div>
                    <div style={{ 
                           backgroundImage: `url(${background})`,
                           width: 375, 
                           height:812, 
                           position: 'absolute', 
                           top: 0, 
                           opacity: 1, 
                           zIndex: '-1'
                       }}>
                      </div>
            </div>
        </Route>
        <Route path="/List/Scroll">
               <Scroll />
        </Route> 
        <Route path="/">
       <App />
</Route> 
  </Switch>
</Router>


     );
}
 
export default List;