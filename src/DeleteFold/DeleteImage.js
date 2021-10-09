import * as React from "react";
import { motion } from 'framer-motion';
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import PhotoBg from "../Img/OldPhoto.png";
import '../App.css';



/*//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓grid输入/↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓//*/

import { Grid } from "antd-mobile";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../DeleteFold/DeleteImgApp.jsx';


{/*//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑gird输入/↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//*/}

const VImgGrid = {
  width: 90,
  height: 90,
  margin: 4,
  opacity: 0.5,
  backgroundColor: '#ccc',
  zIndex: 10
}
const DeleteImage = () => {
  return (
    <div >

{/*//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓grid输入/↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓//*/}
<App />
{/*//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑gird输入/↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//*/}


{/*//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓下方功能完整/↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓//*/}
      <Link to="/Delete">
        <img src={Bback} alt=" "
          style={{
            width: 30,
            position: 'absolute',
            top: 20,
            left: 20,
            opacity: 1,
            zIndex: '100'
          }} />
      </Link>
       <motion.div className="HeadCard"
        drag="y"
        dragConstraints={{ top: -40, bottom: 0 }}
        dragElastic={0}
        style={{
          backgroundColor: '#fff',
          top: 0,
          width: 375,
          height: 90,
          position: 'absolute',

          opacity: 1,
          zIndex: 1
        }}>
      </motion.div>
      <div style={{
        top: 96,
        position: 'absolute'
      }}>
      {/*   <Container >
          <Row>
            <Col style={VImgGrid
            }>1 of 2</Col>
            <Col style={VImgGrid
            }>1 of 2</Col>
            <Col style={VImgGrid
            }>1 of 2</Col>
            <Col style={VImgGrid
            }>1 of 2</Col>
          </Row>
          <Row>
            <Col style={VImgGrid
            }>1 of 2</Col>
            <Col style={VImgGrid
            }>1 of 2</Col>
            <Col style={VImgGrid
            }>1 of 2</Col>
            <Col style={VImgGrid
            }>1 of 2</Col>
          </Row>
          <Row>
            <Col style={VImgGrid
            }>1 of 2</Col>
            <Col style={VImgGrid
            }>1 of 2</Col>
            <Col style={VImgGrid
            }>1 of 2</Col>
            <Col style={VImgGrid
            }>1 of 2</Col>
          </Row>
        </Container> */}
      </div> 
      <div className='Bg'
        style={{
         // backgroundImage: `url(${PhotoBg})`,
          backgroundColor: '#000',
          width: 375,
          height: 812,
          position: 'absolute',
          top: 0,
          opacity: 0.5,
          zIndex: '-1'
        }}></div> 
    </div>

  );
}

export default DeleteImage;

