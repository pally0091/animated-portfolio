import Header from "../Header";
import { motion } from "framer-motion";
import socials from "../../content/socials";
import "./contact.scss";
import { AiTwotoneMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full">
      <Header>My Contact</Header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 py-5 px-5 justify-around items-start mx-auto w-[98%]">
        <motion.div
          className="border border-white p-5 shadow-lg shadow-[#BB9864] rounded-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-2xl font-semibold italic">
            Let&apos;s talk about everything!
          </h2>
          <p className="my-2">
            Don&apos;t like forms? Send me an{" "}
            <a
              href="mailto:debashisroy0091@yahoo.com"
              className="font-bold text-blue-500 hover:text-blue-700"
            >
              email.
            </a>{" "}
            👋
          </p>
          <br />
          <p className="text-lg">Or find me on:</p>
          <div className="social">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                <motion.img
                  src={`/socials/${social.icon}`}
                  alt={social.name}
                  whileHover={{ scale: 1.5 }}
                />
              </a>
            ))}
          </div>
          <br />
          <div className="flex flex-col gap-5 w-72 mx-auto">
            <p className="flex gap-2 items-center">
              <AiTwotoneMail />
              debashisroy0091@yahoo.com
            </p>
            <p className="flex gap-2 items-center">
              <MdLocationOn />
              Dhaka, Bangladesh
            </p>
          </div>
        </motion.div>
        <motion.div
          className="border border-white p-5 shadow-lg shadow-[#BB9864] rounded-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          form
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
