import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';

import '../App.css';
import '../scroll.css';

import Bback from "../Icon/back.png";
import SetHeader from "../Img/WSetHeader.png";
import SetBody from "../Img/SetBody.png";

const ScrollTitle = () => {

  const y = useMotionValue(0);
  const yInput = [0, -960];
  const fontSize = useTransform(y, yInput, ["26px", "0px"]);
  return (
    <div className="all" style={{
    overflow:'scroll'
    }}>
      <motion.p className="SetP"
            style={{
              position: 'fixed',
              top: 56,
              left:20,
              margin: 0,
              fontSize
            }}> 设置
      </motion.p>
      <motion.div className="MoveBackground"
          drag="y"
          dragConstraints={{ top: -960, bottom: 0 }}
      //    dragElastic={0}
     //     dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
          style={{
            y,
         
            backgroundColor: '#ddd',
            backgroundImage: `url(${SetBody})`,
            top:148,
            width: 375,
            height: 1590,
            position: 'absolute',
            opacity: 1,
            zIndex: -10
          }}>
        </motion.div>
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
          zIndex: -1
        }}>
      </div>
    </div>
  );
}

export default ScrollTitle;