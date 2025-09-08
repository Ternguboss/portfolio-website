function Tools(){
    return(
       <div  className="bg-zinc-800 min-h-screen flex flex-col py-40 px-50 " >
        <div className="flex item-center  ">
            <h1 className="text-zinc-300 font-bold  py-10 text-3xl  "> My skills</h1>
            <div className="flex-1 h-[2px] bg-zinc-600 "></div>
        </div>

        <section className="bg-zinc-800 py-16">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-teal-300 mb-6">Tech Stack</h2>
    <div className="flex flex-wrap justify-center gap-3">
      <span className="px-4 py-2 border border-teal-300 text-teal-300 rounded-full">JavaScript</span>
      <span className="px-4 py-2 border border-teal-300 text-teal-300 rounded-full">React</span>
      <span className="px-4 py-2 border border-teal-300 text-teal-300 rounded-full">Tailwind</span>
      <span className="px-4 py-2 border border-teal-300 text-teal-300 rounded-full">Node.js</span>
      <span className="px-4 py-2 border border-teal-300 text-teal-300 rounded-full">Python</span>
      <span className="px-4 py-2 border "></span>
    </div>
  </div>
</section>

       </div>

    )
}   
export default Tools