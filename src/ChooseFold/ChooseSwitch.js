import  React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import {Form} from 'react-bootstrap'

const ChooseSwitch = () => {
  return (
    <div className="All"
    style={{
    display: 'flex',
    justifyContent: 'center'
    }}>
      <Link to="/Choose">
        <img src={backIcon} alt=" " style={{
          width: 30,
          position: 'absolute',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '100'
        }}>
        </img>
      </Link>
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
        <Form
         style={{
          position: 'relative',
            width: 375,
            height: 812,
            top: 300,
          left: 100,
            zIndex: '2'
          }}
        
        >
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="开关"
  />

</Form>
    </div>
  );
}

export default ChooseSwitch;