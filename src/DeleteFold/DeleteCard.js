import * as React from "react";
import { motion } from 'framer-motion';
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import '../App.css';

const StyleCard = {
  backgroundColor: '#fff',
  top: 120,
  width: 355,
  height: 200,
  borderRadius: 12,
  opacity: 1,
  margin: 10,
  zIndex: 0,
}
const DeleteCard = () => {
  return (
    <div >
      <Link to="/Delete">
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
          backgroundColor: '#fff',
          top: 0,
          width: 375,
          height: 100,
          position: 'absolute',
          opacity: 1,
          zIndex: 1
        }}>
      </motion.div>
      <div style={{
        top: 100,
        position: 'absolute'
      }}>
        <Stack gap={1}>
          <div className="ListBigCard" style={StyleCard}></div>
          <div className="ListBigCard" style={StyleCard}></div>
        </Stack>
      </div>
      <div className="Background"
        style={{
          backgroundColor: '#E6ECF4',
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

export default DeleteCard;