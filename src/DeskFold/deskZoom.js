import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DeskDirectApp from "./DeskDirectApp.jsx";
import NavBarPage from "../Component/NavBarPage";

const boxHome = {
  width: 70,
  height: 70,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  fontWeight: "bold",
  color: "#415fff",
  opacity: 1,
  backgroundColor: "#fff",
  borderRadius: 12,
  margin: 9,
};
const EboxHome = {
  width: 70,
  height: 70,

  fontWeight: "bold",
  backgroundColor: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
  opacity: 1,

  borderRadius: 12,
  margin: 9,
};

const cssContainer = {
  marginTop: 60,
  padding: 0,
  width: 375,
};
const cssRow = {
  marginRight: 10,
  marginLeft: 10,
};

const DZoom = () => {
  const Info = <p>图标移动自动补位</p>;
  return (
    <div>
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />

      <div
        className="boxAll"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container style={cssContainer}>
          <Row style={cssRow}>
            <Col style={EboxHome}></Col>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
          </Row>
          <Row style={cssRow}>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
          </Row>
          <Row style={cssRow}>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
          </Row>
          <Row style={cssRow}>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
          </Row>
          <Row style={cssRow}>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
          </Row>
          <Row style={cssRow}>
            <Col style={EboxHome}></Col>
            <Col style={EboxHome}></Col>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
          </Row>
          <Row style={cssRow}>
            <Col style={EboxHome}></Col>
            <Col style={EboxHome}></Col>
            <Col style={boxHome}></Col>
            <Col style={boxHome}></Col>
          </Row>
        </Container>
        {/* ------------------------------自动补位状态----------------------------------------- */}

        <DeskDirectApp />
      </div>

      <div
        style={{
          background: "#E6ECF4",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          opacity: 1,
          zIndex: "-1",
        }}
      ></div>
    </div>
  );
};

export default DZoom;
