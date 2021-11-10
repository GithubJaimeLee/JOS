//有效文件
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
import { DeleteGrid } from "../DeleteFold/Grid";
import { SortablePhoto } from "../DeleteFold/SortablePhoto";
import { Delete } from "../DeleteFold/Photo";
//无效
import photos from "../DeleteFold/Delete.json";

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
      // 下面两项是重点
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      // 上面两项是重点
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={() => {}}>
        <DeleteGrid columns={4}>
          {items.map((url, index) => (
            <SortablePhoto key={url} url={url} index={index} />
          ))}
        </DeleteGrid>
      </SortableContext>
      {/* 调整运动后的比例 */}
      <DragOverlay adjustScale={false}>
        {activeId ? (
          <div
            style={{
              display: "grid",
              gridAutoColumns: "auto",
              gridAutoRows: "auto",
              height: "100%",
            }}
          >
            <Delete />
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
<<<<<<< Updated upstream
=======

  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const layoutMeasuring = {
    strategy: LayoutMeasuringStrategy.BeforeDragging,
  };
  /*  */

  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: 22,
          top: 58,
          fontSize: 17,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          color: "#44a0fa",
          fontWeight: "bold",
        }}
        onClick={DeleteAction}
      >
        删除
      </div>
      <DndContext
        sensors={sensors}
        layoutMeasuring={layoutMeasuring}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        // 下面两项是重点
        // whileTap={handleDragOver}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        // 上面两项是重点
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={() => {}}>
          <DeleteGrid columns={4}>
            {/*     {items.map((url, index) => (
            // <SortablePhoto key={url} url={url} index={index} />
            <SortablePhoto key={url} url={url} index={index} />
          ))} */}
            {items.map((item) => {
              return (
                <div
                  className="ItemBg"
                  key={item.id}
                  style={{
                    display: "flex",

                    width: 87,
                    height: 87,
                    //  backgroundColor: "#fff",
                    // border: "1px solid red",
                    color: "red",
                    fontSize: 24,
                    zIndex: 100,
                  }}
                >
                  {/*  {item.id} */}
                  <input
                    style={{
                      position: "relative",
                      top: 6,
                      left: 68,
                    }}
                    onChange={() => CheckAction(item.id, item.checked)}
                    type="checkbox"
                    checked={item.checked}
                  />
                </div>
              );
            })}
          </DeleteGrid>
          <div
            id="DeleteImgGrid"
            style={{
              position: "absolute",
              top: 0,
              zIndex: 0,
              width: 375,
              paddingTop: 0,
            }}
          >
            <DeleteGrid columns={4}>
              {/*     {items.map((url, index) => (
            // <SortablePhoto key={url} url={url} index={index} />
            <SortablePhoto key={url} url={url} index={index} />
          ))} */}

              {items.map((item, index) => (
                <SortablePhoto key={item.id} url={item.id} index={index} />
              ))}
            </DeleteGrid>
          </div>
        </SortableContext>
        {/* 调整运动后的比例 */}
        <DragOverlay adjustScale={false}>
          {activeId ? (
            <div
              style={{
                display: "grid",
                gridAutoColumns: "auto",
                gridAutoRows: "auto",
                height: "100%",
              }}
            >
              {/*     {items.map((item) => {
          return (
            <div
              className="ItemBg"
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 120,
                height: 70,
                backgroundColor: "#fff",
                border: "1px solid red",
                color: "red",
                fontSize: 24,
                zIndex: 100,
              }}
            >
              {item.id}
              <input
                onChange={() => CheckAction(item.id, item.checked)}
                type="checkbox"
                checked={item.checked}
              />
            </div>
          );
        })}
 */}

              <Delete />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
>>>>>>> Stashed changes
};

export default UploadGallery;
