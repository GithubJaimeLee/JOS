import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import zoomIcon from "../Icon/zoomIcon.png";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/Wback.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import FoldInfo from "../Img/FoldInfo.png";
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
//press功能
//变形完整交互

const boxHome = {
    width: 355,
    height: 300,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    color: "#415fff",

    background: '#fff',
    borderRadius: 12,
    position: 'absolute',
    margin: 10,
    top: 152,
    zIndex: 20
}

const boxAnimation = {
    animationOne: {
        width: 355,
        height: 300
    },
    animationTwo: {
        width: 355,
        height: 100
    }
}

const FoldContext = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
    const [isOpen, setIsOpen] = useState(true);
    const toggleOpen = () => setIsOpen(true);
    const toggleClose = () => setIsOpen(false);
    return (
        <div>
            <Link to="/Fold">
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
                        backgroundImage: `url(${FoldInfo})`,
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
                >
                        <div className='Allbtn' onClick={() => cycleAnimation()} >
                            <div className="boxPress"
                                style={
                                    {
                                        display: 'block',
                                        position: 'absolute',
                                        right: 0,
                                        top: 0,
                                        width: 40,
                                        height: 40,
                                        backgroundColor: "#fff",
                                        borderRadius: 0,
                                        textAlign: 'center',
                                        boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.3)"
                                    }
                                }>
                            </div>
                        </div>           
                </motion.div>
            </AnimatePresence>

        </div>
    );
}

export default FoldContext;

