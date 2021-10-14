import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactHeader from "../Img/ContactHeader.png";
import ContactWindow from "../Img/ContactWindow.png";

const ContactWindowStyle = {
    width: 0,
    height: 0,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.1)",
    opacity: 1,
    backgroundImage: `url(${ContactWindow})`,
    borderRadius: 12,
    position: 'fixed',
    right: 20,
    top: 80,
    zIndex: 2
}
const boxPress = {
    display: 'block',
    position: 'absolute',
    right: 14,
    top: 46,
    width: 40,
    opacity: 0.5,
    height: 40,
    borderRadius: 20,
    textAlign: 'center',
    zIndex: 2, 
}

const boxAnimation = {
    animationOne: {
        scale:0,
        width: 0,
        height: 0
    },
    animationTwo: {
        width: 131,
        height: 118
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


const WindowJump = () => {
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
                <div className='ContactHeader'
                    style={ContactHeaderStyle}
                    />
                <div className='ContactBody'
                    style={ContactBodyStyle}
                />
                <div className='ContactFooter'
                    style={ContactFooterStyle}>

                    </div>
                    <AnimatePresence>
                <motion.div className='boxChange'
                    style={ContactWindowStyle}
                    variants={boxAnimation}
                    animate={animationBox}
                />
                <div 
                    className="boxPress"
                    onClick={() => cycleAnimation()}
                    style={boxPress} />
            </AnimatePresence>
        </div>
    );
}

export default WindowJump;

