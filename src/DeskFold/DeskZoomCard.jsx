import React, { forwardRef } from "react";
import photos from "./DeskZoom.json";
//宽度
const colSpan = {
  [photos[0]]: 1,
  [photos[1]]: 1,
  //保留
  [photos[2]]: 1,
};
//高度
const rowSpan = {
  [photos[0]]: 2,
  [photos[1]]: 2,
  [photos[2]]: 2,
};

export const PhotoZ = forwardRef(
  ({ url, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      //  height: index === 0  ? 158  : (index === 1 ? 70 :(index === 2 ? 158 : 70 ) ),
      // width: index === 0 ? 158 :(index === 1  ? 158  : (index === 2 ? 70 : 158 )) ,

      height: index === 1 ? 70 : index === 2 ? 158 : index === 0 ? 158 : 70,
      width: index === 1 ? 158 : index === 2 ? 70 : index === 0 ? 158 : 70,

      //  height: index === 1 ? 70  :  158  ,
      //width: index === 1 ?    158  :  70  ,
      //1号为第三项高
      //    height: index === 2 ?158 : 158  ,
      //3项宽
      //width: index === 2  ? 70  :  158  ,
      //1号为第三项高
      //   height: index === 3 ? 158 :  158   ,
      //3项宽
      //  width: index === 3 ?  158 :  158  ,
      gridRowStart: `span ${rowSpan[url] || 1}`,
      gridColumnStart: `span ${colSpan[url] || 1}`,
      boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      // backgroundColor: "#fff",
      backgroundColor: "#5EDD7B",
      borderRadius: 12,
      ...style,
    };

    return <div ref={ref} style={inlineStyles} {...props}></div>;
  }
);
