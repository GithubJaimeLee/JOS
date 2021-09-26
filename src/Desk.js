//图片
import background from "./bg2.png";
import backIcon from "./Icon/back.png";
//页码
import App from './App';
import DApp  from './DeskFold/deskMove';
import DChange  from './DeskFold/deskChange';
import DZoom  from './DeskFold/deskZoom';
import DDirection  from './DeskFold/deskDirection';
//库
import { motion } from 'framer-motion';
import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


let cardActive = {
    width: 160, height: 100, backgroundColor: "#fff",
    margin: 16,
    borderRadius: 12,
    textAlign: 'center',
    boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
    opacity: 0.8,
    color: "#666",
  }
  
  let cardInactive = {
    width: 160, height: 100, backgroundColor: "#fff",
    margin: 16,
    borderRadius: 12,
    textAlign: 'center',
    boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
    opacity: 0.4,
    color: "#999"
  }

/* let card={width: 160, height:100, backgroundColor:"#fff",
 margin:16, 
 borderRadius:12, 
 textAlign:'center', 
 boxShadow: "0px 4px 10px 0px rgba(65, 95, 255, 0.25)",
 opacity: 0.8,
 color: "#666"
}
 */
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
const   Desk = () => {
    return ( 
<Router> 
    <Switch>
        <Route exact path="/Desk">
             <div>
                    <motion.h1  style={{
                                      padding:30,  
                                      color: "#333",
                                      marginLeft: 70,  
                                      y: 0          
                                  }}                     
                                 transition={{ 
                                    type:"spring", 
                                    velocity: 120 
                                    }}  
                           >
                          OOS桌面动效
                     </motion.h1>
                    <Link to="/">
                            <img src={backIcon} alt=" " style={{
                                width: 30, 
                                position: 'absolute' , 
                                top: 20, 
                                left:20,
                                opacity: 1,
                                zIndex: '100'}}>
                            </img>
                     </Link>
                    <div className="Desk">
                         <Link to="/Desk/deskMove"  style={{ textDecoration: 'none'}}>
                         <motion.div whileHover={cardHover} style={cardActive} ><p style={{paddingTop:40}}>图标移动自动补位</p></motion.div>
                         </Link>
                         <Link to="/Desk/deskDirection"  style={{ textDecoration: 'none'}}>
                         <motion.div whileHover={cardHover} style={cardActive} ><p style={{paddingTop:40}}>图标变形（方向）</p></motion.div>
                         </Link>
                         <Link to="/Desk/deskZoom"  style={{ textDecoration: 'none'}}>
                         <motion.div whileHover={cardHover} style={cardActive} ><p style={{paddingTop:40}}>图标变形（缩小）</p></motion.div>
                         </Link>
                   </div>
                    <div style={{marginLeft: 180, marginTop:-348}}>
                    <Link to="/Desk/deskChange"  style={{ textDecoration: 'none'}}>
                          <motion.div whileHover={cardHover} style={cardActive} ><p style={{paddingTop:40}}>图标变形</p> </motion.div>
                          </Link>  
        
                          <motion.div whileHover={cardHover} style={cardInactive} ><p style={{paddingTop:40}}>图标创建文件夹 </p></motion.div>
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
        <Route path="/Desk/deskMove">
               <DApp />
        </Route> 
        <Route path="/Desk/deskChange">
               <DChange />
        </Route> 
        <Route path="/Desk/deskZoom">
               <DZoom />
        </Route> 
        <Route path="/Desk/deskDirection">
               <DDirection />
        </Route> 
        <Route path="/">
       <App />
       </Route> 
  </Switch>
</Router>


     );
}
 
export default Desk;