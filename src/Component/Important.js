import React, { useState} from "react";
import { motion, useCycle} from 'framer-motion';



const BoxBtn = {
  width: 54,
  height: 54,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  color: "#415fff",
  opacity: 1,
  background: '#fff',
  borderRadius: 12,
  position: 'relative',
  left: 128,
  top: 647,
  zIndex: 100
}

const boxAnimation = {
  animationOne: {
      borderRadius: 12,
      width: 54,
      height: 54,
      left: 128,


      position: 'relative',
  },
  animationTwo: {
      borderRadius: 0,
      position: 'relative',
      top: -56,
      left: 0,
      right:0,
      scale: 1.02,
      width: '100vw',
      height: '100vh',
      borderRadius: 12,

  }
}







export default function App() {
  const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
  const [DragBox, cycleDrag] = useCycle(false, true);

  const [color, setColor] = useState("1"
  );

  function handleColorChange(e) {
    const newValue = e.target.value;
    setColor(newValue);
    console.log(newValue);
  }

  const style = {
    type: "tween" ,
   duration: color
  };

  return (
    
    <div className="body">
  
      <input
        className="in"
        type="text"
        value={color}
        onChange={handleColorChange}
      />
      <br />
      <br />
      
      <motion.div
 
        className="incolor"
        value={color}
        onChange={handleColorChange}
      


                            style={BoxBtn}
                            variants={boxAnimation}
                            animate={animationBox}
                            transition={style}
                            
                            drag={DragBox}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={1}
                            onClick={() => cycleAnimation() & cycleDrag()}





      />
    </div>
   
  );
}
