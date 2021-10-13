import { motion, useCycle } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/Wback.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import DeskOOS from "../Img/DeskOOS.png";
import { useState } from "react";
import OneFingerClick from "../Img/OneFingerClick.png";

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
                    top: 560,
                    left: 260,
                    zIndex:21
                }}
            />

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
                whileTap={{ scale: 0.95 }}
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
        </div>
    );
}

export default ClickCard;

