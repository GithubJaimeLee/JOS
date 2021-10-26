import * as React from "react";
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';
import { Grid } from "antd-mobile";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../EditFold/EditServiceListApp.jsx';
import NavBarPage from '../Component/NavBarPage';
const EditServiceList = () => {
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
    <App/>

    </div>  
       
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