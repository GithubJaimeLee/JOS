import  React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";

const EditGrid = () => {
  return (
    <div className="All"
    style={{
    display: 'flex',
    justifyContent: 'center'
    }}>
      <Link to="/Edit">
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
    </div>
  );
}

export default EditGrid;