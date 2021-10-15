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
          <motion.div className="AlertCard"
            drag="x"
                 dragElastic={4}
                dragTransition={{
                    timeConstant: 80,
                    power: 1,
                    modifyTarget: target => Math.round(target / 240) * 240
                }}
                dragConstraints={{ left: -220, top:0, bottom:0, right: 220}}
                dragMomentum={true}

            style={{
              backgroundColor: "#fff",
              left:'20%',
              top:'15%',
              width: '60%',
              height: '60%',
              position: 'absolute',
              borderRadius: 20,
              opacity: 1,
              zIndex: '20'
            }}
          >
          </motion.div>
      
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