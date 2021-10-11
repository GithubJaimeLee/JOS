import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/Wback.png";
import background from "../Img/DeskAndroid.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

//press功能
//变形完整交互

const boxHome = {
    width: 54,
    height: 54,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    color: "#415fff",
    opacity: 1,
    background: '#fff',
    borderRadius: 12,
    position: 'absolute',
    left: 118,
    top: 732,
    zIndex: 100
}

const boxAnimation = {
    animationOne: {
        width: 54,
        height: 54
    },
    animationTwo: {
        width: 300,
        height: 500,
        left: 40,
        top: 132,
        opacity: 1
    }
}


const DeskOpen = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
    const [isOpen, setIsOpen] = useState(true);
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
                {/*--------------------------------      卡片元素包括按钮  开始   ---------------------------*/}

                {/*--------------------------------     背景元素  开始   ---------------------------*/}
                <div style={{
              backgroundImage: `url(${background})`,
              width: 375,
              height: 812, 
              position: 'absolute', 
              top: 0,
              opacity: 1,
              zIndex: '-2'
            }}></div>
                {/*--------------------------------      背景  结束    --------------------------*/}
                {isOpen &&   <motion.div className='boxChange' 
                    style={boxHome}
                    variants={boxAnimation}
                    animate={animationBox}
                    onClick={toggleOpen}
                    onClick={() => cycleAnimation()}        
                >

                </motion.div> }
                {/*--------------------------------      卡片元素包括按钮  结束    ---------------------------*/}
            </AnimatePresence>
          
        </div>
    );
}

export default DeskOpen;

