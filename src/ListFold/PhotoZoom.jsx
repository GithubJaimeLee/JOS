import React, { forwardRef } from "react";
import photos from "./photos.json"; 
//宽度
const colSpan = {

  [photos[1]]: 2,
  //保留
  [photos[2]]: 2,
  [photos[3]]: 1
};
//高度
const rowSpan = {
  [photos[1]]: 1,
  [photos[2]]: 2,
  [photos[3]]: 2
};



/* import React, { forwardRef } from "react";
import photos from "../ListFold/photos.json";

const colSpan = {
  [photos[2]]: 2,
  [photos[4]]: 2
};
const rowSpan = {
  [photos[3]]: 1,
  [photos[4]]: 1
};
 */
export const PhotoZoom = forwardRef(
  ({ url, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      // height: index === 0 ? 410 : 200,
      
      gridRowStart: `span ${rowSpan[url] || 1}`,
      gridColumnStart: `span ${colSpan[url] || 1}`,
      boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#fff",
      borderRadius: 12,
      ...style
    };

    return <div ref={ref} style={inlineStyles} {...props} />;
  }
);
/* //首位放大放大代码
import React, { forwardRef } from "react";

export const Photo = forwardRef(
  ({ url, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 400 : 200,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      ...style
    };

    return <div ref={ref} style={inlineStyles} {...props} />;
  }
);

 */