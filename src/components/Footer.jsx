import { Link } from "react-router-dom"

export default function Footer() {
  const links = [
    { name: 'GitHub', href: 'https://github.com/murphy-afk' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/noemi-bardar%C3%A8-2373a8375/' }
  ]

  return (
    <footer
      className="
        px-8 py-4
        border-b-4 border-green-900
        bg-[#D7D3E0]/70
        backdrop-blur-sm
        shadow-[0_4px_0_#2C1E2E]
        rounded-none
        bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
        bg-size-[6px_6px]
      "
    >
      <div className="flex flex-col items-center space-y-4 text-green-950 font-bold tracking-wide uppercase">

        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Copyright
        </p>

        <div className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
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
