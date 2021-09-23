import React from "react";

export function Grid({ children, columns }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: `200px`,
        gridGap: 10,
        padding: 10,
        gridAutoFlow: "row dense"
      }}
    >
      {children}
    </div>
  );
}
