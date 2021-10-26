import  React from "react";
import { Link } from 'react-router-dom';
import backIcon from "../Icon/back.png";
import NavBarPage from '../Component/NavBarPage';
const ChooseDate = () => {
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
    </div>
  );
}

export default ChooseDate;