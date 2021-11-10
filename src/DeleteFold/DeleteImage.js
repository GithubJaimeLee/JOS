import * as React from "react";
import PhotoBg from "../Img/NewPhoto.png";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import "../App.css";
/*//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓grid输入/↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓//*/
import "bootstrap/dist/css/bootstrap.min.css";
import App from "../DeleteFold/DeleteImgApp.jsx";

const DeleteImage = () => {
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
          style={{
            top: 96,
            position: "absolute",
          }}
        ></div>
        <div
          className="Bg"
          style={{
            backgroundImage: `url(${PhotoBg})`,
            backgroundColor: "#fff",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: -1,
          }}
        >
          {/*//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓grid输入/↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓//*/}
          <App />
          {/*//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑gird输入/↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//*/}
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default DeleteImage;
