import { motion } from 'framer-motion';
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClickOOS from "../Img/ClickOOS.png";
import CameraIcon from "../Img/CameraIcon.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import NavBarPage from '../Component/NavBarPage';
const ClickIcon = () => {
    const Info = <p>Hello,<br/> world!</p>;
    return (

        <div className="All">

        <NavBarPage
placement={'end'}
contextTitle={'说明'}
context={Info}
/>
   <div className="ScreenCenter"
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                position:'absolute',
                top:0
            }}
            >
    

            <div className='Background'
                style={{
                    backgroundImage: `url(${ClickOOS})`,
                    position: 'absolute',
                    width: 375,
                    height: 812,
                    zIndex: 10,
                }}
            >
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
               />
            </motion.div>

        <div className="OneFingerClick"
                style={{
                    width: 32,
                    height: 60,
                    backgroundImage: `url(${OneFingerClick})`,
                    position: 'absolute',
                    top: 430,
                    left: 240,
                    zIndex: 11
                }}
            />
            </div>

        </div>

        </div>
    );
}

export default ClickIcon;

