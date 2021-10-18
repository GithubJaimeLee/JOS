import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import zoomIcon from "../Icon/zoomIcon.png";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import FoldScreen from "../Img/FoldScreen.png";
import ArrowSmall from "../Icon/ArrowSmall.png";
import OffCanvas from '../Component/Offcanvas';
import ArrowToggle from '../Component/ArrowToggle';

const FoldCard = () => {
    return (
        <div
            style={{
                display: 'grid',
                justifyContent: 'center'
            }}
        >
            <div className='Background'
                style={{
                    backgroundImage: `url(${FoldScreen})`,
                    top: 0,
                    width: 375,
                    height: 812,
                    zIndex: 10,
                    
                }}
            >    
            <Link to="/Fold">
                <img src={backIcon} alt=" " style={{
                    width: 30,
                    position: 'relative',
                    top: 20,
                    left: 20,
                    opacity: 1,
                    zIndex: '10'
                }}>
                </img>
            </Link>
            <OffCanvas  
                placement={'end'}  
                contextTitle={'我在测试'} 
                context={'我在测试'}
            />
            <ArrowToggle/>
            </div>
        </div>
    );
}
   

export default FoldCard;

