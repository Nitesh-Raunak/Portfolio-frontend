"use client";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Marwadi University, Rajkot, Gujarat",
    year: "2023 – 2027",
    score: "CGPA: 9.22",
    note: "NAAC A+ accredited university",
  },
  {
    degree: "12th Grade (Science)",
    institution: "MLSM College, Darbhanga, Bihar",
    year: "2019 – 2022",
    score: "88%",
  },
];

const certifications = [
  "Introduction to Cybersecurity — Cisco",
  "AWS Cloud Foundations",
  "Database and SQL",
];

const achievements = [
  "Participated in Smart India Hackathon (SIH)",
  "Participated in HackTheMountains",
  "Participated in Web Horizon",
  "Published research paper in international journal",
  "BrainyBeam Info-Tech Internship — developed 5 frontend modules",
];

export default function Education() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Education & Achievements</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Education</h3>
          {education.map((e, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-xl p-5 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="font-semibold">{e.degree}</div>
              <div className="text-gray-400 text-sm">{e.institution}</div>
              <div className="text-gray-500 text-xs mt-1">{e.year}</div>
              <div className="text-green-400 font-semibold mt-1">{e.score}</div>
              {e.note && <div className="text-gray-500 text-xs">{e.note}</div>}
            </motion.div>
          ))}
        </div>

        {/* Achievements and Certs */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Certifications</h3>
          <ul className="space-y-2 mb-6">
            {certifications.map((c, i) => (
              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span> {c}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Achievements</h3>
          <ul className="space-y-2">
            {achievements.map((a, i) => (
              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">★</span> {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
