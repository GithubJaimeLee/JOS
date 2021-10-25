import * as React from "react";
import Background from "../Img/NoteAndroidDesk.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import WNavBarPage from '../Component/WNavBarPage';
import SetWindow from '../Component/SetWindow';



const DeskOpen = () => {
   

    const Info = <p>1.打开应用：图标动画参数
    <br/><br/>Scale：动画结束时，图标缩放到应用卡片大小的基础上，又增加的缩放倍数。
    <br/><br/>2.打开应用：应用卡片动画参数
    <br/>DampingRatio：阻尼系数
    <br/>Stiffness：刚度
    <br/><br/>3.打开应用：桌面动画参数
    <br/>Scale：缩放
    <br/>DampingRatio：阻尼系数
    <br/>Stiffness：刚度</p>;   
        
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

