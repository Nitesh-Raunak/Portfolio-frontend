
import { useState } from 'react';
import { motion } from "framer-motion";
import { FaReact, FaMobileAlt, FaGlobe } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di"; // Node.js icon


export default function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalProject, setModalProject] = useState(null);

  const categories = ["All", "Web", "Mobile", "Full-stack"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredProjects.map((proj, i) => (
          <motion.div
            key={i}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            onClick={() => setModalProject(proj)}
          >
            {/* Project Image */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-80 object-cover transition-transform group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center text-white px-4">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              {/* <p className="text-sm mb-4">{proj.tech.join(" • ")}</p> */}
              <p className="text-sm mb-4">
                {proj.tech?.join(" • ") || "Tech stack not listed"}
              </p>
              <a
                href={proj.link}
                target="_blank"
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                onClick={(e) => e.stopPropagation()}
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      {modalProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModalProject(null)}
        >
          <div
            className="bg-gray-900 rounded-xl p-6 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setModalProject(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">{modalProject.title}</h3>
            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300 mb-4">{modalProject.description}</p>
            <p className="text-sm text-gray-400 mb-4">
              Tech Stack: {modalProject.tech.join(", ")}
            </p>
            <a
              href={modalProject.link}
              target="_blank"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white"
            >
              View Live / GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
