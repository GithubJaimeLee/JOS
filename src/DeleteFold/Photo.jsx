import React, { forwardRef } from "react";
import photos from "./Delete.json"; 
//宽度
const colSpan = {

  [photos[1]]: 1
//保留
  
};
//高度
const rowSpan = {
  [photos[1]]: 1
  
};

export const Delete = forwardRef(
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
      borderRadius: 0,
      ...style
    };

    return <div ref={ref} style={inlineStyles} {...props} />;
  }
);
