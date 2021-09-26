import React, { useState } from "react";
import {
  DndContext,
  closestCorners,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  LayoutMeasuringStrategy
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { Grid } from "../ListFold/GridZoom";
import { SortablePhoto } from "../ListFold/SortablePhoto";
import { PhotoZoom } from "../ListFold/PhotoZoom";
import photos from "../ListFold/photos.json";

const UploadGallery = () => {
  const [items, setItems] = useState(photos);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const layoutMeasuring = {
    strategy: LayoutMeasuringStrategy.BeforeDragging
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
        <Grid columns={4} >
          {items.map((url, index) => (
            <SortablePhoto key={url} url={url} index={index} />
          ))}
        </Grid>
      </SortableContext>
{/* 调整运动后的比例 */}
      <DragOverlay adjustScale={false}>
        {activeId ? (
          <div
            style={{
              display: "grid",
              gridAutoColumns: "auto",
             gridAutoRows: "auto",
          //    gridAutoRows: "158",
              height: "100%"
   
            }}
          >
            <PhotoZoom
          //  url={activeId}
             />
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
