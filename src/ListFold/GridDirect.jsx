
import React from 'react';

export function GridD({children, columns}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 108,
        
       marginLeft:20,
    //   borderRadius: ,
       marginRight:20,
        height:860,
        width:350,
        top:60,
  //    backgroundColor:"rgba(199, 0, 11, 0.2)",
        position:'absolute'
        
      }}
    >
      {children}
    </div>
  );
}
export default GridD;
