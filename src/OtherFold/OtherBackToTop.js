import { BackTop } from "antd";
import Bg from "../Component/Bg";
import NavBarPage from "../Component/NavBarPage";
import MusicHead from "../Img/MusicHead.png";
import MusicBodyRecommend from "../Img/MusicBodyRecommend.png";
import MusicFooter from "../Img/MusicFooter.png";
import MusicHeaderTap from "../Img/MusicHeaderTap.png";

const Info = <p>状态、标题栏置顶</p>;

const OtherBackToTop = () => {
  return (
    <div
      className="All"
      style={{
        width: "100vw",
        height: 812,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="Head"
        style={{
          position: "absolute",
          display: "flex",
          height: 130,
          width: 375,
          justifyContent: "center",
        }}
      >
        <div
          className="MusicHead"
          style={{
            backgroundImage: `url(${MusicHead})`,
            top: 0,
            width: 375,
            height: 92,
            position: "fixed",
            opacity: 1,
            zIndex: 1,
          }}
        />
        <div
          className="MusicHeaderTap"
          style={{
            backgroundImage: `url(${MusicHeaderTap})`,
            top: 92,
            position: "fixed",
            width: 375,
            height: 38,
            zIndex: 1,
          }}
        />
      </div>
      <div
        id="ScrollDiv"
        style={{
          width: 375,
          height: 812,
          position: "absolute",
          overflow: "scroll",
        }}
      >
        <div
          className="MusicBody"
          style={{
            backgroundImage: `url(${MusicBodyRecommend})`,
            backgroundColor: "#ddd",
            top: 130,
            width: 375,
            height: 1206,
            position: "absolute",
            opacity: 1,
            zIndex: 0,
          }}
        />
      </div>
      <div
        className="MusicFooter"
        style={{
          backgroundImage: `url(${MusicFooter})`,
          bottom: 0,
          width: 375,
          height: 54,
          zIndex: 1000,
          position: "absolute",
        }}
      >
        <BackTop
          style={{
            position: "absolute",
            left: 26,
            bottom: 10,
          }}
          target={() => document.getElementById("ScrollDiv")}
          visibilityHeight={1}
        />
      </div>
      <Bg />
    </div>
  );
};
export default OtherBackToTop;
