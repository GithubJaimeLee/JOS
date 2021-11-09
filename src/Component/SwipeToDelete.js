import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  { id: 0, author: "Bob", message: "dolor sit amet, consect" },
  {
    id: 1,
    author: "John",
    message: "sed do eiusmod tempor incididunt ",
    isSwiped: false,
  },
  {
    id: 2,
    author: "Jane",
    message: "Excepteur sint occaecat cupidatat",
    isSwiped: false,
  },
  {
    id: 3,
    author: "Grace",
    message: "cillum dolore eu fugiat nu",
    isSwiped: false,
  },
  {
    id: 4,
    author: "John",
    message: "sed do eiusmod tempor incididunt ",
    isSwiped: false,
  },
  {
    id: 5,
    author: "Jane",
    message: "Excepteur sint occaecat cupidatat",
    isSwiped: false,
  },
  {
    id: 6,
    author: "Grace",
    message: "cillum dolore eu fugiat nu",
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
  const [messagesList, setMessagesList] = useState(MESSAGES);
  const [isDragging, setIsDragging] = useState(false);

  const handleRemoveItem = (messageId) => {
    const filteredMessages = messagesList.filter(
      (message) => message.id !== messageId
    );
    // console.log(filteredMessages);
    setMessagesList(filteredMessages);
  };

  const resetItem = (messageId) => {
    console.log("reset item");
    const newMessagesList = messagesList.map((item) => {
      if (item.id === messageId) {
        item.isSwiped = false;
      }

      return item;
    });

    setMessagesList(newMessagesList);
  };

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
    /*  else if (
      dragDistance < 0 &&
      (dragDistance < -DELETE_BTN_WIDTH * 2 ||
        (messageSwiped.isSwiped && dragDistance < -DELETE_BTN_WIDTH - 10))
    ) {
      const filteredMessages = messagesList.filter(
        (message) => message.id !== messageId
      );

      setMessagesList(filteredMessages);
    }  */ /* else if (dragDistance > -DELETE_BTN_WIDTH && messageSwiped.isSwiped) {
      console.log("reset");
      const newMessagesList = messagesList.map((item) => {
        if (item.id === messageId) {
          item.isSwiped = false;
        }

        return item;
      });

      setMessagesList(newMessagesList);
    } else  */ if (
      dragDistance < 460 /*  && dragDistance <= -DELETE_BTN_WIDTH / 3 */
    ) {
      console.log("prep for removal");
      const newMessagesList = messagesList.map((item) => {
        if (item.id === messageId) {
          item.isSwiped = true;
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
                borderTop: "1px solid #ddd",
                borderBottom: "1px solid #ddd",
              }}
            >
              <motion.div
                drag="x"
                // dragDirectionLock
                dragElastic={0.7}
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
                // onTap={() => {
                //   // console.log(isDragging);
                //   if (!isDragging && message.isSwiped) {
                //     resetItem(message.id);
                //   }
                // }}
                style={{
                  position: "relative",
                  zIndex: "999",
                  height: 70,
                  // display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  //opacity: 0.5,
                }}
              >
                <div className="user-icon" />
                <div className="message-text">
                  <h3>{message.author}</h3>
                  <p>{message.message}</p>
                </div>
              </motion.div>
              <div
                className="delete-btn"
                onClick={() => handleRemoveItem(message.id)}
                style={{
                  zIndex: 10,
                  position: "absolute",
                  height: 70,
                  width: 70,
                  top: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  //  transform: "translateY(-50%)",
                  backgroundColor: "red",
                  color: "#fff",
                }}
              >
                Delete
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default SwipeToDelete;
