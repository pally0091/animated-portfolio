import { useState } from "react";
import ToggleButton from "./Button/ToggleButton";
import Links from "./Links/Links";
import "./sidebar.scss";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 30px 30px)",
      transition: {
        type: "spring",
        stiffness: 40,
      },
    },
    closed: {
      clipPath: "circle(25px at 30px 30px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      id="sidebar"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="bg"
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton
        setOpen={setOpen}
        open={open}
      />
    </motion.div>
  );
};

export default Sidebar;
