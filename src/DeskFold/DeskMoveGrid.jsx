import React from "react";
//import { motion } from "framer-motion";
export function Grid({ children, columns }) {
  return (
    <div
      //   whileTap={{ scale: 0.8 }}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: `70px`,
        gridGap: 18,
        padding: 20,
        paddingTop: 14,
        width: 355,
        gridAutoFlow: "row dense",
      }}
    >
      {children}
    </div>
  );
}
