import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Hero() {
  const normalText = "Hey, my name is ";  // gray text
  const nameText = "Terngu";               // accent / green text

  const [normalDisplay, setNormalDisplay] = useState("");
  const [nameDisplay, setNameDisplay] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // total length = normalText + nameText
    const totalLen = normalText.length + nameText.length;
    if (index < totalLen) {
      const timeout = setTimeout(() => {
        if (index < normalText.length) {
          setNormalDisplay((prev) => prev + normalText.charAt(index));
        } else {
          // subtract normalText length to get index for nameText
          const nameIndex = index - normalText.length;
          setNameDisplay((prev) => prev + nameText.charAt(nameIndex));
        }
        setIndex((prev) => prev + 1);
      }, 100); // typing speed (ms)
      return () => clearTimeout(timeout);
    }
    // once typing is done, we do nothing — cursor still blinks
  }, [index]);

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-zinc-800 min-h-[100vh] px-8 flex flex-col justify-center"
    >
      <h1 className="text-center text-3xl sm:text-5xl">
        <span className="text-zinc-400">{normalDisplay}</span>
        <span className="text-teal-300">
          {nameDisplay}
          <span className="animate-blink">|</span>
        </span>
      </h1>

      <h2 className="text-zinc-400 text-center text-xl sm:text-2xl mt-4">
        I'm a software engineer specializing in AI, web, data analysis and app
        development.
      </h2>

      <p className="text-zinc-400 text-center max-w-xl mx-auto mt-2">
        I love solving problems and building real-world projects that make an
        impact.
      </p>

      <div className="text-center py-8">
        <a
          href="mailto:terngufavou35@gmail.com?subject=Hello Terngu&body=I’d like to work with you!"
          className="py-5 px-10 text-sm font-medium text-teal-300 focus:outline-none bg-transparent
            rounded-lg border border-teal-300 hover:bg-gray-100 dark:focus:ring-gray-700 dark:text-teal-300 
            dark:hover:text-teal-300 dark:hover:bg-zinc-700 transition"
        >
          Say hi!
        </a>
      </div>
    </motion.div>
  );
}

export default Hero;
