const projects = [
  {
    title: "SevaLink — Emergency Ambulance Platform",
    description:
      "Production-grade ambulance dispatch and coordination platform for India. Built a NestJS monorepo with 80+ PostgreSQL entities, real-time GPS tracking via Socket.IO, a serial-offer dispatch algorithm using BullMQ (inspired by Uber's model), Cashfree Easy Split payments, PostGIS geospatial queries, Firebase FCM push notifications, and 150+ REST endpoints across 5 user roles (Patient, Driver, Hospital, Fleet, Admin). Live on Render with 28/28 production infra tests passing.",
    image: "/projects/Ambulance.jpg",
    tech: [
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
    ],
    category: "Full-stack",
    link: "https://github.com/Nitesh-Raunak/SevaLink-Web",
    liveLink: "https://sevalink-backend-api.onrender.com",
    highlights: [
      "Serial-offer dispatch algorithm with radius expansion (5→20km)",
      "Real-time GPS tracking pipeline with Redis-first storage",
      "Pure ledger wallet architecture (no stored balances)",
      "Multi-role JWT auth with token reuse detection",
    ],
  },
  {
    title: "CAEVS — Context-Aware Attendance System",
    description:
      "Smart attendance system built with Flutter and Firebase that uses contextual validation to prevent proxy attendance. Implemented Cloud Functions for server-side validation logic and real-time attendance state management.",
    image: "/projects/mobile.jpg",
    tech: ["Flutter", "Firebase", "Cloud Functions", "Dart"],
    category: "Mobile",
    link: "https://github.com/Nitesh-Raunak",
  },
  {
    title: "Kaamwala",
    description:
      "Full-stack MERN platform connecting people who need household and local services with nearby workers. Features user auth, worker profiles, job posting, and real-time status updates.",
    image: "/projects/kaamwala.jpg",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    category: "Full-stack",
    link: "https://github.com/Nitesh-Raunak/Kaamwala",
  },
  {
    title: "eAuction",
    description:
      "Frontend web app for online auctions. Users can browse auction listings and place bids with a clean responsive UI.",
    image: "/projects/eAuction.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    link: "https://nitesh-raunak.github.io/goods_eAUCTION/index.HTML",
  },
];

export default projects;
