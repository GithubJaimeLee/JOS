import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DeskMoveApp from "./DeskMoveApp.jsx";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
const DApp = () => {
  const Info = <p>图标移动自动补位</p>;
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        style={{
          display: "Grid",
          justifyContent: "center",
        }}
      >
        <div>
          <DeskMoveApp />
        </div>

        <div
          className="boxAll"
          style={{
            display: "Grid",
          }}
        >
          <div style={{ marginLeft: 180, marginTop: -116 }}></div>
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
    </div>
  );
};

export default DApp;
