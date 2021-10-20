import  React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import {ProgressBar} from 'react-bootstrap'

const now = 60;

const ChooseSlider = () => {
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
  );
}

export default ChooseSlider;