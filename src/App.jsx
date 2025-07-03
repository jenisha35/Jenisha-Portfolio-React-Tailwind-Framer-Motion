import React, { useState } from 'react';
import './style.css';
import { motion } from 'framer-motion';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#d1f0ff] font-mono">
      {/* Navbar */}
  <header className="sticky top-0 z-50 bg-[#0d111c] border-b border-pink-500 py-4 px-6 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-pink-400 tracking-wide">Jenisha</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 text-sm text-[#99b3ff]">
          {['about', 'services',  'skills', 'projects', 'contact'].map((link, i) => (
            <a key={i} href={`#${link}`} className="hover:text-pink-400 transition">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-pink-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 px-2 space-y-2 text-sm text-[#99b3ff]">
          {['about', 'services', 'skills', 'projects',  'contact'].map((link, i) => (
            <a
              key={i}
              href={`#${link}`}
              className="block py-2 px-3 rounded hover:bg-[#1a1f33] hover:text-pink-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>
      )}
    </header>

      {/* Hero Section */}
      <motion.section
        className="text-center h-[100vh] bg-gradient-to-br from-[#0a0f1a] to-[#1e073f] p-8 flex flex-col justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/lk.jpg"
          alt="Jennie profile"
          className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full mx-auto border-4 border-pink-500 shadow-lg mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">Hi, I'm Jenisha </h1>
        <p className="mt-3 text-lg text-purple-300 max-w-xl mx-auto">
          Frontend Developer focused on building fast, responsive, and beautiful websites.
        </p>
        <p className="mt-1 text-[#95a3bf] text-sm max-w-md mx-auto">
          I help brands and businesses grow digitally using React, Tailwind, and modern tools.
        </p>
        <a
          href="#contact"
          className="w-[200px] mx-auto mt-6 inline-block bg-pink-500 text-black px-6 py-2 rounded-full hover:bg-pink-400 transition shadow-md"
        >
          Hire Me
        </a>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="mt-20 mx-6 p-8 bg-[#121628] rounded-xl border border-pink-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">About Me</h2>
        <p className="text-[#b4d6ff] leading-relaxed">
          I’m a passionate frontend developer with strong skills in HTML, CSS, JavaScript, and React.js.
          I’ve built multiple mini-projects, AI tools, and responsive websites. My aim is to deliver
          clean design, smooth UX, and fast-loading performance.
        </p>
      </motion.section>

      {/* Why Work With Me */}
      <motion.section
        className="mt-20 mx-6 p-6 bg-[#1c1c2e] rounded-xl border border-cyan-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">Why Work With Me?</h2>
        <ul className="list-disc list-inside text-[#b4d6ff] space-y-2">
          <li>Responsive, pixel-perfect websites across all devices.</li>
          <li>Modern stack: React, Tailwind, APIs, and performance optimization.</li>
          <li>First 3 projects completely FREE in exchange for testimonials.</li>
          <li>Quick communication and fast turnaround.</li>
        </ul>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="mt-20 p-8 bg-[#0d111c]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-pink-400">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Business Website', desc: 'A modern site for your shop, cafe or clinic.', price: 'FREE for first 3', img: '/buisness.jpeg' },
            { title: 'Landing Page', desc: 'A high-converting one-pager.', price: 'FREE for first 3', img: '/landing.jpeg' },
            { title: 'AI Tools (React + API)', desc: 'Mini tools using OpenAI or Gemini.', price: 'FREE for first 3', img: '/ai.jpeg' },
            { title: 'Portfolio Site', desc: 'Personal site to showcase your work.', price: 'FREE for first 3', img: '/portfolio.jpeg' },
          ].map((s, i) => (
            <motion.div
              key={i}
              style={{ backgroundImage: `url(${s.img})` }}
              className="relative h-52 bg-cover bg-center border border-cyan-500 p-4 rounded-xl shadow-lg hover:shadow-pink-500 hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1 }}
            >
              <div className="absolute inset-0 bg-black/70 rounded-xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-pink-400">{s.title}</h3>
                <p className="text-white mt-10">{s.desc}</p>
                <p className="text-sm text-[#c0f7f9] mt-1">{s.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>


 {/* Skills Section */}
      <h2 id="skills" className="text-4xl font-semibold mb-10 text-purple-400 text-center mt-10">Skills</h2>
      <motion.section
        id="skills"
        className="relative bg-[#1c1c2e] aspect-square w-[90vw] max-w-[500px] mx-auto rounded-full border border-cyan-500 shadow-md"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[
          "/html.png",
          "/css.jpeg",
          "/js.png",
          "/react.png",
          "/tailwind.png",
          "/fm.jpeg",
          "/git.png",
        ].map((item, i, arr) => {
          const itemCount = arr.length;
          const angle = (i / itemCount) * 2 * Math.PI;
          const radius = 0.38 * 400;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <div
              key={i}
              className="bg-cover bg-center absolute w-20 h-20 flex items-center justify-center rounded-full shadow-lg border-2 border-pink-400"
              style={{
                backgroundImage: `url(${item})`,
                top: "50%",
                left: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            />
          );
        })}
      </motion.section>

 {/* Projects Section */}
      <motion.section
        id="projects"
        className="mt-20 mx-4 md:mx-auto md:max-w-5xl p-8 bg-[#111423] rounded-xl border border-pink-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{
            title: "ChatGPT Clone",
            desc: "A conversational AI interface built using React + Gemini API",
            live: "https://chatgpt-ivb6lqlcd-jenishas-projects-ffa545b4.vercel.app/",
            github: "https://github.com/jenisha35/ChatGPT-clone",
            img: "/chatgpt.png"
          }, {
            title: "GenZ Translator",
            desc: "A fun app that translates slang to formal text using AI",
            live: "https://genz-ai-translator-ciameq3cf-jenishas-projects-ffa545b4.vercel.app/",
            github: "https://github.com/jenisha35/GenZ-AI-Translator",
            img: "/genz.png"
          }].map((p, i) => (
            <motion.div
              key={i}
              style={{ backgroundImage: `url(${p.img})` }}
              className="relative bg-cover bg-center h-60 border border-cyan-500 p-6 rounded-xl shadow-md overflow-hidden text-white"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-black/70 rounded-xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-pink-400">{p.title}</h3>
                <p className="mt-10 text-sm md:text-base">{p.desc}</p>
                <div className="mt-3 text-sm md:text-base">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="underline text-cyan-300">Live Demo</a> |
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="underline text-cyan-300 ml-2">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Placeholder */}
      <motion.section
        className="mt-20 mx-6 p-6 bg-[#1b1f30] border border-purple-500 rounded-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Client Testimonials</h2>
        <p className="text-[#95a3bf] italic">No testimonials yet — yours could be the first! 🎉</p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="mt-20 text-center p-8 bg-[#0a0f1a]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Let’s Work Together</h2>
        <p className="text-purple-300 mb-6">Want a free website? Message me now 👇</p>
        <a href="https://wa.me/9363346313" className="bg-green-500 text-black px-6 py-2 rounded-full hover:bg-green-400 transition">WhatsApp Me</a>
        <div className="mt-6 space-y-2 text-sm text-[#a3cfff]">
          <p>📧 <a href="mailto:jenisha.9530@gmail.com" className="underline text-pink-400">jenisha.9530@gmail.com</a></p>
          <p>💼 <a href="https://www.linkedin.com/in/jenisha-s-486b22335/" target="_blank" className="underline text-pink-400">LinkedIn</a></p>
          <p>🐙 <a href="https://github.com/jenisha35" target="_blank" className="underline text-pink-400">GitHub</a></p>
        </div>
        <a href="/Resume.pdf" download className="mt-6 inline-block border border-pink-500 text-pink-400 px-6 py-2 rounded-full hover:bg-pink-500 hover:text-black transition">
          Download Resume
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0d111c] p-6 text-center text-[#4b5e80] text-xs border-t border-cyan-500">
        © 2025 Jenisha | React Developer. Built with ❤️ using React, TailwindCSS, and Framer Motion.
      </footer>
    </div>
  );
};

export default App;
