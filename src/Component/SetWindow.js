import React, { useState } from "react";
import { motion, useCycle } from 'framer-motion';
import WSet from "../Icon/WSet.png";
import Note from "../Img/Note.png";
import NoteBg from "../Img/NoteBg.png";

const AppWindowStyle = {
  width: 152,
  height: 152,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  color: "#415fff",
  opacity: 1,
  backgroundColor: '#FFFFFF',
  //backgroundImage: `url(${Note})`,
  borderRadius: 14,
  position: 'absolute',
  x: 82,
  top: 66,
  zIndex: 0,
  overflow: 'hidden'
}

const SetIconBgStyle={
  backgroundImage: `url(${NoteBg})`,
  width:'100vw',
  height:  '100vh',
  position: 'relative',
/*   top: -100,
  left: -100, */
  backgroundColor: '#FFFFFF',
  borderColor: '#FFFFFF',
  scale:1,
  opacity: 1,
  zIndex:100,
}





const SetWindowStyle = {
  position: 'relative',
  top: 400,
  width: 300,
  height: 300,
  borderRadius: 12,
  display: "grid",
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: '#FFFFFF',
  zindex: 1
}


const AppWindowAnimation = {
  animationOne: {
    // borderRadius: 12,
   // width: 54,
  //  height: 54,
    y: 0

  },
  animationTwo: {
    //  borderRadius:0,
    top: -56,
    x: 0,
    y: 56,
    scale: 1.01,
    width: '100vw',
    height: '100vh'

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
  zIndex: 1,
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


/*//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//*/


export default function SetWindow() {
  const [AnimationAppWIndow, cycleAnimation] = useCycle("animationOne", "animationTwo");
  const [SetWindowAnimation, UPcycleAnimation] = useCycle("UPanimationOne", "UPanimationTwo");
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

          ><h6 style={{
          height:20
          }}>hello</h6>
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
         >
         <motion.div
         style={SetIconBgStyle}
         />
         </motion.div>
      </div>
    </div>
  );
}
