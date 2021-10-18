import * as React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/Wback.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import FoldInfo from "../Img/FoldInfo.png";
import { Accordion } from 'react-bootstrap';
import '../Component/Component.css';

import OffCanvasExample from '../Component/Offcanvas';
//press功能
//变形完整交互


const FoldContext = () => {
  
    return (
        <div
            style={{
                display: 'grid',
                justifyContent: 'center'
            }}
        >
        
            <div className='Background'
                style={{
                    backgroundImage: `url(${FoldInfo})`,
                    top: 0,
                    width: 375,
                    height: 812,
                    zIndex: 10,
                    
                }}
            >
              
             <Link to="/Fold">
                <img src={backIcon} alt=" " style={{
                    width: 30,
                    position: 'relative',
                    top: 20,
                    left: 20,
                    opacity: 1,
                    zIndex: '10'
                }}>
                </img>
               
            </Link>
            <OffCanvasExample  placement={'end'}  
          //  name={'X'}
              contextTitle={'我在测试'} context={'我在测试'} />
            <Accordion
                style={{
                    width: 340,    
                   top:150,
                   left:17.5,
                   position: 'relative'
                }}
            //defaultActiveKey="1"
            //flush
            >

                <Accordion.Item eventKey="1">
                    <Accordion.Header 
                    ></Accordion.Header>
                    <Accordion.Body
                        style={{
                            height: 210       
                        }}
                    >
                    </Accordion.Body>

                </Accordion.Item>
           
            </Accordion>
       
            </div>
            {/*      <AnimatePresence>
               
                <motion.div className='boxChange'
                    style={boxHome}
                    variants={boxAnimation}
                    animate={animationBox}
                >
                        <div className='Allbtn' onClick={() => cycleAnimation()} >
                            <div className="boxPress"
                                style={
                                    {
                                        display: 'block',
                                        position: 'absolute',
                                        right: 0,
                                        top: 0,
                                        width: 40,
                                        height: 40,
                                        backgroundColor: "#fff",
                                        borderRadius: 0,
                                        textAlign: 'center',
                                        boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.3)"
                                    }
                                }>
                            </div>
                        </div>           
                </motion.div>
            </AnimatePresence>
 */}
        </div>
    );
}

export default FoldContext;

