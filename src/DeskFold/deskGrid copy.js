
import React,{ useMemo }  from 'react';
import {DndContext, useDraggable, useDroppable} from '@dnd-kit/core';
import { createSnapModifier } from '@dnd-kit/modifiers';
//import {Draggable} from './Draggable';s
//import {Droppable} from './Droppable';
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';


const DGrid = () => {
    const [gridSize, setGridSize] = React.useState(30);
    const itemStyle = {
      marginTop: 11,
      marginLeft: 11,
    //  width: gridSize * 8 - 1,
      //height: gridSize * 2 - 1,
      width: gridSize * 8 - 1,
      height: gridSize * 2 - 1,
      background:'#E6ECF4'
    };
    const snapToGrid = useMemo(() => createSnapModifier(gridSize), [gridSize]);



 

    function Grid({children, columns}) {
        return (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gridGap: 10,
              padding: 10,
              height:100
            }}
          >
            {children}
          </div>
        );
      }
   

    return (

      <>
  
      <Link to="/Desk">
        <img src={backIcon} alt=" " style={{
          width: 30,
          position: 'absolute',
          top: 20,
          left: 20,
          opacity: 1,
          zIndex: '100'
        }}>
        </img>
      </Link>

        <div className="DraggableStory"
          label={`Snapping to ${gridSize}px increments`}
          modifiers={[snapToGrid]}
          style={itemStyle}
          key={gridSize}
        />
        <Grid className="Grid"
        size={gridSize} onSizeChange={setGridSize} />
      </>
    );
  }
  export default DGrid;