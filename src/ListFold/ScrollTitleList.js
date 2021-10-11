import * as React from "react";
import { motion } from 'framer-motion';
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import ContactHeader from "../Img/ContactHeader.png";
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import '../App.css';

const ScrollTitleList = () => {
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
          zIndex: 1
        }}>
      </motion.div>
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

export default ScrollTitleList;