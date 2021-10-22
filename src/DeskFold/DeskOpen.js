import * as React from "react";
import Background from "../Img/NoteAndroidDesk.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import WNavBarPage from '../Component/WNavBarPage';
import SetWindow from '../Component/SetWindow';



const DeskOpen = () => {
   

    const Info = <p>Hello,<br/> world!</p>;
    return (

        <div className="All"  >
    
                   <WNavBarPage
        placement={'end'}
        contextTitle={'说明'}
        context={Info}
        />

            <div
             className="Screen"
             style={{
            
                 top:0,
                display: 'flex',
                height: '100%',
                justifyContent: 'center'
             }}
            >
           <div
           >
              <SetWindow/>
    
          </div>

            <div   className="BgImg"
                     style={{   
                        backgroundImage: `url(${Background})`,
                        width: 375,
                        height: 812,   
                        top: 0,
                        opacity: 1,
                        zIndex: '-2',
                    position: 'absolute',
                    }} />
            <div className='bg'
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#000000',
                    top: 0,
                    position: 'absolute',
                    zIndex: '-10000'
                    
                }}
            />

</div>
        </div>
    );
}

export default DeskOpen;

