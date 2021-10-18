import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/Wback.png";
import background from "../Img/DeskAndroid.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const BoxBtn = {
    width: 54,
    height: 54,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    color: "#415fff",
    opacity: 1,
    background: '#fff',
    borderRadius: 12,
    position: 'relative',
    left: 118,
    top: 732,
    zIndex: 100
}

const boxAnimation = {
    animationOne: {
        width: 54,
        height: 54,
        left: 118,
        bottom: 60
    },
    animationTwo: {

        width: 300,
        height: 500,
        left: 40,
        top: 100,
        opacity: 1
    }
}

/* const boxDrag = {
    DragOne: {
   false:false
    },
    DragTwo: {
        ture:ture
    }
} */


const DeskFolder = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
    const [DragBox, cycleDrag] = useCycle(false, true);
    //const [isDrag, setIsDrag] = useState(false);
    //  const toggleDragging = () => setIsDrag(!isDrag);
    return (

        <div >
            <Link to="/Desk">
                <img src={backIcon} alt=" " style={{
                    width: 30,
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    opacity: 1,
                    zIndex: '100'
                }} />
            </Link>

            <div 
            className="Screen"
            style={{
                display: 'grid',
                width:'100%',
                height:'100%',
                position: 'absolute',
                justifyContent: 'center'
            }}
            >
                <AnimatePresence >
                    <div style={{
                        backgroundImage: `url(${background})`,
                        width: 375,
                        height: 812,
                        top: 0,
                        opacity: 1,
                        zIndex: '0'
                    }} >
                    <motion.div className='boxChange'
                        style={BoxBtn}
                        variants={boxAnimation}
                        animate={animationBox}
                        drag={DragBox}
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={1}
                        // onClick={toggleOpen}
                        onClick={() => cycleAnimation() & cycleDrag()}
                    /></div>
                </AnimatePresence>
            </div>
            <div className='bg'
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#000000',
                    zIndex: '-10000'
                }}
            />
        </div>
    );
}

export default DeskFolder;

