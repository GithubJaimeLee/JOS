// color: "#415FFF"
import * as React from "react";
import { useRef } from "react";
import { motion} from 'framer-motion';
import background from "../bg2.png";
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';
import '../App.css';


const Scroll = () => {

  const constraintsRef = useRef(null);

  return (
    <div>



      <Link to="/List">
        <img  src={backIcon} alt=" " style={{
          width: 30,
          position: 'absolute',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '100'
        }} />

      </Link>
    
        <div className="Scroll"
                  style={{    
            overflow:"hidden",
            width: 375,
            height: 812      
          }}> 
         <div className="scrollBox"
         ref={constraintsRef}

          style={{    
            overflow:"hidden",
              width: 900,
              height: 600.1,
              position: 'absolute',
              top:100,
              left: -260,  
              opacity: 1,
              zIndex: '21'
            }}> 
          <motion.div className="AlertCard"
            drag dragConstraints={ constraintsRef }
        /*    dragConstraints={{ left: -300, top: 0, right: 260, bottom: 0 }} */
           
            dragElastic={0}
            style={{
              backgroundColor: "#fff",
              left: 300,  
              width: 305,
              height: 600,
              position: 'absolute',
              borderRadius: 20,
              opacity: 1,
              zIndex: '20'
           
            }}
          >
          </motion.div>
</div>
          <div className="blackMask"
            style={{
              backgroundColor: "#000000",
              width: 375,
              height: 812,
              position: 'absolute',
              top: 0,
              opacity: 0.4,
              zIndex: '2'
            }}
          ></div>
          <div className="mask"
            style={{
              overflow: 'hidden',
              top: 0,
              color: "#000",

              width: 375,
              height: 812,
              position: 'absolute',

            }}
          >

            <div className="BlurBackground"
              style={{
                backgroundImage: `url(${background})`,
                width: 375,
                height: 812,
                position: 'absolute',
                top: 0,
                opacity: 1,
                zIndex: '-1'
              }} >
            </div>
          </div>
        </div>
    </div> 
 

  );
}

export default Scroll;