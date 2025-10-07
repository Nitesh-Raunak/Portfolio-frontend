"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const articles = [
  {
    id: "react-vs-next-2025",
    title: "React vs Next.js in 2025",
    date: "Sep 2025",
    content: `
In 2025, React and Next.js have evolved massively...

React and Next.js have come a long way, and in 2025 the debate between the two is hotter than ever. 
Back in the early 2020s, React was the go-to for building interactive UIs, while Next.js was the “framework on top of React” 
that solved problems like routing, server-side rendering (SSR), and API integration. Fast forward to today, the lines between them 
have blurred—but each still has its role.

## React in 2025
React is still the foundation. It powers the component model, hooks, and all the UI logic. The library is lighter, faster, and now 
comes with built-in support for async rendering and partial hydration out of the box. React Server Components (RSC), which were 
experimental a few years ago, are now standard practice. If you’re building a highly interactive front-end without worrying too much 
about SEO or server-side performance, plain React is still an amazing choice.

## Next.js in 2025
Next.js has become more than “just React with SSR.” It’s evolved into a full-stack framework. With features like:
- Edge rendering for blazing-fast delivery
- App Router maturity (no more beta warnings!)
- Built-in image optimization & caching
- First-class TypeScript and Rust-powered tooling

Developers are using Next.js not just for websites but for apps that rival traditional backends. It feels closer to a platform than a 
framework now.

## The Key Differences
- Routing: React by itself doesn’t have routing, you add libraries like React Router. Next.js gives you file-based routing 
straight out of the box.
- Performance: Next.js leans into SSR, static site generation (SSG), and edge rendering, so it wins on initial page load 
and SEO. React alone is client-first.
- Ecosystem: React is flexible and minimal. Next.js is opinionated but saves you tons of setup time.

## My Take
If you’re prototyping a small widget or embedding UI in an existing system, React is the way to go—lightweight and flexible. 
But if you’re shipping a product, especially something that needs SEO, scalability, and backend integration, Next.js is 
basically the default in 2025.

At the end of the day, it’s not “React vs Next.js.” It’s React and Next.js. React is the engine, Next.js is the full car. 
You can drive with just the engine if you want, but why make life harder?
    `,
  },
  {
    id: "mern-app-7-days",
    title: "How I built a MERN app in 7 days",
    date: "Sep 2025",
    content: `
Building a full-stack MERN (MongoDB, Express, React, Node.js) application in just 7 days was an intense but rewarding experience.

## Day 1: Planning & Setup
I started by defining the app’s core features and user stories. I chose a simple task management app with user authentication. 
Then, I set up my development environment with Node.js, MongoDB Atlas for the database, and created a GitHub repo for version control.

## Day 2: Backend Development
I focused on building the RESTful API using Express and Mongoose, implementing JWT-based authentication.

## Day 3–7: Frontend, Integration & Deployment
Used React for the frontend, Tailwind for styling, and Axios for API calls. Finally deployed the backend on Render and frontend on Vercel.
    `,
  },
  {
    id: "ai-tools-dev-2025",
    title: "How AI Tools Are Transforming Developer Growth in 2025",
    date: "Sep 2025",
    content: `
The IT sector is evolving faster than ever, and in 2025, one of the biggest catalysts for rapid growth is AI-powered developer tools.

Gone are the days when developers manually wrote boilerplate code or spent hours debugging. With tools like AI-assisted IDEs, automated testing bots, and AI code reviewers, developers are able to:
- Ship projects faster
- Reduce errors in production
- Focus on solving complex problems

In 2025, IT growth isn’t just about what you code, it’s about how you code smarter.
    `,
  },
  {
    id: "future-indian-healthcare",
    title: "The Future of Indian Healthcare: A Unified Vision",
    date: "Sep 2025",
    content: `
India’s healthcare system is fragmented—but SevaLink aims to fix that by connecting ambulances, hospitals, doctors, and pharmacies into one platform.

Our goal: A seamless, data-secure, and unified healthcare ecosystem powered by Indian tech infrastructure.
    `,
  },
  {
    id: "cybersecurity-career-future",
    title: "Cybersecurity Careers: Protecting the Digital Future of India",
    date: "Oct 2025",
    content: `
Cybersecurity isn’t just a job—it’s a mission. As India becomes a digital superpower, the need for skilled cybersecurity professionals is exploding.

## Why This Field Rocks
- High demand and great pay
- You protect people and data
- Constant learning with AI-driven security tools

If you’ve got curiosity and a hacker’s mindset, this is the most future-proof career path in IT.
    `,
  },
{
  id: "deployment-journey-for-freshers",
  title: "From Localhost to Live: A Fresher's Guide to Deploying Full-Stack Apps",
  date: "October 2025",
  content: `
## 🚀 Introduction – The Deployment Challenge for Freshers

Deploying your first full-stack application is exciting—but also terrifying. You’ve coded your frontend and backend, everything works on localhost, and then… nothing works online.  

Freshers face a **lot of real-world hurdles**: build errors, CORS issues, environment variable mishaps, dependency conflicts, and more. In this guide, we’ll walk through the **most common problems** and how to solve them professionally.

---

## ⚙️ Step 1: Choosing Platforms

For hosting, a good choice is:

- Frontend (React/Next.js): Vercel – automatic builds, previews, fast deployment  
- Backend (Node.js/Express): Render or Railway – easy setup, persistent API hosting, environment variable support  

**Tip:** Keep frontend and backend in separate repos for simplicity. It’s easier to debug and manage environment-specific settings.

---

## 🧩 Step 2: Build Errors

### Common Problem:
Build fails on deployment but works locally.

**Why it happens:**
- Unescaped JSX characters  
- Node version mismatches  
- Missing dependencies in production  

**Solution:**
Check the deployment logs carefully — they usually show the exact problem. Ensure all dependencies are installed correctly and match the Node.js version used locally.

---

## 🌐 Step 3: CORS – The Invisible Wall

Freshers often deploy frontend and backend on different domains. When trying to make API calls, browsers may block requests due to CORS policy.

**Solution:**
- Allow only your frontend domain in the backend CORS settings.  
- Avoid using wildcard origins in production — it’s unsafe.  
- Ensure your backend and frontend domains are properly configured in hosting dashboards.

---

## 🌐 Step 4: Environment Variables – The Silent Killers

### Problem:
Your frontend cannot reach the backend API, or API keys fail in production.

**Solution:**
- Use ".env" files locally.  
- Add matching environment variables in the hosting dashboard (Vercel, Render, Railway).  
- Make sure frontend variables are properly prefixed so they are accessible in client code.

---

## 🛠 Step 5: Common Production Gotchas

- Mixed HTTP/HTTPS requests: Ensure both frontend and backend use HTTPS.  
- Database connection issues: Use cloud-hosted DBs and whitelist hosting IPs.  
- Dependency mismatches: Lock versions to avoid surprises.  
- Large assets & images: Optimize and use caching strategies.

---

## 💡 Pro Tips for Freshers

1. Logs are your friend — read them carefully.  
2. Fix one problem at a time.  
3. Test on staging or preview builds first.  
4. Document solutions to save future headaches.  
5. Engage with online communities — deployment issues are universal.

---

## 🏁 Conclusion – You Got This

Deployment can feel overwhelming, but **every fresher faces the same challenges**. Once you understand CORS, environment variables, build errors, and proper hosting setup, it becomes just another step in building professional apps.  

Remember: deployment isn’t magic — it’s **systematic debugging, patience, and learning best practices early**.  

Soon, seeing your live app with working APIs will feel like leveling up from rookie to pro.  

**Start small, deploy early, fix issues, and iterate. That’s the real deployment journey.**
– Nitesh Raunak

  `
}

  ,
];

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState(null);

  if (activeArticle) {
    return (
      <div className="max-w-3xl mx-auto py-16 px-6 text-white">
        <button
          onClick={() => setActiveArticle(null)}
          className="text-blue-400 hover:underline mb-6"
        >
          ← Back to all blogs
        </button>
        <h1 className="text-4xl font-bold mb-4">{activeArticle.title}</h1>
        <p className="text-gray-400 mb-6">{activeArticle.date}</p>
        <div className="prose prose-invert max-w-none whitespace-pre-line">
          {activeArticle.content}
        </div>
      </div>
    );
  }

  return (
    <section id="blog" className="py-16 px-6 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Blog & Articles</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            onClick={() => setActiveArticle(a)}
            className="cursor-pointer"
          >
            <div className="p-6 rounded-xl bg-gray-700 hover:bg-gray-600 transition shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
              <span className="text-gray-400 text-sm">{a.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
