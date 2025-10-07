
"use client";
import { motion } from "framer-motion";
import projects from "@/data/projects";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Awards from "@/components/Awards";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { useState, useEffect } from "react";


export default function Home() {
  // Animated counters for About section
  const [projectsCount, setProjectsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectsCount((prev) => (prev < 5 ? prev + 1 : prev));
      setExperienceCount((prev) => (prev < 2 ? prev + 1 : prev));
      setClientsCount((prev) => (prev < 100 ? prev + 10 : prev));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <main id="home" className="react-scroll bg-black text-white">

      {/* Hero Section */}
      <section id="hero"><Hero /></section>
      <section id="projects"><Projects projects={projects}/></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="blog"><Blog /></section>
      <section id="awards"><Awards /></section>

      {/* About Section */}
      <motion.section
        id="about"
        className="flex flex-col md:flex-row items-center justify-center py-16 px-6 gap-12 bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Left: Profile Image */}
        <motion.div
          className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-blue-600"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/nit.jpg" // replace with your image in public folder
            alt="Nitesh Gupta"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: Text + Buttons + Skills + Stats */}
        <motion.div
          className="flex-1 space-y-6 max-w-3xl text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* About Text */}
          <Reveal>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
         </Reveal>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Hey 👋, I’m <span className="font-semibold text-white">Nitesh Gupta</span>, a passionate developer building modern web apps and solving real world problems with code.
            <br />
            I enjoy working with <span className="text-blue-400">Next.js</span>, <span className="text-green-400">Node.js</span>, and <span className="text-indigo-400">React</span>.
            <br />
            Apart from coding, I’m interested in technology trends, startups, and creating solutions that make an impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
            <motion.a
              href="/Nitesh_kumar.pdf"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="https://github.com/Nitesh-Raunak"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-800 transition text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nitesh-kumar-16013931a/"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-800 transition text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
          </div>

          {/* Skills */}
          <div className="mt-6 space-y-4">
            {[
              { name: "Next.js", percent: 90, color: "bg-blue-600" },
              { name: "React", percent: 85, color: "bg-indigo-500" },
              { name: "Node.js", percent: 80, color: "bg-green-500" },
              { name: "Tailwind CSS", percent: 85, color: "bg-teal-400" },
            ].map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                  <motion.div
                    className={`${skill.color} h-3 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Fun Stats */}
          <div className="flex justify-between mt-6 gap-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-500">{projectsCount}+</span>
              <span className="text-gray-400 text-sm">Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-500">{experienceCount}+</span>
              <span className="text-gray-400 text-sm">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-500">{clientsCount}%</span>
              <span className="text-gray-400 text-sm">Client Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <section id="contact"><ContactSection /></section>
      
    </main>
  );
}

