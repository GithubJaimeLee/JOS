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
  >
    {items.map((item) => {
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
          {item.Title}
          <input
            onChange={() => CheckAction(item.id, item.checked)}
            type="checkbox"
            checked={item.checked}
          />
        </div>
      );
    })}
    <button onClick={DeleteAction}>Delete</button>
  </div>;
  /*  */
  return (
    <div>
      <div
        className="DeleteTest"
        style={{
          display: "flex",
          position: "absolute",
          left: -300,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {items.map((item) => {
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
        <button onClick={DeleteAction}>Delete</button>
      </div>

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
            {/*     {items.map((url, index) => (
            // <SortablePhoto key={url} url={url} index={index} />
            <SortablePhoto key={url} url={url} index={index} />
          ))} */}
            {items.map((item, index) => (
              <SortablePhoto
                //负责跳帧
                key={item.id}
                //负责移动
                url={item.id}
                //负责数量
                index={index}
              />
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

  function handleDragStart(event) {
    setActiveId(event.active.id);
    console.log(event.active.id);
  }
  //排查bug点
  function handleDragOver(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        console.log(oldIndex, newIndex);
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
