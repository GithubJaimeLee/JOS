import * as React from "react";
import { useRef } from "react";
import { motion } from 'framer-motion';
import background from "../Img/DeskOOS.png";
import Wback from "../Icon/Wback.png";
import { Link } from 'react-router-dom';
import '../App.css';

const Scroll = () => {
  const constraintsRef = useRef(null);
  return (
    <div>
      <Link to="/List">
        <img src={Wback} alt=" " style={{
          width: 30,
          position: 'absolute',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '100'
        }} />
      </Link>
      <div className="Scroll"
        style={{
          overflow: "hidden",
          width: 375,
          height: 812
        }}>
        <div className="scrollBox"
          ref={constraintsRef}
          style={{
            overflow: "hidden",
            width: 900,
            height: 600.1,
            position: 'relative',
            top: 100,
            left: -260,
            opacity: 1,
            zIndex: '21'
          }}>
          <motion.div className="AlertCard"
            drag="x"
           //  dragConstraints={constraintsRef}
            dragConstraints={{ left: -300,  right: 300}}
            dragElastic={2}
            
            dragTransition={{
                    timeConstant: 100,
                    power: 0,
                    // Snap calculated target to nearest 50 pixels
                    modifyTarget: target => Math.round(target / 300) * 300
                }}
               // dragConstraints={{ left: 0, right: 275, top: 0, bottom: 530 }}
           dragMomentum={true}







            style={{
              backgroundColor: "#fff",
              left: 300,
              width: 305,
              height: 600,
              position: 'absolute',
              borderRadius: 20,
              opacity: 1,
              zIndex: '20'

            }}
          >
          </motion.div>
        </div>
        <div className="blackMask"
          style={{
            backgroundColor: "#000000",
            width: 375,
            height: 812,
            position: 'absolute',
            top: 0,
            opacity: 0.4,
            zIndex: '2'
          }}
        ></div>
           <div className="BlurBackground"
            style={{
              backgroundImage: `url(${background})`,
              width: 375,
              height: 812,
              position: 'absolute',
              top: 0,
              opacity: 1,
              zIndex: '-1'
            }} >
        </div>
      </div>
    </div>
  );
}

export default Scroll;