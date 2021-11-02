import React from "react";
import { Carousel } from "react-bootstrap";
import "../Component/Component.css";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Img/bg.png";
import Bg2 from "../Img/bg2.png";

const AlertPage = () => {
  const Info = <p>页码指示</p>;
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="CenterScreen"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Carousel
          style={{
            height: 600,
            width: 375,
            zIndex: "10",
            position: "absolute",
            top: 0,
          }}
          variant="dark"
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Bg}
              alt="First slide"
              style={{
                height: 500,
                width: 375,
                zIndex: "10",
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
                zIndex: "10",
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
                zIndex: "10",
              }}
            />
          </Carousel.Item>
        </Carousel>
        <div
          className="bg"
          style={{
            backgroundColor: "#eee",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "2",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AlertPage;
