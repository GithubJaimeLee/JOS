import * as React from "react";
import { motion } from 'framer-motion';
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import ClickN from "../Img/ClickN.png";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const GridBox = {
  width: 315,
  height: 256,
  //backgroundColor: "blue",
  position: "absolute",
  bottom: 72,
  left: 30,
  paddingRight: 0,
  display: "flex"
}
const RowGridBox = {
  width: 100,
  marginLeft: 23,
  marginRight: 24,
//  backgroundColor: 'red',
}
const ColGridBox = {
  marginTop: 3,
  height: 58,
  borderRadius: 35,
//  backgroundColor: '#000000',

}
const VBoxTap = {
 // scale: 0.9,
  backgroundColor: '#000000',
  opacity: 0.1
}
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
      <div className="R" style={GridBox}>

        <div className="C" style={RowGridBox}>
          <motion.div className="C" whileTap={VBoxTap} style={ColGridBox} />
          <motion.div className="C" whileTap={VBoxTap} style={ColGridBox} />
          <motion.div className="C" whileTap={VBoxTap} style={ColGridBox} />
          <motion.div className="C" whileTap={VBoxTap} style={ColGridBox} />
        </div>
        <div className="C" style={RowGridBox}>
          <motion.div className="C" whileTap={VBoxTap} style={ColGridBox} />
          <motion.div className="C" whileTap={VBoxTap} style={ColGridBox} />
          <motion.div className="C" whileTap={VBoxTap} style={ColGridBox} />
          <motion.div className="C" whileTap={VBoxTap} style={ColGridBox} />
        </div>
        <div className="C" style={RowGridBox}>
          <motion.div className="C" whileTap={VBoxTap} style={ColGridBox} />
          <motion.div className="C" whileTap={VBoxTap} style={ColGridBox} />
          <motion.div className="C" whileTap={VBoxTap} style={ColGridBox} />
          <motion.div className="C" whileTap={VBoxTap} style={ColGridBox} />
        </div>
      </div>
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