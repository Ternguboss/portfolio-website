function Tools(){
    return(
       <div  className="bg-zinc-800 min-h-screen flex flex-col py-40 px-50 " >
        <div className="flex item-center  ">

            {/* heading */}

            <h1 className="text-zinc-300 font-bold  py-10 text-3xl  "> My skills</h1>
            <div className="flex-1 h-[2px] bg-zinc-600 "></div>
        </div>

            {/* skills */}

        <section className="bg-zinc-800 py-16">
  <div className="max-w-4xl mx-auto text-center">
    <div className="flex flex-wrap justify-center gap-3">
      <span className="px-4 py-2 border border-zinc-200 text-zinc-200 rounded-full">JavaScript</span>
      <span className="px-4 py-2 border border-zinc-200 text-zinc-200 rounded-full">React</span>
      <span className="px-4 py-2 border border-zinc-200 text-zinc-200 rounded-full">Tailwind</span>
      <span className="px-4 py-2 border border-zinc-200 text-zinc-200 rounded-full">Node.js</span>
      <span className="px-4 py-2 border border-zinc-200 text-zinc-200 rounded-full ">Python</span>
      <span className="px-4 py-2 border border-zinc-200 text-zinc-200 rounded-full">java</span>
    </div>
  </div>
</section>

       </div>

    )
}   
export default Tools