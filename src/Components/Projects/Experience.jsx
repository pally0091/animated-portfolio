import Header from "../Header";
import experience from "../../content/experience";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <Header>My Experiences</Header>
      <div className="mt-10 w-[90%] me-0 ms-auto flex flex-col-reverse h-[500px] overflow-y-scroll gap-5">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="py-4 px-8 rounded-xl shadow-inner shadow-[#BB9864]"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ boxShadow: "inset 0px 0px 10px 10px white" }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h3 className="text-xl font-semibold">{exp.name}</h3>
            <p className="mb-2 text-sm">{exp.company}</p>
            <p>{exp.role}</p>
            <p>{exp.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
