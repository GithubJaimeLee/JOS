import * as React from "react";
import { motion } from 'framer-motion';
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import ContactHeader from "../Img/ContactHeader.png";
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactSetBar from "../Img/ContactSetBar.png";
import '../App.css';

const JumpNew = () => {
  return (
    <div>
      <Link to="/Jump">
        <img src={Bback} alt=" " style={{
          width: 30,
          position: 'fixed',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '100'
        }} />
      </Link>
      <motion.div className="ContactHeader"
        drag="y"
        dragConstraints={{ top: -40, bottom: 0 }}
        dragElastic={0}
        style={{
          backgroundImage: `url(${ContactHeader})`,

          top: 0,
          width: 375,
          height: 159,
          position: 'fixed',
          opacity: 1,
          zIndex: 2
        }}>
      </motion.div>
      <div className="ContactSetBar"
      style={{
      width:20,
      height: 456,
      backgroundImage: `url(${ContactSetBar})`,
      top:210,
      right: 0,
      zIndex:1, 
      position: 'fixed'
      }}
      />
      <motion.div className="ContactBody"
        drag="y"
        dragConstraints={{ top: -580, bottom: 0 }}
        dragElastic={1}
        style={{
          backgroundImage: `url(${ContactBody})`,
          top: 159,
          width: 375,
          height: 1169,
          position: 'absolute',
          opacity: 1,
          zIndex: 0
        }}>
        <div className="MaskA"
          style={{
            width: 375,
            height: 50,
            backgroundColor: '#C7000B',
            opacity: 0.5,
            position: 'relative',
            top: 56,
            left: 0,
          }}/>
          <div className="MaskF"
          style={{
            width: 375,
            height: 50,
            backgroundColor: '#C7000B',
            opacity: 0.5,
            position: 'relative',
            top: 314,
            left: 0,
          }}/>
          <div className="MaskL"
          style={{
            width: 375,
            height: 50,
            backgroundColor: '#C7000B',
            opacity: 0.5,
            position: 'relative',
            top: 358,
            left: 0,
          }}/>
           <div className="MaskW"
          style={{
            width: 375,
            height: 50,
            backgroundColor: '#C7000B',
            opacity: 0.5,
            position: 'relative',
            top: 455,
            left: 0,
          }}/>
                <div className="MaskX"
          style={{
            width: 375,
            height: 50,
            backgroundColor: '#C7000B',
            opacity: 0.5,
            position: 'relative',
            top: 552,
            left: 0,
          }}/>
                <div className="MaskZ"
          style={{
            width: 375,
            height: 50,
            backgroundColor: '#C7000B',
            opacity: 0.5,
            position: 'relative',
            top: 768,
            left: 0,
          }}/>

      </motion.div>
      <div className="ContactFooter"
        style={{
          backgroundImage: `url(${ContactFooter})`,

          width: 375,
          height: 65,
          position: 'fixed',
          bottom: 0,
          left: 0,
          opacity: 1,
          zIndex: 1
        }} ></div>
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

export default JumpNew;