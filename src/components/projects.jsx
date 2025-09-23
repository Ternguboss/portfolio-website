import Projectcard from "./projectcard";

function Projects() {
  return (
    <section id="projects" className="w-full bg-zinc-800 text-zinc-300 py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Section Header */}
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="flex-1 h-[2px] bg-zinc-600 ml-4"></div>
        </div>

        {/* portfolio website */}
        <div className="grid gap-10 md:grid-cols-2 ">
          <Projectcard
            category="Web Development"
            title="Portfolio Website"
            description="A responsive portfolio built with React & Tailwind"
            image="/images/portfolio.png"
            github="https://github.com/Ternguboss/portfolio-website"
            demo="https://ternguboss-portfolio.netlify.app"
          />
          {/* excel data cleaning*/}

          
          <Projectcard
            category="data analysis"
            title=" data cleaning with excel"
            description="Cleaned and organized raw datasets using Excel functions, pivot tables, and data validation for accurate analysis."  
            image=""
            github="https://github.com/Ternguboss/portfolio-website"
            demo="https://ternguboss-portfolio.netlify.app"
          />

        </div>
      </div>
    </section>
  );
}

export default Projects;
