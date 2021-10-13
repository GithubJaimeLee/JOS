import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import zoomIcon from "../Icon/zoomIcon.png";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import SetBg from "../Img/SetBg.png";
import SetCenter from "../Img/SetCenter.png";
import { useState } from "react";

//press功能
//变形完整交互

const boxChange = {
  
    width: 70,
    height: 70,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    color: "#415fff",
    opacity: 0,
    background: '#fff',
    backgroundImage: `url(${SetBg})`,
    borderRadius: 12,
    position: 'absolute',
    left: 20,
    top: 60,
    zIndex: 20,
  // overflow: 'hidden'
}
const SetCenterStyle = {
    width:122,
    height: 122,
    scale: 0.45,
    opacity: 0,
    backgroundImage: `url(${SetCenter})`
}
const boxAnimation = {
    animationOne: {
        opacity: 1,
        width: 70,
        height: 70,
    },
    animationTwo: {
        opacity: 1,
        width: 140,
        height: 70
    },
    animationThree: {
        opacity: 1,
        width: 70,
        height: 140
    },
    animationFour: {
        opacity: 1,
        width: 140,
        height: 140
    }
}

const SetAnimation = {
    SanimationOne: { 
        bottom:26,
        right:26,
        position: 'relative',
        zIndex:-1,
        opacity: 1
    },
    SanimationTwo: {
         
        scale: 1,
        bottom:10,
        right:-36,
        position: 'relative',
        zIndex:-1,
        opacity: 1
    },
    SanimationThree: {
         
        scale: 0.85,
        bottom:-10,
        right:0,
        position: 'relative',
        zIndex:-1,
        opacity: 1
    },
    SanimationFour: {
         
        scale: 1.36,
        bottom:-30,
        right:-35,
        position: 'relative',
        zIndex:-1,
        opacity: 1
    }
}
const MaskAnimation = {
    ManimationOne: {
         
        width: 70,
        height: 70
    },
    ManimationTwo: {
         
        width: 140,
        height: 70
    },
    ManimationThree: {
         
        width: 70,
        height: 140
    },
    ManimationFour: {
         
        width: 140,
        height: 140
    }
}


const DChange = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo", "animationThree", "animationFour");
    const [animationSet, ScycleAnimation] = useCycle("SanimationOne", "SanimationTwo", "SanimationThree", "SanimationFour");
    const [animationMask, McycleAnimation] = useCycle("ManimationOne", "ManimationTwo", "ManimationThree", "ManimationFour");
    const [isOpen, setIsOpen] = useState(false);
    // const toggleOpen = () => setIsOpen(!isOpen);
    const toggleOpen = () => setIsOpen(true);
    //  const toggleClose = () => setIsOpen(!isOpen); 
    // const [isClose, setIsClose] = useState(true);
    // const toggleOpen = () => setIsOpen(!isOpen);
    const toggleClose = () => setIsOpen(false);
    // const [isClose, setIsClose] = useState(false);
    // const toggleClose = () => setIsOpen(!isOpen); 
    // const toggleOpen = () => setIsOpen(!isOpen);
    //   const toggleOpen = () => setIsOpen(true);

    return (

        <div>
            <Link to="/Desk">
                <img src={backIcon} alt=" " style={{
                    width: 30,
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    opacity: 1,
                    zIndex: '100'
                }}>
                </img>
            </Link>

            <AnimatePresence>
                <div className='Background'
                    style={{
                        backgroundColor: '#E6ECF4',
                        position: 'absolute',
                        width: 375,
                        height: 812,
                        zIndex: 10,
                    }}
                    onClick={toggleClose} >

                </div>
               
                <motion.div className='boxChange'
                    style={boxChange}
                    variants={boxAnimation}
                    animate={animationBox}
                    onClick={toggleOpen}
                    transition={{type: "tween"}}
                >
                    <p
                        style={{
                            color: "#666",
                            fontWeight: 'bold',
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            fontSize: 14
                        }}
                    >Press me</p>
                    <motion.div 
                    style={{
                        overflow: 'hidden',
                        width:70,
                        height: 70
                     }}
                     transition={{type: "tween"}}
                     variants={MaskAnimation}
                    animate={animationMask}

                    className="Mask">
                   <motion.div className="SetCenter"
                    variants={SetAnimation}
                    animate={animationSet}
                    transition={{type: "tween"}}
                   style={SetCenterStyle}/>
                    </motion.div>
                    {isOpen &&
                        <div className='AllbtnTwo' onClick={() => cycleAnimation()&ScycleAnimation()&McycleAnimation()} >
                            <img src={zoomIcon} alt=" " style={{
                                width: 16,
                                position: 'absolute',
                                bottom: 2,
                                right: 2,
                                opacity: 1,
                                zIndex: '100'
                            }}></img>
                            <div className="boxPress"
                                //exit={{ opacity: 0 }}
                                style={
                                    {
                                        display: 'block',
                                        position: 'absolute',
                                        right: -10,
                                        bottom: -10,
                                        width: 40,
                                        height: 40,
                                        backgroundColor: "#fff",
                                        borderRadius: 20,
                                        textAlign: 'center',
                                        boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.3)"
                                    }
                                }>
                            </div>
                        </div>
                       
                    }     
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default DChange;

