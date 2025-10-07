"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const articles = [
  {
    id: "react-vs-next-2025",
    title: "React vs Next.js in 2025",
    date: "Sep 2025",
    content: `
      In 2025, React and Next.js have evolved massively...
      ----------------------------------------------------------------------
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
- **Edge rendering** for blazing-fast delivery
- **App Router maturity** (no more beta warnings!)
- **Built-in image optimization & caching**
- **First-class TypeScript and Rust-powered tooling**

Developers are using Next.js not just for websites but for apps that rival traditional backends. It feels closer to a platform than a 
framework now.

## The Key Differences
- **Routing:** React by itself doesn’t have routing, you add libraries like React Router. Next.js gives you file-based routing 
straight out of the box.
- **Performance:** Next.js leans into SSR, static site generation (SSG), and edge rendering, so it wins on initial page load 
and SEO. React alone is client-first.
- **Ecosystem:** React is flexible and minimal. Next.js is opinionated but saves you tons of setup time.

## My Take
If you’re prototyping a small widget or embedding UI in an existing system, React is the way to go—lightweight and flexible. 
But if you’re shipping a product, especially something that needs SEO, scalability, and backend integration, Next.js is 
basically the default in 2025.

At the end of the day, it’s not “React **vs** Next.js.” It’s React **and** Next.js. React is the engine, Next.js is the full car. 
You can drive with just the engine if you want, but why make life harder?
    `,
  },
  {
    id: "mern-app-7-days",
    title: "How I built a MERN app in 7 days",
    date: "Sep 2025",
    content: `
      Building a full-stack MERN (MongoDB, Express, React, Node.js) application in just 7 days was an intense but rewarding experience. Here’s how I did it:
      ---------------------------------------------------------------------------------------------------------------------------------
      ## Day 1: Planning & Setup
I started by defining the app’s core features and user stories. I chose a simple task management app with user authentication. 
Then, I set up my development environment with Node.js, MongoDB Atlas for the database, and created a GitHub repo for version control.
I scaffolded the backend with Express and created a basic server.

## Day 2: Backend Development
I focused on building the RESTful API. I created models for Users and Tasks using Mongoose, set up routes for CRUD operations, 
and implemented JWT-based authentication. I tested the endpoints using Postman to ensure everything worked as expected.
## Day 3: Frontend Setup
I initialized a React app using Create React App. I set up React Router for navigation and created a basic layout with a header and footer. 
I also installed Axios for making API calls.
## Day 4: User Authentication
I built the registration and login forms on the frontend. I connected these forms to the backend API for user authentication.
I also implemented protected routes to ensure only authenticated users could access certain parts of the app.
## Day 5: Task Management Features  
I created components for adding, viewing, editing, and deleting tasks. I used Axios to connect these components to the backend API. I also added state management using React’s useState and useEffect hooks.
## Day 6: Styling & UX Improvements
I used Tailwind CSS to style the app, ensuring a responsive design. I added loading spinners, error handling, and success messages to improve the user experience.
## Day 7: Testing & Deployment
I thoroughly tested the entire application, fixing bugs and optimizing performance. Finally, I deployed the backend on Heroku and the frontend on Vercel.
The entire process was a whirlwind, but breaking it down day by day made it manageable. In just one week, I went from an idea to a fully functional MERN app!
 `,
  },
  {
    id: "ai-tools-dev-2025",
    title: "How AI Tools Are Transforming Developer Growth in 2025",
    date: "Sep 2025",
    content: `
The IT sector is evolving faster than ever, and in 2025, one of the biggest catalysts for rapid growth is **AI-powered developer tools**. Whether you’re coding full-time, freelancing, or just learning, AI is no longer optional—it’s becoming the norm.

## Why AI Tools Matter for Developers
Gone are the days when developers manually wrote boilerplate code or spent hours debugging. With tools like AI-assisted IDEs, automated testing bots, and AI code reviewers, developers are able to:
- Ship projects faster
- Reduce errors in production
- Focus on solving complex problems instead of repetitive tasks

## The Skills That Scale With AI
To stay competitive in IT, you don’t just need to learn programming—you need to master how to *work alongside AI*. That means:
- Knowing how to **prompt effectively** to get the best output from AI
- Combining **AI-generated snippets** with strong fundamentals
- Using AI for tasks like **documentation, testing, and optimization**

## Rapid Growth Opportunities
If your goal is rapid growth in IT:
1. **Learn the fundamentals** (DSA, web dev, databases, networking).
2. **Adopt AI tools early**—the faster you get comfortable, the more productive you become.
3. **Build projects with AI in the loop**—showing employers you can scale with modern tools.
4. **Stay curious**—AI tools change fast; keep experimenting.

## Final Take
In 2025, IT growth isn’t just about *what you code*, it’s about *how you code smarter*. The developers who leverage AI as a teammate will outpace those who see it as a threat.  

So the question isn’t **“Will AI replace developers?”** — it’s **“Which developers will adapt fastest?”**
`,
  },
  {
    id: "future-indian-healthcare",
    title: "The Future of Indian Healthcare: A Unified Vision",
    date: "Sep 2025",
    content: `
In a world driven by technology, why does accessing quality healthcare in India still feel like a step back in time? Long queues, endless paperwork, frantic phone calls for an ambulance, and scattered medical reports—these are the frustrating realities of a fragmented system.

But what if there was a better way? What if a single platform could connect every piece of the healthcare puzzle, making it seamless, transparent, and trustworthy?

That’s the vision behind **SevaLink**. We’re not just building another app—we’re creating a tech-first movement to revolutionize how India accesses healthcare.

## Our First Step: Responding to a Crisis
When you're in an emergency, every second counts. Today’s ambulance market is chaotic, unreliable, and completely lacks transparency. People are forced to rely on frantic phone calls with no idea when help will arrive or how much it will cost.

Our first step is to launch an emergency ambulance service that flips this narrative. Think of it as the **Uber for ambulances** in India.

With SevaLink, users can summon an ambulance in just one tap. They’ll see **real-time GPS tracking, driver details, and upfront cost estimates**—providing crucial peace of mind during life’s most urgent moments. This isn’t just convenience; it’s about turning hope into reliability.

## The Grand Vision: A Connected Ecosystem
The ambulance service is just our entry point. Our bigger mission is to build a **comprehensive digital ecosystem** for all healthcare services. SevaLink aims to connect:

- **Patients** with verified doctors for consultations and digital prescriptions.  
- **Clinics & Hospitals** with tools to streamline their operations.  
- **Medical Stores** with smart inventory management and digital prescription fulfillment.  
- **Diagnostic Labs** with an automated system for test requests and secure report delivery.  

At the core of this ecosystem lies the **Unified Health Record (UHR)**—a single, secure record accessible by patients and their chosen providers. Imagine your entire medical history—from lab tests to prescriptions—stored in one place, accessible anytime, anywhere.

## Our Unique Advantage: Built for India, in India
We’re not just replicating a foreign model; we’re building for India, in India. Here’s how:

- **Data Sovereignty:** Hosted on **Zoho Cloud**, an Indian provider, ensuring compliance with the **Digital Personal Data Protection (DPDP) Act, 2023**. Patient data stays in India—safe, secure, and sovereign.  
- **Trust & Reliability:** Every provider on SevaLink, from ambulance drivers to doctors, will be **verified and curated**, replacing chaos with confidence.  
- **Holistic Integration:** Not just a single-service app but a **complete healthcare network**, offering a smooth journey from booking to prescription fulfillment.  

---

SevaLink isn’t just a startup idea—it’s a **vision to reimagine Indian healthcare**. A vision of **trust, efficiency, and accessibility**. By starting with the most urgent need—emergency services—and expanding into a fully connected ecosystem, we’re confident SevaLink can transform the healthcare experience for millions of Indians.

The future of healthcare in India is not fragmented. It’s unified. And with SevaLink, that future is closer than ever.
`,
  },
  {
    id: "sevalink-healthcare-tech",
    title: "SevaLink: Building the Future of Indian Healthcare with Technology",
    date: "Sep 2025",
    content: `
India’s healthcare system is full of potential—but it’s also full of gaps. From patients juggling paper reports and endless queues, to providers stuck with outdated systems, accessing quality healthcare still feels harder than it should be. At SevaLink, we believe technology can change that. Our mission is to build a **unified, digital-first healthcare ecosystem** that puts patients and providers on the same page.

## Why SevaLink?
Most healthcare apps today solve *one* problem—telemedicine, medicine delivery, or hospital management. The result? Patients bounce between apps, and providers struggle with scattered data. SevaLink is different. We’re building an **all-in-one healthcare network**, where every stakeholder—patients, doctors, hospitals, pharmacies, and labs—connects seamlessly.

## Our First Steps
We’re starting with the basics that matter most:
- **Emergency Ambulance Services:** A one-tap “Uber for ambulances,” with real-time tracking, driver verification, and upfront pricing. In emergencies, transparency and reliability save lives.
- **Patient App:** Book appointments, consult verified doctors online, receive digital prescriptions, and store your complete medical history in a **Unified Health Record (UHR)**.
- **Provider Portals:** Simple SaaS dashboards for doctors, clinics, and hospitals to manage patients, billing, and team workflows—no more clunky, outdated systems.

## A Connected Healthcare Journey
SevaLink isn’t just about one app feature. It’s about rethinking the entire healthcare journey:
- **Consult a doctor** via video or in-person.  
- **Get a prescription** digitally, linked directly to pharmacies.  
- **Order medicines** from a trusted medical store.  
- **Book diagnostics** and get lab results synced to your record.  
- **Access everything** through your UHR, stored securely and compliantly.  

Every step, from consultation to recovery, happens in one ecosystem—streamlined, transparent, and trustworthy.

## Our Tech Edge
We’re building SevaLink on the **MERN stack (MongoDB, Express.js, React, Node.js)** for speed and scalability. Hosting on **Zoho Cloud** ensures **data sovereignty**—all sensitive medical data stays in India, fully compliant with the **Digital Personal Data Protection (DPDP) Act, 2023**. End-to-end encryption and a unique **SevaScore trust metric** make the system not just functional, but reliable.

## The Bigger Vision
Today, we start with ambulances, patient consultations, and provider tools. Tomorrow, we aim to:
- Expand across Tier 2 & Tier 3 cities.  
- Integrate insurance and corporate wellness programs.  
- Make SevaLink the **default digital health record** for every Indian.  

Our goal is ambitious but clear: **transform Indian healthcare into a connected, transparent, and patient-first ecosystem.**

---

SevaLink is more than a startup—it’s a healthcare movement. By combining technology, trust, and a unified vision, we’re building the future of healthcare in India. And that future starts now.
`,
  },
{
    id: "sentinel-cybersecurity-platform",
    title: "Sentinel: Building a Safer Digital India through Cybersecurity Innovation",
    date: "Oct 2025",
    content: `
India’s digital revolution is unstoppable—from UPI payments and e-governance to cloud-first startups and AI-powered services. But with this growth comes a new challenge: **cyber threats are evolving faster than ever.** Phishing attacks, ransomware, and data breaches are no longer isolated incidents—they’re daily news. That’s why we’re building **Sentinel**, a platform designed to **secure India’s digital backbone**.

## Why Sentinel?
Most cybersecurity solutions today work in silos—one tool for network defense, another for endpoint protection, and yet another for compliance. The result? Fragmented visibility and delayed response. Sentinel takes a different approach. We’re creating a **unified cybersecurity command center**, where organizations of all sizes—startups, enterprises, and government bodies—can monitor, detect, and respond to threats in real time.

## Our First Steps
We’re starting with the foundational layers that matter most:
- **Threat Intelligence Hub:** Aggregates and analyzes real-time threat data from global and local sources using AI-driven correlation. Stay ahead of attacks before they even reach your network.  
- **Unified Security Dashboard:** One place to track alerts, vulnerabilities, compliance status, and incident responses—simplifying what used to be chaos.  
- **Zero-Trust Access Manager:** Identity-first authentication using adaptive MFA (Multi-Factor Authentication) and behavioral analytics. Because trust must always be verified.  

## A Connected Security Ecosystem
Cybersecurity isn’t just about firewalls—it’s about visibility, automation, and trust:
- **Detect threats** through AI-powered anomaly detection.  
- **Respond instantly** with automated containment workflows.  
- **Comply effortlessly** with standards like ISO 27001, GDPR, and the DPDP Act.  
- **Collaborate securely** across teams using encrypted communication channels.  
- **Continuously improve** with post-incident analytics and risk scoring.  

Every layer—from endpoint to cloud—is interconnected, ensuring that organizations have **360° situational awareness** and zero blind spots.

## Our Tech Edge
Sentinel is powered by the **MERN stack (MongoDB, Express.js, React, Node.js)** for agility and scalability. Our backend integrates **AI/ML models for predictive threat analytics**, and our infrastructure runs on **Indian cloud servers** to ensure compliance with the **Digital Personal Data Protection (DPDP) Act, 2023**.  
We also employ **blockchain-based audit trails** for tamper-proof logging and a proprietary **SentinelScore**, which quantifies an organization’s overall cybersecurity health in real time.

## The Bigger Vision
Today, we focus on threat intelligence, zero-trust access, and compliance automation. Tomorrow, we’ll expand Sentinel to:
- Enable **cyber insurance and risk assessment integration.**  
- Bring **SMBs and educational institutions** into the security fold through affordable plans.  
- Build **India’s largest cybersecurity threat-sharing network**, where every organization contributes to national digital resilience.  

Our mission is bold yet simple: **make cybersecurity accessible, intelligent, and Indian at its core.**

---

Sentinel isn’t just another security product—it’s a **movement for digital safety and self-reliance**. By uniting technology, AI, and trust, we’re not just defending networks—we’re defending the future of Digital India.
`
},
{
    id: "cybersecurity-career-future",
    title: "Cybersecurity Careers: Protecting the Digital Future of India",
    date: "Oct 2025",
    content: `
Every second, somewhere in the world, a hacker is trying to break into a system. As the world becomes more digital, the fight to protect data, systems, and people is only heating up. That’s where **cybersecurity professionals** step in—the unsung heroes of the digital age. And trust me, this isn’t just another tech job—it’s a **mission to safeguard the future.**

## Why Cybersecurity Matters
From online banking to healthcare to government data—everything today lives online. That makes cybersecurity not a luxury, but a necessity. One successful attack can bring down entire businesses, leak personal data, or even threaten national security.  
As technology evolves, so do cyber threats. AI, IoT, and cloud computing have made systems smarter—but also more vulnerable. The demand for skilled cybersecurity experts has skyrocketed, and **India is quickly becoming a global cybersecurity hub.**

## The Rising Demand in India
India’s digital transformation—from UPI and DigiLocker to Digital India initiatives—has made cybersecurity a top priority.  
According to recent reports:
- India needs **over 3 million cybersecurity professionals** by 2026.  
- The global cybersecurity market is expected to hit **$500+ billion by 2030**.  
- Roles in cybersecurity pay **30–50% more** than average IT jobs.  

From startups to government agencies, everyone’s hiring. Whether it’s ethical hackers, security analysts, or cyber policy experts—**the opportunities are endless.**

## Top Career Paths in Cybersecurity
Cybersecurity isn’t just about “hacking.” It’s a massive ecosystem of roles:
- **Ethical Hacker (Pen Tester):** Think like a hacker to secure systems before attackers do.  
- **Security Analyst:** Monitor, detect, and respond to threats in real time.  
- **Network Security Engineer:** Design and maintain secure network architectures.  
- **Cloud Security Specialist:** Protect data stored on AWS, Azure, and Google Cloud.  
- **Cyber Forensics Expert:** Investigate breaches and trace digital footprints.  
- **Security Compliance Officer:** Ensure organizations follow laws like the DPDP Act and GDPR.  

No matter your interest—tech, investigation, management, or policy—there’s a cybersecurity role that fits your vibe.

## What Skills You Need
Here’s what companies are looking for:
- Strong base in **networking, operating systems, and scripting (Python/Bash)**  
- Understanding of **firewalls, encryption, and authentication protocols**  
- Tools like **Wireshark, Nmap, Metasploit, Burp Suite, Splunk**  
- Knowledge of **cloud and AI security**  
- Certifications such as **CompTIA Security+, CEH, CISSP, or OSCP**  

And remember—it’s not just about technical skills. Critical thinking, curiosity, and persistence are what truly make a cybersecurity pro.

## The Future of Cybersecurity
The future is **AI-driven, data-first, and always connected**—which means the attack surface is expanding fast.  
Here’s what’s coming:
- **AI-powered cyber defense:** Systems that detect and neutralize threats automatically.  
- **Quantum-safe encryption:** Protecting data in a post-quantum world.  
- **Cybersecurity in IoT and Smart Cities:** Securing billions of connected devices.  
- **Privacy-first internet:** Stronger data protection under laws like India’s **DPDP Act 2023**.  
- **Cyber warfare and defense:** As nations digitize, cybersecurity becomes a key part of national security.  

In short, cybersecurity isn’t just a job—it’s the **foundation of the digital future.**

## Why You Should Consider This Career
- 🚀 **High demand, low competition** — skilled professionals are rare.  
- 💰 **Excellent pay** — cybersecurity experts are among the highest-paid IT pros.  
- 🌍 **Global relevance** — skills recognized worldwide.  
- ⚡ **Constant learning** — the field evolves daily; you’ll never be bored.  
- 🔒 **Purpose-driven work** — you’re literally protecting people, data, and nations.  

## Final Thoughts
Cybersecurity is more than coding or catching hackers—it’s about **trust, responsibility, and impact.**  
As digital India grows, so will the need for guardians who can keep it safe. Whether you’re a student choosing your path or a professional looking to switch careers, **cybersecurity is one of the smartest and most future-proof decisions you can make.**

---

**In a world that runs on code, cybersecurity is the shield that keeps it all standing.**  
So if you’ve got curiosity, courage, and a bit of hacker’s mindset—it’s time to join the frontline of the digital revolution.
`
}

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
