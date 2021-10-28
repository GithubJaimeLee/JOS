import * as React from "react";
import { motion } from 'framer-motion';

import ContactHeader from "../Img/ContactHeader.png";
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactSetBar from "../Img/ContactSetBar.png";
import NavBarPage from '../Component/NavBarPage';
import '../css/App.css';

const JumpApp = () => {
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
                position:'absolute',
                top:0
            }}
            >
     
      <motion.div className="ContactHeader"
        drag="y"
        dragConstraints={{ top: -40, bottom: 0 }}
        dragElastic={0}
        style={{
          backgroundImage: `url(${ContactHeader})`,

          top: 0,
          width: 375,
          height: 159,
          position: 'fixed',
          opacity: 1,
          zIndex: 2
        }}>
      </motion.div>
      <div className="ContactSetBar"
      style={{
      width:20,
      height: 456,
      backgroundImage: `url(${ContactSetBar})`,
      top:210,
      right: 0,
      zIndex:1, 
      position: 'fixed'
      }}
      />
    
      <div className="ContactFooter"
        style={{
          backgroundImage: `url(${ContactFooter})`,

          width: 375,
          height: 65,
          position: 'fixed',
          bottom: 0,
           
          opacity: 1,
          zIndex: 1
        }} ></div>
      <div className="Background"
        style={{
          backgroundColor: '#f7f7f7',
          width: 375,
          height: 812,
          position: 'absolute',
          top: 0,
          overflow: 'scroll',
          opacity: 1,
          zIndex: -1
        }} >
  <motion.div className="ContactBody"
        drag="y"
        dragConstraints={{ top: -580, bottom: 0 }}
        dragElastic={1}
        style={{
          backgroundImage: `url(${ContactBody})`,
          top: 159,
          width: 375,
          height: 1169,
          position: 'absolute',
          opacity: 1,
          zIndex: 0
        }}>
        <div className="MaskA"
          style={{
            width: 375,
            height: 50,
            backgroundColor: '#C7000B',
            opacity: 0.5,
            position: 'relative',
            top: 56,
            left: 0,
          }}/>
          <div className="MaskF"
          style={{
            width: 375,
            height: 50,
            backgroundColor: '#C7000B',
            opacity: 0.5,
            position: 'relative',
            top: 314,
            left: 0,
          }}/>
          <div className="MaskL"
          style={{
            width: 375,
            height: 50,
            backgroundColor: '#C7000B',
            opacity: 0.5,
            position: 'relative',
            top: 358,
            left: 0,
          }}/>
           <div className="MaskW"
          style={{
            width: 375,
            height: 50,
            backgroundColor: '#C7000B',
            opacity: 0.5,
            position: 'relative',
            top: 455,
            left: 0,
          }}/>
                <div className="MaskX"
          style={{
            width: 375,
            height: 50,
            backgroundColor: '#C7000B',
            opacity: 0.5,
            position: 'relative',
            top: 552,
            left: 0,
          }}/>
                <div className="MaskZ"
          style={{
            width: 375,
            height: 50,
            backgroundColor: '#C7000B',
            opacity: 0.5,
            position: 'relative',
            top: 768,
            left: 0,
          }}/>

      </motion.div>

        </div>
    </div>
</div>
  );
}

export default JumpApp;