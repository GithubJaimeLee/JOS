import  React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import {Carousel} from 'react-bootstrap'
import '../Component/Component.css';
import Bg from "../Img/bg.png"
import Bg2 from "../Img/bg2.png"
const AlertPage = () => {
  return (
    <div className="All"
    style={{
   
    display: 'flex',
    justifyContent: 'center'
    }}>
      <Link to="/Alert">
        <img src={backIcon} alt=" " style={{
          width: 30,
          position: 'absolute',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '10'
        }}>
        </img>
      </Link>
      <Carousel 
      style={{
        height: 600,
        width: 375,
        zIndex: '10'
      }}
    
      variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bg}
      alt="First slide"
      style={{
        height: 500,
        width: 375,
        zIndex: '10'
      }}
    
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bg2}
      alt="Second slide"
      style={{
        height: 500,
        width: 375,
        zIndex: '10'
      }}
    
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bg}
      alt="Third slide"
      style={{
        height: 500,
        width: 375,
        zIndex: '10'
      }}
    
    />
    
  </Carousel.Item>
</Carousel>
      <div className="bg"
          style={{
            backgroundColor: "#eee",
            width: 375,
            height: 812,
            position: 'absolute',
            top: 0,
            opacity: 1,
            zIndex: '2'
          }}
        ></div>
    </div>
  );
}

export default AlertPage;