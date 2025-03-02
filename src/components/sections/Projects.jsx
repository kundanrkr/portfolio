import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project-1  */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                qPay - Digital Wallet Webapp
              </h3>
              <p className="text-gray-400 mb-4">
                qPay is a secure, user-friendly online wallet for seamless money
                transfers, deposits, and requests. Its intuitive interface and
                fast transactions ensure a hassle-free payment experience.
                {/*  qPay
                is a secure and user-friendly online wallet web app with
                intuitive user interface that allows users to transfer, deposit,
                and request money seamlessly. */}
                {/*With an intuitive interface and fast transactions, it ensures
                a smooth and hassle-free payment experience.*/}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Express.js",
                  "JWT",
                  "Bcrypt",
                  "Stripe",
                  "Ant Design",
                  "Redux",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246, 0.2 )] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/kundanrkr/QPay"
                  className="text-blue-400 bg-blue-500/30 rounded-full py-1 px-3 hover:text-blue-300 transition-colors my-4"
                >
                  Source Code
                </a>
                <a
                  href="https://qpay.thekundankumar.com/"
                  className="text-blue-400 bg-blue-500/30 rounded-full py-1 px-3 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo
                </a>
              </div>
            </div>
            {/*Project-2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Personal Portfolio Website
              </h3>
              <p className="text-gray-400 mb-4">
                This personal portfolio website showcases my skills, projects,
                and experience in web development and software engineering. It
                features a clean UI, smooth navigation, and a functional Drop a
                Message section for easy communication.
                {/*With an intuitive interface and fast transactions, it ensures
                a smooth and hassle-free payment experience.*/}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React.js",
                  "TailwindCSS",
                  "Vite",
                  "EmailJS",
                  "Lucide React Icons",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246, 0.2 )] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/kundanrkr/portfolio"
                  className="text-blue-400 bg-blue-500/30 rounded-full py-1 px-3 hover:text-blue-300 transition-colors my-4"
                >
                  Source Code
                </a>
                <a
                  href="https://thekundankumar.com/"
                  className="text-blue-400 bg-blue-500/30 rounded-full py-1 px-3 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
