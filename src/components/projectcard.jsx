function Projectcard({category, title, description, image, github, demo}){
    return(
        <div className="bg-zinc-800 rounded-xl shadow-xl/40 overflow-hidden ">

             {/* Category Label */}

            <p className="text-lg font-semibold  text-zinc-300 px-4 pt-4">{category}</p>

            
               {/* Screenshot */}

            <img src="" alt={title} className="w-full h-40 object-cover mt-2 " />

               {/* Content */}
            
            <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-zinc-300 text-sm mb-4">{description}</p>


                 {/* Links */}
                 
                 <div className="flex gap-4">
                    <a className="text-blue-400 hover:underline" href="github">GitHub</a>
                    <a className="text-blue-400 hover:underline" href="demo">Live Demo</a>
                 </div>
            </div>
            
        </div>
    )
}
export default Projectcard