import { motion } from 'framer-motion';
import background from "../bg2.png";
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';
// color: "#415FFF"




const  Feed = () => {
return ( 
<div>
  <motion.h1 
   style={{
   padding:30,  
   color: "#333",
   marginLeft: 60,  
   y: 0
 }}

  transition={{ type:"spring", velocity: 120 }}  
   >
  OOS选择动效
  </motion.h1>
  <Link to="/Click">
  <img src={backIcon} alt=" " style={{
      width: 30, 
      position: 'absolute' , 
      top: 20, 
      left:20,
      opacity: 1,
      zIndex: '100'}}>
  </img>
  </Link>

<div className="Feed">
 
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
 
export default Feed;