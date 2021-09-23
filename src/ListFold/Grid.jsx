import React from "react";

export function Grid({ children, columns }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: `200px`,
        gridGap: 12,
        padding: 12,
        paddingTop:60,
        gridAutoFlow: "row dense"
      }}
    >
      {children}
    </div>
  );
}
