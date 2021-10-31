import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../Component/Component.css";
import Logo from "../Img/logo.png";
import WbackIcon from "../Icon/back.png";
import { Offcanvas } from "react-bootstrap";

function NavBarSecondPage({ Title, ...props }) {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "white",
          backdropFilter: "blur(2px)",
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
                position: "absolute",
                top: 16,
                left: 20,
                opacity: 1,
                zIndex: "100",
              }}
            ></img>
          </Navbar.Brand>
          <Navbar.Brand position="middle-center" href="/">
            {" "}
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {Title}
          </Navbar.Brand>
          <Navbar.Brand />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarSecondPage;
