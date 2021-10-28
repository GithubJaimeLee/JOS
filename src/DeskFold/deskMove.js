import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DeskMoveApp from "./DeskMoveApp.jsx";
import NavBarPage from "../Component/NavBarPage";

const DApp = () => {
  const Info = (
    <p>
      Hello,
      <br /> world!
    </p>
  );
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
        />

        <div style={{ marginLeft: 180, marginTop: -116 }}></div>
        <div
          style={{
            background: "#E6ECF4",
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "-1",
          }}
        ></div>
      </div>
    </div>
  );
};

export default DApp;
