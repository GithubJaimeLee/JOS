import React, { Component } from "react";
//import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Slider, InputNumber } from "antd";

export default class SliderInput extends Component {
  //class SliderInput extends React.Component {
  state = {
    inputValue: 0,
  };

  onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div
        className="InputTest"
        style={{
          display: "flex",
        }}
      >
        <div
          className="SliderInput"
          style={{
            width: 160,
            height: 80,
          }}
        >
          <Slider
            min={0}
            max={50}
            onChange={this.onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
            step={0.1}
          />
        </div>
        <div
          style={{
            width: 30,
            height: 80,
          }}
          className="InputNumberBox"
        >
          <InputNumber
            min={0}
            max={50}
            style={{ margin: "0 16px", width: 60 }}
            step={0.1}
            value={inputValue}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}
