import { motion } from "framer-motion";
import React, { forwardRef } from "react";
import photos from "./DeskMove.json";
//import { motion } from "framer-motion";
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
      //点击原card
      opacity: faded ? "0" : "1",
      //  transform: "scale(0.8, 0.8)",
      animationDuration: "4s",
      //scale: index ? 1 : 1.2,
      // 下面指动作起点
      //transformOrigin: "0 0",
      //  height: index === 0 ? 10 : 200,
      gridRowStart: `span ${rowSpan[url] || 1}`,
      gridColumnStart: `span ${colSpan[url] || 1}`,
      boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#fff",
      borderRadius: 12,
      ...style,
    };
    //  <motion.div whileTap={{ scale: 0.8 }}>
    return (
      <motion.div
        //   whileDrag={{ scale: [1, 0.8, 1] }}
        // animate={{ scale: [1, 0.8, 1] }}

        whileTap={{ scale: 0.8 }}
        //  onDragStart={{ scale: 1.2 }}
        ref={ref}
        style={inlineStyles}
        {...props}
      />
    );
  }
);
