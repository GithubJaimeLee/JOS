import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClickB from "../Img/ClickB.png";
import ClickBtn from "../Img/ClickBtn.png";
import { motion } from 'framer-motion';
import OneFingerClick from "../Img/OneFingerClick.png";

const ClickBtnStyle = {
    width: 291,
    height: 42,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    backgroundImage: `url(${ClickBtn})`,
    borderRadius: 12,
    position: 'absolute',
    left: 42,
    top: 700,
    zIndex: 20
}



const ClickCard = () => {

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
                    top: 745,
                    left: 260,
                    zIndex: 11
                }}
            />

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
                style={ClickBtnStyle}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div className='BtnMask'
                    style={{
                        width: 291,
                        height: 42,
                        borderRadius: 12,
                        backgroundColor: '#000000',
                        opacity: 0
                    }}
                    whileTap={{
                        opacity: 0.2
                    }}
                ></motion.div>

            </motion.div>


        </div>
    );
}

export default ClickCard;

