import React, { useState } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import '../Component/Component.css';
import WbackIcon from "../Icon/Wback.png";
import { Offcanvas } from 'react-bootstrap'
import Help from "../Icon/WHelp.png";

function WNavBarPage({ name, context, contextTitle,...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
/*     const options = [
        {
          context: '标题',
          scroll: false,
          backdrop: true,
        }]; */
    return (
        <div>
{/*  <Navbar bg="light" expand="lg"> */}
           <Navbar   expand="lg">
                <Container>
                    <Navbar.Brand href="javascript:history.back()">

                        <img src={WbackIcon} alt=" " style={{
                            width: 30,
                            position: 'absolute',
                            top: 16,
                            left: 20,
                            opacity: 1,
                            zIndex: '100'
                        }}>
                        </img>

                    </Navbar.Brand>
                    <div className="Help" alt=" " style={{
                        backgroundImage: `url(${Help})`,
                        position: 'relative',
                        top: 0,
                        left: 0,
                        opacity: 1,
                        zIndex: '10',
                        width: 30,
                        height: 30,
                        margin: 5
                    }}
                        onClick={handleShow}
                    />

                    <Offcanvas show={show} onHide={handleClose} {...props}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title> {contextTitle}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                        {context}
                        </Offcanvas.Body>
                    </Offcanvas>


                </Container>
            </Navbar>
        </div>
    )
}

export default WNavBarPage;

