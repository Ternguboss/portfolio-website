import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="w-full bg-zinc-800 text-zinc-300">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold">About me</h2>
              <div className="flex-1 h-[2px] bg-zinc-600 ml-4"></div>
            </div>

            <motion.h3
              className="text-zinc-400 text-base sm:text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I’m a Computer Science student passionate about software development and new technologies.
            </motion.h3>

            <motion.p
              className="text-zinc-400 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              I love problem-solving — it feels like playing a game to me — and I enjoy building real-world
              projects that others can use.
            </motion.p>

            <motion.p
              className="text-zinc-400 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Outside of coding, I’m usually playing football, gaming, or watching shows. I’m also into music,
              art, and good food — they keep me balanced and keep life fun.
            </motion.p>
          </motion.div>

          {/* Right: picture */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src="my" // <-- replace with your actual image path in /public
              alt="Terngu Favour"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover ring-2 ring-zinc-700"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
