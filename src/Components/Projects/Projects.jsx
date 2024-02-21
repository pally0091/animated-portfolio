import Header from "../Header";
import "./projects.scss";
import projects from "../../content/projects";
import { motion } from "framer-motion";
import Experience from "./Experience";

const Projects = () => {
  return (
    <div className="projects">
      <Header>My Works & Projects</Header>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[95%] mx-auto ">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.preview}
            target="_blank"
            initial={{ opacity: 0, y: 50, scale: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ boxShadow: "0px 0px 5px 10px #ffffff" }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            className="bg-[#B7986B] bg-opacity-60 p-6 backdrop-blur-md rounded-xl"
          >
            <h4 className="text-2xl font-semibold">{project.name}</h4>
            <div className="w-full aspect-[16:9] mt-2">
              <img
                className="w-full h-full rounded-xl"
                src={project.img}
                alt={project.name}
              />
            </div>
            <div className="my-2 flex flex-wrap gap-1">
              {project.stack.map((s, index) => (
                <span
                  key={index}
                  color="warning"
                  className="py-1 px-2 text-xs rounded-full bg-slate-400"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-2">
              <p>{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
      {/* work section  */}
      <div className="mt-20">
        <Experience />
      </div>
    </div>
  );
};

export default Projects;
