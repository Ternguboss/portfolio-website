import { motion } from "framer-motion";

function Tools() {
  const skills = ["JavaScript", "React", "Tailwind", "Node.js", "Python", "Excel"];

  return (
    <div
      id="tools"
      className="bg-zinc-800 min-h-screen flex flex-col py-20 px-6 sm:px-10"
    >
      {/* Heading */}
      <motion.div
        className="flex items-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-zinc-300 font-bold text-3xl">My Skills</h2>
        <div className="flex-1 h-[2px] bg-zinc-600 ml-4"></div>
      </motion.div>

      {/* Skills */}
      <section className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                className="px-5 py-2 border border-zinc-300 text-zinc-300 rounded-full 
                hover:border-teal-300 hover:text-teal-300 transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Tools;
 