import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

export default function Contacts() {

  const links = [
    { name: 'GitHub', href: 'https://github.com/murphy-afk' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/noemi-bardar%C3%A8-2373a8375/' }
  ]

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_mltyxq6",
      "template_phh0sch",
      e.target,
      "LjA5Wns-yjcERNBd2"
    )
      .then(() => {
        alert("Message sent!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong. Try again later.");
      });
  }

  return (
    <div className="space-y-10 my-5">
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        <div
          className="
            bg-white/40 backdrop-blur-md p-6
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <h2 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Email
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h2>
          <p className="text-green-900/80 font-semibold text-sm">
              noemibardare@gmail.com
          </p>
        </div>
        <div
          className="
            bg-white/40 backdrop-blur-md p-6
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <h2 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Location
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h2>
          <p className="text-green-900/80 font-semibold">
            Milan, Lombardy, Italy
          </p>
        </div>
        <div
          className="
            bg-white/40 backdrop-blur-md p-6
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <h2 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Socials
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h2>
          <ul className="space-y-1 text-green-900/80 font-semibold">
            {links.map(link => (
              <li className="hover:text-green-700 hover:translate-x-1 transition-all" key={link.name}>
                <Link to={link.href} target="_blank">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="
            bg-white/40 backdrop-blur-md p-6
            border-4 border-green-900
            shadow-[0_4px_0_rgba(0,0,0,0.4)]
            transition-all duration-200
            hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
            bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
            bg-size-[6px_6px]">
          <h2 className="text-xl font-bold text-green-950 mb-4 relative inline-block tracking-wide uppercase">
            Send me a Message
            <span className="absolute left-0 -bottom-2 w-full h-3 
              bg-green-700/60 border-2 border-green-900 
              shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border-2 border-green-900 bg-white/60 font-medium text-green-900 focus:outline-none" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border-2 border-green-900 bg-white/60 font-medium text-green-900 focus:outline-none" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 border-2 border-green-900 bg-white/60 font-medium text-green-900 focus:outline-none"></textarea>
            <button
              type="submit"
              className="
                w-full py-2 font-bold uppercase tracking-wide
                bg-green-700/70 text-green-950 border-4 border-green-900
                shadow-[0_4px_0_rgba(0,0,0,0.4)]
                hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
                transition-all">
              Send
            </button>
          </form>
        </div>

      </section>

      <hr className="border-green-900 border-4" />
    </div>
  );
}
