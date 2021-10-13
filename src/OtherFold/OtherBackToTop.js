import * as React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import MusicHead from "../Img/MusicHead.png";
import MusicBodyRecommed from "../Img/MusicBodyRecommed.png";
import MusicFooter from "../Img/MusicFooter.png";
import MusicHeaderTap from "../Img/MusicHeaderTap.png";
import { useState } from "react";
import '../App.css';

const BackAnimation = {
  BackOne: {
  
  },
 BackTwo: {
    
      y:0
  }
}
const OtherBackToTop = () => {
  //const [animationBox, cycleAnimation] = useBacl("animationOne", "animationTwo");
  //const [isback, cycleBack] = BackCycle(("BackOne", "BackOne");
  const [isback, setIsBack] = useState("BackOne", "BackOne");
 // const BackToTapFunction = () => setIsBack(true);
  return (
    <div>
      <Link to="/Other">
        <img src={Bback} alt=" " style={{
          width: 30,
          position: 'fixed',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '100'
        }} />
      </Link>
      <AnimatePresence>  
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
          zIndex: 1
        }}>
      </motion.div>
      <div className="MusicHeaderTap"
        style={{
          backgroundImage: `url(${MusicHeaderTap})`,
          top: 92,
          position: 'fixed',
          width: 375,
          height: 38,
          zIndex: 1
        }}>

      </div> 
      <motion.div ClassName="BackToTopBtn"
         onClick={setIsBack}
        style={{
          width: 46,
          height: 46,
          position: 'fixed',
          bottom: 2,
          left: 24,
          backgroundColor: "blue",
          zIndex: 11,
          opacity: 0.5
        }}
      />



      <motion.div className="MusicBody" 
      
              variants={BackAnimation}
                   animate={isback}
                   
        drag="y"
        dragConstraints={{ top: -578, bottom: 0 }}
        dragElastic={1}
        dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
        style={{
          backgroundImage: `url(${MusicBodyRecommed})`,
          backgroundColor: '#ddd',
          top: 130,
          width: 375,
          height: 1205,
          position: 'absolute',
          opacity: 1,
          zIndex: 0
        }}
        whileTap={{
          y: 0
        }}
      />

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
      </AnimatePresence>  
    </div>
  );
}

export default OtherBackToTop;