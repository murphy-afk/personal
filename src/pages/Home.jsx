export default function Home() {
  return (
    <div className="space-y-10">
      <section className="text-center py-10 px-6 bg-gradient-to-r from-purple-300/40 via-purple-200/40 to-purple-300/40 backdrop-blur-md shadow-lg mt-2">
        <h1 className="text-4xl font-bold text-purple-900 drop-shadow-sm">
          Noemi Bardarè
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-purple-300/60 via-purple-700/40 to-purple-300/60 rounded-full"></span>
        </h1>
        <h2 className="text-2xl mt-2 text-purple-800 opacity-90">
          Web Developer
        </h2>
        <p className="mt-4 text-purple-900/80 max-w-xl mx-auto">
          paragraph about how i'm a web developer
        </p>
      </section>
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mt-0">

        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:bg-purple-300/40">
          <h2 className="text-xl font-semibold text-purple-900 mb-3 relative inline-block">
            Skills
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-700/40 rounded-full"></span>
          </h2>
          <ul className="space-y-1 text-purple-900/80">
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">HTML</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">CSS (Bootstrap & Tailwind)</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Javascript</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">React.js</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Node.js</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Express.js</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">MySQL</li>
          </ul>
        </div>

        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:bg-purple-300/40">
          <h3 className="text-xl font-semibold text-purple-900 mb-3 relative inline-block">
            Currently learning
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-700/40 rounded-full"></span>
          </h3>
          <ul className="space-y-1 text-purple-900/80">
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">PHP</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Laravel</li>
          </ul>
        </div>

        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:bg-purple-300/40">
          <h3 className="text-xl font-semibold text-purple-900 mb-3 relative inline-block">
            Want to learn
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-700/40 rounded-full"></span>
          </h3>
          <ul className="space-y-1 text-purple-900/80">
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Python</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Typescript</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Angular</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Java</li>
            <li className="hover:text-purple-700 hover:translate-x-1 transition-all">Spring</li>
          </ul>
        </div>

      </section>


      <hr className="border-purple-300/40" />
    </div>
  )
}
