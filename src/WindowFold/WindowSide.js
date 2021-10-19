import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactBtnStyle =  {                          
    position: 'relative',
    bottom: -750,
    width: 60,
    height: 60,
    backgroundColor: "#666",
    borderRadius: 20,
    textAlign: 'center',
    zIndex:21,
    display:'flex',
    justifyContent: 'center',
}
const MaskStyle =  {                          
  position: 'absolute',
  bottom: 0,
  width: 375,
  height: 812,
  backgroundColor: "#999",
  textAlign: 'center',
  zIndex:1,
  opacity:0,
  display:'flex',
  justifyContent: 'center',
  y:0
}
const SideStyle = {
    width: 260,
    height: 812,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    opacity: 1,
    background: '#fff',
    position: 'absolute',
    bottom: 100,
    zIndex: 20,
    y:101,
    x:-320
}
const BoxAnimation = {
    animationOne: {
      x:-310
     
    },
    animationTwo: {
      x:-60
    }
}
const BgAnimation = {
  BgAnimationOne: {
     opacity:0
  
  },
  BgAnimationTwo: {
    
    opacity:0.5
  }
}
const BackIconStyle ={
    width: 30,
    position: 'fixed',
    top: 20,
    left: 20,
    opacity: 1,
    zIndex: '100'
 }

const ContactBodyStyle ={
    backgroundColor: '#EEEEEE',
    position: 'absolute',
    width: 375,
    height: 812,
    zIndex: 1,
 
 }



const   WindowSide = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
    const [animationBg, BgCycleAnimation] = useCycle("BgAnimationOne", "BgAnimationTwo");
    return (
        <div className="All"
        style={{
            width: '100%',
       display: 'flex',
       justifyContent: 'center',
        height: 812,
        position: 'absolute'
      
        }}>
            <Link to="/Window">
                <img src={backIcon} 
                alt=" " 
                style={BackIconStyle}
                />         
            </Link>
       {/*          <div
                style={{
                  width: 375,
                  height:812,
                overflow:'hidden',
                display: 'flex',
       justifyContent: 'center',
                }}
                 > */}
                <div className='ContactBody'
                    style={ContactBodyStyle}
                />
                 
            <AnimatePresence>
                    <div className='ContactBtn' 
                    onClick={() => cycleAnimation()&BgCycleAnimation()} 
                    style={ContactBtnStyle}
                   />
              
                    <motion.div className='boxChange'
                    style={SideStyle}
                    variants={BoxAnimation}
                    animate={animationBox}
                    transition={{type: "tween"}}
                   />
                    <motion.div className='MaskChange'
                    style={MaskStyle}
                    variants={BgAnimation}
                    animate={animationBg}
                   />
                 
             
            </AnimatePresence>
          {/*   </div> */}
        </div>
    );
}

export default   WindowSide;

