import  React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import {ProgressBar} from 'react-bootstrap'
import NavBarPage from '../Component/NavBarPage';
const now = 60;
const Info = <p>Hello,<br/> world!</p>;
const ChooseSlider = () => {
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
 
      <ProgressBar now={now} label={`${now}%`}
        style={{
          position: 'absolute',
            top: 300,
            width: 305,
            height: 20,
            zIndex: '1'
          }}
          />
      <div className="bg"
          style={{
            backgroundColor: "#aaa",
            width: 375,
            height: 812,
            position: 'absolute',
            top: 0,
            opacity: 1,
            zIndex: '0'
          }}
        ></div>
    </div>
    </div>
  );
}

export default ChooseSlider;