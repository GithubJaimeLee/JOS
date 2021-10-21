import { motion, useCycle} from 'framer-motion';
import * as React from "react";


const ObjStyle = {
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


const DeskOpen = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
//
    const [DragBox, cycleDrag] = useCycle(false, true);

    return (

                        <motion.div className='boxChange'
                            style={ObjStyle}
                            variants={boxAnimation}
                            animate={animationBox}
                            transition={{ type: "tween" }}
                       //     transition= {{ duration: 1 }}
                            drag={DragBox}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={1}
                            onClick={() => cycleAnimation() & cycleDrag()}
                        />
    );
}

export default DeskOpen;

