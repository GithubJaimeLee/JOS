import React, { Component } from "react";
import Play from "../Img/Play.png";
import { motion, useCycle } from "framer-motion";
import Pause from "../Img/Pause.png";
import Replay from "../Img/Replay.png";

/*
import { useCycle } from 'framer-motion
onClick={() => OCycle()
*/
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
            display: "flex",
            left: 60,
          }}
        >
          <div
            style={{
              color: "#eee",
              width: 72,
              fontFamily: "math",
              fontWeight: "bold",
              fontSize: 60,
            }}
          >
            {minutes}
          </div>
          <div
            style={{
              width: 20,
              color: "#eee",
              fontFamily: "math",
              fontWeight: "bold",
              fontSize: 60,
            }}
          >
            :
          </div>
          {this.state.timerOn === false && this.state.timerTime === 0 && (
            <div
              style={{
                width: 72,
                color: "#eee",
                fontFamily: "math",
                fontWeight: "bold",
                fontSize: 60,
              }}
            >
              {seconds}
            </div>
          )}
          {(this.state.timerOn === true || this.state.timerOn === false) &&
            this.state.timerTime > 0 && (
              <div
                style={{
                  width: 72,
                  color: "#000",
                  fontFamily: "math",
                  fontWeight: "bold",
                  fontSize: 60,
                }}
              >
                {seconds}
              </div>
            )}
          <div
            style={{
              width: 20,
              color: "#F95F6D",
              fontFamily: "math",
              fontWeight: "bold",
              fontSize: 60,
            }}
          >
            .
          </div>

          {this.state.timerOn === false && this.state.timerTime === 0 && (
            <div
              style={{
                color: "#000",
                fontFamily: "math",
                fontWeight: "bold",
                fontSize: 60,
              }}
            >
              {centiseconds}
            </div>
          )}

          {this.state.timerOn === true && (
            <div
              style={{
                color: "#aaa",
                fontFamily: "math",
                fontWeight: "bold",
                fontSize: 60,
              }}
            >
              {centiseconds}
            </div>
          )}

          {this.state.timerOn === false && this.state.timerTime > 0 && (
            <div
              style={{
                color: "#000",
                fontFamily: "math",
                fontWeight: "bold",
                fontSize: 60,
              }}
            >
              {centiseconds}
            </div>
          )}
        </div>
        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={this.startTimer}
            style={{
              position: "absolute",
              top: 366,
              width: 86,
              height: 86,
              left: 150,
              borderRadius: 50,
              border: "none",
              opacity: 1,
              backgroundImage: `url(${Play})`,
              backgroundColor: "#F95F6D",
            }}
          />
        )}
        {this.state.timerOn === true && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={this.stopTimer}
            style={{
              position: "absolute",
              top: 366,
              width: 86,
              height: 86,
              left: 150,
              borderRadius: 50,
              border: "none",
              opacity: 1,
              backgroundImage: `url(${Pause})`,
              backgroundColor: "#F95F6D",
            }}
          ></motion.button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={this.startTimer}
            style={{
              position: "absolute",
              top: 366,
              left: 230,
              width: 86,
              height: 86,
              borderRadius: 50,
              border: "none",
              opacity: 1,
              backgroundImage: `url(${Play})`,
              backgroundColor: "#F95F6D",
            }}
          ></motion.button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={this.resetTimer}
            style={{
              position: "absolute",
              top: 366,
              left: 58,
              width: 86,
              height: 86,
              borderRadius: 50,
              border: "none",
              opacity: 1,
              backgroundImage: `url(${Replay})`,
              backgroundColor: "#fff",
            }}
          ></motion.button>
        )}
      </div>
    );
  }
}

export default StopWatch;