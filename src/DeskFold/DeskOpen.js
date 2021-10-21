import { motion, useCycle, AnimatePresence } from 'framer-motion';
import * as React from "react";
import background from "../Img/DeskAndroid.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import WNavBarPage from '../Component/WNavBarPage';

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

/* const BgAnimation = {
    BgAnimationOne: {
        width: 375,
        height: 812,   
    },
    BgAnimationTwo: {
        position: 'initial',
     
 
    }
} */

/* const boxDrag = {
    DragOne: {
   false:false
    },
    DragTwo: {
        ture:ture
    }
} */


const DeskOpen = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
//   const [animationBg, BgcycleAnimation] = useCycle("BgAnimationOne", "BgAnimationTwo");
    const [DragBox, cycleDrag] = useCycle(false, true);

    const Info = <p>Hello,<br/> world!</p>;
    return (

        <div className="All"
        
        >
                   <WNavBarPage
        placement={'end'}
        contextTitle={'说明'}
        context={Info}
        />

            <div
                className="Screen"
                style={{
        display: 'flex',
        justifyContent: 'center'
        }}
            >
              
                <AnimatePresence >
             
                        <motion.div className='boxChange'
                            style={BoxBtn}
                            variants={boxAnimation}
                            animate={animationBox}
                            transition={{ type: "tween" }}
                            transition= {{ duration: 1 }}
                            drag={DragBox}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={1}
                            onClick={() => cycleAnimation() & cycleDrag()}
                        />
                  </AnimatePresence>
         
            <div   className="BgImg"
          //          variants={BgAnimation}
       //             animate={animationBg}     
    //                transition={{ type: "tween" }}       
   //                 transition= {{ duration: 2 }}
                     style={{   
                        backgroundImage: `url(${background})`,
                        width: 375,
                        height: 812,   
                        top: 0,
                        opacity: 1,
                        zIndex: '0',
                    position: 'absolute',
                    }} />
            <div className='bg'
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#000000',
                    top: 0,
                    position: 'absolute',
                    zIndex: '-10000'
                    
                }}
            />

</div>
        </div>
    );
}

export default DeskOpen;

