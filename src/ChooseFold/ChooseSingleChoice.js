import React from "react";
import NavBarPage from "../Component/NavBarPage";
import { Radio, Space } from "antd";
import Bg from "../Component/Bg";
import ChooseSingleChoiceBg from "../Img/ChooseSingleChoiceBg.png";
import "../Component/Component.css";
import "antd/dist/antd.css";

const ChooseSingleChoice = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const Info = <p>单选框</p>;
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
          className="Mask"
          style={{
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            overflow: "scroll",
          }}
        >
          <div
            className="bg"
            style={{
              backgroundImage: `url(${ChooseSingleChoiceBg})`,
              width: 375,
              height: 1092,
              position: "absolute",
              top: 0,
              opacity: 1,
              zIndex: "1",
            }}
          />
          <div
            className="CheckRadio"
            style={{
              position: "absolute",
              top: 172,
              left: 36,
              zIndex: 1,
            }}
          >
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio
                  value={1}
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  全屏手势
                </Radio>
                <Radio
                  value={2}
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  经典三段式
                </Radio>
                <Radio
                  value={3}
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  导航键
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default ChooseSingleChoice;
