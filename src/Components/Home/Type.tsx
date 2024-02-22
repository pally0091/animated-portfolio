import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { motion } from "framer-motion";

export default function Type() {
  const words = [
    {
      text: "Bringing",
    },
    {
      text: "Digital",
    },
    {
      text: "Dreams",
    },
    {
      text: "to",
    },
    {
      text: "Life.",
    },
    {
      text: "with",
    },
    {
      text: "Flawless",
    },
    {
      text: "Frontend",
    },
    {
      text: "Magic",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        Fascinating Audiences with Frontend Magic
      </p>
      <TypewriterEffect
        words={words}
        cursorClassName="bg-[#BB9864]"
      />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <motion.a
          className="libutton"
          href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=droy9191"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          Follow on LinkedIn
        </motion.a>
        <motion.a
          href="#Contacts"
          className="bg-green-400 text-black px-8 py-1 rounded-full font-semibold hover:bg-green-500 text-center"
          whileHover={{ scale: 1.1 }}
        >
          Contact
        </motion.a>
      </div>
    </div>
  );
}
