import React, { forwardRef, useState } from "react";
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
    const [VrotateX, SetVrotateX] = useState();
    return (
      <div
        ref={ref}
        //  drag="y"

        style={{
          opacity: faded ? "0.5" : "1",
          // transformOrigin: "0 0",
          //  height: index === 0 ? 410 : 200,

          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#fff",
          borderRadius: 12,
          transformOrigin: "50% 50%",
          /*       width: 335,
          
      perspective: "1000px",
      transformOrigin: "50% 50%", */
          //    backgroundImage: `url(${DeskOOS})`,

          // y,
          ...style,
        }}
        {...props}
      />
    );
  }
);
