import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import socials from "../../content/socials";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav>
      <Sidebar />
      <div className="wrapper">
        <div>
          <img
            src="/logo/logo.png"
            alt=""
          />
        </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
