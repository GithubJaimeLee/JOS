import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../DeskFold/DeskMoveApp.jsx';
import NavBarPage from '../Component/NavBarPage';

const DeskMultiDrag = () => {
  const Info = <p>Hello,<br/> world!</p>;

  return (
    <div className="All"  >
      <NavBarPage
        placement={'end'}
        contextTitle={'说明'}
        context={Info}
        />
      <div
        className="Gird"
        style={{
          display: 'Grid',
          justifyContent: 'center'
        }}
      >
     
        <App />
      </div>
     
      <div className='boxAll' style={{
       display: 'Grid'
      }}
      >
      </div>
      <div style={{ marginLeft: 180, marginTop: -116 }}>

      </div>
      <div style={{
        background: '#E6ECF4',
        /*   backgroundImage: `url(${background})`, */
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        opacity: 1,
        zIndex: '-1'
      }}>
      </div>
    </div>
  );
}

export default DeskMultiDrag;