//有效文件
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
import { DeleteGrid } from "../DeleteFold/DeleteImgGrid.jsx";
import { SortablePhoto } from "../DeleteFold/DeleteImgSortable.jsx";
import { Delete } from "../DeleteFold/DeleteImgPhoto.jsx";
//无效
import ItemsArray from "../DeleteFold/DeleteImg.json";

const UploadGallery = () => {
  const [items, setItems] = useState(ItemsArray);
  /*  */
  const CheckAction = (f_id, checked) => {
    console.log(f_id, checked);
    const modifiedItems = items.map((item) => {
      if (item.id === f_id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems(modifiedItems);
  };

  const DeleteAction = () => {
    const filteredItems = items.filter((item) => item.checked === false);
    setItems(filteredItems);
    console.log(filteredItems);
  };
  /*  */

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

  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const layoutMeasuring = {
    strategy: LayoutMeasuringStrategy.BeforeDragging,
  };
  /*  */
  <div
    className="DeleteTest"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  ></div>;
  /*  */

  return (
    <div>
      <div
        onClick={DeleteAction}
        style={{
          top: 58,
          position: "absolute",
          left: 22,
          fontSize: 18,
          fontWeight: "bold",
          color: "#60abf8",
          zIndex: 100,
        }}
      >
        删除
      </div>
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
          <DeleteGrid columns={4}>
            {items.map((item) => {
              return (
                <div
                  className="ItemBg"
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 87,
                    height: 87,
                    //  backgroundColor: "#fff",
                    //  border: "1px solid red",
                    color: "red",
                    fontSize: 24,
                    zIndex: 100,
                  }}
                >
                  {/*     {item.id} */}
                  <input
                    style={{
                      position: "relative",
                      width: 16,
                      height: 16,
                      top: -30,
                      left: 30,
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
            className="GridPosition"
            style={{
              position: "absolute",
              top: 0,
              width: 375,
              paddingTop: 0,
            }}
          >
            <DeleteGrid columns={4}>
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
              <Delete />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default UploadGallery;
