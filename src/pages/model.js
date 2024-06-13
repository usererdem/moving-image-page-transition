import React, { useEffect, useState } from "react";

import { motion, useTransform, useScroll } from "framer-motion";
//Components
import ScrollForMore from "../components/scrollForMore";
// Hooks
import useWindowDimensions from "../hooks/useWindowDimension";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { width } = useWindowDimensions();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  const [canScroll, setCanScroll] = useState(false);

  // Check later for the image stutter bug when activating no-scroll while animating
  /* useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]); */

  // Function to determine the 'y' value based on the width
  const getYValue = (width) => {
    if (width > 1440) {
      return -600;
    } else if (width > 1024) {
      return -400;
    } else if (width > 768) {
      return -300;
    } else {
      return -100;
    }
  };

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      initial='initial'
      animate='animate'
      exit='exit'
      className='single'>
      <div className='container '>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, duration: 1 },
              }}
              className='details'>
              <div className='location'>
                <span>💻 Coder</span>
                <span>🥐 Baker</span>
              </div>
              <div className='mua'>@erdemcodes</div>
            </motion.div>
            <motion.div className='model'>
              <motion.span variants={firstName} className='first'>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>m</motion.span>
              </motion.span>
              <motion.span variants={lastName} className='last'>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>l</motion.span>
                <motion.span variants={letter}>v</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>n</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: "0",
                  width: "100%",
                  height: width > 1440 ? 600 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <div className='frame-single'>
                  <motion.img
                    style={{ scale: scale }}
                    initial={{ scale: 1.1 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: getYValue(width),
                    }}
                    src={require("../images/test.jpg")}
                    alt='Erdem Elvan'
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
          
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              Animasyon gecisi icin yaptigim site & <br /> dummy text ile
              harmanlandi.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
