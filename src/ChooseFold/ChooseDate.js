import React from "react";
import NavBarPage from "../Component/NavBarPage";
const ChooseDate = () => {
  const Info = (
    <p>
      Hello,
      <br /> world!
    </p>
  );

  const ClockItemStyle = {
    margin: 10,
    backgroundColor: "grey",
    width: 50,
    height: 60,
    position: "relative",
    opacity: 1,
    top: 100,
    zIndex: 10,
    textAlign: "center",
  };
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
          className="ClockAll"
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "gird",
            }}
          >
            <div className="" style={ClockItemStyle}>
              01
            </div>
            <div className="" style={ClockItemStyle}>
              02
            </div>
            <div className="" style={ClockItemStyle}>
              03
            </div>
          </div>
          <div
            style={{
              display: "gird",
            }}
          >
            <div className="" style={ClockItemStyle}>
              01
            </div>
            <div className="" style={ClockItemStyle}>
              02
            </div>
            <div className="" style={ClockItemStyle}>
              03
            </div>
          </div>
        </div>
        <div
          className="bg"
          style={{
            backgroundColor: "#eee",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "2",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ChooseDate;
