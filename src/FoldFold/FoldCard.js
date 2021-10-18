import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import zoomIcon from "../Icon/zoomIcon.png";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import FoldScreen from "../Img/FoldScreen.png";
import ArrowSmall from "../Icon/ArrowSmall.png";

//press功能
//变形完整交互




const FoldCard = () => {

    const boxHome = {
        width: 340,
        height: 136,
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
        color: "#415fff",
        background: '#fff',
        borderRadius: 12,
        position: 'absolute',
        margin: 10,
        top: 282,
        left: 8,
        zIndex: 20
    }
    
    const boxAnimation = {
        animationOne: {
            width: 340,
            height: 136
        },
        animationTwo: {
            width: 340,
            height: 70
        }
    }
    
    const ArrowAnimation = {
        AAnimationOne: {
            rotate: 0,
        },
        AAnimationTwo: {
            rotate: 180,
        }
    }
    
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
    const [animationArrow, AcycleAnimation] = useCycle("AAnimationOne", "AAnimationTwo");
    const [isOpen, setIsOpen] = useState(true);



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
                {/*--------------------------------      卡片元素包括按钮  开始   ---------------------------*/}

                {/*--------------------------------     背景元素  开始   ---------------------------*/}
                <div className='Background'
                    style={{
                        backgroundImage: `url(${FoldScreen})`,
                        position: 'absolute',

                        width: 375,
                        height: 812,
                        zIndex: 10,

                    }}
                >

                </div>
                {/*--------------------------------      背景  结束    --------------------------*/}
                <motion.div className='boxChange'
                    style={boxHome}
                    variants={boxAnimation}
                    animate={animationBox}

                >
                    {/*--------------------------------     整个按钮元素  开始   ---------------------------*/}
                    {isOpen &&
                        <div className='Allbtn' onClick={() => cycleAnimation() & AcycleAnimation()}   >
                            <motion.div className="boxPress"
                                style={
                                    {
                                        display: 'block',
                                        position: 'absolute',
                                        right: 10,
                                        top: 6,
                               //         width: 40,
                               //         height: 40,
                                //        backgroundColor: "#fff",
                                        borderRadius: 0,
                                        textAlign: 'center',
                              //          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.3)"
                                    }
                                }
                                variants={ArrowAnimation}
                                animate={animationArrow}
                            >
                                <img src={ArrowSmall}
                                    alt=" "
                                    style={{
                                        width: 16,
                                        position: 'relative',
                                        top: 0,
                                        left: 0,
                                        opacity: 1,
                                        zIndex: '10'
                                    }} />
                            </motion.div>
                        </div>
                    }
                    {/*--------------------------------     整个按钮元素 结束   ---------------------------*/}
                </motion.div>
                {/*--------------------------------      卡片元素包括按钮  结束    ---------------------------*/}
            </AnimatePresence>

        </div>
    );
}

export default FoldCard;

