import { Link } from "react-router-dom";

export default function Play() {
  return (
    <div className="space-y-10 my-5">
      <section
        className="
          text-center py-10 px-6
          backdrop-blur-md shadow-[0_4px_0_rgba(0,0,0,0.4)]
          mt-2 border-4 border-green-900
          bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
          bg-size-[6px_6px]">
        <h1 className="text-4xl font-bold text-green-950 drop-shadow-sm relative inline-block tracking-wide uppercase">
          Let's play
          <span className="absolute left-0 -bottom-2 w-full h-3 
            bg-green-700/60 border-2 border-green-900 
            shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
        </h1>
      </section>
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        <div
          className="
            bg-white/40 backdrop-blur-md p-6
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <h2 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Guess
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h2>
          <p className="text-green-900/80 font-medium mb-4">
            Guess the number
          </p>
          <Link
            to={'/play/guess'}
            className="
              mt-2 px-4 py-2 font-bold uppercase tracking-wide
              bg-green-700/70 text-green-950 border-4 border-green-900
              shadow-[0_4px_0_rgba(0,0,0,0.4)]
              hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
              transition-all">
            Play
          </Link>
        </div>
        <div
          className="
            bg-white/40 backdrop-blur-md p-6
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <h2 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Snake
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h2>
          <p className="text-green-900/80 font-medium mb-4">
            Snake game
          </p>
          <Link
            to={'/play/snake'}
            className="
              mt-2 px-4 py-2 font-bold uppercase tracking-wide
              bg-green-700/70 text-green-950 border-4 border-green-900
              shadow-[0_4px_0_rgba(0,0,0,0.4)]
              hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
              transition-all">
            Play
          </Link>
        </div>
        <div
          className="
            bg-white/40 backdrop-blur-md p-6
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <h2 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Memory
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h2>
          <p className="text-green-900/80 font-medium mb-4">
            Memory game
          </p>
          <Link to={'/play/memory'}
            className="
              mt-2 px-4 py-2 font-bold uppercase tracking-wide
              bg-green-700/70 text-green-950 border-4 border-green-900
              shadow-[0_4px_0_rgba(0,0,0,0.4)]
              hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
              transition-all">
            Play
          </Link>
        </div>
        <div
          className="
            bg-white/40 backdrop-blur-md p-6
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <h2 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Pixel painter
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h2>
          <p className="text-green-900/80 font-medium mb-4">
            Painting game
          </p>
          <Link
            to={'/play/pixelpainter'}
            className="
              mt-2 px-4 py-2 font-bold uppercase tracking-wide
              bg-green-700/70 text-green-950 border-4 border-green-900
              shadow-[0_4px_0_rgba(0,0,0,0.4)]
              hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
              transition-all">
            Play
          </Link>
        </div>
      </section>
    </div>
  )
}
