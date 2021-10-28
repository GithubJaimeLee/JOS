import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPage from '../Component/NavBarPage';
import SetWindow from '../Component/SetWindowQuit';



const DeskQuit = () => {

    const CodeColor = { color: '#62A66E' }
    const CodeTextStyle = { padding: '20px 20px 40px 20px', color: '#eee' }
    const CodeBoardStyle = {
        width: '100%',
        backgroundColor: '#000000',
        borderRadius: 12,
        marginTop: 40,
    }

    const Info = <div> <p>1.打开应用：“图标”动画参数
        <br /><br />Scale：动画结束时，图标缩放到应用卡片大小的基础上，又增加的缩放倍数。
        <br /><br />2.打开应用：应用“卡片”动画参数
        <br />Damping：阻尼系数
        <br />Stiffness：刚度
        <br /><br />3.打开应用：“桌面”动画参数
        <br />Scale：缩放
        <br />Damping：阻尼系数
        <br />Stiffness：刚度</p>
        <div
            className="CodeBoard"
            style={CodeBoardStyle}
        >
            <p
                style={CodeTextStyle}
            >
                <p style={CodeColor}>
                    <h2>默认开发代码</h2>
                    <br />打开应用：图标动画参数
                    <br />extraScale：动画结束时，图标缩放到应用卡片大小的基础上，又增加的缩放倍数
                    <br />controlX1Alpha、controlY1Alpha、controlX2Alpha、controlY2Alpha：图标alpha曲线
                </p>
                extraScale="1"
                <br />controlX1Alpha="0.2"
                <br />controlY1Alpha="0.8"
                <br />controlX2Alpha="0.6"
                <br />controlY2Alpha="1"
                <br />controlX1Scale="0.4"
                <br />controlY1Scale="0"
                <br />controlX2Scale="1"
                <br />controlY2Scale="1"
                <br /><br />
                <p style={CodeColor}>
                    打开应用：应用卡片动画参数
                    <br />startAlpha：alpha起始值
                    <br />endAlpha：alpha终点值
                    <br />rectAlphaDampingRatio：alpha阻尼系数
                    <br />rectAlphaStiffness：alpha刚度
                </p>
                startAlpha="0"
                <br />endAlpha="1"
                <br />alphaDelay="0"
                <br />rectAlphaDampingRatio="1"
                <br />rectAlphaStiffness="1000"
                <br />rectCenterXDampingRatio="1"
                <br />rectCenterXStiffness="300"
                <br />rectCenterYDampingRatio="1"
                <br />rectCenterYStiffness="300"
                <br />rectWidthDampingRatio="1"
                <br />rectWidthStiffness="300"
                <br />rectHeightProgressDampingRatio="1"
                <br />rectHeightProgressStiffness="300"
                <br />rectCornerRadiusDampingRatio="1"
                <br />rectCornerRadiusStiffness="300"
                <p style={CodeColor}>
                    <br />打开应用：桌面动画参数
                    <br />startScaleX：X轴方向scale起始值
                    <br />endScaleX：X轴方向scale终点值
                    <br />startScaleY：Y轴方向scale起始值
                    <br />endScaleY：Y轴方向scale终点值
                    <br />startAlpha：alpha起始值
                    <br />endAlpha：alpha终点值
                    <br />rectAlphaDampingRatio：alpha阻尼系数
                    <br />rectAlphaStiffness：alpha刚度
                </p>
                startScaleX="1"
                <br />endScaleX="0.85"
                <br />startScaleY="1"
                <br />endScaleY="0.85"
                <br />startAlpha="1"
                <br />endAlpha="1"
                <br />scaleXDampingRatio="1"
                <br />scaleXStiffness="200"
                <br />scaleYDampingRatio="1"
                <br />scaleYStiffness="200"
                <br />alphaDampingRatio="1"
                <br />alphaStiffness="200"
            </p>
        </div>
    </div>
    return (

        <div className="All"  >

            <NavBarPage
                placement={'end'}
                contextTitle={'说明'}
                context={Info}
            />

            <div
                className="Screen"
                style={{

                    top: 0,
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center'
                }}
            >
                <div
                >
                    <SetWindow />
                </div>
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

export default DeskQuit;

