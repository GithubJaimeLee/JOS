// color: "#415FFF"
//import { motion, useCycle, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
/* import background from "../bg2.png"; */
import zoomIcon from "../Icon/zoomIcon.png";
import { Link } from 'react-router-dom';
//import { Grid } from "antd-mobile";
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

//press功能


//变形完整交互

const boxHome = {
    width: 70,
    height: 70,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    color: "#415fff",
    opacity: 1,
    background: '#fff',
    borderRadius: 12,
    position: 'absolute',
    left: 20,
    top: 60,
    zIndex: 20
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




const WindowPull = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo", "animationThree", "animationFour");
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
<Link to="/Window">
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
            {/*   grid 开始          <div className='boxAll' style={{
                display: Grid,
                marginTop: 60
            }}
   > </div>*/}

            <AnimatePresence>
                {/*--------------------------------      卡片元素包括按钮  开始   ---------------------------*/}

                {/*--------------------------------     背景元素  开始   ---------------------------*/}
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
                {/*--------------------------------      背景  结束    --------------------------*/}
                <motion.div className='boxChange'
                    style={boxHome}
                    variants={boxAnimation}
                    animate={animationBox}
                    onClick={toggleOpen}
                >
                    <p
                        style={{
                            color: "#666",
                            fontWeight: 'bold',
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            fontSize: 12
                        }}
                    >下拉弹窗</p>

                    {/*--------------------------------     整个按钮元素  开始   ---------------------------*/}
                    {isOpen &&
                        <div className='Allbtn' onClick={() => cycleAnimation()} >
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
                    {/*--------------------------------     整个按钮元素 结束   ---------------------------*/}
                </motion.div>
                {/*--------------------------------      卡片元素包括按钮  结束    ---------------------------*/}
            </AnimatePresence>

        </div>
    );
}

export default WindowPull;

