import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
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
        <ProgressBar
          now={now}
          label={`${now}%`}
          style={{
            position: "absolute",
            top: 300,
            width: 305,
            height: 20,
            zIndex: "2",
          }}
        />

        <div
          className="bg"
          style={{
            backgroundColor: "#ddd",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "0",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AlertPercent;
