// color: "#415FFF"
import * as React from "react";
//import { useRef } from "react";
import { motion} from 'framer-motion';
//import background from "../bg2.png";
/* import backIcon from "../Icon/back.png"; */
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import '../App.css';
import SetHeader from "../Img/SetHeader.png";
import SetBody from "../Img/SetBody.png";


const ScrollJump = () => {
  return (
    <div style={{
    overflow:'scroll',
    height:812
    }}>

{/* <p 
style={{
position:'absolute',
top:50,
left: 20,
fontWeight: 'bold',
fontSize:26,
zIndex:1000
}}>设置</p> 
 */}
      <Link to="/List">
        <img  src={Bback} alt=" " style={{
          width: 30,
          position: 'absolute',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '100'
        }} />
      </Link>
          <motion.div className="HeadCard"
          drag="y"
          dragConstraints={{ top: -40, bottom: 0 }}
            dragElastic={0}
            style={{    
              backgroundColor: '#bbb',
              backgroundImage: `url(${SetHeader})`, 
              top:0, 
              left:0,
              width: 375,
              height: 148,
              position: 'absolute',
          
              opacity: 1,
              zIndex: 1
            }}>
          </motion.div>


          <motion.div className="MoveCard"
          drag="y"
          dragConstraints={{ top: -900, bottom: 60 }}
            dragElastic={0}
            dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
            style={{    
              backgroundColor: '#ddd',
              backgroundImage: `url(${SetBody})`, 
              top:88, 
              width: 375,
              height: 1590,
              position: 'relative',
              opacity: 1,
              zIndex: 0
            }}>
          </motion.div>
          
                      <div className="Background"
              style={{
                backgroundColor: '#f7f7f7',
                width: 375,
                height: 812,
                position: 'absolute',
                top: 0,
                left:0,
                opacity: 1,
                zIndex: -1
              }} ></div>
          </div>

  );
}

export default ScrollJump;