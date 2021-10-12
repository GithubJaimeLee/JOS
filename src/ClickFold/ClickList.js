import * as React from "react";
import { motion} from 'framer-motion';
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
//import { Stack } from 'react-bootstrap';
import SetBody from "../Img/SetBody.png";
import SetHeader from "../Img/SetHeader.png";
import '../App.css';


const   ClickList = () => {
  return (
    <div >
      <Link to="/Click">
        <img  src={Bback} alt=" " style={{
          width: 30,
          position: 'fixed',
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
              backgroundImage: `url(${SetHeader})`,
              backgroundColor: '#bbb',
              top:0, 
              width: 375,
              height: 148,
              position: 'fixed',
              opacity: 1,
              zIndex: 1
            }}>
          </motion.div>

    <div style={{
    top:148,
    position:'absolute',

    backgroundImage: `url(${SetBody})`,
    width: 375,
    height:1596

    }}>

    </div>   

    {/*     <Stack gap={1}>
          <div className="ListCard" style={StyleCard}></div>
          <div className="ListCard" style={StyleCard}></div>
          <div className="ListCard" style={StyleCard}></div>
          <div className="ListCard" style={StyleCard}></div>
          <div className="ListCard" style={StyleCard}></div>
          <div className="ListCard" style={StyleCard}></div>
          <div className="ListCard" style={StyleCard}></div>
          <div className="ListCard" style={StyleCard}></div>
    </Stack> */}  
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

export default   ClickList;