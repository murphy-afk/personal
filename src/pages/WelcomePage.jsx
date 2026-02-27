import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="h-screen space-y-6 flex flex-col items-center justify-center bg-[#D7D3E0]/70 backdrop-blur-sm shadow-[0_4px_0_#2C1E2E] rounded-none
      bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
      bg-size-[6px_6px]
    ">
      <div className="p-10
        border-4 border-green-900
        bg-[#D7D3E0]/70
        backdrop-blur-sm
        shadow-[0_4px_0_#2C1E2E]
        rounded-none
        flex flex-col items-center justify-center
        bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
        bg-size-[6px_6px]">

      <h1 className="text-4xl font-bold text-green-950 drop-shadow-sm relative inline-block tracking-wide uppercase">Welcome</h1>
      <Link to='/aboutme' className="px-4 py-2
      font-bold tracking-wide uppercase
      text-green-950
      bg-[#EEEAF7]
      border-2 border-green-900
      shadow-[0_3px_0_#2C1E2E]
      transition-all duration-150
      hover:bg-green-700/60
      hover:text-[#2C1E2E]
      hover:shadow-[0_3px_0_#1A1A1A]
      active:translate-y-0.5
      active:shadow-[0_1px_0_#1A1A1A]">START</Link>
      </div>
    </div>
  )
}