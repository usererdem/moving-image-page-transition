import React from "react";

import { motion } from "framer-motion";
//Components
import ScrollForMore from "../components/scrollForMore";
// Hooks
import useWindowDimensions from "../hooks/useWindowDimension";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Model = ({ imageDetails }) => {
  const { width } = useWindowDimensions();
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      className='single'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div initial={{ opacity: 0 }} className='details'>
              <div className='location'>
                <span>💻 Coder</span>
                <span>🥐 Baker</span>
              </div>
              <div className='mua'>SOCIAL: @erdemcodes</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} className='model'>
              <span className='first'>
                <span>E</span>
                <span>r</span>
                <span>d</span>
                <span>e</span>
                <span>m</span>
              </span>
              <span className='last'>
                <span>E</span>
                <span>l</span>
                <span>v</span>
                <span>a</span>
                <span>n</span>
              </span>
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
                  height: width > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <div className='frame-single'>
                  <motion.img
                    initial={{ scale: 1.1 }}
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
