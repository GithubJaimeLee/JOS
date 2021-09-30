import React from "react";
//import Frame from 'react-frame-component';
//import { motion, dragTransition, dragMomentum, dragElastic } from "framer-motion";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import { Container, Row, Col } from 'react-bootstrap';

const boxHome = {
    width: 70,
    height: 70,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    fontWeight: 'bold',
    color: "#415fff",
    opacity: 0.3,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 9
}

const cssContainer = {
    marginTop: 60,
    padding: 0,
    zIndex: '-1'

}
const cssRow = {
    marginRight: 10,
    marginLeft: 10
}



export default function App() {
 
    return (

        <div>
            <Link to="/Desk">
                <img src={backIcon} alt=" " style={{
                    width: 30,
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    opacity: 1,
                    zIndex: '0'
                }}>
                </img>
            </Link>
            <motion.div style={{
                width: 70,
                height: 70,
                top: 70,
                left: 20,
                position: 'absolute',
                backgroundColor: "#fff",
                boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.2)",
                borderRadius: 12,
                zIndex: '10'
            }}
                drag

                dragElastic={0.2}
                //上方拖拽弹性
                /*      dragTransition={{
                     //    bounceStiffness:175,
                   //      bounceDamping:28,
                      //   timeConstant:200,
                 /*       min:2,
             //            modifyTarget: (target) => {let a = Math.round/(target/290)*290
               // return a 
                }}*/
                //  transition={{ type: 'spring', velocity: 100 }}

                dragTransition={{
                    timeConstant: 80,
                    power: 0,
                    // Snap calculated target to nearest 50 pixels
                    modifyTarget: target => Math.round(target / 88) * 88
                }}
                dragConstraints={{ left: 0, right: 275, top: 0, bottom: 712 }}
                dragMomentum={true}
            // x={X}
            //background={"null"}
            >
                <p
                    style={{
                        color: "#666",
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        fontSize: 14,
                        fontWeight: 'bold',

                    }}
                >Move me</p>
            </motion.div>
<div style={{
    background: '#E6ECF4',
    width: 375,
    height: 812,
    position: 'absolute',
    top: 0,
    opacity: 1,
    zIndex: '-10'
}}>
</div>
            <Container style={cssContainer}>

                <Row style={cssRow}>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                </Row>


                <Row style={cssRow}>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                </Row>


                <Row style={cssRow}>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                </Row>


                <Row style={cssRow}>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                </Row>
                <Row style={cssRow}>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                </Row>


                <Row style={cssRow}>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                </Row>


                <Row style={cssRow}>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                    <Col style={boxHome}>
                    </Col>
                </Row>

            </Container>

        </div>

    );
}
