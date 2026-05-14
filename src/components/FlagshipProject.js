"use client";
import { motion } from "framer-motion";

const highlights = [
  { label: "REST Endpoints", value: "150+" },
  { label: "DB Entities", value: "80+" },
  { label: "BullMQ Queues", value: "10" },
  { label: "Infra Tests", value: "28/28" },
  { label: "User Roles", value: "5" },
  { label: "Payment Latency", value: "~240ms" },
];

export default function FlagshipProject() {
  return (
    <section className="py-16 px-6 bg-gray-950 text-white border-y border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="mb-2 text-blue-400 text-sm font-semibold uppercase tracking-widest">
          Flagship Project
        </div>
        <h2 className="text-4xl font-bold mb-4">SevaLink</h2>
        <p className="text-gray-300 text-lg mb-2">
          Emergency Ambulance Dispatch Platform for India
        </p>
        <p className="text-gray-400 mb-8 max-w-2xl">
          A production-grade system inspired by Uber&apos;s dispatch model — built entirely from
          scratch. Patients request ambulances, drivers are dispatched via a serial-offer algorithm
          with radius expansion, hospitals receive auto-appointments, and payments are processed via
          Cashfree Easy Split. Everything is real-time via Socket.IO.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-2xl font-bold text-blue-400">{h.value}</div>
              <div className="text-xs text-gray-500 mt-1">{h.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "NestJS",
            "TypeScript",
            "PostgreSQL",
            "PostGIS",
            "Redis",
            "Socket.IO",
            "BullMQ",
            "Firebase FCM",
            "Cashfree",
            "Google Maps API",
          ].map((t, i) => (
            <span
              key={i}
              className="text-xs bg-blue-900/40 text-blue-300 border border-blue-800 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Nitesh-Raunak/SevaLink-Web"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition"
          >
            View on GitHub
          </a>
          <a
            href="https://sevalink-backend-api.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border border-gray-600 hover:bg-gray-800 rounded-lg text-sm font-medium transition"
          >
            Live API
          </a>
        </div>
      </div>
    </section>
  );
}
