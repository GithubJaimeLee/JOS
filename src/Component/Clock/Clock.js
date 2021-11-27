import React from "react";

import "../Clock/Clock.css";

import Hand from "../Clock/Hand";
import Digital from "../Clock/Digital";

export default function Clock(props) {
  const [hh, setHh] = React.useState(0);
  const [mm, setMm] = React.useState(0);
  const [ss, setSs] = React.useState(0);
  const deg = 6;
  const units = {
    hour: {
      name: "hour",
      short: "hr",
      divider: 12,
    },
    minute: {
      name: "min",
      short: "mn",
      divider: 30,
    },
    second: {
      name: "sec",
      short: "sc",
      divider: 6,
    },
  };

  React.useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setHh(now.getHours() * 30);
      setMm(now.getMinutes() * units.second.divider);
      setSs((now.getTime() / 1000) * units.second.divider);
      setSs(now.getSeconds() * deg);
    }, 10);
  }, []);

  return (
    <div
      className="clock"
      style={{
        width: 260,
        height: 260,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        //  border: "4px solid #091921",
        borderRadius: "50%",
        zIndex: 10,
      }}
    >
      {props.digital && <Digital time={{ hh, mm }} />}
      <Hand time={{ hh, mm, ss }} unit={units.hour} />
      <Hand time={{ hh, mm, ss }} unit={units.minute} />
      <Hand time={{ hh, mm, ss }} unit={units.second} />
    </div>
  );
}
