import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "../JumpFold/EditListApp.jsx";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import vbg1 from "../Img/vbg1.png";

const EditList = () => {
  const Info = <p>列表滑动</p>;
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          justifyContent: "center",
          position: "absolute",
          top: 0,
        }}
      >
        <App />
      </div>
      <div
        className="boxAll"
        style={{
          display: "Grid",
        }}
      ></div>
      <div style={{ marginLeft: 180, marginTop: -116 }}></div>
      <div
        style={{
          // background: '#E6ECF4',
          /*   backgroundImage: `url(${background})`, */
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: 0,
          opacity: 1,
          zIndex: "-2",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="bg"
          style={{
            backgroundImage: `url(${vbg1})`, // Set the background image
            backgroundSize: "cover", // Adjust background size as needed
            backgroundRepeat: "no-repeat", // Adjust background repeat as needed  background: "#fff",
            backgroundColor: "#eee",
            width: 360,
            height: 800,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "-1",
          }}
        ></div>
      </div>
      <Bg />
    </div>
  );
};

export default EditList;
