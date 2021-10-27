import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPage from '../Component/NavBarPage';

const ContactBtnStyle =  {                          
    position: 'relative',
    
    bottom: -750,
    width: 60,
    height: 60,
    backgroundColor: "#aaa",
    borderRadius: 20,
    textAlign: 'center',
    zIndex:1,opacity:0.5,
    display:'flex',
    justifyContent: 'center',
}
const ContactBubbleStyle = {
    width: 300,
    height: 80,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    opacity: 1,
    background: '#666',
    borderRadius: 12,
    position: 'absolute',
    y:-720,
    bottom: 100,
    zIndex: 20
}
const BoxAnimation = {
    animationOne: {
      y:-720
    
    },
    animationTwo: {
      y:-560
 
    }
}


const ContactBodyStyle ={
    backgroundColor: '#EEEEEE',
    position: 'absolute',
    width: 375,
    height: 812,
    zIndex: 1,
 }



const WindowAlert = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
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
                    transition={{type: "tween"}}
                /></div>
                    
             
            </AnimatePresence>
        </div>
        </div>
    );
}

export default WindowAlert;

