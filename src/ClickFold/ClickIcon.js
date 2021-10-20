import { motion } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClickOOS from "../Img/ClickOOS.png";
import CameraIcon from "../Img/CameraIcon.png";
import OneFingerClick from "../Img/OneFingerClick.png";

const ClickIcon = () => {
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
            <div className="OneFingerClick"
                style={{
                    width: 32,
                    height: 60,
                    backgroundImage: `url(${OneFingerClick})`,
                    position: 'absolute',
                    top: 435,
                    left: 245,
                    zIndex: 11
                }}
            />
            <motion.div className='boxChange'
                style={
                    {
                        width: 52,
                        height: 52,

                        backgroundImage: `url(${CameraIcon})`,
                        position: 'absolute',
                        zIndex: 11,
                        borderRadius: 12,
                        top: 374,
                        left: 205
                    }
                }

                whileTap={{
                    scale: 0.85,
                }}
            >
                <motion.div
                    className="BtnMask"
                    style={{
                        width: 52,
                        height: 52,
                        backgroundColor: '#000',
                        borderRadius: 12,
                        opacity: 0,
                        zIndex: 1
                    }}
                    whileTap={{
                        opacity: 0.4
                    }}
                >
                </motion.div>

            </motion.div>

            <div className='Background'
                style={{
                    backgroundImage: `url(${ClickOOS})`,
                    position: 'absolute',
                    width: 375,
                    height: 812,
                    zIndex: 10,
                }}
            >

            </div>

        </div>
    );
}

export default ClickIcon;

