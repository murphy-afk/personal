export default function Home() {
  return (
    <div className="space-y-10">

      <section
        className="
          text-center py-10 px-6
          bg-gradient-to-r from-purple-300/40 via-purple-200/40 to-purple-300/40
          backdrop-blur-md shadow-[0_4px_0_rgba(0,0,0,0.4)]
          mt-2 border-4 border-purple-900
          [background-image:radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
          [background-size:6px_6px]
        "
      >
        <h1 className="text-4xl font-bold text-purple-900 drop-shadow-sm relative inline-block tracking-wide uppercase">
          Noemi Bardare'
          <span className="absolute left-0 -bottom-2 w-full h-3 
            bg-purple-700/60 border-2 border-purple-900 
            shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
        </h1>

        <h2 className="text-2xl mt-4 text-purple-800 opacity-90 tracking-wide uppercase">
          Web Developer
        </h2>

        <p className="mt-4 text-purple-900/80 max-w-xl mx-auto font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut quidem assumenda officiis commodi deserunt est? Maxime quibusdam iusto fuga ut, aliquam voluptates nobis atque dicta quisquam quia perspiciatis facere!
        </p>
      </section>

      {/* THREE RETRO PANELS */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">

        {/* PANEL TEMPLATE */}
        <div
          className="
            bg-white/40 backdrop-blur-md p-5
            border-4 border-purple-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            [background-image:radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            [background-size:6px_6px]
          "
        >
          <h2 className="text-xl font-bold text-purple-900 mb-4 relative inline-block tracking-wide uppercase">
            Skills
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-purple-700/60 border-2 border-purple-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h2>

          <ul className="space-y-1 text-purple-900/80 font-semibold">
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">HTML</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">CSS (Bootstrap & Tailwind)</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Javascript</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">React.js</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Node.js</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Express.js</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">MySQL</li>
          </ul>
        </div>

        <div
          className="
            bg-white/40 backdrop-blur-md p-5
            border-4 border-purple-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            [background-image:radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            [background-size:6px_6px]
          "
        >
          <h3 className="text-xl font-bold text-purple-900 mb-4 relative inline-block tracking-wide uppercase">
            Currently learning
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-purple-700/60 border-2 border-purple-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h3>

          <ul className="space-y-1 text-purple-900/80 font-semibold">
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">PHP</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Laravel</li>
          </ul>
        </div>

        <div
          className="
            bg-white/40 backdrop-blur-md p-5
            border-4 border-purple-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            [background-image:radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            [background-size:6px_6px]
          "
        >
          <h3 className="text-xl font-bold text-purple-900 mb-4 relative inline-block tracking-wide uppercase">
            Want to learn
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-purple-700/60 border-2 border-purple-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h3>

          <ul className="space-y-1 text-purple-900/80 font-semibold">
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Python</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Typescript</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Angular</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Java</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Spring</li>
          </ul>
        </div>

      </section>

      <hr className="border-purple-900 border-4" />
    </div>
  )
}
