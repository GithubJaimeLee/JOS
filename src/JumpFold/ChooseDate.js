//import React from "react";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import ChooseDateBg from "../Img/ChooseDateBg.png";
import React from "react";
import Wheel from "../Component/Wheel";

const ChooseDate = () => {
  const Info = <p>日期滑动选择器</p>;
  /* const ClockItemStyle = {
    margin: 10,
    backgroundColor: "grey",
    width: 50,
    height: 60,
    position: "relative",
    opacity: 1,
    top: 100,
    zIndex: 10,
    textAlign: "center",
  }; */

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
          alignItems: "center",
          top: 0,
        }}
      >
        <div
          className="TimePicker"
          style={{
            width: 375,
            position: "absolute",
            height: 812,
            // padding: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            //background: "#666",

            zIndex: 3,
          }}
        >
          <div style={{ width: 120, height: 200 }}>
            <Wheel initIdx={8} length={24} width={23} />
          </div>
          <h6
            style={{
              position: "absolute",
              top: 398,
              left: 150,
            }}
          >
            时
          </h6>
          <div style={{ width: 120, height: 200 }}>
            <Wheel initIdx={30} length={60} width={23} perspective="left" />
          </div>
          <h6
            style={{
              position: "absolute",
              top: 398,
              right: 98,
            }}
          >
            分
          </h6>
        </div>
        <div
          className="bg"
          style={{
            //    backgroundImage: `url(${ChooseDateBg})`,
            backgroundColor: "#FFFFFF",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "2",
          }}
        ></div>
      </div>

      <Bg />
    </div>
  );
};

export default ChooseDate;
