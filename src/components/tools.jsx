function Tools() {
  return (
    <div
      id="tools"
      className="bg-zinc-800 min-h-screen flex flex-col py-20 px-6 sm:px-10"
    >
      {/* Heading */}
      <div className="flex items-center mb-10">
        <h2 className="text-zinc-300 font-bold text-3xl">My Skills</h2>
        <div className="flex-1 h-[2px] bg-zinc-600 ml-4"></div>
      </div>

      {/* Skills */}
      <section className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript",
              "React",
              "Tailwind",
              "Node.js",
              "Python",
              "Excel",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 border border-zinc-200 text-zinc-200 rounded-full hover:bg-zinc-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tools;
