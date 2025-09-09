import Projectcard from "./projectcard"

function Projects(){
    return(
    <div  className="bg-zinc-800 min-h-screen flex flex-col py-40 px-50 " >
        <div className="flex item-center  ">

              {/* Section Title */}

            <h1 className="text-zinc-300 font-bold  py-10 text-3xl  "> My projects</h1>

              {/* little line */}

            <div className="flex-1 h-[2px] bg-zinc-600 ">

            </div>
        </div>

             {/* Grid of Project Cards */}
        
        <section className="py-16 bg-zinc-800 text-zinc-300">

             {/* Grid of Project Cards */}

             <div className="grid gap-10 max-w-6xl  px-6 lg:grid-cols-2 md:grid-cols-2">

             {/* Cards */}
             <Projectcard 
                 category="Web Development"
                 title="Portfolio Website"
                 description="A responsive portfolio built with React & Tailwind"
                 image="/images/portfolio.png"
                 github="https://github.com/Ternguboss/portfolio-website"
                 demo="https://ternguboss-portfolio.netlify.app">
           
             </Projectcard>

             </div>

        </section>
    
          </div>

    )
}
export default Projects