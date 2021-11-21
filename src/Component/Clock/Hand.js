import React from "react";

export default function Hand({ time, unit }) {
  const rotation =
    unit.name === "hour"
      ? time.hh + time.mm / unit.divider
      : unit.name === "min"
      ? time.mm
      : time.ss;

  return (
    <div className={unit.name}>
      <div
        className={unit.short}
        style={{
          transform: `rotateZ(${rotation}deg)`
        }}
      />
    </div>
  );
}
