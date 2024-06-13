import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useScroll } from "framer-motion";

const Header = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  const headerVariants = {
    scrolled: { backgroundColor: "#1e1f13" },
    notScrolled: { backgroundColor: "transparent" },
  };

  const textColorVariants = {
    scrolled: { color: "#ffffff" },
    notScrolled: { color: "#1e1f13" },
  };

  const borderColorVariants = {
    scrolled: { borderColor: "#ffffff" },
    notScrolled: { borderColor: "#1e1f13" },
  };

  useEffect(() => {
    const updateHeader = () => {
      if (scrollY.get() > 50) {
        controls.start("scrolled");
      } else {
        controls.start("notScrolled");
      }
    };

    // Listen to scroll events
    const unsubscribeScroll = scrollY.onChange(updateHeader);

    // Initial check when component mounts
    updateHeader();

    // Cleanup function
    return () => {
      unsubscribeScroll();
    };
  }, [controls, scrollY]);

  return (
    <motion.header
      className='header'
      initial='notScrolled'
      animate={controls}
      variants={headerVariants}>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to='/'>
              <motion.div variants={borderColorVariants} className='menu'>
                <motion.div className='menu-text'>HOME</motion.div>
              </motion.div>
            </Link>
          </div>
          <motion.div variants={borderColorVariants} className='menu'>
            <motion.div className='menu-text'>MENU</motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
