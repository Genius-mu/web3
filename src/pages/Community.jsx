// src/pages/Community.jsx
import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  Twitter,
  Send,
  Heart,
  Calendar,
  Globe,
  Coffee,
  Github,
} from "lucide-react";

export default function Community() {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle water-like background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="water-bg opacity-15"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Join the Web3 Hub Community
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Connect with builders, creators, developers, and Web3 enthusiasts
            from around the world. Collaborate, learn, and shape the
            decentralized future together.
          </p>
        </motion.div>
        {/* <Discord /> */}
      </section>

      {/* Join Platforms */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Where to Find Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Github size={64} className="text-indigo-400" />,
                title: "Discord Server",
                description:
                  "Active voice/text channels, daily discussions, hackathons, and AMAs with Web3 experts.",
                link: "https://discord.gg/web3hub",
                buttonText: "Join Discord",
                color: "bg-indigo-600 hover:bg-indigo-700",
              },
              {
                icon: <Twitter size={64} className="text-blue-400" />,
                title: "X (Twitter)",
                description:
                  "Follow for updates, announcements, memes, and real-time Web3 news.",
                link: "https://twitter.com/web3hub",
                buttonText: "Follow @web3hub",
                color: "bg-blue-600 hover:bg-blue-700",
              },
              {
                icon: <GitHub size={64} className="text-gray-300" />,
                title: "GitHub Organization",
                description:
                  "Contribute to our open-source projects, report issues, or submit PRs.",
                link: "https://github.com/web3hub",
                buttonText: "Visit GitHub",
                color: "bg-gray-800 hover:bg-gray-900",
              },
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="glow bg-slate-800/70 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-6">{platform.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{platform.title}</h3>
                <p className="text-gray-300 mb-8 flex-grow">
                  {platform.description}
                </p>
                <motion.a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`glow ${platform.color} text-white px-8 py-4 rounded-xl font-semibold w-full max-w-xs`}
                >
                  {platform.buttonText}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Activities */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent via-slate-900/60 to-transparent">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            What's Happening
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glow bg-slate-800/60 p-8 rounded-2xl border border-slate-700"
            >
              <Calendar size={48} className="text-purple-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Weekly Events</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <Coffee className="mr-3 text-yellow-400 flex-shrink-0" />
                  <span>Web3 Coffee Chats (Every Wednesday)</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="mr-3 text-blue-400 flex-shrink-0" />
                  <span>AMA with Web3 Builders (Every Friday)</span>
                </li>
                <li className="flex items-start">
                  <Heart className="mr-3 text-red-400 flex-shrink-0" />
                  <span>Community Hackathons (Monthly)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glow bg-slate-800/60 p-8 rounded-2xl border border-slate-700"
            >
              <Globe size={48} className="text-green-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Global Community</h3>
              <p className="text-gray-300 mb-6">
                Members from over 50 countries, including:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "USA",
                  "India",
                  "Nigeria",
                  "Germany",
                  "Brazil",
                  "Singapore",
                  "UK",
                  "Japan",
                ].map((country) => (
                  <span
                    key={country}
                    className="bg-slate-700 px-4 py-2 rounded-full text-sm"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Be Part of Something Bigger
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Whether you're a developer, designer, investor, or just curious
            about Web3 — everyone is welcome. Join us and help build the
            decentralized future!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="https://discord.gg/web3hub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center"
            >
              <Github className="mr-3" size={24} />
              Join Discord Now
            </motion.a>
            <motion.a
              href="https://twitter.com/web3hub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow bg-transparent border-2 border-blue-500 text-blue-400 px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center"
            >
              <Twitter className="mr-3" size={24} />
              Follow on X
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
