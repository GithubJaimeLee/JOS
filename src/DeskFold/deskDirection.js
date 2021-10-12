import * as React from "react";
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';
import { Grid } from "antd-mobile";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../ListFold/deskAppZoom.jsx';
//import { position } from "dom-helpers";


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
  padding: 0

}
const cssRow = {
  marginRight: 10,
  marginLeft: 10
}

const DDirection = () => {

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
      <div
        style={{
          backgroundColor: '#E6ECF4',
          position: 'absolute',
          width: 375,
          height: 812,
          top: 0,
          zIndex: -1
        }}
      >

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
          <Col style={EboxHome}>
          </Col>
          <Col style={EboxHome}>
          </Col>
          <Col style={EboxHome}>
          </Col>
          <Col style={EboxHome}>
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
          <Col style={boxHome}>
          </Col>
          <Col style={boxHome}>
          </Col>
          <Col style={boxHome}>
          </Col>
        </Row>
      </Container>


      {/* ------------------------------自动补位状态----------------------------------------- */}
      <div className='boxAll' style={{
        display: Grid,
        position: 'absolute',
        left: 0,
        top: 9,
        width: 375,
        height: 812
      }} >
        <App />
      </div>
      <div style={{ marginLeft: 180, marginTop: -116 }}>
      </div>
      <div style={{
        background: '#E6ECF4',
        //  backgroundImage: `url(${background})`, 
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


//</div> )};
export default DDirection;