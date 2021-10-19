import * as React from "react";
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';
import { Grid } from "antd-mobile";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../EditFold/EditServiceListApp.jsx';

const EditServiceList = () => {
  return (
    <div 
    style={{
  
    }}
    >
    <div 
    className="Gird"
    style={{
    display: 'flex',
    justifyContent: 'center'
    }}
    >
    <App/>

    </div>  
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
      <div className='boxAll' style={{
        display: Grid
      }}
      >
      </div>
      <div style={{ marginLeft: 180, marginTop: -116 }}>

      </div>
 

      <div style={{
       // background: '#E6ECF4',
        /*   backgroundImage: `url(${background})`, */
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        opacity: 1,
        zIndex: '-2',
        display: 'flex',
    justifyContent: 'center'
      }}>  
        <div className="bg"
          style={{
            backgroundColor: "#eee",
            width: 375,
            height: 812,
            position: 'absolute',
            top: 0,
            opacity: 1,
            zIndex: '-1'
          }}
        ></div>
      </div>
    </div>
  );
}

export default EditServiceList;