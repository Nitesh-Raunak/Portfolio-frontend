"use client";
import { motion } from "framer-motion";

const awards = [
  { title: "Top Developer 2025", org: "Tech Awards", icon: "/images/award1.jpg" },
  { title: "Full Stack Certification", org: "Coursera", icon: "/images/award2.jpg" },
];

export default function Awards() {
  return (
    <section id="awards" className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Awards & Certifications</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {awards.map((a, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 p-6 rounded-xl bg-gray-800 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img src={a.icon} alt={a.title} className="w-16 h-16" />
            <div>
              <h4 className="font-semibold">{a.title}</h4>
              <span className="text-gray-400 text-sm">{a.org}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
