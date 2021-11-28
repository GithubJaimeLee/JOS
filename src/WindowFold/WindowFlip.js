import { motion, useCycle } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import WindowBg from "../Img/WindowBg.png";
import WindowAlertWin from "../Img/WindowAlertWin.png";
import OneFingerClick from "../Img/OneFingerClick.png";
import Bg from "../Component/Bg";
import FlipPage from "react-flip-page";
import FlipBg from "../Img/FlipBg.png";
import Flip1 from "../Img/Flip1.png";
import Flip2 from "../Img/Flip2.png";
import Flip3 from "../Img/Flip3.png";
import Flip4 from "../Img/Flip4.png";
import Flip5 from "../Img/Flip5.png";
import Flip6 from "../Img/Flip6.png";
import Flip7 from "../Img/Flip7.png";
import "../css/Component.css";

const ContactBtnStyle = {
  position: "relative",
  bottom: -700,
  width: 32,
  height: 60,
  backgroundImage: `url(${OneFingerClick})`,
  //backgroundColor: "#aaa",
  borderRadius: 20,
  textAlign: "center",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
};
const ContactBubbleStyle = {
  width: 340,
  height: 102,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
  //opacity: 1,
  backgroundImage: `url(${WindowAlertWin})`,
  border: "1px solid #ccc",
  // background: "#666",
  borderRadius: 12,
  position: "absolute",
  y: -720,
  bottom: 100,
  zIndex: 20,
};
const BoxAnimation = {
  animationOne: {
    y: -720,
  },
  animationTwo: {
    y: -488,
  },
};

const ContactBodyStyle = {
  backgroundImage: `url(${WindowBg})`,
  //backgroundColor: "#EEEEEE",
  position: "absolute",
  width: 360,
  height: 800,
  zIndex: 1,
};

const WindowFlip = () => {
  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const Info = <p>翻页动画</p>;

  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          overflow: "hidden",
          position: "absolute",
          top: 0,
        }}
      >
        <FlipPage
          id="NS"
          className="CNS"
          height={642}
          width={360}
          // showSwipeHint
          orientation={"vertical"}
          maskOpacity={0}
          pageBackground={"#fff"}
          //   showSwipeHint={true}
          style={{ top: 100 }}
          noShadow="false"
        >
          <img
            className="NS"
            style={{
              width: 360,
            }}
            src={Flip1}
          />
          <img
            className="NS"
            style={{
              width: 360,
            }}
            src={Flip2}
          />
          <img
            className="NS"
            style={{
              width: 360,
            }}
            src={Flip3}
          />
          <img
            className="NS"
            style={{
              width: 360,
            }}
            src={Flip4}
          />
          <img
            className="NS"
            style={{
              width: 360,
            }}
            src={Flip5}
          />
          <img
            className="NS"
            style={{
              width: 360,
            }}
            src={Flip6}
          />
          <img
            className="NS"
            style={{
              display: "block",
              width: 360,
              backgroundSize: "360px 462px",
            }}
            src={Flip7}
          />
        </FlipPage>
        <div
          className="BGBG"
          style={{
            position: "absolute",
            width: 360,
            height: 800,
            zIndex: -1,
            backgroundImage: `url(${FlipBg})`,
            backgroundSize: "360px 800px",
          }}
        />
      </div>
      <Bg />
    </div>
  );
};

export default WindowFlip;
