import React from "react";

export function Grid({ children, columns }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: `70px`,
        padding: 20,
        gridGap: 18,
        paddingTop:60,
        width:355,
        gridAutoFlow: "row dense"
      }}
    >
    {children}
    </div>
  );
}
