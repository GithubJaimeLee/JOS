import React from "react";

export function Grid({ children, columns }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: `70px`,
        padding: 20,
        paddingTop: 60,
        gap: 20,
        width: 375,
        gridAutoFlow: "row dense",
      }}
    >
      {children}
    </div>
  );
}
