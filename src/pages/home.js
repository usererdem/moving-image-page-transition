import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ClickMe from "../components/clickMe";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/erdem-elvan`}>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    exit={{ scale: 1.1 }}
                    transition={transition}
                    src={require("../images/test.jpg")}
                    alt='Erdem Elvan'
                  />
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
              <div className='title'>Erdem Elvan</div>
              <div className='location'>
                <span>to</span>
                <span>believe</span>
              </div>
            </motion.div>
            <ClickMe />
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
