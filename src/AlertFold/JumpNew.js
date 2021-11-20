import { motion, useCycle } from "framer-motion";
import * as React from "react";
import { Slider, InputNumber, Input, Switch, Tabs } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import ContactBody from "../Img/ContactBody.png";
import ContactFooter from "../Img/ContactFooter.png";
import ContactHeader from "../Img/ContactHeader.png";
import Bg from "../Component/Bg";
import FingerClick from "../Img/OneFingerClick.png";
import WindowInputKeyboard from "../Img/WindowInputKeyboard.png";
import NewContact from "../Img/NewContact.png";
import SearchBg from "../Img/SearchBg.png";
import SearchBar from "../Img/SearchBar.png";
const FingerStyle = {
  width: 100,
  height: 100,
  backgroundImage: `url(${FingerClick})`,
  position: "relative",
  top: 88,
  backgroundPosition: "25px 25px",
  zIndex: 100,
  backgroundRepeat: "no-repeat",
};
const SearchBarStyle = {
  width: 375,
  height: 36,
  opacity: 1,
  y: 126,
  backgroundImage: `url(${SearchBar})`,
  position: "absolute",
  //bottom: -420,
  zIndex: 20,
};
const KeyboardStyle = {
  width: 375,
  height: 290,
  backgroundImage: `url(${WindowInputKeyboard})`,
  position: "absolute",
  bottom: 100,
  zIndex: 20,
  y: 400,
};

const SearchBarVariants = {
  animationOne: {
    y: 126,
  },
  animationTwo: {
    y: 60,
  },
};
const FingerVariants = {
  animationOne: {
    y: 0,
  },
  animationTwo: {
    y: -30,
    x: -138,
  },
};
const KeyBoardVariants = {
  KAnimationOne: {
    y: 400,
  },
  KAnimationTwo: {
    y: 100,
  },
};

const ContactHeaderStyle = {
  backgroundImage: `url(${ContactHeader})`,
  width: 375,
  height: 159,
  position: "fixed",
  zIndex: 2,
  top: 0,
};
const ContactBodyStyle = {
  backgroundImage: `url(${SearchBg})`,
  position: "absolute",
  top: 0,
  width: 375,
  height: 812,
  zIndex: 1,
  // backgroundColor: "#000000",
  overflow: "hidden",
};
const BGVariants = {
  BGanimationOne: {
    y: 0,
  },
  BGAnimationTwo: {
    opacity: 0,
  },
};
const ContactFooterStyle = {
  backgroundImage: `url(${ContactFooter})`,
  position: "absolute",
  bottom: 0,
  width: 375,
  height: 65,
  zIndex: 1,
};

const JumpNew = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [animationKeyBoard, KcycleAnimation] = useCycle(
    "KAnimationOne",
    "KAnimationTwo"
  );
  const [animationBG, BGcycleAnimation] = useCycle(
    "BGAnimationOne",
    "BGAnimationTwo"
  );
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  const Info = (
    <div>
      <Tabs
        defaultActiveKey="1"
        style={{
          width: 300,
        }}
      >
        <TabPane tab="搜索框样式" key="1">
          无搜索记录透明度显示下方内容
          <br /> 有搜索记录显示搜索记录
          <br />
          <br />
          <h6>进入搜索</h6>
          设置界面：
          <br /> positionY：-52dp
          <br /> time：500ms
          <br /> bezier curve:（0.2, 0.15, 0, 1)
          <br /> alpha:  1 ~ 0
          <br /> time:  200ms bezier curve:  (0.33, 0 ,0.67, 1)
          <br /> 搜索框：
          <br /> path：变短
          <br /> time： 500ms
          <br /> bezier curve:  (0.2, 0.15, 0, 1) 
          <br /> 取消：                                          
          <br />   positionX:   屏幕外移入
          <br /> time：500ms
          <br /> bezier curve:  (0.2, 0.15, 0 ,1)
          <br /> 消失元素: alpha:  1 ~ 0 time:
          <br /> 200ms bezier curve:  (0.33, 0 ,0.67, 1)
          <br /> 出现元素: alpha:  0 ~ 1 time: 
          <br /> 250ms delay:  150ms bezier curve:  (0.33, 0 ,0.67, 1)
          <br />
          <br />
          <h6>取消搜索</h6>
          设置界面： positionY：52dp time：500ms
          <br />
          bezier curve:（0.2, 0.15, 0, 1)
          <br />
          alpha:  0 ~ 1
          <br />
          time:  250ms
          <br />
          bezier curve:  (0.33, 0 ,0.67, 1)
          <br />
          搜索框：
          <br />
          path：变长
          <br />
          time： 500ms
          <br />
          bezier curve:  (0.2, 0.15, 0, 1) 
          <br />
          取消：
          <br />
          positionX:   移出屏幕
          <br />
          time：500ms
          <br />
          bezier curve:  (0.2, 0.15, 0 ,1)
          <br />
          消失元素:
          <br />
          alpha:  1 ~ 0
          <br />
          time: 200ms
          <br />
          bezier curve:  (0.33, 0 ,0.67, 1)
          <br />
          出现元素:
          <br />
          alpha:  0 ~ 1
          <br />
          time:  250ms
          <br />
          delay:  150ms
          <br />
          bezier curve:  (0.33, 0 ,0.67, 1)
        </TabPane>
        <TabPane tab="搜索图标样式" key="2">
          <h6> 进入搜索</h6>
          <br /> 搜索框：
          <br />
          positionY：74dp
          <br />
          time：500ms
          <br />
          bezier curve:（0.2, 0.15, 0, 1)
          <br />
          记录：
          <br />
          positionY：74dp
          <br />
          time：500ms
          <br />
          bezier curve:（0.2, 0.15, 0, 1 ）
          <br />
          alpha：0 ～ 1
          <br />
          time： 250ms
          <br />
          delaty:   150ms             
          <br />
          bezier curve:（0.33, 0, 0.67, 1 ）
          <br />
          文件管理：
          <br />
          alpha:  1 ~ 0
          <br />
          time:  200ms
          <br />
          bezier curve:  (0.33, 0 ,0.67, 1)
          <br />
          <br />
          <h6>取消搜索</h6>
          <br />
          搜索框：
          <br />
          positionY：-74dp
          <br />
          bezier curve:（0.2, 0.15, 0, 1)
          <br />
          记录：
          <br />
          positionY：-74dp
          <br />
          bezier curve:（0.2, 0.15, 0, 1 ）
          <br />
          alpha：1 ～ 0
          <br />
          time： 200ms                                             
          <br />
          bezier curve:（0.33, 0, 0.67, 1 ）
          <br />
          文件管理：
          <br />
          alpha:  0 ~ 1
          <br />
          time:   250ms
          <br />
          delaty:   150ms
          <br />
          bezier curve:  (0.33, 0 ,0.67, 1)
        </TabPane>
      </Tabs>
    </div>
  );
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: 812,
          position: "absolute",
          overflow: "hidden",
          top: 0,
        }}
      >
        <motion.div
          variants={FingerVariants}
          animate={animationBox}
          transition={{ type: "tween" }}
          className="ContactBtn"
          onClick={() =>
            cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
          }
          style={FingerStyle}
        />
        <motion.div
          onClick={() =>
            cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
          }
          className="BG"
          variants={BGVariants}
          animate={animationBG}
          transition={{
            type: "tween",
          }}
          style={{
            width: 375,
            height: 812,
            position: "absolute",
            overflow: "hidden",
          }}
        >
          {/*       <div className="ContactHeader" style={ContactHeaderStyle} /> */}
          <div
            className="ScrollBody"
            style={{
              height: 812,

              width: 375,
              position: "absolute",
              top: 0,
              overflow: "scroll",
            }}
          >
            <div className="ContactBody" style={ContactBodyStyle} />
          </div>
          {/*    <div className="ContactFooter" style={ContactFooterStyle}></div> */}
        </motion.div>
        <motion.div
          className="boxChange"
          style={SearchBarStyle}
          variants={SearchBarVariants}
          animate={animationBox}
          transition={{
            type: "tween",
          }}
        />
        <motion.div
          className="KeyBoard"
          style={KeyboardStyle}
          variants={KeyBoardVariants}
          animate={animationKeyBoard}
        />
        <div
          className="blackBg"
          style={{
            position: "absolute",
            width: 375,
            height: 812,
            zIndex: -10,
            backgroundColor: "#fff",
          }}
        />
      </div>
      <Bg />
    </div>
  );
};

export default JumpNew;
