export default function PortfolioWebsite() {
  const projects = [
    {
      title: 'Stone Selling & Management System',
      description:
        'A full-stack inventory and billing management system for stone businesses.',
      tech: 'Java, MySQL, HTML, CSS',
    },
    {
      title: 'Healthcare Doctor Recommendation System',
      description:
        'An intelligent healthcare platform that recommends doctors based on symptoms.',
      tech: 'Java, Python, MySQL',
    },
    {
      title: 'Smart Expense Tracker',
      description:
        'A finance management application for tracking expenses and budgets.',
      tech: 'React, Node.js, MongoDB',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Sharath R</h1>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <h2 className="text-5xl font-bold mb-4">MCA Student & Software Developer</h2>
        <p className="max-w-2xl text-gray-400 text-lg mb-8">
          Passionate about Full Stack Development, Java Programming, AI Systems,
          and building scalable software projects.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            Download Resume
          </button>

          <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
            GitHub Profile
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-10 py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-8 max-w-4xl">
          I am an MCA student interested in software engineering, web
          technologies, and problem solving. I enjoy developing real-world
          applications using Java, React, Python, SQL, and modern development
          tools.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-10 py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Programming</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Java</li>
              <li>Python</li>
              <li>C Programming</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Backend & Tools</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Node.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-10 py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              <p className="text-gray-400 mb-4 leading-7">
                {project.description}
              </p>

              <p className="text-sm text-gray-500 mb-6">{project.tech}</p>

              <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:scale-105 transition">
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>

        <div className="max-w-2xl space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
          ></textarea>

          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 border-t border-gray-800">
        © 2026 Sharath R • Portfolio Website
      </footer>
    </div>
  );
}
