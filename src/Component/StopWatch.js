import React, { Component } from "react";

class StopWatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      console.log(`Time is 🚀 ${Date.now() - this.state.timerStart}`);
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
    });
  };

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    // let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div
        className="Stopwatch"
        style={{
          position: "absolute",
          fontSize: 50,
          top: 240,
          width: 375,
          display: "grid",
          justifyContent: "center",
        }}
      >
        <div
          className="Stopwatch-display"
          style={{
            position: "absolute",
            // fontSize: 50,

            width: 375,
            display: "grid",
            justifyContent: "center",
          }}
        >
          {minutes} : {seconds} : {centiseconds}
        </div>
        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button
            onClick={this.startTimer}
            style={{
              position: "relative",
              top: 366,
              width: 86,
              height: 86,
              borderRadius: 50,
              border: "none",
              opacity: 0.5,
              backgroundColor: "#F95F6D",
            }}
          >
            P
          </button>
        )}
        {this.state.timerOn === true && (
          <button
            onClick={this.stopTimer}
            style={{
              position: "relative",
              top: 366,
              width: 86,
              height: 86,
              borderRadius: 50,
              border: "none",
              opacity: 0.5,
              backgroundColor: "#F95F6D",
            }}
          >
            Stop
          </button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button
            onClick={this.startTimer}
            style={{
              position: "relative",
              top: 366,
              left: 80,
              width: 86,
              height: 86,
              borderRadius: 50,
              border: "none",
              opacity: 0.5,
              backgroundColor: "#F95F6D",
            }}
          >
            Resume
          </button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button
            onClick={this.resetTimer}
            style={{
              position: "absolute",
              top: 366,
              left: 60,
              width: 86,
              height: 86,
              borderRadius: 50,
              border: "none",
              opacity: 0.5,
              backgroundColor: "#F95F6D",
            }}
          >
            Re
          </button>
        )}
      </div>
    );
  }
}

export default StopWatch;
