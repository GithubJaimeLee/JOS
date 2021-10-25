import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPage from '../Component/NavBarPage';
const ContactBtnStyle =  {                          
    position: 'relative',
    
    bottom: -750,
    width: 60,
    height: 60,
    backgroundColor: "#000",
    borderRadius: 20,
    textAlign: 'center',
    zIndex:100,
    opacity:0.5,
    display:'flex',
    justifyContent: 'center',
}
const ContactBubbleStyle = {
  width: 300,
        height: 200,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    opacity: 1,
    background: '#fff',
    borderRadius: 12,
    position: 'absolute',
    bottom: 100,
    zIndex: 20,
    y:400
}
const KeyboardStyle = {
  width: 375,
   height: 300,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    opacity: 1,
    background: '#aaa',
    position: 'absolute',
    bottom: 100,
    zIndex: 20,
    y:400
}
const BoxAnimation = {
    animationOne: {
      y:400
    
    },
    animationTwo: {
      y:-300
 
    }
}
const KeyBoardAnimation = {
  KAnimationOne: {
    y:400
  
  },
  KAnimationTwo: {
    y:100

  }
}
const BackIconStyle ={
    width: 30,
    position: 'fixed',
    top: 20,
    left: 20,
    opacity: 1,
    zIndex: '100'
 }

const ContactBodyStyle ={
    backgroundColor: '#EEEEEE',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: 375,
    height: 812,
    zIndex: 1,
    overflow: 'hidden'
 }



const WindowBottom = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
    const [animationKeyBoard, KcycleAnimation] = useCycle("KAnimationOne", "KAnimationTwo");
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
        height: 812,
        position: 'absolute',
        top:0
        }}>

                <div className='ContactBody'
                    style={ContactBodyStyle}
                >
       
            
                    <div className='ContactBtn' 
                    onClick={() => cycleAnimation()&KcycleAnimation()} 
                   
                    style={ContactBtnStyle}
                 >
                      
                </div>
                <motion.div className='boxChange'
                    style={ContactBubbleStyle}
                    variants={BoxAnimation}
                    animate={animationBox}
                />
                     <motion.div className='KeyBoard'
                    style={KeyboardStyle}
                    variants={KeyBoardAnimation}
                    animate={animationKeyBoard}
                />
             </div>
  
        </div>
        </div>
    );
}

export default WindowBottom;

