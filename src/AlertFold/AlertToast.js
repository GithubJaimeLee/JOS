import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPage from '../Component/NavBarPage';
const ContactBtnStyle =  {                          
    position: 'relative',
    
    bottom: -750,
    width: 60,
    height: 60,
    backgroundColor: "#666",
    borderRadius: 20,
    textAlign: 'center',
    zIndex:2,
    display:'flex',
    justifyContent: 'center',
}
const ContactBubbleStyle = {
  width: 375,
        height: 812,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    opacity: 1,
    background: '#aaa',

    position: 'absolute',
  
    bottom: 100,
    zIndex: 1
}
const BoxAnimation = {
    animationOne: {
      y:300
    
    },
    animationTwo: {
      y:-812
    }
}


const ContactBodyStyle ={
    backgroundColor: '#EEEEEE',
    position: 'absolute',
    width: 375,
    height: 812,
    zIndex: 1,
 }



const AlertToast = () => {
    const Info = <p>Hello,<br/> world!</p>;
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");

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
                <div className='ContactBody'
                    style={ContactBodyStyle}
                />
            <AnimatePresence>
                    <div className='ContactBtn' 
                    onClick={() => cycleAnimation()} 
                    style={ContactBtnStyle}
                 >
                    </div>
                    <motion.div className='boxChange'
                    style={ContactBubbleStyle}
                    variants={BoxAnimation}
                    animate={animationBox}
                    transition={{type: "tween"}}
                />
             
            </AnimatePresence>
        </div>
        </div>
    );
}

export default AlertToast;

