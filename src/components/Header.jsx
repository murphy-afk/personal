import { NavLink, Link } from "react-router-dom"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/aboutme' },
    // { name: 'Projects', href: '/projects'},
    { name: 'Contact', href: '/contact' },
    { name: 'Play', href: '/play' },
  ]

  return (
    <header
      className="
        px-6 py-4
        bg-[#F4F1FA]/80
        backdrop-blur-md
        border-b border-green-900/30
        shadow-sm">
      <nav className="flex items-center justify-between">
        <Link to={'/aboutme'}>
        <div className="font-semibold text-lg text-green-900 tracking-wide">
          NB
        </div>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            w-9 h-9
            rounded-xl
            bg-[#EEEAF7]
            border border-green-900/40
            shadow-[0_2px_0_#C8C2D8]
            flex flex-col justify-center items-center
            transition-all">
          <span className={`h-0.5 w-5 bg-green-900 transition-all ${open ? "rotate-45 translate-y-1" : ""}`}></span>
          <span className={`h-0.5 w-5 bg-green-900 my-1 transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 w-5 bg-green-900 transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`}></span>
        </button>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all
                  ${isActive
                    ? "bg-green-200 text-green-900"
                    : "text-green-900/80 hover:bg-green-100 hover:text-green-900"
                  }`}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`
          md:hidden
          overflow-hidden transition-all duration-300
          ${open ? "max-h-40 mt-3" : "max-h-0"}`}>
        <ul className="flex flex-col items-center space-y-3 pb-3">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2
                  rounded-lg
                  text-sm font-semibold tracking-wide
                  transition-all
                  ${isActive
                    ? "bg-green-200 text-green-900"
                    : "text-green-900/80 hover:bg-green-100 hover:text-green-900"
                  }`}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
