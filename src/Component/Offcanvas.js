import React ,{ useState}  from 'react'
import { Button, Offcanvas} from 'react-bootstrap'
import Help from "../Icon/WHelp.png";

function OffCanvasExample({ name,context,contextTitle, ...props }) {
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
                 //   backgroundColor: '#FFFFFF'
                }}
                onClick={handleShow} 
                />
           {/*    {name}   </div> */}
     
        
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
  
/*   function Example() {
 
    return (
      <>
     
       
          <OffCanvasExample  placement={'end'} /></OffCanvasExample>
       
      </>

    )} */
  export default OffCanvasExample;
  //render(<Example />);