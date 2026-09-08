import { Link } from "react-router-dom";

export default function AboutMe() {
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
          Noemi Bardare'
          <span className="absolute left-0 -bottom-2 w-full h-3 
            bg-green-700/60 border-2 border-green-900 
            shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
        </h1>

        <h2 className="text-2xl mt-4 text-green-950 opacity-90 tracking-wide uppercase">
          Web Developer
        </h2>

        <p className="mt-4 text-green-900/90 max-w-4xl mx-auto font-bold font-mono text-sm leading-relaxed px-4">
          Junior Full-Stack Web Developer with a multidisciplinary background focused on problem-solving and operational management. Driven by strong determination—cultivated in part by living and studying in South Korea for a year—I turned a long-standing passion into my profession by completing an intensive master's program in the sector. Today, I combine my past soft skills with a passion for coding, finding in programming a space where technical precision meets the pleasure of creating original and functional solutions.
        </p>

        {/* Check out my projects button placed below the bio description */}
        <div className="mt-6 flex justify-center">
          <Link to={"/projects"}
            className="
              px-4 py-2
              bg-white/40
              border-2 border-green-900
              shadow-[0_3px_0_rgba(0,0,0,0.4)]
              text-green-900
              transition-all duration-150
              hover:bg-green-700/60 hover:text-green-950
              hover:shadow-[0_3px_0_rgba(0,0,0,0.6)]
              active:translate-y-0.5
              active:shadow-[0_1px_0_rgba(0,0,0,0.4)]">
            CHECK OUT MY PROJECTS
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        <div
          className="
            bg-white/40 backdrop-blur-md p-5
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <h2 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Skills
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h2>

          <ul className="space-y-1 text-green-900/80 font-semibold">
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">HTML</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">CSS</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Javascript</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">React.js</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Node.js</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Express.js</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">MySQL</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">PHP</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Laravel</li>
          </ul>
        </div>

        <div
          className="
            bg-white/40 backdrop-blur-md p-5
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <h3 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Currently learning
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h3>

          <ul className="space-y-1 text-green-900/80 font-semibold">
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Typescript</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Python</li>
          </ul>
        </div>

        <div
          className="
            bg-white/40 backdrop-blur-md p-5
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <h3 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Want to learn
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h3>

          <ul className="space-y-1 text-green-900/80 font-semibold">
            {/* <li className="hover:text-green-700 hover:translate-x-1 transition-all">Typescript</li> */}
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Angular</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Java</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Spring</li>
          </ul>
        </div>

      </section>

      <hr className="border-green-900 border-4" />
    </div>
  )
}