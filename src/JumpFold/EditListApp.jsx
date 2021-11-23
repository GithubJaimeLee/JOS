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
import { Grid } from "../JumpFold/EditListGrid";
import { SortablePhoto } from "../JumpFold/EditListSortable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import { Photo } from "../JumpFold/EditListPhoto";
import photos from "../JumpFold/EditList.json";
import {
  motion,
  useMotionValue,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import DeskOOS from "../Img/test.png";
const UploadGallery = () => {
  const [items, setItems] = useState(photos);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const layoutMeasuring = {
    strategy: LayoutMeasuringStrategy.BeforeDragging,
  };
  const y = useMotionValue(0);
  const ySmooth = useSpring(y, { damping: 16, stiffness: 300 });
  const yVelocity = useVelocity(ySmooth);
  const rotateX = useTransform(yVelocity, [-1000, 0, 1000], [-30, 0, 30]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          width: 375,
          perspective: "1000px",
          transformOrigin: "50% 50%",
        }}
      >
        <motion.img
          src={DeskOOS}
          style={{
            position: "absolute",
            width: 330,
            height: 70,
            backgroundColor: "#000",
            top: 60,

            y,
            rotateX,
            borderRadius: 12,
            perspective: "300px",
          }}
          drag="y"
          dragElastic={1}
        />
      </div>

      <DndContext
        modifiers={[restrictToVerticalAxis]}
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
          <Grid columns={1}>
            {items.map((url, index) => (
              <SortablePhoto key={url} url={url} index={index} />
            ))}
          </Grid>
        </SortableContext>
        {/* 激活状态*/}
        <DragOverlay modifiers={[restrictToWindowEdges]} adjustScale={false}>
          {activeId ? (
            <motion.div
              style={{
                display: "grid",
                gridAutoColumns: "auto",
                gridAutoRows: "auto",
                height: "100%",
                // border: "20px solid ",
                //   rotateX: 70,
                //   scale: 0.5,
                //  borderColor: Color,
              }}
              //      animate={{ rotateX: 40 }}
              //   transition={{ type: "spring" }}
            >
              <Photo
                style={{
                  display: "grid",
                  gridAutoColumns: "auto",
                  gridAutoRows: "auto",
                  height: "100%",
                }}
              />
            </motion.div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
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
