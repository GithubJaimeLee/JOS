import React from "react";
import NavBarPage from "../Component/NavBarPage";
import Loading from "../Img/Loading.gif";
import Bg from "../Component/Bg";
const AlertLoading = () => {
  const Info = <p>Loading</p>;
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
            backgroundColor: "#fff",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "2",
          }}
        ></div>
        <img
          src={Loading}
          alt=" "
          style={{
            width: 60,
            position: "relative",
            top: 300,
            opacity: 1,
            zIndex: "100",
          }}
        />
        <Bg />
      </div>
    </div>
  );
};

export default AlertLoading;
