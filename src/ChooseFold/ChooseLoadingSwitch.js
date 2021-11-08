import React from "react";
import { Form } from "react-bootstrap";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";

const ChooseLoadingSwitch = () => {
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
          className="bg"
          style={{
            backgroundColor: "#eee",
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "2",
          }}
        />
        <Form
          style={{
            position: "relative",
            height: 60,
            top: 300,
            zIndex: "2",
          }}
        >
          <Form.Check type="switch" id="custom-switch" label="开关" />
        </Form>
      </div>
      <Bg />
    </div>
  );
};

export default ChooseLoadingSwitch;
