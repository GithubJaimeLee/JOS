import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import DeskOOS from "../Img/DeskOOS.png";

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
            <motion.div className='boxChange'
                    style={
                        {
                        width:70,
                        height: 70,
                        opacity: 0.8,
                        backgroundColor:'red',
                        position: 'absolute',
                        zIndex:11,
                        borderRadius:12,
                        top: 480,
                        left: 120
                        }
                        }
                    
          
                    
                    whileTap={{ scale: 0.8 }}
               />
         
                <div className='Background'
                    style={{
                        backgroundImage: `url(${DeskOOS})`,
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

