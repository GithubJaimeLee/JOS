import  React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import {InputGroup} from 'react-bootstrap'
import NavBarPage from '../Component/NavBarPage';
const ChooseMultipleChoice = () => {
  const Info = <p>Hello,<br/> world!</p>;
  return (

    <div className="All">
    <NavBarPage
    placement={'end'}
    contextTitle={'说明'}
    context={Info}
    />
   <div className="ScreenCenter"
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                position:'absolute',
                top:0
            }}
            >
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
    </div>
  );
}

export default ChooseMultipleChoice;