import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {PhotoZ} from '../DeskFold/DeskZoomCard';

export const SortablePhotoZ = (props) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.url});

 /*  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }; */

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <PhotoZ
      ref={setNodeRef}
      style={style}
      faded={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};
