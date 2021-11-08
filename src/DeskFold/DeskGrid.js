import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";

const boxHome = {
  width: 70,
  height: 70,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  fontWeight: "bold",
  color: "#415fff",
  opacity: 0.3,
  backgroundColor: "#fff",
  borderRadius: 12,
  margin: 9,
};

const cssContainer = {
  marginTop: 16,
  width: 335,
  padding: 0,
  zIndex: 1,
};
const cssRow = {
  top: -80,
  position: "relative",
};

export default function App() {
  const Info = <p>图标移动自动补位</p>;
  return (
    <div>
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="All"
        style={{
          height: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container style={cssContainer}>
          <motion.div
            style={{
              width: 70,
              height: 70,
              top: 0,
              left: 0,
              position: "relative",
              backgroundColor: "#fff",
              boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.2)",
              borderRadius: 12,
              zIndex: 1,
            }}
            drag
            dragElastic={0.2}
            dragTransition={{
              timeConstant: 80,
              power: 0,
              modifyTarget: (target) => Math.round(target / 88) * 88,
            }}
            dragConstraints={{ left: 0, right: 275, top: 0, bottom: 530 }}
            dragMomentum={true}
          >
            <p
              style={{
                color: "#666",
                position: "absolute",
                top: 10,
                left: 10,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Move me
            </p>
          </motion.div>
          <div>
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
          </div>
        </Container>
        <div
          style={{
            background: "#E6ECF4",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "-10",
          }}
        />
        <Bg />
      </div>
    </div>
  );
}
