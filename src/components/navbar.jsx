import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const popRef = useRef(null);

  // Preload the sound once when the component mounts
  useEffect(() => {
    const audio = new Audio("/sounds/pop.mp3");
    audio.preload = "auto";
    audio.volume = 0.6; // keep it subtle
    popRef.current = audio;
  }, []);

  // Handler to play the sound
  const handlePop = () => {
    if (popRef.current) {
      popRef.current.currentTime = 0; // rewind to start
      popRef.current.play().catch((err) => {
        console.warn("Pop sound blocked:", err);
      });
    }
  };

  return (
    <nav className="flex justify-between items-center w-full bg-transparent backdrop-blur-sm fixed top-0 left-0 px-8 py-3 shadow-md z-50">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-zinc-300">TERNGU</h1>
      </div>

      {/* Hamburger (mobile only) */}
      <button
        className="sm:hidden text-zinc-300 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Desktop Links */}
      <div className="hidden sm:flex space-x-6">
        <a href="#home" onPointerDown={handlePop} className="text-zinc-300 hover:text-teal-300 transition-colors">Home</a>
        <a href="#about" onPointerDown={handlePop} className="text-zinc-300 hover:text-teal-300 transition-colors">About</a>
        <a href="#projects" onPointerDown={handlePop} className="text-zinc-300 hover:text-teal-300 transition-colors">Projects</a>
        <a href="#tools" onPointerDown={handlePop} className="text-zinc-300 hover:text-teal-300 transition-colors">Tools</a>
        <a href="#contact" onPointerDown={handlePop} className="text-zinc-300 hover:text-teal-300 transition-colors">Contact</a>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-zinc-900/80 flex flex-col items-center space-y-4 py-6 sm:hidden">
          <a href="#home" onPointerDown={handlePop} className="text-zinc-300 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onPointerDown={handlePop} className="text-zinc-300 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onPointerDown={handlePop} className="text-zinc-300 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#tools" onPointerDown={handlePop} className="text-zinc-300 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>Tools</a>
          <a href="#contact" onPointerDown={handlePop} className="text-zinc-300 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
