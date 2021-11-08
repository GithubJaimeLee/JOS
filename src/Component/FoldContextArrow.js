import { motion, useCycle, AnimatePresence } from "framer-motion";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ArrowSmall from "../Icon/ArrowSmall.png";

const FoldContextArrow = () => {
  const boxHome = {
    width: 340,
    height: 206,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    color: "#415fff",
    background: "#fff",
    position: "relative",
    margin: 10,
    top: 226,
    left: 8,
    opacity: 0.8,
    zIndex: 20,
  };
  const boxAnimation = {
    animationOne: {
      width: 340,
      height: 206,
    },
    animationTwo: {
      width: 340,
      height: 30,
    },
  };

  const ArrowAnimation = {
    AAnimationOne: {
      rotate: 0,
    },
    AAnimationTwo: {
      rotate: 180,
    },
  };

  const [animationBox, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );
  const [animationArrow, AcycleAnimation] = useCycle(
    "AAnimationOne",
    "AAnimationTwo"
  );
  const [isOpen] = useState(true);
  //const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <AnimatePresence>
        <motion.div
          className="boxChange"
          style={boxHome}
          variants={boxAnimation}
          animate={animationBox}
        >
          {isOpen && (
            <div
              className="Allbtn"
              onClick={() => cycleAnimation() & AcycleAnimation()}
            >
              <motion.div
                className="boxPress"
                style={{
                  display: "block",
                  position: "absolute",
                  right: 10,
                  top: 6,
                  borderRadius: 0,
                  textAlign: "center",
                }}
                variants={ArrowAnimation}
                animate={animationArrow}
              >
                <img
                  src={ArrowSmall}
                  alt=" "
                  style={{
                    width: 16,
                    position: "relative",
                    top: 0,
                    left: 0,
                    opacity: 1,
                    zIndex: "10",
                  }}
                />
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FoldContextArrow;
