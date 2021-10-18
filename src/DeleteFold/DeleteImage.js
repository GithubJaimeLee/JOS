import * as React from "react";
import Bback from "../Icon/back.png";
import { Link } from 'react-router-dom';
import PhotoBg from "../Img/NewPhoto.png";
import '../App.css';
/*//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓grid输入/↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓//*/

import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../DeleteFold/DeleteImgApp.jsx';



const DeleteImage = () => {
  return (
    <div >



{/*//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓下方功能完整/↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓//*/}
      <Link to="/Delete">
        <img src={Bback} alt=" "
          style={{
            width: 30,
            position: 'absolute',
            top: 20,
            left: 20,
            opacity: 1,
            zIndex: '100'
          }} />
      </Link>
     
      <div style={{
        top: 96,
        position: 'absolute'
      }}>
     
      </div> 
      <div className='Bg'
        style={{
          backgroundImage: `url(${PhotoBg})`,
          backgroundColor: '#fff',
          width: 375,
          height: 812,
          position: 'absolute',
          top: 0,
          opacity: 1,
          zIndex: '-1'
        }}>
{/*//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓grid输入/↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓//*/}
<App />
{/*//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑gird输入/↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//*/}
        </div> 
    </div>

  );
}

export default DeleteImage;

