import * as React from "react";
import { motion } from 'framer-motion';
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import ClickN from "../Img/ClickN.png";
import '../App.css';

const ClickNum = () => {
  return (
    <div >
      <Link to="/Click">
        <img src={Bback} alt=" " style={{
          width: 30,
          position: 'absolute',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '100'
        }} />
      </Link>

      <div className="Background"
        style={{
          backgroundImage: `url(${ClickN})`,
          width: 375,
          height: 812,
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 1,
          zIndex: -1
        }} >
      </div>
    </div>

  );
}

export default ClickNum;