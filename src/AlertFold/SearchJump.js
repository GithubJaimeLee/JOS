import { motion, useCycle } from "framer-motion";
import * as React from "react";
import { Tabs } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import ContactHeader from "../Img/ContactHeader.png";
import Bg from "../Component/Bg";
import FingerClick from "../Img/OneFingerClick.png";
import WindowInputKeyboard from "../Img/WindowInputKeyboard.png";

import SearchBg from "../Img/SearchBg.png";
import SearchBar from "../Img/SearchBar.png";
import SetText from "../Img/SetText.png";
import CancelText from "../Img/CancelText.png";
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
    y: 116,
  },
  animationTwo: {
    y: 50,
  },
};
const FingerVariants = {
  animationOne: {
    y: 30,
  },
  animationTwo: {
    y: 100,
    x: 138,
    opacity: 0,
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
    y: -66,
  },
};

const SearchJump = () => {
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
  const greyLine = {
    animationOne: {
      width: 320,
    },
    animationTwo: {
      width: 265,
      top: 85,
    },
  };
  const blackLine = {
    animationOne: { width: 0 },
    animationTwo: { width: 40, top: 85 },
  };
  const VSetText = {
    animationOne: {},
    animationTwo: { scale: 0.9, y: -6, opacity: 0 },
  };
  const VCancelText = {
    animationOne: { top: 126, opacity: 0 },
    animationTwo: { top: 60, opacity: 1 },
  };
  const blueLine = {
    animationOne: {
      y: 0,
    },
    animationTwo: {},
  };
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
          bezier curve: (0.2, 0.15, 0, 1)
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
          bezier curve: (0.2, 0.15, 0, 1)
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
          bezier curve: (0.2, 0.15, 0, 1)
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

          position: "absolute",
          height: "100%",
          overflow: "hidden",
          top: 0,
        }}
      >
        <motion.div
          className="Finger"
          variants={FingerVariants}
          animate={animationBox}
          transition={{ type: "tween" }}
          className="ContactBtn"
          onClick={() =>
            cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
          }
          style={{
            width: 100,
            height: 100,
            backgroundImage: `url(${FingerClick})`,
            position: "relative",
            top: 88,
            y: 30,
            backgroundPosition: "25px 25px",
            zIndex: 100,
            backgroundRepeat: "no-repeat",
          }}
        />
        <motion.div
          onClick={() =>
            cycleAnimation() & KcycleAnimation() & BGcycleAnimation()
          }
          className="BG"
          transition={{
            type: "tween",
          }}
          style={{
            width: 375,
            height: 812,
            position: "absolute",
            overflow: "hidden",
            display: "flex",
          }}
        >
          <motion.div
            className="SetText"
            style={{
              height: 21,
              position: "absolute",
              width: 42,
              backgroundImage: `url(${SetText})`,
              left: 33,
              top: 63,
              zIndex: 3,
              transformOrigin: "0px,0px",
            }}
            variants={VSetText}
            animate={animationBox}
            transition={{
              type: "tween",
            }}
          />
          <motion.div
            className="CancelText"
            style={{
              height: 16,
              position: "absolute",
              width: 34,
              backgroundImage: `url(${CancelText})`,
              right: 28,
              zIndex: 30,
              top: 126,
              opacity: 0,
            }}
            variants={VCancelText}
            animate={animationBox}
            transition={{
              type: "tween",
            }}
          />
          <motion.div
            className="blackLine"
            style={{
              height: 6,
              width: 0,
              top: 162,
              backgroundColor: "#000000",
              zIndex: 3,
              position: "absolute",
              right: 28,
            }}
            variants={blackLine}
            animate={animationBox}
            transition={{
              type: "tween",
            }}
          />
          <motion.div
            className="greyLine"
            style={{
              height: 6,
              width: 320,
              backgroundColor: "#eee",
              zIndex: 2,
              position: "absolute",
              top: 162,
              left: 28,
              transformOrigin: "0px,0px",
            }}
            variants={greyLine}
            animate={animationBox}
            transition={{
              type: "tween",
            }}
          />
          <motion.div
            className="blueLine"
            style={{
              height: 20,
              width: 5,
              backgroundColor: "#58AEEC",
              zIndex: 2,
              position: "absolute",
              top: 64,
              left: 24,
              transformOrigin: "0px,0px",
            }}
            variants={blueLine}
            animate={animationBox}
            transition={{
              type: "tween",
            }}
          />
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
            <motion.div
              className="ContactBody"
              style={ContactBodyStyle}
              variants={BGVariants}
              animate={animationBG}
              transition={{
                type: "tween",
              }}
            />
          </div>
        </motion.div>
        <motion.div
          className="SearchBar"
          style={{
            width: 375,
            height: 34,
            opacity: 1,
            y: 116,
            backgroundImage: `url(${SearchBar})`,
            position: "absolute",
            //bottom: -420,
            zIndex: 20,
          }}
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

export default SearchJump;
