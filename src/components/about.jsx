function About(){
    return(
       <div  className="bg-zinc-800 min-h-screen flex flex-col py-40 px-50 " >
        <div className="flex item-center  ">

                           {/* header*/}

            <h1 className="text-zinc-300 font-bold  py-10 text-3xl  ">About me</h1>

                          {/* small line */}

            <div className="flex-1 h-[2px] bg-zinc-600 "></div>

                          {/* about me */}
        </div>
        <h2 className="text-zinc-400">I’m a Computer Science student passionate about 
            software development and new technologies,</h2>
        <p className="text-zinc-400">I love problem-solving, it feels like playing a game to
             me and <br />I enjoy building real-world projects that others can use.</p>
        <p className="text-zinc-400 leading-relaxed">Outside of coding, I’m usually playing football, gaming, or watching shows. 
            <br />I’m also into music, art, and good food they keep me balanced and keep life fun.</p>
       </div>

    )
}
export default About