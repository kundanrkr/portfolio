import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let current = "home"; // Default section

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg scroll-smooth">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="https://thekundankumar.com/"
            className="font-mono text-xl font-bold text-gray-300 hover:-translate-y-0.5 hover:scale-120 transition-transform"
          >
            Kundan
            <span className="text-blue-500 font-black text-2xl">.</span>
          </a>
          {/* mobile menu */}
          <button
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open Menu"
          >
            &#9776;
          </button>
          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-gray-300 transition-colors hover:-translate-y-0.5 ${
                  activeSection === section
                    ? "font-bold text-sky-400 hover:text-sky-500 scale-110 transition-colors underline underline-offset-12 decoration-3"
                    : "hover:text-white transition-colors font-semibold"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
