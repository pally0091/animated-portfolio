import { motion } from "framer-motion";

const varients = {
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
      delayChildren: 0.3,
    },
  },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};
const itemVarients = {
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 },
};
const menu = ["Home", "About", "Services", "Projects", "Contacts"];
const Links = () => {
  return (
    <motion.div
      className="links"
      variants={varients}
    >
      {menu.map((item) => (
        <motion.a
          key={item}
          href={`#${item}`}
          variants={itemVarients}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
