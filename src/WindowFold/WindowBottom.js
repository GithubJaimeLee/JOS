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
    zIndex:1,
    display:'flex',
    justifyContent: 'center',
}
const ContactBubbleStyle = {
  width: 300,
        height: 300,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    opacity: 1,
    background: '#aaa',
    borderRadius: 12,
    position: 'absolute',
  
    bottom: 100,
    zIndex: 20
}
const BoxAnimation = {
    animationOne: {
      y:0
    
    },
    animationTwo: {
      y:-200
 
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



const WindowBottom = () => {
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
                    </div>
                    <motion.div className='boxChange'
                    style={ContactBubbleStyle}
                    variants={BoxAnimation}
                    animate={animationBox}
                />
             
            </AnimatePresence>
        </div>
    );
}

export default WindowBottom;

