import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactHeader from "../Img/ContactHeader.png";

const ContactBtnStyle =  {                          
    position: 'absolute',
    left: 110,
    bottom: 6,
    width: 60,
    height: 60,
    backgroundColor: "red",
    borderRadius: 20,
    textAlign: 'center',
    zIndex:1,opacity:0.5
}
const ContactBubbleStyle = {
    width: 160,
    height: 60,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    opacity: 1,
    background: '#415fff',
    borderRadius: 12,
    position: 'absolute',
    right: 200,
    bottom: 60,
    zIndex: 20
}
const BoxAnimation = {
    animationOne: {
        width: 160,
        height: 60
    },
    animationTwo: {
        scale:0,
        width: 0,
        height: 0
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
const ContactHeaderStyle ={
   backgroundImage: `url(${ContactHeader})`,
        width: 375,
        height: 159,
        position: 'fixed',
        zIndex: 2,
        top: 0  
}
const ContactBodyStyle ={
    backgroundImage: `url(${ContactBody})`,
    position: 'absolute',
    top: 159,
    width: 375,
    height: 1169,
    zIndex: 1,
 }
 const ContactFooterStyle ={
    backgroundImage: `url(${ContactFooter})`,
    position: 'fixed',
    bottom: 0,
    width: 375,
    height: 65,
    zIndex: 1,
 }


const WindowBubble = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");

    return (
        <div className="All"
        style={{
        width:375,
        height: 812,
        overflow: 'scroll',
        position: 'absolute'
        }}>
            <Link to="/Window">
                <img src={backIcon} 
                alt=" " 
                style={BackIconStyle}
                />         
            </Link>
            <AnimatePresence>
            
                <div className='ContactHeader'
                    style={ContactHeaderStyle}
                    />
                <div className='ContactBody'
                    style={ContactBodyStyle}
                />
                <div className='ContactFooter'
                    style={ContactFooterStyle}>
                       <motion.div className='boxChange'
                    style={ContactBubbleStyle}
                    variants={BoxAnimation}
                    animate={animationBox}
                />
                    <div className='ContactBtn' 
                    onClick={() => cycleAnimation()} 
                    style={ContactBtnStyle}
                 />
                    </div>
             
            </AnimatePresence>
        </div>
    );
}

export default WindowBubble;

