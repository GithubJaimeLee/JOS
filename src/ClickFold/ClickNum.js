// color: "#415FFF"
import * as React from "react";
//import { useRef } from "react";
import { motion} from 'framer-motion';
//import background from "../bg2.png";
/* import backIcon from "../Icon/back.png"; */
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import '../App.css';


const   ClickNum = () => {
  return (
    <div >



      <Link to="/Click">
        <img  src={Bback} alt=" " style={{
          width: 30,
          position: 'absolute',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '100'
        }} />
      </Link>



          <motion.div className="MoveCard"
     
            style={{    
              backgroundColor: '#fff',
              top:500, 
              width: 375,
              height: 320,
              position: 'absolute',
              opacity: 1,
              zIndex: 0
            }}>
          </motion.div>
          
                      <div className="Background"
              style={{
                backgroundColor: '#E6ECF4',
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

export default   ClickNum;