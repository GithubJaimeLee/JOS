import React, { forwardRef } from "react";
import photos from "./EditList.json";
import {
  motion,
  useMotionValue,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import DeskOOS from "../Img/test.png";
//宽度
const colSpan = {
  [photos[1]]: 1,
};
//高度
const rowSpan = {
  [photos[1]]: 1,
};

export const Photo = forwardRef(
  ({ url, index, faded, style, ...props }, ref) => {
    const y = useMotionValue(0);
    const ySmooth = useSpring(y, { damping: 16, stiffness: 300 });
    const yVelocity = useVelocity(ySmooth);
    const rotateX = useTransform(yVelocity, [-1000, 0, 1000], [-30, 0, 30]);

    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      // transformOrigin: "0 0",
      //  height: index === 0 ? 410 : 200,
      gridRowStart: `span ${rowSpan[url] || 1}`,
      gridColumnStart: `span ${colSpan[url] || 1}`,
      boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#fff",
      borderRadius: 12,
      /*       width: 335,
      perspective: "1000px",
      transformOrigin: "50% 50%", */
      ...style,
    };

    return (
      <div
        // whileDrag={{ rotateX: 90 }}
        //whileHover={{ rotateX: 90 }}
        // onDragEnd={{ rotateX: 0 }}
        // onDragCancel={{ rotateX: 0 }}
        ref={ref}
        style={inlineStyles}
        {...props}
      ></div>
    );
  }
);
