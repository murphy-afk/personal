import { Link } from "react-router-dom"

export default function Footer() {
  const links = [
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Email', href: 'mailto:noemibardare@gmail.com' }
  ]

  return (
    <footer
      className="
        backdrop-blur-sm
        bg-purple-700/60
        border-b-4 border-[rgb(238,193,127)]
        shadow-[0_4px_0_rgba(0,0,0,0.25)]
        px-8 py-4
        rounded-none
      "
    >
      <div className="flex flex-col items-center space-y-4 text-purple-900 font-bold tracking-wide uppercase">

        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Copyright
        </p>

        <div className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="
                px-4 py-2
                bg-white/40
                border-2 border-purple-900
                shadow-[0_3px_0_rgba(0,0,0,0.4)]
                text-purple-900
                transition-all duration-150

                hover:bg-[rgb(238,193,127)]
                hover:text-purple-950
                hover:shadow-[0_3px_0_rgba(0,0,0,0.6)]

                active:translate-y-[2px]
                active:shadow-[0_1px_0_rgba(0,0,0,0.4)]
              "
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  )
}
