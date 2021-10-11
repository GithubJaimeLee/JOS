import * as React from "react";
import { motion } from 'framer-motion';
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import '../App.css';

const OtherBackToTop = () => {
  return (
    <div>
      <Link to="/Other">
        <img src={Bback} alt=" " style={{
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
          backgroundColor: '#bbb',
          top: 0,
          width: 375,
          height: 100,
          position: 'absolute',

          opacity: 1,
          zIndex: 1
        }}>
      </motion.div>
      <motion.div className="MoveCard"
        drag="y"
        dragConstraints={{ top: -560, bottom: 60 }}
        dragElastic={0}
        dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
        style={{
          backgroundColor: '#ddd',
          top: 70,
          width: 375,
          height: 800,
          position: 'absolute',
          opacity: 1,
          zIndex: 0
        }}>
      </motion.div>

    </div>

  );
}

export default OtherBackToTop;