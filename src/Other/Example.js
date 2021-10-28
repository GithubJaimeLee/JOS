import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Example = () => {
  const y = useMotionValue(750);

  const scale = useTransform(y, [0,200, 500, 750], [ 0.4, 0.6, 0.8, 1]);

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 750 }}
      dragElastic={0.6}
      style={{ y, 
  
       scale,
       width:70,
       height: 70,
       backgroundColor: '#000000',
       zIndex:10000,
       position: 'absolute'
        }}
    />
  );
};

export default Example;