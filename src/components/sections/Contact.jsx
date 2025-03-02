import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };
  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-2"
      >
        <RevealOnScroll>
          <div className="px-4 w-100 md:w-150">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Drop a Message
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative ">
                <input
                  type="text "
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Name..."
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="relative ">
                <input
                  type="email "
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="relative ">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Your message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59, 130, 246, 0.4 )]"
              >
                Send Message
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </section>
      {/* {footer} */}
      <footer className="w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg bottom-0">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 text-gray-300">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Kundan Kumar. All rights
              reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 ">
              <a
                href="https://github.com/kundanrkr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition hover:scale-130 transition-transform"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://leetcode.com/kundannitrr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition hover:scale-130 transition-transform"
              >
                <SiLeetcode size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/kundanrkr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition hover:scale-130 transition-transform"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="mailto:kundan08nwd@gmail.com"
                className="hover:text-white transition hover:scale-130 transition-transform"
              >
                <FaEnvelope size={25} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
