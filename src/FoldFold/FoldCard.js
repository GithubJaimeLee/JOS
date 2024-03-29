import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoldScreen from "../Img/FoldScreen.png";
import ArrowToggle from "../Component/ArrowToggle";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";

const FoldCard = () => {
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
          className="Background"
          style={{
            backgroundImage: `url(${FoldScreen})`,
            top: 0,
            width: 375,
            height: 812,
            zIndex: 10,
          }}
        >
          <ArrowToggle />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default FoldCard;
