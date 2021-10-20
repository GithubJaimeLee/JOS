import * as React from "react";
import { Grid } from "antd-mobile";
import 'bootstrap/dist/css/bootstrap.min.css';
import DeskMoveApp from '../DeskFold/deskApp.jsx';
import NavBarPage from '../Component/NavBarPage';

const DApp = () => {
  return (
    <div className="All" >
      <NavBarPage
        placement={'end'}
        contextTitle={'说明'}
        context={ "虚拟示例：弹窗：\nposition：悬浮位置+比例值\ntime：250ms\nbezier curve ：(0.37, 0.75, 0.46 ,1)\nposition：悬浮位置+比例值~悬浮位置\ntime：200ms\nbezier curve ：(0.3, 0, 0.5 ,1)\n\n背景压黑：\nalpha：0～0.4\ntime：300ms\nbezier curve ：(0.33, 0.1, 0.67 ,1)\n\n\n\n\n"}
      />

      <div

        style={{
          display: 'Grid',
          justifyContent: 'center'
        }}>
        <div  >

          <DeskMoveApp />
        </div>

        <div 
        className='boxAll' 
        style={{
          display: Grid
        }}
        />
      
        <div style={{ marginLeft: 180, marginTop: -116 }}>

        </div>
        <div style={{
          background: '#E6ECF4',
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: 0,
          opacity: 1,
          zIndex: '-1'
        }}>
        </div>
      </div>
    </div>
  );
}

export default DApp;