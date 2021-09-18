import { motion } from 'framer-motion';
import background from "./bg2.png";
import backIcon from "./Icon/back.png";
import { Link } from 'react-router-dom';
// color: "#415FFF"

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


const  Jump = () => {
return ( 
<div>
  <motion.h1 
   style={{
   padding:30,  
   color: "#333",
   marginLeft: 30,  
   y: 0
 }}

  transition={{ type:"spring", velocity: 120 }}  
   >
  OOS界面跳转动效
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

<div className="Jump">
   <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>二级界面跳转</p></motion.div>
   <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>新建</p></motion.div>
</div>
   <div style={{marginLeft: 180, marginTop:-232}}>
   <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>搜索</p> </motion.div>
   <motion.div whileHover={cardHover} style={card} ><p style={{paddingTop:40}}>应用间跳转</p></motion.div>
        </div>
        <div style={{ 
          backgroundImage: `url(${background})` ,
          width: 375, 
          height:812, 
          position: 'absolute', 
          top: 0, 
          opacity: 1, 
          zIndex: '-1'}}>
          </div>
        </div>
     );
}
 
export default Jump;