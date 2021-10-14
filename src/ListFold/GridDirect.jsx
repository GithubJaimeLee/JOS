
import React from 'react';

export function GridD({ children, columns }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 270,
        marginLeft: 20,
        paddingTop:10,
        height: 712,
        width: 355,
        top: 60,
        position: 'absolute'

      }}
    >
      {children}
    </div>
  );
}
export default GridD;
