import React, { useState, forwardRef } from "react";
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
  const ySmooth = useSpring(y, { damping: 16, stiffness: 200 });
  const yVelocity = useVelocity(ySmooth);
  //const rotateX = useTransform(yVelocity, [-1000, 0, 1000], [-15, 0, 15]);
  const rotateX = useTransform(yVelocity, [-1000, 0, 1000], [-30, 0, 30]);
  const Photo = forwardRef(() => {
    return <div />;
  });

  return (
    <>
      <div
        className="Finish Move"
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          width: 375,
          perspective: "1000px",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            width: 330,
            height: 70,
            borderRadius: 12,
            top: 60,
            //    backgroundImage: `url(${DeskOOS})`,
            transformOrigin: "50% 50%",
            boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.08)",
            rotateX,
            y,
          }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 450 }}
          dragElastic={0.1}
          dragTransition={{
            damping: 18,
            timeConstant: 60,
            power: 0,
            modifyTarget: (target) => Math.round(target / 90) * 90,
          }}
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

        <DragOverlay
          modifiers={[restrictToWindowEdges]}
          //    adjustScale={false}
        >
          <motion.div
            style={{
              position: "absolute",
              backgroundColor: "#fff",
              width: 330,
              height: 70,
              borderRadius: 12,
              transformOrigin: "50% 50%",
            }}
          />
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
