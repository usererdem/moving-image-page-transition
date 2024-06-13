import React from "react";
import { motion } from "framer-motion";

const ClickMe = () => {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition}
      exit={{ opacity: 0 }}
      className='click-me'>
      <div className='text'>
        Click <br />
        Here
      </div>
    </motion.div>
  );
};

export default ClickMe;
