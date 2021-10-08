// color: "#415FFF"
import * as React from "react";
//import { useRef } from "react";
import { motion} from 'framer-motion';
//import background from "../bg2.png";
/* import backIcon from "../Icon/back.png"; */
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import '../App.css';

const StyleCard ={    
    backgroundColor: '#fff',
    top:120, 
    width: 375,
    height: 90,
    opacity: 1,
    zIndex: 0,
  }
const   DeleteList = () => {
  return (
    <div >



      <Link to="/Delete">
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
              backgroundColor: '#fff',
              top:0, 
              width: 375,
              height: 100,
              position: 'absolute',
          
              opacity: 1,
              zIndex: 1
            }}>
          </motion.div>



    <div style={{
    top:100,
    position:'absolute'
    }}>
    <Stack gap={1}>
  <div className="ListCard" style={StyleCard}></div>
  <div className="ListCard" style={StyleCard}></div>
  <div className="ListCard" style={StyleCard}></div>
  <div className="ListCard" style={StyleCard}></div>
  <div className="ListCard" style={StyleCard}></div>
  <div className="ListCard" style={StyleCard}></div>
 </Stack>
    </div>     




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

export default   DeleteList;