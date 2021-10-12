import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/Wback.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import DeskOOS from "../Img/DeskOOS.png";
import { useState } from "react";

//press功能
//变形完整交互

const boxHome = {
    width: 300,
    height: 500,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    color: "#415fff",
    opacity: 1,
    background: '#fff',
    borderRadius: 12,
    position: 'absolute',
    left: 40,
    top: 100,
    zIndex: 20
}

const boxAnimation = {
    animationOne: {
        width: 300,
        height: 500
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

const ClickCard = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo", "animationThree", "animationFour");
    const [isOpen, setIsOpen] = useState(false);
    //const toggleOpen = () => setIsOpen(!isOpen);
    const toggleOpen = () => setIsOpen(true);
    //const toggleClose = () => setIsOpen(!isOpen); 
    //const [isClose, setIsClose] = useState(true);
    //const toggleOpen = () => setIsOpen(!isOpen);
   // const toggleClose = () => setIsOpen(false);
    //const [isClose, setIsClose] = useState(false);
    //const toggleClose = () => setIsOpen(!isOpen); 
    //const toggleOpen = () => setIsOpen(!isOpen);
    //const toggleOpen = () => setIsOpen(true);

    return (

        <div >
            <Link to="/Click">
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
            
                <div className="blackMask"
                    style={{
                        backgroundColor: "#000000",
                        width: 375,
                        height: 812,
                        position: 'absolute',
                        top: 0,
                        opacity: 0.4,
                        zIndex: '2'
                    }}
                ></div>
                <div className="BlurBackground"
                    style={{
                        backgroundImage: `url(${DeskOOS})`,
                        width: 375,
                        height: 812,
                        position: 'absolute',
                        top: 0,
                        opacity: 1,
                        zIndex: '-1'
                    }} >
                </div>
          
                <motion.div className='boxChange'
                    style={boxHome}
                    variants={boxAnimation}
                    animate={animationBox}
                    whileTap={{ scale: 0.9 }}
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

                </motion.div>
              
            </AnimatePresence>

        </div>
    );
}

export default ClickCard;

