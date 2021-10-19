import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactBtnStyle =  {                          
    position: 'relative',
    right: -150,
    bottom: -500,
    width: 60,
    height: 60,
    backgroundColor: "#aaa",
    borderRadius: 20,
    textAlign: 'center',
    zIndex:1,opacity:0.5
    
}
const ContactBubbleStyle = {
  width: 60,
        height: 300,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    opacity: 1,
    background: '#666',
    borderRadius: 12,
    position: 'absolute',
    x:100,
    bottom: 100,
    zIndex: 20
}
const BoxAnimation = {
    animationOne: {
      x:100
    
    },
    animationTwo: {
      x:0
 
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



const WindowVoice = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");

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

    
                <div className='ContactBody'
                    style={ContactBodyStyle}
                />
            <AnimatePresence>
                    <div className='ContactBtn' 
                    onClick={() => cycleAnimation()} 
                    style={ContactBtnStyle}
                 >
                       <motion.div className='boxChange'
                    style={ContactBubbleStyle}
                    variants={BoxAnimation}
                    animate={animationBox}
                /></div>
                    
             
            </AnimatePresence>
        </div>
    );
}

export default WindowVoice;

