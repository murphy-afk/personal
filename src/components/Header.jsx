import { Link } from "react-router-dom"

export default function Header() {
  const navLinks = [
    { name: 'About me', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Play', href: '/play' },
  ]

  return (
    <header
      className="
        backdrop-blur-sm
        bg-purple-700/60
        border-b-4 border-[rgb(238,193,127)]
        shadow-[0_4px_0_rgba(0,0,0,0.25)]
        px-8 py-4
        rounded-none
      "
    >
      <nav>
        <ul className="flex justify-center space-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="
                  text-purple-900 font-bold tracking-wide
                  px-4 py-2
                  bg-white/40
                  border-2 border-purple-900/40
                  shadow-[0_3px_0_rgba(0,0,0,0.35)]
                  hover:bg-[rgb(238,193,127)]
                  hover:text-purple-950
                  hover:shadow-[0_3px_0_rgba(0,0,0,0.6)]
                  active:translate-y-[2px]
                  active:shadow-[0_1px_0_rgba(0,0,0,0.4)]
                  transition-all duration-150
                "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
