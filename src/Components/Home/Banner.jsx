import information from "../../content/information";
import "./banner.scss";
import { motion } from "framer-motion";

const Banner = () => {
  const userData = information.userData;
  return (
    <div className="p-10 bg-black flex gap-10 flex-col-reverse justify-center items-center md:flex-col lg:flex-row lg:justify-between lg:items-end">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full md:w-[95%] lg:w-1/2"
      >
        <p className="mb-10">{userData.description}</p>

        <a
          className="libutton"
          href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=droy9191"
          target="_blank"
          rel="noreferrer"
        >
          Follow on LinkedIn
        </a>
      </motion.div>
      <div className="w-full md:w-1/2 overflow-hidden">
        <motion.img
          className="w-full h-full"
          src={userData.img}
          alt={userData.lastName}
          whileHover={{
            scale: 1.1,
            rotateZ: 20,

            transition: { duration: 0.5 },
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
