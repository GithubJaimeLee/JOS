import NavBarPage from "../Component/NavBarPage";
import React from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import ChooseSliderBg from "../Img/ChooseSliderBg.png";
import "../css/Component.css";
import Bg from "../Component/Bg";
const Info = <p>滑动条</p>;

function valueLabelFormat(value) {
  const units = ["%"];
  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 100 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 100;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

const ChooseSlider = () => {
  const [value, setValue] = React.useState(88);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

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
          id="ProgressContainer"
          style={{
            position: "absolute",
            top: 136,
            height: 100,
            zIndex: 1000,
          }}
        >
          <div style={{ width: 230 }}>
            <Typography id="non-linear-slider" gutterBottom>
              {valueLabelFormat(value)}
            </Typography>
            <Slider
              value={value}
              min={1}
              step={1}
              max={100}
              onChange={handleChange}
              aria-labelledby="non-linear-slider"
            />
          </div>
        </div>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${ChooseSliderBg})`,
            width: 375,
            height: 812,
            position: "absolute",
            top: 0,
            opacity: 1,
            zIndex: "0",
          }}
        ></div>
      </div>
      <Bg />
    </div>
  );
};

export default ChooseSlider;
