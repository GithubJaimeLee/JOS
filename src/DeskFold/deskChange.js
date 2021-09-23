// color: "#415FFF"
import * as React from "react";
/* import background from "../bg2.png"; */
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';
import { Grid } from "antd-mobile";
  import { Container, Row, Col } from 'react-bootstrap'; 
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
  padding:0,
  margin:20
}  

/* gridRowStart: `span ${rowSpan[url] || 1}`,
gridColumnStart: `span ${colSpan[url] || 1}`,
boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)", 
backgroundSize: "cover",
backgroundPosition: "center",
backgroundColor: "#fff",
borderRadius: 12,
...style */

const DChange= () => {

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
        marginTop:60
      }}
      >
 <div style={boxHome}>
            </div>
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
        background:'#E6ECF4',
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