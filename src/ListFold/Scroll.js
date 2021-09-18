// color: "#415FFF"
import { motion } from 'framer-motion';
import background from "../bg2.png";
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';
import '../App.css';
const Scroll = () => {
  return (
    <div>    


      <motion.h1
        style={{
          padding: 30,
          color: "#333",
          marginLeft: 90,
          y: 0
        }}

        transition={{ type: "spring", velocity: 120 }}
      >
        横滑定位
      </motion.h1>
      <Link to="/List">
        <img  blurRadius={100}  src={backIcon} alt=" " style={{
          width: 30,
          position: 'absolute',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '100'
        }} />
 
      </Link>
 
      <div className="Scroll">
        <div className="AlertCard"
          style={{
          
            backgroundColor: "#fff",
            width: 305,
            height: 600,
            position: 'absolute',
            top: 100,
            left: 40,
            borderRadius: 20,
            opacity: 1,
            zIndex: '20'
          }}
        >
        </div>
        <div  className="BlurCard" 

          style={{
         
            backgroundColor: "#ccc",
            width: 375,
            height: 812,
            position: 'absolute',
            top: 0,
            opacity: 0.6,
            zIndex: '10'
          }}
        >
        </div>
        <div className="mask"
         style={{
          overflow:'hidden',
          top:0,
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