// color: "#415FFF"
import * as React from "react";
import { motion } from 'framer-motion';
import background from "./bg2.png";
import backIcon from "./Icon/back.png";
import { Link } from 'react-router-dom';
import { Grid } from "antd-mobile";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const boxHome = {
  width: 65,
  height: 65,
  /* boxShadow: "0px 0px 12px 0px rgba(65, 95, 255, 0.6)", */
  fontWeight: 'bold',
  color: "#415fff",
  opacity: 1,
  background: '#fff',
  borderRadius: 12,
  padding:0,
  margin:14
}


const Desk = () => {

  return (
    <div>

      <Link to="/">
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
        display: Grid
      }}
      >
        <Container>


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


        </Container>
      </div>

      <div style={{ marginLeft: 180, marginTop: -116 }}>

      </div>
      <div style={{
        backgroundImage: `url(${background})`,
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

export default Desk;