export default function AboutMe() {
  return (
    <div className="space-y-10">

      <section
        className="
          text-center py-10 px-6
          backdrop-blur-md shadow-[0_4px_0_rgba(0,0,0,0.4)]
          mt-2 border-4 border-green-900
          bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
          bg-size-[6px_6px]
        "
      >
        <h1 className="text-4xl font-bold text-green-950 drop-shadow-sm relative inline-block tracking-wide uppercase">
          Noemi Bardare'
          <span className="absolute left-0 -bottom-2 w-full h-3 
            bg-green-700/60 border-2 border-green-900 
            shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
        </h1>

        <h2 className="text-2xl mt-4 text-green-950 opacity-90 tracking-wide uppercase">
          Web Developer
        </h2>

        <p className="mt-4 text-green-900/80 max-w-xl mx-auto font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut quidem assumenda officiis commodi deserunt est? Maxime quibusdam iusto fuga ut, aliquam voluptates nobis atque dicta quisquam quia perspiciatis facere!
        </p>
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
            bg-size-[6px_6px]
          "
        >
          <h2 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Skills
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h2>

          <ul className="space-y-1 text-green-900/80 font-semibold">
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">HTML</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">CSS (Bootstrap & Tailwind)</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Javascript</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">React.js</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Node.js</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Express.js</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">MySQL</li>
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
            bg-size-[6px_6px]
          "
        >
          <h3 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Currently learning
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h3>

          <ul className="space-y-1 text-green-900/80 font-semibold">
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
            bg-size-[6px_6px]
          "
        >
          <h3 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Want to learn
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h3>

          <ul className="space-y-1 text-green-900/80 font-semibold">
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Python</li>
            <li className="hover:text-green-700 hover:translate-x-1 transition-all">Typescript</li>
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
