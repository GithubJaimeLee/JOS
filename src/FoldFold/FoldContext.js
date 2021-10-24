import * as React from "react";
import { Link } from 'react-router-dom';
import ArrowToggle from '../Component/ArrowToggle';
import WOffCanvas from '../Component/WOffcanvas';
import backIcon from "../Icon/Wback.png";
import FoldInfo from "../Img/FoldInfo.png";
import '../Component/Component.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const FoldContext = () => {
  
    return (
        <div
            style={{
                display: 'grid',
                justifyContent: 'center'
            }}
        >
            <div className='Background'
                style={{
                    backgroundImage: `url(${FoldInfo})`,
                    top: 0,
                    width: 375,
                    height: 812,
                    zIndex: 10,
                    
                }}
            >    
            <Link to="/Fold">
                <img src={backIcon} alt=" " style={{
                    width: 30,
                    position: 'relative',
                    top: 20,
                    left: 20,
                    opacity: 1,
                    zIndex: '10'
                }}>
                </img>
            </Link>
            <WOffCanvas  
                placement={'end'}  
                contextTitle={'我在测试'} 
                context={'我在测试'}
            />
            <ArrowToggle/>
            </div>
        </div>
    );
}

export default FoldContext;

