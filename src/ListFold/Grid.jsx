import React from "react";

export function Grid({ children, columns }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: `70px`,
        gridGap: 18,
        padding: 20,
        paddingTop:60,
        gridAutoFlow: "row dense"
      }}
    >
    {children}
    </div>
  );
}
