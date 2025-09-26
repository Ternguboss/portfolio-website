import { motion } from "framer-motion";
import Projectcard from "./projectcard";

function Projects() {
  return (
    <section id="projects" className="w-full bg-zinc-800 text-zinc-300 py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Section Header */}
        <motion.div
          className="flex items-center mb-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="flex-1 h-[2px] bg-zinc-600 ml-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-10 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Portfolio Website */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Projectcard
              category="Web Development"
              title="Portfolio Website"
              description="A responsive portfolio built with React & Tailwind"
              image="/images/portfolio.png"
              github="https://github.com/Ternguboss/portfolio-website"
              demo="https://ternguboss-portfolio.netlify.app"
            />
          </motion.div>

          {/* Excel Data Cleaning */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Projectcard
              category="Data Analysis"
              title="Data Cleaning with Excel"
              description="Cleaned and organized raw datasets using Excel functions, pivot tables, and data validation for accurate analysis."
              image="/images/excel.png" // replace with actual image
              github="https://github.com/Ternguboss/portfolio-website"
              demo="https://ternguboss-portfolio.netlify.app"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
