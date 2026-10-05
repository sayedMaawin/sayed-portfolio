import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  const connectLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sayedMaawin",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sayyed-maawin-10b199419/",
    }
  ];

  return (
    <footer className="w-full scroll-mt-20 bg-[#fcfcfc] border-t border-gray-100 px-8 py-12">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT */}
        <div>
          <h2 className="font-bold tracking-wider text-gray-900">
            SAYED MAAWIN
          </h2>

          <p className="text-teal-600 text-xs font-bold tracking-wider mt-1">
            FRONTEND DEVELOPER
          </p>

          <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-sm">
            Building responsive, accessible and user-friendly web experiences
            with modern technologies.
          </p>

          {/* Availability */}
          <p className="flex items-center gap-2 mt-6 text-xs font-medium text-gray-700">
            <span className="relative flex h-3 w-3 items-center justify-center">
              {/* Soft static ring */}
              <span className="absolute h-3 w-3 rounded-full ring-4 ring-teal-100 animate-ping opacity-550"></span>

              {/* Center dot */}
              <span className="relative h-2 w-2 rounded-full bg-teal-600"></span>
            </span>
            Open to freelance & collaboration
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-bold text-xs tracking-widest text-gray-900">
            QUICK LINKS
          </h3>

          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="group inline-flex items-center gap-0 text-gray-600 transition-all duration-300 hover:text-teal-600"
                >
                  <span>{link}</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={2}
                    className="ml-0 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300
                    group-hover:ml-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="font-bold text-xs tracking-widest text-gray-900">
            CONNECT
          </h3>

          <ul className="mt-4 space-y-3 text-sm">
            {connectLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-0 text-gray-600 transition-all duration-300 hover:text-teal-600"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={2}
                    className="ml-0 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300
        group-hover:ml-1.5 group-hover:opacity-100
        group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Email */}
          <div className="mt-4 bg-gray-50 border hover:bg-teal-100 cursor-pointer border-gray-100 rounded-lg px-3 py-2 text-xs flex justify-between items-center">
            <span className="text-gray-500">sayyedprogrammer49@gmail.com</span>

            <span>📋</span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="w-full max-w-6xl mx-auto border-t border-gray-100 mt-10 pt-6 flex flex-col md:flex-row gap-3 md:gap-0 justify-between text-xs text-gray-500">
        <p>© 2026 Sayyed Maawin Ali Shah. All rights reserved.</p>

        <p>
          Built with <span className="text-gray-900 font-medium">React</span> &{" "}
          <span className="text-gray-900 font-medium">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
