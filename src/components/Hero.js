"use client";
import { motion } from "framer-motion";
import {ReactTyped} from "react-typed";
import Particles from "react-tsparticles";



export default function Hero() {
  // Initialize particles
  // const particlesInit = async (engine) => {
  //   await loadSlim(engine); // Use loadSlim to initialize the particles engine
  // };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-black text-white overflow-hidden">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        // init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: "#00BFFF" },
            links: { enable: true, color: "#00BFFF", distance: 150 },
            move: { enable: true, speed: 2 },
            number: { value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Nitesh Gupta 👋</h1>

        <ReactTyped
          className="text-xl md:text-2xl text-blue-400 font-medium mb-6"
          strings={["I build Web Apps", "I build Mobile Apps", "I design UI/UX"]}
          typeSpeed={50}
          backSpeed={40}
          loop
        />

        <motion.a
          href="#about"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
}
