import backIcon from "../Icon/back.png";
import { Link } from 'react-router-dom';
import React  from 'react';


/* //import {DndContext, useDraggable, useDroppable} from '@dnd-kit/core';
import { createSnapModifier } from '@dnd-kit/modifiers';
//import {Draggable} from './Draggable';s
//import {Droppable} from './Droppable';


import {DndContext, DragOverlay} from  '@dnd-kit/core';
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
 */

import { fabric } from "fabric";



const DGrid = () => {
  

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
   
        </>
    );
  }


  export default DGrid;

  