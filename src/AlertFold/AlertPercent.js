import React from "react";
//import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import AlertPercentBg from "../Img/AlertPercentBg.png";
import Bg from "../Component/Bg";
import Demo from "../Component/ProgressBar";
import "../Component/Component.css";

const now = 60;

//const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

const AlertPercent = () => {
  const Info = <p>进度指示器</p>;
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
          top: 0,
        }}
      >
        <div
          className="bg"
          style={{
            backgroundImage: `url(${AlertPercentBg})`,
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "0",
          }}
        >
          <div
            style={{
              width: 355,
              position: "absolute",
              top: 352,
              left: 32,
            }}
          >
            <Demo />
          </div>
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default AlertPercent;
