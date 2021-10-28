import React, { forwardRef } from "react";
import photosD from "./DeskDirect.json";

const colSpan = {
  [photosD[1]]: 1,
  //保留
};
//高度
const rowSpan = {
  [photosD[1]]: 1,
};

export const PhotoD = forwardRef(
  ({ url, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 70 : 158,
      width: index === 0 ? 70 : 158,
      gridRowStart: `span ${rowSpan[url] || 1}`,
      gridColumnStart: `span ${colSpan[url] || 1}`,
      boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#5EDD7B",
      borderRadius: index === 0 ? 6 : 12,
      ...style,
    };

    return <div ref={ref} style={inlineStyles} {...props} />;
  }
);
