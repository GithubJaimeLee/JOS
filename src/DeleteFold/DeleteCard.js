import * as React from "react";
import { motion } from "framer-motion";
import { Stack } from "react-bootstrap";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import "../App.css";

const StyleCard = {
  backgroundColor: "#fff",
  top: 120,
  width: 355,
  height: 200,
  borderRadius: 12,
  opacity: 1,
  margin: 10,
  zIndex: 0,
};
const DeleteCard = () => {
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
        ></motion.div>
        <div
          style={{
            top: 100,
            position: "absolute",
          }}
        >
          <Stack gap={1}>
            <div className="ListBigCard" style={StyleCard}></div>
            <div className="ListBigCard" style={StyleCard}></div>
          </Stack>
        </div>
        <div
          className="Background"
          style={{
            backgroundColor: "#E6ECF4",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: -1,
          }}
        />
      </div>
      <Bg />
    </div>
  );
};

export default DeleteCard;
