import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Delete} from '../DeleteFold/Photo';

export const SortablePhoto = (props) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.url});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Delete
      ref={setNodeRef}
      style={style}
      faded={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};

