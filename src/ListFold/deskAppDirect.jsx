import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy
} from "@dnd-kit/sortable";
import { GridD } from "../ListFold/GridDirect";
import { SortablePhotoD } from "./SortablePhotoDirect";
import { PhotoD } from "../ListFold/PhotoDirect.jsx";
import photos from "../ListFold/photosDirect.json";

const UploadGallery = () => {
  const [items, setItems] = useState(photos);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>

        <GridD columns={1}>
          {items.map((url, index) => (
            <SortablePhotoD key={url} url={url} index={index} />
          ))}
        </GridD>
      </SortableContext>

      <DragOverlay adjustScale={true}>
        {activeId ? (
          <PhotoD url={activeId} index={items.indexOf(activeId)} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );

  function handleDragStart(event) {
    console.log(event);
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    console.log(event);

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
};

export default UploadGallery;
