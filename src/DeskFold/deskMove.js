import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DeskMoveApp from "./DeskMoveApp.jsx";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
const DApp = () => {
  const Info = <p>图标移动自动补位</p>;
  return (
    <div
      className="All"
      style={{
        display: "flex",
        position: "absolute",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        style={{
          display: "flex",
          position: "absolute",

          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 375,
            height: 544,
            top: 56,
            position: "relative",
          }}
        >
          <DeskMoveApp />
        </div>

        <div
          style={{
            background: "#E6ECF4",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "-1",
          }}
        />
      </div>
      <Bg />
    </div>
  );
};

export default DApp;
