import { Link } from "react-router-dom";

export default function GamesHeader() {
  return (
    <header
      className="
        px-8 py-4
        border-b-4 border-green-900
        bg-[#D7D3E0]/70
        backdrop-blur-sm
        shadow-[0_4px_0_#2C1E2E]
        bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
        bg-size-[6px_6px]">
      <nav>
        <ul className="flex justify-center space-x-4">
            <li>
              <Link
              to={'/play'}
              target="blank"
              className="
                px-4 py-2
                bg-white/40
                border-2 border-green-900
                shadow-[0_3px_0_rgba(0,0,0,0.4)]
                text-green-900
                transition-all duration-150
                hover:bg-green-700/60
                hover:text-green-950
                hover:shadow-[0_3px_0_rgba(0,0,0,0.6)]
                active:translate-y-0.5
                active:shadow-[0_1px_0_rgba(0,0,0,0.4)]
              "> Go back
              </Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}