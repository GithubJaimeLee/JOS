import React, { useState } from "react";
import { motion, useCycle } from 'framer-motion';
import WSet from "../Icon/WSet.png";


const AppWindowStyle = {
  width: 54,
  height: 54,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  color: "#415fff",
  opacity: 1,
  background: 'red',
  borderRadius: 12,
  position: 'absolute',
  x:42,
  top: 248,
  zIndex: 0
}
const SetWindowStyle = {
  position: 'relative',
  top: 400,
  width: 300,
  height: 300,
  borderRadius: 12,
  display: "flex",
  justifyContent: "center",
  backgroundColor: '#FFFFFF',
  zindex: 1
}


const AppWindowAnimation = {
  animationOne: {
    borderRadius: 12,
    width: 54,
    height: 54,
    y:0

  },
  animationTwo: {
    borderRadius:0,
    top: -56,
    x:0,
    y:56,
    scale: 1,
    width: '100vw',
    height: '100vh',
    borderRadius: 12,

  }
}



/////*//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//*/

const SetBtnStyle = {
  position: 'absolute',
  backgroundImage: `url(${WSet})`,
  top: 15,
  right: 80,
  width: 30,
  height: 30,

  borderRadius: 20,
  textAlign: 'center',
  zIndex: 1,
  display: 'flex',
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

  bottom: 300,
  zIndex: 20
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
  zIndex: 1,
}
/*//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//*/


export default function App() {
  const [AnimationAppWIndow, cycleAnimation] = useCycle("animationOne", "animationTwo");
  const [SetWindowAnimation, UPcycleAnimation] = useCycle("UPanimationOne", "UPanimationTwo");
  const [DragBox, cycleDrag] = useCycle(false, true);

  const [color, setColor] = useState("1"
  );

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
          <input
            className="in"
            type="text"
            value={color}
            onChange={handleColorChange}
            style={{
              height: 30,
              marginTop: 30,
              width: 220,
              borderRadius: 6,
              borderWidth: 2,
              borderColor: "#eee",

            }}
          />
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
        variants={AppWindowAnimation}
        animate={AnimationAppWIndow}
        transition={style}

        drag={DragBox}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={1}
        onClick={() => cycleAnimation() & cycleDrag()}
      />
   
    </div>

      </div>
  );
}
