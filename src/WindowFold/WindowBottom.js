import { motion, useCycle} from 'framer-motion';
import * as React from "react";
import NavBarPage from '../Component/NavBarPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactBtnStyle =  {                          
    position: 'relative',
    
    bottom: -750,
    width: 60,
    height: 60,
    backgroundColor: "#666",
    borderRadius: 20,
    textAlign: 'center',
    zIndex:1,
    display:'flex',
    justifyContent: 'center',
}
const ContactBubbleStyle = {
  width: 300,
        height: 300,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    opacity: 1,
    background: '#aaa',
    borderRadius: 12,
    position: 'absolute',
  
    bottom: 100,
    zIndex: 20
}
const BoxAnimation = {
    animationOne: {
      y:0
    
    },
    animationTwo: {
      y:-200
 
    }
}


const ContactBodyStyle ={
    backgroundColor: '#EEEEEE',
    position: 'absolute',
    width: 375,
    height: 812,
    zIndex: 1
 }



const WindowBottom = () => {
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
     
                    <div className='ContactBtn' 
                    onClick={() => cycleAnimation()} 
                    style={ContactBtnStyle}
                 >
                    </div>
                    <motion.div className='boxChange'
                    style={ContactBubbleStyle}
                    variants={BoxAnimation}
                    animate={animationBox}
                />
          </div>
        </div>
    );
}

export default WindowBottom;

