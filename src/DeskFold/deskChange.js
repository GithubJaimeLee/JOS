// color: "#415FFF"
import { motion, useCycle, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import * as React from "react";
/* import background from "../bg2.png"; */
import zoomIcon from "../Icon/zoomIcon.png";
import { Link } from 'react-router-dom';
import { Grid } from "antd-mobile";
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

//press功能


//变形完整交互

const boxHome = {
    width: 70,
    height: 70,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    fontWeight: 'bold',
    color: "#415fff",
    opacity: 1,
    background: '#fff',
    borderRadius: 12,
    position: 'absolute',
    left: 20,
    top: 60
}



const boxAnimation = {
    animationOne: {
        width: 70,
        height: 70
    },
    animationTwo: {
        width: 140,
        height: 70
    },
    animationThree: {
        width: 70,
        height: 140
    },
    animationFour: {
        width: 140,
        height: 140
    }
}




const DChange = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo", "animationThree", "animationFour");
    const [isOpen, setIsOpen] = useState(false);
   // const toggleOpen = () => setIsOpen(!isOpen);
    const toggleOpen = () => setIsOpen(true);
    



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
            <div className='boxAll' style={{
                display: Grid,
                marginTop: 60
            }}

            >
                <motion.div className='boxChange'
                    style={boxHome}
                    variants={boxAnimation}
                    animate={animationBox}
                  onClick={toggleOpen}
                >

                    <p
                        style={{
                            color: "#666",
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            fontSize: 14
                        }}
                    >Press me</p>
                    <AnimatePresence>{isOpen &&
                    
                        <div className='CPbtn' onClick={() => cycleAnimation()} >
            <img src={zoomIcon} alt=" " style={{
                width: 16,
                position: 'absolute',
                bottom: 2,
                right: 2,
                opacity: 1,
                zIndex: '100'
            }}></img>
            <motion.div className="boxPress"
            
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
            </motion.div>
        </div>
                    
                    
                    }</AnimatePresence>
                </motion.div>
            </div>
           
        
            <div className='Background' style={{
                background: '#E6ECF4',
                width: 375,
                height: 812,
                position: 'absolute',
                top: 0,
                opacity: 1,
                zIndex: '-1'
            }}>
            </div>
        </div>
    );
}

export default DChange;