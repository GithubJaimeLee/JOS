import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";


import { Link } from 'react-router-dom';

import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';

import Calendar from "../Img/Calendar.png";
import CalendarWindow from "../Img/CalendarWindow.png";
//press功能


//变形完整交互

const boxHome = {
    width: 131,
    height: 163,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.1)",
    opacity: 1,
    backgroundImage: `url(${CalendarWindow})`,
    borderRadius: 12,
    position: 'absolute',
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
   // backgroundColor: "#ccc",
    borderRadius: 20,
    textAlign: 'center',
    zIndex: 2,
   // boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.3)"
}
const Background = {
    backgroundImage: `url(${Calendar})`,
    position: 'absolute',
    width: 375,
    height: 812,
    zIndex: 1
}
const BackIcon = {
    width: 30,
    position: 'absolute',
    top: 20,
    left: 20,
    opacity: 1,
    zIndex: 2
}

const WindowPull = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
    const boxAnimation = {
        animationOne: {
        //   width: 131,
        scale:1,
           height: 163,
           opacity: 1
        },
        animationTwo: {
       //    width: 0,
       scale:0,
           height: 0,
           opacity: 0.1
        }
    }

    return (
        <div 
        style={{
        width:375,
        height: 812,
        opacity: 1,
        position: 'absolute'
        }}>
            <Link to="/Window">
                <img src={backIcon} 
                     alt=" " 
                     style={BackIcon}/>
            </Link>
            <AnimatePresence>
                <div className='Background'
                    style={Background}
                />
                <motion.div className='boxChange'
                    style={boxHome}
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

export default WindowPull;

