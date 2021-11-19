import { BackTop } from "antd";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Bg from "../Component/Bg";
import NavBarPage from "../Component/NavBarPage";
import MusicHead from "../Img/MusicHead.png";
import MusicBodyRecommend from "../Img/MusicBodyRecommend.png";
import MusicFooter from "../Img/MusicFooter.png";
import MusicHeaderTap from "../Img/MusicHeaderTap.png";
import Arrow from "../Icon/Arrow.png";
import Loading from "../Img/Loading.gif";

const Info = <p>状态、标题栏置顶</p>;

const OtherBackToTop = () => {
  const y = useMotionValue(0);
  const rotate = useTransform(y, [0, 100], [180, 0]);
  const top = useTransform(y, [0, 100], [70, 170]);
  const opacity = useTransform(y, [0, 150], [0, 1]);

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
          backgroundColor: "#f7f7f7",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <motion.div
          className="Arrow"
          style={{
            rotate,
            top,
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${Arrow})`,
            width: 20,
            height: 30,
            position: "relative",
            //top: -70,
            //left: 170,
            zIndex: 0,
          }}
        >
          <motion.img
            transition={{
              delay: 0,
            }}
            src={Loading}
            alt=" "
            style={{
              width: 20,
              opacity: opacity,
              position: "relative",
              top: 10,

              zIndex: 0,
            }}
          />
        </motion.div>
        <motion.div
          className="MusicBodyRecommend"
          drag="y"
          dragConstraints={{ top: -578, bottom: 0 }}
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
          //  onDrag={function (event, info) {
          //    if (info.point.y >= 260) {
          //      opacity = 1;
          //      console.log(info.point.y);
          //    }
          //  }}
          style={{
            y,
            backgroundImage: `url(${MusicBodyRecommend})`,
            backgroundColor: "#ddd",
            top: 130,
            width: 375,
            height: 1205,
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
