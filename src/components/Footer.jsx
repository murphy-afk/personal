import { Link } from "react-router-dom"

export default function Footer() {
  const links = [
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Email', href: 'mailto:noemibardare@gmail.com' }
  ]

  return (
    <footer className="backdrop-blur-md bg-gradient-to-r from-purple-400/70 via-purple-300/60 to-purple-500/70 shadow-inner rounded-t-3xl px-8 py-6 border-t border-[rgb(238,193,127)]/40 mt-12">
      <div className="flex flex-col items-center space-y-3 text-purple-900">
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Noemi Bardarè
        </p>
        <div className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-purple-900 font-medium px-4 py-2 rounded-xl hover:bg-[rgb(238,193,127)] hover:text-purple-950 transition-all duration-300 shadow-sm hover:shadow-md">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
