import { useState } from "react";

function Navbar(){

    {/* state that tracks if the menu is open */}

  const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="flex justify-between items-center w-full bg-transparent backdrop-blur-sm fixed top-0 left-0 px-8 py-3 shadow-md z-50">

                  {/* logo */}

            <div>
                 <h1 className="text-2xl font-bold text-zinc-300">TERNGU</h1>
            </div>




             {/* Hamburger button (mobile only) */}
      <button 
        className="sm:hidden text-zinc-300 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>




            <div className="hidden sm:flex space-x-6">

                   {/* desktop link */}

               <a href="#home" className="text-zinc-300 hover:text-teal-300 transition-colors">Home</a>
                <a href="#about" className="text-zinc-300 hover:text-teal-300 transition-colors">About</a>
                <a href="#projects" className="text-zinc-300 hover:text-teal-300 transition-colors">Projects</a>
                <a href="#tools" className="text-zinc-300 hover:text-teal-300 transition-colors ">Tools</a>
                <a href="#contact" className="text-zinc-300 hover:text-teal-300 transition-colors ">contact</a>
            </div>


            
      {/* Mobile Links (show only when isOpen = true) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-zinc-900/80 flex flex-col items-center space-y-4 py-6 sm:hidden">
          <a href="#home" className="text-zinc-300 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="text-zinc-300 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="text-zinc-300 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#tools" className="text-zinc-300 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>Tools</a>
          <a href="#contact" className="text-zinc-300 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
        </div>

   )}
    </nav>
  );
}

export  default Navbar
