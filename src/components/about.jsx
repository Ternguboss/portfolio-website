// About.jsx
function About() {
  return (
    <section
      id="about"
      className="w-full bg-zinc-800 text-zinc-300"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: text */}
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold">About me</h2>
              <div className="flex-1 h-[2px] bg-zinc-600 ml-4"></div>
            </div>

            <h3 className="text-zinc-400 text-base sm:text-lg mb-4">
              I’m a Computer Science student passionate about software development and new technologies.
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-4">
              I love problem-solving — it feels like playing a game to me — and I enjoy building real-world
              projects that others can use.
            </p>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Outside of coding, I’m usually playing football, gaming, or watching shows. I’m also into music,
              art, and good food — they keep me balanced and keep life fun.
            </p>
          
          </div>

          {/* picture */}
          <div className="flex justify-center md:justify-end">
            <img
              src="my"
              alt="Terngu Favour"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover ring-2 ring-zinc-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
