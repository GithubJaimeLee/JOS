import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MessageA from "../Img/MessageA.png";
import MessageB from "../Img/MessageB.png";
import MessageC from "../Img/MessageC.png";
import MessageDelete from "../Img/MessageDelete.png";
//const WinWidth = window.innerWidth;
const MESSAGES = [
  {
    id: 0,
    avatar: MessageA,
    isSwiped: false,
  },
  {
    id: 1,
    avatar: MessageB,
    isSwiped: false,
  },
  {
    id: 2,
    avatar: MessageC,
    isSwiped: false,
  },
  {
    id: 3,
    avatar: MessageA,
    isSwiped: false,
  },
];

const DELETE_BTN_WIDTH = 70;

const MESSAGE_DELETE_ANIMATION = { height: 0, opacity: 0 };
const MESSAGE_DELETE_TRANSITION = {
  opacity: {
    transition: {
      duration: 0,
    },
  },
};

const SwipeToDelete = () => {
  //完成WinWidth数据更新
  const [WinWidth, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  //完成WinWidth数据更新

  const [messagesList, setMessagesList] = useState(MESSAGES);
  const [isDragging, setIsDragging] = useState(false);

  const handleRemoveItem = (messageId) => {
    const filteredMessages = messagesList.filter(
      (message) => message.id !== messageId
    );
    // console.log(filteredMessages);
    setMessagesList(filteredMessages);
  };

  /*   const resetItem = (messageId) => {
    console.log("reset item");
    const newMessagesList = messagesList.map((item) => {
      if (item.id === messageId) {
        item.isSwiped = false;
      }

      return item;
    });
    setMessagesList(newMessagesList);
  }; */

  const handleDragEnd = (info, messageId) => {
    const dragDistance = info.point.x;
    const messageSwiped = messagesList.filter(
      (message) => message.id === messageId
    )[0];

    console.log(dragDistance, info);
    if (
      dragDistance < 0 &&
      dragDistance > -DELETE_BTN_WIDTH / 3 &&
      !messageSwiped.isSwiped
    ) {
      console.log("ignore");
    }

    //拉通消失
    /*     if (
      dragDistance < 0 &&
      (dragDistance < -DELETE_BTN_WIDTH * 2 ||
        (messageSwiped.isSwiped && dragDistance < -DELETE_BTN_WIDTH - 10))
    ) {
      const filteredMessages = messagesList.filter(
        (message) => message.id !== messageId
      );
      // console.log(filteredMessages);
      setMessagesList(filteredMessages);
    } else
     */
    else if (dragDistance > -DELETE_BTN_WIDTH && messageSwiped.isSwiped) {
      console.log("reset");

      const newMessagesList = messagesList.map((item) => {
        if (item.id === messageId) {
          item.isSwiped = false;
        }
        return item;
      });

      setMessagesList(newMessagesList);
    } else if (
      //管理出现delete

      // dragDistance < 0 &&
      // dragDistance <= -DELETE_BTN_WIDTH / 3
      dragDistance <
      WinWidth / 2 + 120
      // 375/2-70
      // && dragDistance <= -DELETE_BTN_WIDTH / 3
    ) {
      console.log("屏幕宽" + WinWidth);
      console.log(dragDistance);
      console.log("prep for removal");
      const newMessagesList = messagesList.map((item) => {
        if (item.id === messageId) {
          //管理出现delete
          item.isSwiped = true;
          //  window.location.reload(false);
        } else {
          item.isSwiped = false;
        }

        return item;
      });

      setMessagesList(newMessagesList);
    }
  };

  return (
    <main
      className="screen"
      style={{
        // height: 812,
        width: 375,
        //  backgroundColor: "grey",
      }}
    >
      <div
        className="DeleteUl"
        style={{
          width: 375,
          position: "absolute",
          left: 0,
          top: 200,
          listStyle: "none",
        }}
      >
        <AnimatePresence>
          {messagesList.map((message) => (
            <motion.li
              key={message.id}
              exit={MESSAGE_DELETE_ANIMATION}
              transition={MESSAGE_DELETE_TRANSITION}
              style={{
                width: 375,
                position: "relative",

                borderTop: "1px solid #f7f7f7",
                borderBottom: "1px solid f7f7f7",
              }}
            >
              <motion.div
                drag="x"
                // dragDirectionLock
                dragElastic={0.7}
                transition={{
                  type: "tween",
                }}
                dragPropagation={true}
                dragConstraints={{
                  top: 0,
                  bottom: 0,
                  left: message.isSwiped ? DELETE_BTN_WIDTH * -1 : 0,
                  right: message.isSwiped ? DELETE_BTN_WIDTH : 0,
                }}
                dragMomentum={false}
                animate={{ x: message.isSwiped ? DELETE_BTN_WIDTH * -1 : 0 }}
                onDragStart={() => {
                  setIsDragging(true);
                }}
                onDragEnd={(_, info) => {
                  handleDragEnd(info, message.id);

                  setTimeout(() => {
                    setIsDragging(false);
                  }, 50);
                }}
                className={`msg-container ${
                  message.isSwiped ? "is-swiped" : ""
                }`}
                onTap={() => {
                  console.log(isDragging);
                  //   if (!isDragging && message.isSwiped) {
                  //     resetItem(message.id);
                  // }
                  // }}
                  // onTap={() => {
                  //   // console.log(isDragging);
                  //   if (!isDragging && message.isSwiped) {
                  //     resetItem(message.id);
                  //   }
                }}
                style={{
                  position: "relative",
                  zIndex: "999",
                  height: 92,
                  // display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  //opacity: 0.5,
                  backgroundImage: `url(${message.avatar})`,
                }}
              >
                {/*     <img
                  className="user-icon"
                  src={message.avatar}
                  alt="User icon"
                /> */}
                <div className="message-text"></div>
              </motion.div>
              <div
                className="delete-btn"
                onClick={() => handleRemoveItem(message.id)}
                style={{
                  zIndex: 10,
                  position: "absolute",
                  height: 92,
                  width: 70,
                  top: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  //  transform: "translateY(-50%)",
                  backgroundColor: "#eee",
                  color: "#000",
                  backgroundImage: `url(${MessageDelete})`,
                  MessageDelete,
                }}
              />
              {/*   删除 */}
            </motion.li>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default SwipeToDelete;
