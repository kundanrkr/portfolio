import { RevealOnScroll } from "../RevealOnScroll";
import { SiLeetcode } from "react-icons/si";
export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Redux",
  ];

  const backendSkills = [
    "Node.js",
    "MySQL",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "RESTful APIs",
    "JWT Authentication",
    "Bcrypt",
  ];
  const csFundamentals = [
    "Data Structures & Algorithms",
    "OOPS Concept",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
  ];

  const languages = ["C++", "Python", "SQL", "Verilog"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-4">
              I am a passionate and motivated software developer with a strong
              foundation in full-stack development, data structures, and
              algorithms. With a keen interest in software engineering and AI, I
              continuously enhance my problem-solving skills, having solved 500+
              DSA problems on Leetcode. I am eager to learn, innovate, and
              contribute to impactful projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transitiona-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246, 0.2 )] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transitiona-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246, 0.2 )] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transitiona-all">
                <h3 className="text-xl font-bold mb-4">CS Fundamentals</h3>
                <div className="flex flex-wrap gap-2">
                  {csFundamentals.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246, 0.2 )] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transitiona-all">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246, 0.2 )] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 bg-gray-900/30 shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎓 Education
              </h3>
              <div className="text-gray-300">
                <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  National Institute of Technology Raipur
                </p>
                <p className="text-md text-white-800">Bachelor of Technology</p>
                <p className="text-md mt-1 text-gray-400">
                  Electronics & Communication Engineering
                </p>
                <p className="text-md mt-1 text-gray-400">(2021 - 2025)</p>
                {/* <div className="flex justify-start gap-4 mt-2 text-md text-gray-400">
                <span> CPI: 7.76 (till 7th Sem)</span>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
