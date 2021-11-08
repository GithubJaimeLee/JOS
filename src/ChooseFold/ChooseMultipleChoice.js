import React from "react";
import NavBarPage from "../Component/NavBarPage";
import Bg from "../Component/Bg";
import ChooseMultipleChoiceBg from "../Img/ChooseMultipleChoiceBg.png";
import { Checkbox } from "antd";
import "../Component/Component.css";
const CheckboxGroup = Checkbox.Group;

const plainOptions = ["a", "b", "c"];
const defaultCheckedList = [];

const ChooseMultipleChoice = () => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  //const [checkedList, setCheckedList] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const Info = <p>复选框</p>;
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
          className="Choose"
          style={{
            width: 375,
            height: 812,
            position: "relative",
            top: 126,
            left: 20,
            opacity: 1,
            zIndex: "2",
          }}
        >
          <Checkbox
            style={{
              display: "flex",
              width: 188,
            }}
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
            defaultChecked={false}
          >
            Check all
          </Checkbox>
          <div
            style={{
              display: "flex",
              width: 18,
            }}
          >
            <CheckboxGroup
              direction="vertical"
              options={plainOptions}
              value={checkedList}
              onChange={onChange}
            />
          </div>
        </div>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${ChooseMultipleChoiceBg})`,
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "1",
          }}
        ></div>
      </div>
      <Bg />
    </div>
  );
};

export default ChooseMultipleChoice;
