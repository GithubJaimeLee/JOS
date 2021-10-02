// color: "#415FFF"
import * as React from "react";
//import { useRef } from "react";
import { motion} from 'framer-motion';
//import background from "../bg2.png";
/* import backIcon from "../Icon/back.png"; */
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import '../App.css';


const ScrollTap = () => {
  return (
    <div>



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
              backgroundColor: '#ccc',
              top:0, 
              width: 375,
              height: 100,
              position: 'absolute',
              opacity: 1,
              zIndex: 1
            }}>
            <p
            style={{
            top:60,
            left:80,
            position:'absolute',
            fontSize:20,
            fontWeight:600
            }}
            >Tap1</p>
                      <p
            style={{
            top:60,
            left:240,
            position:'absolute',
            fontSize:20,
            fontWeight:600
            }}
            >Tap2</p>
          </motion.div>

          <motion.div className="MoveCard"
            style={{    
              backgroundColor: '#E6ECF4',
              top:70, 
              width: 375,
              height: 800,
              position: 'absolute',
              opacity: 1,
              zIndex: 0
            }}>
          </motion.div>
          
    
          </div>

  );
}

export default ScrollTap;