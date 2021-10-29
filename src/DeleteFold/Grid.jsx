//有效

import React from "react";

export function DeleteGrid({ children, columns }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: `87px`,
        gridGap: 6,
        padding: 4,
        paddingTop: 100,
        gridAutoFlow: "row dense",
      }}
    >
      {children}
    </div>
  );
}
