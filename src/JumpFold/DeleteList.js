import * as React from "react";
import { motion } from "framer-motion";
import MessageBg from "../Img/NewMessage.png";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import SwipeToDelete from "../Component/SwipeToDelete";
import "../App.css";

const DeleteList = () => {
  const Info = <p>删除（横滑定位）</p>;
  return (
    <div className="All">
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          overflow: "hidden",
          justifyContent: "center",
          position: "absolute",
          top: 0,
        }}
      >
        <motion.div
          className="HeadCard"
          drag="y"
          dragConstraints={{ top: -40, bottom: 0 }}
          dragElastic={0}
          style={{
            backgroundColor: "#fff",
            top: 0,
            width: 375,
            height: 100,
            position: "absolute",
            opacity: 1,
            zIndex: 1,
          }}
        />
        <div
          style={{
            top: 100,
            position: "absolute",
            zIndex: 2,
            opacity: 0.5,
          }}
        />

        <div
          className="Bg"
          style={{
            backgroundImage: `url(${MessageBg})`,
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: 1,
            overflow: "hidden",
          }}
        >
          <SwipeToDelete />
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default DeleteList;
