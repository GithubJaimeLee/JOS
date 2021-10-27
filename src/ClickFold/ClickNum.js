import * as React from "react";
import { motion } from 'framer-motion';
import ClickN from "../Img/ClickN.png";
import FingerClick from "../Img/OneFingerClick.png";
import '../App.css';
import NavBarPage from '../Component/NavBarPage';
const GridBox = {
  width: 315,
  height: 256,
 // backgroundColor: "blue",
  position: "relative",
  bottom: -482,
  left: 30,
  paddingRight: 0,
  display: "flex",
 // opacity:0.5
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
  const Info = <p>Hello,<br/> world!</p>;
  return (
    <div className="All">

    <NavBarPage
placement={'end'}
contextTitle={'说明'}
context={Info}
/>
<div className="ScreenCenter"
        style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            position:'absolute',
            top:0
        }}
        >
  
     
      <div className="Background"
        style={{
          backgroundImage: `url(${ClickN})`,
          width: 375,
          height: 812,
          position: 'absolute',
          top: 0,
          
          opacity: 1,
          zIndex: -1
        }} >
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
            <div className="OneFingerClick"
    style={{
        width: 32,
        height: 60,
        backgroundImage: `url(${FingerClick})`,
        position: 'relative',
        top:460,
        left: 66,
        zIndex: 11
    }}
/>
      </div>
    </div>
</div>
  );
}

export default ClickNum;