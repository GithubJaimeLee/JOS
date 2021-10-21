import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../Component/Important';

const ContactBtnStyle = {
    position: 'relative',

    bottom: -450,
    width: 60,
    height: 60,
    backgroundColor: "#666",
    borderRadius: 20,
    textAlign: 'center',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
}
const ContactBubbleStyle = {
    width: 20,
    height: 20,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    opacity: 1,
    background: '#aaa',
    borderRadius: 12,
    position: 'absolute',
    right: 0,
    bottom: 50,
    zIndex: 20
}
const BoxAnimation = {
    animationOne: {
        scale: 0

    },
    animationTwo: {
        scale: 1

    }
}
const BackIconStyle = {
    width: 30,
    position: 'fixed',
    top: 20,
    left: 20,
    opacity: 1,
    zIndex: '100'
}

const ContactBodyStyle = {
    backgroundColor: '#EEEEEE',
    position: 'absolute',
    width: 375,
    height: 812,
    zIndex: -1
}



const AlertNew = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");

    return (
        <div className="All"
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                height: 812,
                position: 'absolute'

            }}>

            <Link to="/Alert">
                <img src={backIcon}
                    alt=" "
                    style={BackIconStyle}
                />
            </Link>

<App/>
            <div className='ContactBody'
                style={ContactBodyStyle}
            />
            <AnimatePresence>
                <div className='ContactBtn'
                    onClick={() => cycleAnimation()}
                    style={ContactBtnStyle}
                >

                    <motion.div className='boxChange'
                        style={ContactBubbleStyle}
                        variants={BoxAnimation}
                        animate={animationBox}
                    />
                </div>
            </AnimatePresence>
        </div>
    );
}

export default AlertNew;

