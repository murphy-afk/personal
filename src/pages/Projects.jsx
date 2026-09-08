export default function Projects() {
  return (
    <div className="space-y-10">

      <section
        className="
          text-center py-10 px-6
          backdrop-blur-md shadow-[0_4px_0_rgba(0,0,0,0.4)]
          mt-2 border-4 border-green-900
          bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
          bg-size-[6px_6px]">
        <h1 className="text-4xl font-bold text-green-950 drop-shadow-sm relative inline-block tracking-wide uppercase">
          Projects
          <span className="absolute left-0 -bottom-2 w-full h-3 
            bg-green-700/60 border-2 border-green-900 
            shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
        </h1>

        <h2 className="text-2xl mt-4 text-green-950 opacity-90 tracking-wide uppercase">
          My Work & Code
        </h2>

      </section>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

        {/* Project 1: Back to the retro */}
        <div
          className="
            bg-white/40 backdrop-blur-md p-5 flex flex-col justify-between
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-bold text-green-950 mb-3 relative inline-block tracking-wide uppercase self-start">
              Back to the retro
              <span className="absolute left-0 -bottom-2 w-full h-3 
                bg-green-700/60 border-2 border-green-900 
                shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
            </h3>

            <p className="mt-4 text-green-900/90 text-sm font-semibold leading-relaxed font-mono grow">
              Developed a retro video game e-commerce platform using React and Express to ensure a smooth user experience. Implemented a complete and functional purchase workflow, integrating wishlist management and a structured checkout process.
            </p>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="inline-block bg-green-900/20 text-green-950 text-xs font-bold px-2 py-0.5 border border-green-900 uppercase font-mono">React</span>
              <span className="inline-block bg-green-900/20 text-green-950 text-xs font-bold px-2 py-0.5 border border-green-900 uppercase font-mono">Express</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-green-900/30 flex gap-2">
            <a
              href="https://github.com/ilariamotta/back-to-the-retro-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-green-900 text-white text-xs font-bold py-2 px-2 border-2 border-green-950 shadow-[0_2px_0_rgba(0,0,0,0.4)] hover:bg-green-800 transition-all uppercase font-mono">
              Frontend
            </a>
            <a
              href="https://github.com/bellaviagabriele03/backend-team4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-green-900 text-white text-xs font-bold py-2 px-2 border-2 border-green-950 shadow-[0_2px_0_rgba(0,0,0,0.4)] hover:bg-green-800 transition-all uppercase font-mono">
              Backend
            </a>
          </div>
        </div>

        {/* Project 2: Pet Rock Adoption Center */}
        <div
          className="
            bg-white/40 backdrop-blur-md p-5 flex flex-col justify-between
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-bold text-green-950 mb-3 relative inline-block tracking-wide uppercase self-start">
              Pet Rock Adoption
              <span className="absolute left-0 -bottom-2 w-full h-3 
                bg-green-700/60 border-2 border-green-900 
                shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
            </h3>

            <p className="mt-4 text-green-900/90 text-sm font-semibold leading-relaxed font-mono grow">
              Built an interactive web platform for a pet rock adoption center utilizing Laravel and React. Integrated both a user-oriented e-commerce interface and a dedicated administrative management section for catalog and adoption oversight into a single system.
            </p>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="inline-block bg-green-900/20 text-green-950 text-xs font-bold px-2 py-0.5 border border-green-900 uppercase font-mono">Laravel</span>
              <span className="inline-block bg-green-900/20 text-green-950 text-xs font-bold px-2 py-0.5 border border-green-900 uppercase font-mono">React</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-green-900/30 flex gap-2">
            <a
              href="https://github.com/murphy-afk/RockAdoptionCenterFE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-green-900 text-white text-xs font-bold py-2 px-2 border-2 border-green-950 shadow-[0_2px_0_rgba(0,0,0,0.4)] hover:bg-green-800 transition-all uppercase font-mono">
              Frontend
            </a>
            <a
              href="https://github.com/murphy-afk/laravel-final-project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-green-900 text-white text-xs font-bold py-2 px-2 border-2 border-green-950 shadow-[0_2px_0_rgba(0,0,0,0.4)] hover:bg-green-800 transition-all uppercase font-mono">
              Backend
            </a>
          </div>
        </div>

        {/* Project 3: Sync Board (Work in Progress) */}
        <div
          className="
            bg-white/40 backdrop-blur-md p-5 flex flex-col justify-between
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-green-950 relative inline-block tracking-wide uppercase">
                Sync Board
                <span className="absolute left-0 -bottom-2 w-full h-3 
                  bg-green-700/60 border-2 border-green-900 
                  shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
              </h3>
              <span className="bg-amber-500/20 text-amber-900 text-[10px] font-bold px-1.5 py-0.5 border border-amber-900 uppercase font-mono">WIP</span>
            </div>

            <p className="mt-4 text-green-900/90 text-sm font-semibold leading-relaxed font-mono grow">
              Developing a real-time sync board enabling two users to share live statuses (at work, sleeping, free to call), local time, and weather. Features an integrated pixel drawing gallery where users can create and upload in-app art.
            </p>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="inline-block bg-green-900/20 text-green-950 text-xs font-bold px-2 py-0.5 border border-green-900 uppercase font-mono">React</span>
              <span className="inline-block bg-green-900/20 text-green-950 text-xs font-bold px-2 py-0.5 border border-green-900 uppercase font-mono">Express</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-green-900/30 flex gap-2">
            <a
              href="https://github.com/murphy-afk/sync-board"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-green-900 text-white text-xs font-bold py-2 px-2 border-2 border-green-950 shadow-[0_2px_0_rgba(0,0,0,0.4)] hover:bg-green-800 transition-all uppercase font-mono">
              Repository
            </a>
          </div>
        </div>

      </section>

      <hr className="border-green-900 border-4" />
    </div>
  )
}