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
    <header className="backdrop-blur-md bg-gradient-to-r from-purple-300/70 via-purple-200/60 to-purple-500/70 shadow-lg rounded-b-3xl px-6 py-4">
      <nav>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="text-gray-700 font-medium px-4 py-2 rounded-xl hover:bg-white/60 hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-md">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
