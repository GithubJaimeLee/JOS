import  React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";

const AlertNew = () => {
  return (
    <div >
      <Link to="/Alert">
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
    </div>
  );
}

export default AlertNew;