import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import "../css/Component.css";
import WbackIcon from "../Icon/back.png";
import { Offcanvas } from "react-bootstrap";
import Help from "../Icon/Help.png";

function DeskOpenNavBarPage({ name, context, contextTitle, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar
        style={{
          width: "100vw",
          //  backgroundColor: "rgba(255, 255, 255, 0.2)",
          //  backdropFilter: "blur(2px)",
          pointerEvents: "none",
          zIndex: 1000,
        }}
        expand="lg"
      >
        {/*  <Navbar expand="lg"> */}
        <Container fluid>
          <Navbar.Brand href="javascript:history.back()">
            <img
              src={WbackIcon}
              alt="WbackIcon"
              style={{
                width: 30,
                pointerEvents: "auto",
                position: "absolute",
                filter:
                  "drop-shadow(0px 0px 2px #fff) drop-shadow(0px 0px 8px #fff)",
                top: 16,
                left: 20,
                opacity: 1,
                zIndex: 10,
              }}
            />
          </Navbar.Brand>
          <div
            className="Help"
            alt=" "
            style={{
              pointerEvents: "auto",
              filter:
                "drop-shadow(0px 0px 2px #fff) drop-shadow(0px 0px 8px #fff)",
              backgroundImage: `url(${Help})`,
              position: "relative",
              top: 0,
              left: 0,
              opacity: 1,
              zIndex: 10,
              width: 30,
              height: 30,
              margin: 5,
            }}
            onClick={handleShow}
          />

          <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title> {contextTitle}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>{context}</Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default DeskOpenNavBarPage;
