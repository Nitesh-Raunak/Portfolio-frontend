import React, { useState } from "react"; // Consolidated imports to prevent duplication
import { FaLinkedin, FaTwitter, FaGithub, FaDev, FaMedium } from "react-icons/fa";

// IMPORTANT: Read the public environment variable here
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Using the dynamic API_BASE_URL
    const apiEndpoint = `${API_BASE_URL}/api/contact`;

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Your message was sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error connecting to server. Check console for details.");
      console.error("API Call Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mb-4 p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-4 p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full mb-4 p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded font-semibold transition ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="mt-3">{status}</p>}
          </form>

          {/* Social Icons + Map */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Find me on</h3>
              <div className="flex gap-4 justify-center md:justify-start text-3xl">
                <a
                  href="https://www.linkedin.com/in/nitesh-kumar-16013931a/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/@NiteshK06363621"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/Nitesh-Raunak"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://dev.to/YOUR_PROFILE"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple-500 transition"
                >
                  <FaDev />
                </a>
                <a
                  href="https://medium.com/@niteshkumarsah401440"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-500 transition"
                >
                  <FaMedium />
                </a>
              </div>
            </div>

            {/* Optional Map */}
            <div className="mt-8">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.9268457183025!2d70.79464107475131!3d22.367434340459653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27af07389cb377%3A0xe6c1048589fe4e62!2sMarwadi%20University%20(Engineering%2C%20MBA%2C%20Law%2C%20Science%2C%20Architecture%20%26%20Physiotherapy)!5e1!3m2!1sen!2sin!4v1758811292353!5m2!1sen!2sin"
                width="100%"
                height="250"
                className="rounded-lg border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
