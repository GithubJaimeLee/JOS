//import React from "react";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";

import React from "react";
import Wheel from "../Component/JumpWheel";
import Time from "../Component/Time";

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
          className="ShowClocks"
          style={{
            width: 360,
            height: 800,
            position: "absolute",
            display: "grid",
            top: 0,
          }}
        >
          <div
            className="TimeMask"
            style={{
              position: "relative",
              height: 400,
              width: 360,
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Time />
          </div>
          <div
            className="TimePicker"
            style={{
              width: 360,
              position: "relative",
              height: 400,
              top: 0,

              display: "flex",
              alignItems: "start",
              justifyContent: "center",

              zIndex: 3,
            }}
          >
            <div style={{ width: 120, height: 200 }}>
              <Wheel
                initIdx={8}
                length={24}
                width={23}
                loop={true}
                //     transition={{ type: "spring", damping: 30 }}
              />{" "}
              <h6
                style={{
                  position: "absolute",
                  top: 91,
                  left: 140,
                }}
              >
                时
              </h6>
            </div>

            <div style={{ width: 120, height: 200 }}>
              <Wheel initIdx={30} length={60} width={23} loop={true} />
              <h6
                style={{
                  position: "absolute",
                  top: 91,
                  right: 88,
                }}
              >
                分
              </h6>
            </div>
          </div>
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
