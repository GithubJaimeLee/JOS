import * as React from "react";
//import { useRef } from "react";
//import { motion} from 'framer-motion';
//import background from "../bg2.png";
/* import backIcon from "../Icon/back.png"; */
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import '../App.css';
import SetHeader from "../Img/WSetHeader.png";
import SetBody from "../Img/SetBody.png";
//import { Frame, Scroll } from "framer";
import '../scroll.css';
import { motion, useViewportScroll, useTransform } from "framer-motion";

//new

//import { motion, useViewportScroll, useTransform, useMotionValue } from "framer-motion";


const ScrollTitle = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
//new
/*   const { scrollYProgress } = useViewportScroll();
const scale = useTransform(scrollYProgress, [0, 1], [0, 1]); */
/* const y = useMotionValue(0)
const cardy = useTransform(y, value => value /-1)
const bgy = useTransform(y, value => value /2) */
  return (
    <div >
        <Link to="/List">
        <img  src={Bback} alt=" " style={{
          width: 30,
          position: 'fixed',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '10000'
        }} />
      </Link>

    <div className="HeadCard"
          
    
          style={{    
            backgroundColor: '#bbb',
            backgroundImage: `url(${SetHeader})`, 
            top:0, 
            left:0,
            width: 375,
            height: 148,
            position: 'fixed',
        
            opacity: 1,
            zIndex: -1
          }}>
        </div>

    <div className="wrapper">
      <motion.div
        className="scontainer"
        style={{
          scale
        }}
      >
      
      <p 
style={{
position:'absolute',
//top:50,
//left: 20,
fontWeight: 'bold',
fontSize:26,
zIndex:100
}}>设置</p> 

      {/*   <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
        > </motion.div> */}
      </motion.div>
 {/*      <div className="SBackground"
              style={{
                backgroundColor: '#eee',
                width: 375,
                height: 812,
                position: 'absolute',
                top: 0,
                left:0,
                opacity: 1,
                zIndex: -1000
              }} ></div>  */}
    </div>




          <motion.div className="MoveCard"
          drag="y"
          dragConstraints={{ top: -900, bottom: 60 }}
            dragElastic={0}
            dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
            style={{    
              backgroundColor: '#ddd',
              backgroundImage: `url(${SetBody})`, 
              top:148, 
              width: 375,
              height: 1590,
              position: 'absolute',
              opacity: 1,
              zIndex: -200
            }}>
          </motion.div>
  {/*  <Scroll 
      style={{
    width:70,
     height: 200,
     backgroundColor: '#FFFFFF',
     zIndex:700
     }}
     >

      <Frame
   style={{
    width:70,
     height: 70,
     backgroundColor: '#000000',
     zIndex:800
   }}/>
         <Frame
   style={{
    width:70,
     height: 70,
     backgroundColor: '#000000',
     zIndex:800
   }}/>
         <Frame
   style={{
    width:70,
     height: 70,
     backgroundColor: '#000000',
     zIndex:800
   }}/>
   </Scroll> */}

     {/* ß */}
          
           {/*            <div className="Background"
              style={{
                backgroundColor: '#000',
                width: 375,
                height: 812,
                position: 'absolute',
                top: 0,
                left:0,
                opacity: 1,
                zIndex: -1000
              }} ></div> */}
          </div>

  );
}

export default ScrollTitle;