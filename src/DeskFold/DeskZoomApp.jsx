import React, { useState } from "react";
import {
  DndContext,
  closestCorners,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  LayoutMeasuringStrategy,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { GridZ } from "../DeskFold/DeskZoomGrid";
import { SortablePhotoZ } from "../DeskFold/DeskZoomSortable";
import { PhotoZ } from "../DeskFold/DeskZoomCard";

import photos from "../DeskFold/DeskZoom.json";

const UploadGallery = () => {
  const [items, setItems] = useState(photos);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const layoutMeasuring = {
    strategy: LayoutMeasuringStrategy.BeforeDragging,
  };

  return (
    <DndContext
      sensors={sensors}
      layoutMeasuring={layoutMeasuring}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={() => {}}>
        <GridZ columns={2}>
          {items.map((url, index) => (
            <SortablePhotoZ key={url} url={url} index={index} />
          ))}
        </GridZ>
      </SortableContext>
      {/* 调整运动种的比例 */}
      <DragOverlay adjustScale={false}>
        {activeId ? (
          <div
            style={{
              display: "grid",
              gridAutoColumns: "100%",
              gridAutoRows: "auto",
              //gridAutoRows: "18",
              height: "100%",
            }}
          >
            <PhotoZ />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragOver(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  function handleDragEnd(event) {
    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
};

export default UploadGallery;
