"use client";
import { motion } from "framer-motion";

const skills = [
  { category: "Backend", items: ["NestJS", "Node.js", "Express.js", "TypeScript"] },
  { category: "Database", items: ["PostgreSQL", "PostGIS", "MongoDB", "Redis"] },
  { category: "Realtime & Queues", items: ["Socket.IO", "BullMQ", "Firebase FCM"] },
  { category: "Frontend", items: ["Next.js", "React.js", "Tailwind CSS"] },
  { category: "Tools & Cloud", items: ["Git", "GitHub", "Postman", "Render", "Supabase", "Firebase"] },
  { category: "Payments & APIs", items: ["Cashfree Easy Split", "Google Maps API", "Twilio", "Fast2SMS"] },
];

export default function TechStack() {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Tech Stack</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 rounded-xl p-5 border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-blue-400 font-semibold mb-3 text-sm uppercase tracking-wider">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <span
                  key={j}
                  className="text-xs bg-gray-800 text-gray-200 px-3 py-1 rounded-full border border-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
