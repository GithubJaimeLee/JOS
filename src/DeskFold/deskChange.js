// color: "#415FFF"
import { animate, motion, useCycle } from 'framer-motion';
import * as React from "react";
/* import background from "../bg2.png"; */
import zoomIcon from "../Icon/zoomIcon.png";
import { Link } from 'react-router-dom';
import { Grid } from "antd-mobile";
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import $ from "jquery";
//press功能


//变形完整交互

const boxHome = {
    width: 70,
    height: 70,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    fontWeight: 'bold',
    color: "#415fff",
    opacity: 1,
    background: '#fff',
    borderRadius: 12,
    position: 'absolute',
    left: 20,
    top: 60
}

/* gridRowStart: `span ${rowSpan[url] || 1}`,
gridColumnStart: `span ${colSpan[url] || 1}`,
boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)", 
backgroundSize: "cover",
backgroundPosition: "center",
backgroundColor: "#fff",
borderRadius: 12,
...style */

const boxAnimation = {
    animationOne: {
        width: 70,
        height: 70
    },
    animationTwo: {
        width: 140,
        height: 70
    },
    animationThree: {
        width: 70,
        height: 140
    },
    animationFour: {
        width: 140,
        height: 140
    }
}

/* 
const btnAnimation = {
    animationOneBtn: {
        width: 70,
        height: 70
    },
    animationTwoBtn: {
        width: 140,
        height: 70
    },animationThreeBtn: {
        width: 140,
        height: 70
    }
} */
//--------------------------------新增开始--------------------------------------------
/* const longPressEvents = (callback, ms = 500) => {

    let timeout = null;

    const start = () => (timeout = setTimeout(callback, ms));
    const stop = () => timeout && window.clearTimeout(timeout);

    return callback
        ? {
            onMouseDown: start,
            onMouseUp: stop,
            onMouseLeave: stop,
            onTouchStart: start,
            onTouchMove: stop,
            onTouchEnd: stop
        }
        : {};
};
 */
/*--------------------------------新增结束--------------------------------------------*/
/* $(function() { $("div.pressBtn").on("Click",function(){
    $(this).style({"display":"none"});
        }); */
const DChange = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo", "animationThree", "animationFour");
   /*  const [animationBtn, cycleAnimation] = useCycle("animationOneBtn", "animationTwoBtn","animationThreeBtn"); */
    //--------------------------------新增开始--------------------------------------------
   /*  const [style, setStyle] = useState("block");
    const check = () => setStyle("none"); */
    //--------------------------------新增结束--------------------------------------------
 

 
    return (

        <div>
            { /*--------------------------------新增开始-------------------------------------------
               <div className="App">

                    <h2>{style}</h2>
                </div>
           --------------------------------新增结束--------------------------------------------*/}

            <Link to="/Desk">
                <img src={backIcon} alt=" " style={{
                    width: 30,
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    opacity: 1,
                    zIndex: '100'
                }}>
                </img>
            </Link>
            <div className='boxAll' style={{
                display: Grid,
                marginTop: 60
            }}
            
            >
                <motion.div className='boxChange'
                    style={boxHome}
                    variants={boxAnimation}
                    animate={animationBox}
   //                 {...longPressEvents(check)}
                
                >

                    <p
                        style={{

                            color: "#666",
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            fontSize: 14
                        }}
                    >Press me</p>
                    <div onClick={() => cycleAnimation()} >
                        <img src={zoomIcon} alt=" " style={{
                            width: 16,
                            position: 'absolute',
                            bottom: 2,
                            right: 2,
                            opacity: 1,
                            zIndex: '100'
                        }}></img>
                        <motion.div className="boxPress"
                //         variants={btnAnimation}
                //          animate={animationBtn}
             
                            style={
                                {
                                    display: 'block',
                                    position: 'absolute',
                                    right: -10,
                                    bottom: -10,
                                    width: 40,
                                    height: 40,
                                    backgroundColor: "#fff",
                                    borderRadius: 20,
                                    textAlign: 'center',
                                    boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.3)"
                                }
                            }>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
           
           
           
           
           
            <div style={{ marginLeft: 180, marginTop: -116 }}>
            </div>
            <div style={{
                background: '#E6ECF4',
                width: 375,
                height: 812,
                position: 'absolute',
                top: 0,
                opacity: 1,
                zIndex: '-1'
            }}>
            </div>
        </div>
    );
}

export default DChange;