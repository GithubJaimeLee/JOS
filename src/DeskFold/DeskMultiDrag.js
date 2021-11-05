import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DeskMultiDragApp from "../DeskFold/DeskMultiDragApp.jsx";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";

const DeskMultiDrag = () => {
  const Info = <p>多选拖动</p>;

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
          <DeskMultiDragApp />
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

export default DeskMultiDrag;
