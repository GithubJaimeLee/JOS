

//import "./styles.css";
// currently attempting a draggable iframe for a picture-in-picture video instead of just an img
// https://codesandbox.io/s/framer-motion-pip-iframe-1kl17
import React, { useRef } from "react";
import Frame from 'react-frame-component';
import { motion, dragTransition, dragMomentum,dragElastic } from "framer-motion";
import { width } from "dom-helpers";

const Pip = ({ appRef }) => {
    const pipRef = useRef(null);

    const modifyTarget = (target) => {
        if (pipRef.current && appRef.current) {
            const constraintsRect = appRef.current.getBoundingClientRect();
            const pipRect = pipRef.current.getBoundingClientRect();
            const pipMiddleX = pipRect.width / 2;
            const pipMiddleY = pipRect.height / 2;

            if (target + pipMiddleX > constraintsRect.width / 2) {
                return constraintsRect.width;
            } else if (target + pipMiddleY > constraintsRect.height / 2) {
                return constraintsRect.height;
            }

            return 0;
        }
    };

    const transition = {
        power: 0,
        min: 0,
        max: 200,
        timeConstant: 250,
        modifyTarget
    };

    return (
        <motion.div
            className="pip"
            ref={pipRef}
            drag
            dragConstraints={appRef}
            dragElastic={0.1}
            dragTransition={transition}
            whileTap={{ cursor: "grabbing" }}
        >
            <div

                style={{
                    width: 80,
                    height: 100,
                    backgroundColor: '#eee'
                }}

            />
        </motion.div>
    );
};

export default function App() {
    const appRef = React.useRef(null);

    return (
  /*       <div className="App"
            style={{
                width: 375,
                height: 812,
                position: "relative",
                display: "grid",
                gridTemplateColumns: `repeat(1fr, 1fr)`,
                gridAutoRows: `repeat(1fr, 1fr)`
            }}
            ref={appRef}>
            <Pip
                style={{
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100,
                    position: "absolute"
                }}
       appRef={appRef} /> */
           
        <div>    
        <motion.div style={{
               width:100,
               height: 100,
               backgroundColor:"rgba(0,0,0,1)",
              // top:100,
              // left:100,
            //   position:'absolute'
               
        }}
         drag
         
         dragElastic={0.2}
         //上方拖拽弹性
        /*      dragTransition={{
             //    bounceStiffness:175,
           //      bounceDamping:28,
              //   timeConstant:200,
         /*       min:2,
     //            modifyTarget: (target) => {let a = Math.round/(target/290)*290
       // return a 
        }}*/
        dragTransition={{
    power: 0,
    // Snap calculated target to nearest 50 pixels
    modifyTarget: target => Math.round(target / 200) * 200
  }}
         dragConstraints ={{left:0,right:275,top:0,bottom:712}}
        dragMomentum={true}
      // x={X}
       background={"null"}
        >
        {" "}
        </motion.div>


        </div>
  
    );
}
