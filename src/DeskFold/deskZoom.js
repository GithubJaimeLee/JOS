import * as React from "react";
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';
import { Grid } from "antd-mobile";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../ListFold/deskAppDirect.jsx';


const boxHome = {
  width: 70,
  height: 70,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  fontWeight: 'bold',
  color: "#415fff",
  opacity: 1,
  backgroundColor: '#fff',
  borderRadius: 12,
  margin: 9
}
const EboxHome = {
  width: 70,
  height: 70,

  fontWeight: 'bold',
  backgroundColor: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
  opacity: 1,

  borderRadius: 12,
  margin: 9
}

const cssContainer = {
  marginTop: 60,
  padding: 0,
  width:375

}
const cssRow = {
  marginRight: 10,
  marginLeft: 10
}

const DZoom = () => {

  return (
    <div >
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
  
      <div className='boxAll'
       style={{
        display: Grid,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '355',
        height:'100%'
      }} >
      <Container style={cssContainer}>
        <Row style={cssRow}>
          <Col style={EboxHome}>
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
          <Col style={EboxHome}>
          </Col>
          <Col style={EboxHome}>
          </Col>
          <Col style={boxHome}>
          </Col>
          <Col style={boxHome}>
          </Col>
        </Row>
        <Row style={cssRow}>
          <Col style={EboxHome}>
          </Col>
          <Col style={EboxHome}>
          </Col>
          <Col style={boxHome}>
          </Col>
          <Col style={boxHome}>
          </Col>
        </Row>
      </Container>
      {/* ------------------------------自动补位状态----------------------------------------- */}
   
        <App />
      </div>

 
   
      <div style={{
        background: '#E6ECF4',
        width: '100%',
        height:'100%',
        position: 'absolute',
        top: 0,
        opacity: 1,
        zIndex: '-1'
      }}>
      </div>
    </div>
  );
}

export default DZoom;