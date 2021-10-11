import * as React from "react";
import { motion } from 'framer-motion';
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import MusicHead from "../Img/MusicHead.png";
import MusicBodyRecommed from "../Img/MusicBodyRecommed.png";
import MusicFooter from "../Img/MusicFooter.png";
import MusicHeaderTap from "../Img/MusicHeaderTap.png";
import '../App.css';

const ScrollTap = () => {
  return (
    <div>
      <Link to="/List">
        <img src={Bback} alt=" " style={{
          width: 30,
          position: 'fixed',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '100'
        }} />
      </Link>
      <motion.div className="MusicHead"
        //    drag="y"
        // dragConstraints={{ top: -40, bottom: 0 }}
        //    dragElastic={0}
        style={{
          backgroundImage: `url(${MusicHead})`,
          top: 0,
          width: 375,
          height: 92,
          position: 'fixed',
          opacity: 1,
          zIndex: 2
        }}>

      </motion.div>
     
      <motion.div className="MusicHeaderTap"
      style={{
        backgroundImage: `url(${MusicHeaderTap})`,
      top:92,
      position:'fixed',
      width: 375,
      height: 38,
      zIndex:1
      }}>
        <div
        style={{
        width:66,
        height:38,
        backgroundColor: "blue",
        position:'absolute',
        zIndex:2,
        bottom:0,
        left: 80,
        opacity:0.5
        }}/>
           
           <div
        style={{
        width:66,
        height:38,
        backgroundColor: "blue",
        position:'absolute',
        zIndex:2,
        bottom:0,
        left: 154,
        opacity:0.5
        }}/>
              <div
        style={{
        width:66,
        height:38,
        backgroundColor: "blue",
        position:'absolute',
        zIndex:2,
        bottom:0,
        left: 230,
        opacity:0.5
        }}/>
      </motion.div>
      <motion.div className="MusicBodyRecommed"
        drag="y"
        dragConstraints={{ top: -578, bottom: 0 }}
        dragElastic={1}
        dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
        style={{
          backgroundImage: `url(${MusicBodyRecommed})`,
          backgroundColor: '#ddd',
          top: 130,
          width: 375,
          height:1205,
          position: 'absolute',
          opacity: 1,
          zIndex: 0
        }}>
      </motion.div>
      <div className="MusicFooter"
        style={{
          backgroundImage: `url(${MusicFooter})`,
          bottom: 0,
          width: 375,
          height: 54,
          zIndex: 10,
          position: 'fixed'
        }}
      >
      </div>
    </div>
  );
}

export default ScrollTap;