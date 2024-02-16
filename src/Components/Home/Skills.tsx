import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../Header";
import skills from "../../content/skills";

const Skills: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  const skillVariants = {
    hidden: { opacity: 0, x: -20, scale: 0 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <Header>My Skills and Technologies</Header>
      <motion.div
        className="flex flex-wrap gap-5 my-5 py-5 px-5 justify-center items-center"
        initial="hidden"
        ref={ref}
        animate={controls}
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-32 h-20 flex items-center justify-center rounded-md border-2 border-[#B7986B] bg-slate-600 skill-img"
            variants={skillVariants}
            title={skill.title}
          >
            <img
              className="w-14 h-14"
              src={"/skills/" + skill.image}
              alt={skill.title}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;
