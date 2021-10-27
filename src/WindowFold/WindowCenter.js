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
const BgStyle =  {                          
  position: 'absolute',
  bottom: 0,
  width: 375,
  height: 812,
  backgroundColor: "#999",
  textAlign: 'center',
  zIndex:1,
  opacity:0,
  display:'flex',
  justifyContent: 'center',
}
const ContactBubbleStyle = {
  width: 300,
        height: 100,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    opacity: 1,
    background: '#aaa',
    borderRadius: 12,
    position: 'absolute',
    bottom: 100,
    zIndex: 20,
    y:-300,
    scale: 0
}
const BoxAnimation = {
    animationOne: {
      scale: 0
    
    },
    animationTwo: {
      scale: 1
 
    }
}
const BgAnimation = {
  BgAnimationOne: {
     opacity:0
  
  },
  BgAnimationTwo: {
    
    opacity:0.5
  }
}


const ContactBodyStyle ={
    backgroundColor: '#EEEEEE',
    position: 'absolute',
    width: 375,
    height: 812,
    zIndex: 1,
 }



const  WindowCenter = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
    const [animationBg, BgCycleAnimation] = useCycle("BgAnimationOne", "BgAnimationTwo");
    const Info = <p>Hello,<br/> world!</p>;
    return (
<div className="All">
      <NavBarPage
      placement={'end'}
      contextTitle={'说明'}
      context={Info}
    />
        <div className="All"
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
                />
            <AnimatePresence>
                    <div className='ContactBtn' 
                    onClick={() => cycleAnimation()&BgCycleAnimation()} 
                    style={ContactBtnStyle}
                   />
                    
                    <motion.div className='boxChange'
                    style={ContactBubbleStyle}
                    variants={BoxAnimation}
                    animate={animationBox}
                   />
                    <motion.div className='BgChange'
                    style={BgStyle}
                    variants={BgAnimation}
                    animate={animationBg}
                    
                   />
             
            </AnimatePresence>
        </div>
        </div>
    );
}

export default  WindowCenter;

