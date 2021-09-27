
import React,{ useMemo }  from 'react';
//import {DndContext, useDraggable, useDroppable} from '@dnd-kit/core';
import { createSnapModifier } from '@dnd-kit/modifiers';
//import {Draggable} from './Draggable';s
//import {Droppable} from './Droppable';
import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';


import {DndContext, DragOverlay} from  '@dnd-kit/core';
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';

const DGrid = () => {
   
    

    
    return (

      <>

      
     {/*      <DndContext modifiers={[restrictToVerticalAxis]}>
       我是context
          <DragOverlay modifiers={[restrictToWindowEdges]}>
           我是modidier 
          </DragOverlay>
        </DndContext> */}



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

      </>
    );
  }
  export default DGrid;

  