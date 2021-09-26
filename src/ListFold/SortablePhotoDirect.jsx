import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import {PhotoD} from '../ListFold/PhotoDirect';

export const SortablePhotoD = (props) => {
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
    <PhotoD
      ref={setNodeRef}
      style={style}
      faded={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};
