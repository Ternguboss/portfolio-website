
function Hero(){
    return(
        <div className="bg-zinc-800 min-h-[100vh] px-8 flex flex-col justify-center ">
            <h1 className="text-zinc-400  text-center text-3xl">Hey, my name is <span className="text-teal-300">Terngu</span></h1>
            <h2 className="text-zinc-400 text-center text-xl">I'm a software engineer specializing in AI, web, data analysis and app development.</h2>
            <p className="text-zinc-400 text-center">I love solving problems and building real-world projects that make an impact.</p>
             
            <div className="text-center py-8">
                  <button type="button" class="py-5 px-10  text-sm font-medium text-teal-300 focus:outline-none bg-transparent
              rounded-lg border border-teal-300 hover:bg-gray-100    dark:focus:ring-gray-700 dark:text-teal-300 
               dark:hover:text-teal-300 dark:hover:bg-zinc-700 "> Say hi!</button>

            </div>
        </div>
    )
}

export default Hero 
