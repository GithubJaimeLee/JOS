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
import { Grid } from "../DeskFold/DeskMoveGrid";
import { SortablePhoto } from "../DeskFold/DeskMoveSortable";
import { Photo } from "../DeskFold/DeskMoveCard";
import photos from "../DeskFold/DeskMove.json";
import { motion } from "framer-motion";

const DeskMoveApp = () => {
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
      // 下面两项是重点
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      // 上面两项是重点
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={() => {}}>
        <Grid columns={4}>
          {items.map((url, index) => (
            <SortablePhoto key={url} url={url} index={index} />
          ))}
        </Grid>
      </SortableContext>
      {/* 调整运动后的比例 */}
      <DragOverlay adjustScale={false}>
        {activeId ? (
          <motion.div
            whileTap={{ scale: 0.8 }}
            style={{
              //    transform: "scale(1.2, 1.2)",
              display: "grid",
              gridAutoColumns: "auto",
              gridAutoRows: "auto",
              height: "100%",
              // scale: SC,
              // transform: "scale(1.2, 1.2)",
            }}
          >
            <Photo />
          </motion.div>
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
    } else if (active.id == over.id) {
      const SC = 0.8;
    }
  }

  function handleDragEnd(event) {
    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
};

export default DeskMoveApp;
