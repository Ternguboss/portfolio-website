
function Hero(){
    return(
        <div id="home" className="bg-zinc-800 min-h-[100vh] px-8 flex flex-col justify-center ">

                              {/* intro */}
            <h1 className="text-zinc-400  text-center text-3xl">Hey, my name is <span className="text-teal-300  sm:text-5xl">Terngu</span></h1>
            <h2 className="text-zinc-400 text-center text-xl sm:text-2xl">I'm a software engineer specializing in AI, web, data analysis and app development.</h2>
            <p className="text-zinc-400 text-center max-w-xl mx-auto">I love solving problems and building real-world projects that make an impact.</p>

                              {/* button */}
             
            <div  className="text-center py-8">
                
        <a
          href="mailto:terngufavou35@gmail.com?subject=Hello Terngu&body=I’d like to work with you!"
          className="py-5 px-10 text-sm font-medium text-teal-300 focus:outline-none bg-transparent
          rounded-lg border border-teal-300 hover:bg-gray-100 dark:focus:ring-gray-700 dark:text-teal-300 
          dark:hover:text-teal-300 dark:hover:bg-zinc-700 transition"
        >
          Say hi!
        </a>
            </div>
        </div>
    )
}

export default Hero 
