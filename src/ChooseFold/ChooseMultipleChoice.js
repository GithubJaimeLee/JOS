import  React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import {InputGroup} from 'react-bootstrap'

const ChooseMultipleChoice = () => {
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
    <div 
     className="Choose"
      style={{
            width: 300,
            height: 812,
            position: 'absolute',
            top: 300,
            opacity: 1,
            zIndex: '2'
          }}
    >
  <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
  </InputGroup>


  </div>
      <div className="bg"
          style={{
            backgroundColor: "#eee",
            width: 375,
            height: 812,
            position: 'absolute',
            top: 0,
            opacity: 1,
            zIndex: '1'
          }}
        ></div>
    </div>
  );
}

export default ChooseMultipleChoice;