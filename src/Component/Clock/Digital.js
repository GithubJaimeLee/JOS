import React from "react";

export default function Digital({ time }) {
  return (
    <div className="digital">
      <span className="dig-hr">
        {time.hh / 30 >= 10 ? time.hh / 30 : `0${time.hh / 30}`}
      </span>
      <span className="dig-mn">
        {time.mm / 6 >= 10 ? time.mm / 6 : `0${time.mm / 6}`}
      </span>
    </div>
  );
}
