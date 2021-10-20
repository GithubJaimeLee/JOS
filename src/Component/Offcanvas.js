import React ,{ useState}  from 'react'
import { Offcanvas} from 'react-bootstrap'
import Help from "../Icon/Help.png";

function OffCanvas({ name,context,contextTitle, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
            <div  alt=" " style={{
                    backgroundImage: `url(${Help})`,
                  position: 'relative',
                   top: -6,
                   left: 320,
                    opacity: 1,
                    zIndex: '10',
                    width:30,
                    height: 30,
                }}
                onClick={handleShow} 
                />
     
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title> {contextTitle}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          {context}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  

export default OffCanvas;
