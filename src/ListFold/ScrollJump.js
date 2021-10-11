import * as React from "react";
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import '../App.css';
import SetHeader from "../Img/WSetHeader.png";
import SetBody from "../Img/SetBody.png";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useElementScroll } from "framer-motion";

const ScrollJump = () => {
  const ref = useRef()
  const { scrollYProgress } = useElementScroll(ref)
  const y = useMotionValue(0);
  const scale = useTransform( scrollYProgress, [0, 0.3, 1],["26px", "14px", "14px"]);

  return (
    <div className="allImportant" 
    ref={ref}
    style={{
    height:812,
    overflow: 'scroll'
    }} >
          <Link className="BackIcon" to="/List">
        <img src={Bback} alt=" " style={{
          width: 30,
          position: 'fixed',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '10000'
        }} />
      </Link>
      <div className="HeadCard"
        style={{
          backgroundColor: '#bbb',
          backgroundImage: `url(${SetHeader})`,
          top: 0,
          left: 0,
          width: 375,
          height: 148,
          position: 'fixed',
          opacity: 1,
          zIndex: 1
        }}>
      </div>
      <motion.p className="SetP"
            style={{
              fontSize: scale,
              position: 'fixed',
              top: 52,
              left:20,
              margin: 0,
              fontWeight: 'bold',
              zIndex:10
            }}> 设置
      </motion.p>

      <motion.div className="MoveBackground"
          drag="y"
       //   draggable="false"
          dragConstraints={{ top: -960, bottom: 0 }}
          dragElastic={1}
          dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
          style={{
            y,
            backgroundColor: '#ddd',
            backgroundImage: `url(${SetBody})`,
            top:148,
            width: 375,
            height: 1590,
            position:'relative',
            opacity: 1,
            zIndex: 0,
  
          }}>
        </motion.div>

      <div className="Background"
        style={{
          backgroundColor: '#f7f7f7',
          width: 375,
          height: 812,
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 1,
          zIndex: -1
        }} ></div>
    </div>
  );
}

export default ScrollJump;