import Header from "../Header";
import services from "../../content/services";
import policies from "../../content/policies";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div>
      <Header>Services I Provide</Header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[95%] mx-auto ">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-5 border-2 border-[#BB9864] rounded-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              borderColor: "#ffffff",
              boxShadow: "inset 0px 0px 5px 10px #ffffff",
            }}
          >
            <h4 className="text-xl my-4 font-semibold">{service.name}</h4>
            <p>{service.detail}</p>
          </motion.div>
        ))}
      </div>
      <Header>My workflow & policy</Header>
      <div className="flex flex-col gap-10 mt-5 w-[95%] md:w-[80%] lg:w-[55%] mx-auto">
        {policies.map((policy, index) => (
          <motion.div
            key={index}
            className="my-5 p-5 border-b-2 border-[#BB9864] rounded-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-xl font-semibold">{policy.name}</h4>
            <p>{policy.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
