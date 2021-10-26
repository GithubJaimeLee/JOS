import React, { useState } from "react";
import { motion, useCycle } from 'framer-motion';
import WSet from "../Icon/Set.png";
import NoteAndroid from "../Img/NoteAndroid.png";
import NoteBg from "../Img/NoteBg.png";
import '../Component/Component.css';


const SetIconBgStyle={
  backgroundImage: `url(${NoteBg})`,
  width:690,
  height:  812,
  position: 'relative',
/*   top: -100,
  left: -100, */
  backgroundColor: '#FFFFFF',
  borderColor: '#FFFFFF',
  y:-355,
  x:-300,
  scale: 0.2,
  opacity: 1,
  zIndex:100,
}


const SetWindowStyle = {
  position: 'relative',
  top: 400,
  width: 350,
  height: 340,
  borderRadius: 12,
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: '#FFFFFF',
/*   border:'1px solid #ddd', */
  boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
  zindex: 1
}



const AppWindowStyle = {
  width: 152,
  height: 152,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  color: "#415fff",
  opacity: 1,
  backgroundColor: '#FFFFFF',
  borderRadius: 14,
  position: 'absolute',
  x: 82,
  top: 70,
  zIndex: 0,
  overflow: 'hidden',
  backgroundRepeat:'no-repeat'
}



const AppWindowVariants = {
  animationOne: {
    backgroundImage: null,
    y: 0
  },
  animationTwo: {
    backgroundImage: `url(${NoteAndroid})`,
  
    //  borderRadius:0,
    top: -56,
    x: 0,
    y: 56,
    scale: 1.01,
    width: '100vw',
    height: '100vh',
    backgroundSize:'100vw 100vh'
  }
}


/////*//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//*/

const SetBtnStyle = {
  position: 'absolute',
  backgroundImage: `url(${WSet})`,
  top: 13,
  right: 80,
  width: 30,
  height: 30,
  borderRadius: 20,
  textAlign: 'center',
  zIndex: 1001,
  display: 'flex',
  justifyContent: 'center',
}

const UPBoxAnimation = {
  UPanimationOne: {
    y: 500,
    zIndex: 1
  },
  UPanimationTwo: {
    y: 0,
    zIndex: 1

  }
}

const NoteBgVariants = {
  NoteBgAnimationOne: {
   y:-355,
   x:-300,
   scale: 0.2
  },
  NoteBgAnimationTwo: {
    y:-100,
    x:-100,
    scale: 2,
    opacity: [0.1, 0] ,

  }
}
/*//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//*/


export default function SetWindow() {
  const [AppWindowAnimation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  const [SetWindowAnimation, UPcycleAnimation] = useCycle("UPanimationOne", "UPanimationTwo");
  const [NoteBgAnimation, CycleNoteBgAnimation] = useCycle("NoteBgAnimationOne", "NoteBgAnimationTwo");
  const [DragBox, cycleDrag] = useCycle(false, true);

  const [color, setColor] = useState("1");

  function handleColorChange(e) {
    const newValue = e.target.value;
    setColor(newValue);
    console.log(newValue);
  }

  const style = {
    type: "tween",
    duration: color
  };

  return (

    <div>
      <div
        className='All'
        style={{
          zindex: 10,
          height: 812,
          width: '100vw',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div>
          <motion.div className='SetWindow'
            style={
              SetWindowStyle
            }
            variants={UPBoxAnimation}
            animate={SetWindowAnimation}
          >
          <div
          className='SetText'
          style={{
         marginTop:30
          }}
          >
          <div
           style={{
           width:220,
          height:'auto',
          fontSize:12
          }}>
          <h6>动校速度设置</h6>
          <p
             style={{
          color: '#666'
          }}
          >(值越小速度越快，默认值为1，可为小数)</p>
          </div>
           
            <input
              className="in"
              type="text"
              value={color}
              onChange={handleColorChange}
              style={{
                margin:0,
                height: 30,
                width: 220,
                borderRadius: 6,
              }}
            />
             </div>  
          </motion.div>
        </div>

        <div className='SetBtn'
          onClick={() => UPcycleAnimation()}
          style={SetBtnStyle}
        ></div>



        <motion.div
          className="AppWindow"
          value={color}
          onChange={handleColorChange}

          style={AppWindowStyle}
          variants={AppWindowVariants}
          animate={AppWindowAnimation}
          transition={style}

          drag={DragBox}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={1}
          onClick={() => cycleAnimation() & cycleDrag() & CycleNoteBgAnimation()}
         >
         <motion.div
          variants={NoteBgVariants}
          animate={NoteBgAnimation}
          transition={style}
          style={SetIconBgStyle}
         />
         </motion.div>
      </div>
    </div>
  );
}
