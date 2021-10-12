import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClickB from "../Img/ClickB.png";
import { useState } from "react";

//press功能
//变形完整交互
const boxHome = {
    width: 292,
    height: 42,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    opacity: 0.8,
    background: '#415fff',
    borderRadius: 12,
    position: 'absolute',
    left: 42,
    top: 700,
    zIndex: 20
}

const boxAnimation = {
    animationOne: {
        width: 292,
        height: 42
    },
    animationTwo: {
        width: 282,
        height: 32
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
    const toggleClose = () => setIsOpen(false);
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
                <div className='Background'
                    style={{
                       backgroundImage: `url(${ClickB})`,
                        position: 'absolute',
                        width: 375,
                        height: 812,
                        zIndex: 10,
                    }}
              >

                </div>

                <motion.div className='boxChange'
                    style={boxHome}
                    variants={boxAnimation}
                    animate={animationBox}
                    whileTap={{ scale: 0.9 }}
                >
                    <p
                        style={{
                            color: "#fff",
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

