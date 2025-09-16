function Navbar(){
    return(
        <nav className="flex justify-between items-center w-full bg-transparent backdrop-blur-sm fixed top-0 left-0 px-8 py-3 shadow-md z-50">

                  {/* logo */}

            <div>
                 <h1 className="text-2xl font-bold text-zinc-300">TERNGU</h1>
            </div>
            <div className="flex space-x-20">

                   {/* nav elements */}

               <a href="about" className="text-zinc-300 hover:text-teal-300 transition-colors">About</a>
                <a href="projects" className="text-zinc-300 hover:text-teal-300 transition-colors">Projects</a>
                {/*<a href="contact" className="text-zinc-300 hover:text-teal-300 transition-colors">contact</a>*/}
                <a href="tools" className="text-zinc-300 hover:text-teal-300 transition-colors ">Tools</a>
            </div>


        </nav>

    )

}
export  default Navbar
