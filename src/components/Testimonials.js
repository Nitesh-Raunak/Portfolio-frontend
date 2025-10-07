"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    avatar: "/images/client1.jpg",
    quote: "Nitesh built our web app from scratch and it’s amazing!",
  },
  {
    name: "Jane Smith",
    role: "CTO, InnovateX",
    avatar: "/images/client2.jpg",
    quote: "Professional, reliable, and highly skilled developer.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-300 italic mb-4">&quot;{t.quote}&quot;</p>
            <h4 className="font-semibold">{t.name}</h4>
            <span className="text-gray-400 text-sm">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
