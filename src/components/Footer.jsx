import { Link } from "react-router-dom"

export default function Footer() {
  const links = [
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Email', href: 'mailto:noemibardare@gmail.com' }
  ]
  return (
    <footer className="backdrop-blur-md bg-gradient-to-r from-purple-300/60 via-purple-200/50 to-purple-500/60 shadow-inner rounded-t-3xl px-6 py-6 mt-12">
      <div className="flex flex-col items-start space-y-2 text-gray-700">
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Noemi Bardarè
        </p>

        <div className="flex space-x-4">
          {links.map((link) => (
            <Link key={link.name} to={link.href} className="text-gray-700 font-medium px-4 py-2 rounded-xl hover:bg-white/60 hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-md">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
