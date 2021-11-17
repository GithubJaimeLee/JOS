import * as React from "react";
import FoldContextArrow from "../Component/FoldContextArrow";
import FoldInfo from "../Img/FoldInfo.png";
import "../css/Component.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";

const FoldContext = () => {
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
            backgroundImage: `url(${FoldInfo})`,
            width: 375,
            height: 812,
            zIndex: 10,
          }}
        >
          <FoldContextArrow />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default FoldContext;
