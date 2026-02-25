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
    <header className="backdrop-blur-md bg-gradient-to-r from-purple-400/70 via-purple-300/60 to-purple-500/70 shadow-lg rounded-b-3xl px-8 py-5 border-b border-[rgb(238,193,127)]/40">
      <nav>
        <ul className="flex justify-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="text-purple-900 font-medium px-4 py-2 rounded-xl hover:bg-[rgb(238,193,127)] hover:text-purple-950 transition-all duration-300 shadow-sm hover:shadow-md">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
