import React, { forwardRef } from "react";
import photos from "./DeskMove.json";
import { motion } from "framer-motion";
//宽度
const colSpan = {
  [photos[1]]: 2,
  //保留
  [photos[2]]: 2,
  [photos[3]]: 1,
};
//高度
const rowSpan = {
  [photos[1]]: 1,
  [photos[2]]: 2,
  [photos[3]]: 2,
};

export const Photo = forwardRef(
  ({ url, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      //  height: index === 0 ? 410 : 200,
      gridRowStart: `span ${rowSpan[url] || 1}`,
      gridColumnStart: `span ${colSpan[url] || 1}`,
      boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#fff",
      borderRadius: 12,
      ...style,
    };

    return <div ref={ref} style={inlineStyles} {...props} />;
  }
);
