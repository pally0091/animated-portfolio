import information from "../../content/information";
import "./banner.scss";
import { motion } from "framer-motion";
import Type from "./Type";

const Banner = () => {
  const userData = information.userData;
  return (
    <div className="p-10 bg-black flex gap-10 flex-col-reverse justify-center items-center md:flex-col lg:flex-row lg:justify-between lg:items-end">
      <div className="w-full md:w-[95%] lg:w-1/2">
        <Type />
      </div>
      <div className="w-full md:w-1/2 overflow-hidden">
        <motion.img
          className="w-full h-full"
          src={userData.img}
          alt={userData.lastName}
          whileHover={{
            scale: 1.2,

            transition: { duration: 1 },
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
