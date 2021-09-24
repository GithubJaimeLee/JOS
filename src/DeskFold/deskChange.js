// color: "#415FFF"
import { animate, motion, useCycle } from 'framer-motion';
import * as React from "react";
/* import background from "../bg2.png"; */
import zoomIcon from "../Icon/zoomIcon.png";
import { Link } from 'react-router-dom';
import { Grid } from "antd-mobile";
import backIcon from "../Icon/back.png";
import 'bootstrap/dist/css/bootstrap.min.css';



/* import Desk from "../Desk"; */
const boxHome = {
    width: 70,
    height: 70,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    fontWeight: 'bold',
    color: "#415fff",
    opacity: 1,
    background: '#fff',
    borderRadius: 12,
    position:'absolute',
    left:20,
    top:60
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


const DChange = () => {
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo", "animationThree","animationFour");
    return (
        <div>


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
                <motion.div
                    style={boxHome}
                    variants={boxAnimation}
                    animate={animationBox}
                >
                    <div onClick={() => cycleAnimation()}
              /*      style={{
                         
                       position: 'absolute' 
                        }}
                        
                        */
                     >
               <img src={zoomIcon} alt=" " style={{
                                width: 16,
                                position: 'absolute',
                                bottom: 2,
                                right: 2,
                                opacity: 1,
                                zIndex: '100'
                            }}></img>
                        <div style={{
                          position: 'absolute',
                           right:-10,
                            bottom:-10,
                            width: 40,
                            height: 40,
                            backgroundColor: "#fff",
                            borderRadius: 20,
                            textAlign: 'center',
                            boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.3)"
                        }}>
                          
                        </div>
                        </div>
                  
                </motion.div>
                {/*     <Container>





           <Row>
            <Col style={boxHome}>
            </Col>
         <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col> 
          </Row>*/}
                {/* 

          <Row>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
          </Row>


          <Row>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
          </Row>


          <Row>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
          </Row>
          <Row>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
          </Row>


          <Row>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
            <Col style={boxHome}>
            </Col>
          </Row>

     


        </Container> */}



            </div>

            <div style={{ marginLeft: 180, marginTop: -116 }}>

            </div>
            <div style={{
                background: '#E6ECF4',
                /*   backgroundImage: `url(${background})`, */
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