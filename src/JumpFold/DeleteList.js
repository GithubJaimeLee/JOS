import { motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import { Slider, InputNumber } from "antd";
import MessageBg from "../Img/NewMessage.png";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import SwipeToDelete from "../Component/SwipeToDelete";
import "../App.css";
import Set from "../Icon/Set.png";
import Close from "../Icon/Close.png";
const DeleteList = () => {
  const [Damping, setDamping] = useState(27);
  const [Stiffness, setStiffness] = useState(320);
  const Info = <p>删除（横滑定位）</p>;
  const [SetAnimation, SetCycle] = useCycle(
    "SetanimationOne",
    "SetanimationTwo"
  );
  const SetVariants = {
    SetanimationOne: {
      y: 780,
    },
    SetanimationTwo: {
      y: 400,
    },
  };

  return (
    <div className="All">
      {/*  <div
        className="SetMenu"
        onClick={() => SetCycle()}
        style={{
          position: "absolute",
          backgroundImage: `url(${Set})`,
          top: 25,
          right: 80,
          width: 30,
          height: 30,
          borderRadius: 20,
          textAlign: "center",
          zIndex: 1001,
          display: "flex",
          justifyContent: "center",
        }}
      /> */}
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
        <div
          style={{
            height: 800,
            width: 360,
            display: "flex",
            overflow: "hidden",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <motion.div
            className="SetWindow"
            style={{
              position: "absolute",
              top: 50,
              width: 350,
              height: 260,
              borderRadius: 12,
              display: "grid",
              alignContent: "space-evenly",
              justifyContent: "center",
              // alignContent: "center",
              backgroundColor: "rgba(255,255,255,0.9)",
              // filter: "blur(2px)",
              boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
              zIndex: 100,
              y: 780,
            }}
            variants={SetVariants}
            animate={SetAnimation}
          >
            <motion.img
              className="CloseBtn"
              onClick={() => SetCycle()}
              src={Close}
              alt=""
              style={{
                width: 16,
                height: 16,
                right: 20,
                top: 16,
                zIndex: 1000,
                position: "absolute",
              }}
            />

            <div
              className="DefaultDamping"
              style={{
                width: 300,
                height: "auto",
                fontSize: 14,
                marginTop: 12,
              }}
            >
              <h6>Damping 阻尼</h6>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Slider
                  min={0}
                  max={100}
                  onChange={setDamping}
                  value={Damping}
                  step={1}
                  style={{
                    width: 220,
                  }}
                />
                <InputNumber
                  min={0}
                  max={100}
                  style={{
                    margin: 0,
                    height: 30,
                    width: 70,
                    borderRadius: 6,
                  }}
                  step={1}
                  onChange={setDamping}
                  value={Damping}
                />
              </div>
            </div>
          </motion.div>
        </div>

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
            width: 360,
            height: 800,
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
