import  React from "react";
import Loading from "../Img/Loading.gif";
import NavBarPage from '../Component/NavBarPage';
const AlertLoading = () => {
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
            <img src={Loading} alt=" " style={{
          width: 60,
          position: 'relative',
          top: 300,
          opacity: 1,
          zIndex: '100'
        }}>
        </img>
    </div>
    </div>
  );
}

export default AlertLoading;