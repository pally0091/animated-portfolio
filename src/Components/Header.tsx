import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header: React.FC<{ children: string }> = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      console.log(inView);
    }
  }, [inView]);

  return (
    <motion.h3
      ref={ref}
      className="text-3xl text-center font-semibold my-10"
      initial={{ opacity: 0, y: -20, scale: 0 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h3>
  );
};

export default Header;
