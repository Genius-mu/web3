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
  ExternalLink,
} from "lucide-react";

export default function Community() {
  const platforms = [
    {
      icon: MessageSquare,
      title: "Discord Server",
      description:
        "Active voice/text channels, daily discussions, hackathons, and AMAs with Web3 experts.",
      link: "https://discord.gg/",
      buttonText: "Join Discord",
      color: "from-[#58a6ff] to-[#765dff]",
    },
    {
      icon: Twitter,
      title: "X (Twitter)",
      description:
        "Follow for updates, announcements, memes, and real-time Web3 news.",
      link: "https://twitter.com/",
      buttonText: "Follow @web3hub",
      color: "from-[#765dff] to-[#9c88ff]",
    },
    {
      icon: Github,
      title: "GitHub Organization",
      description:
        "Contribute to our open-source projects, report issues, or submit PRs.",
      link: "https://github.com/",
      buttonText: "Visit GitHub",
      color: "from-[#58a6ff] to-[#9c88ff]",
    },
  ];

  const events = [
    {
      icon: Coffee,
      text: "Web3 Coffee Chats (Every Wednesday)",
      color: "text-amber-400",
    },
    {
      icon: MessageSquare,
      text: "AMA with Web3 Builders (Every Friday)",
      color: "text-[#58a6ff]",
    },
    {
      icon: Heart,
      text: "Community Hackathons (Monthly)",
      color: "text-rose-400",
    },
  ];

  const countries = [
    "USA",
    "India",
    "Nigeria",
    "Germany",
    "Brazil",
    "Singapore",
    "UK",
    "Japan",
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0c101c]">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(88,166,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(88,166,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#765dff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#58a6ff]/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative z-20 w-full text-center pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[#58a6ff] via-[#765dff] to-[#9c88ff] text-transparent bg-clip-text">
              Join the Web3 Hub Community
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Connect with builders, creators, developers, and Web3 enthusiasts
            from around the world. Collaborate, learn, and shape the
            decentralized future together.
          </motion.p>
        </motion.div>
      </section>

      {/* Join Platforms */}
      <section className="relative z-20 w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-14 text-white"
          >
            Where to Find Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -6 }}
                  className="bg-gradient-to-b from-slate-900/60 to-slate-800/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/40 hover:border-[#58a6ff]/30 transition-all duration-300 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div
                    className={`p-5 bg-gradient-to-br ${platform.color}/10 rounded-2xl mb-6`}
                  >
                    <Icon size={56} className="text-[#58a6ff]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {platform.title}
                  </h3>
                  <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                    {platform.description}
                  </p>
                  <motion.a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-gradient-to-r ${platform.color} text-white px-8 py-3.5 rounded-2xl font-bold w-full flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30 transition-all duration-300`}
                  >
                    {platform.buttonText}
                    <ExternalLink size={18} />
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events & Activities */}
      <section className="relative z-20 w-full py-20 px-4 bg-gradient-to-r from-slate-900/30 via-slate-800/30 to-slate-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-14 text-white"
          >
            What's Happening
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/40 hover:border-[#58a6ff]/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-[#58a6ff]/20 to-[#765dff]/20 rounded-2xl mr-4">
                  <Calendar size={40} className="text-[#58a6ff]" />
                </div>
                <h3 className="text-3xl font-bold text-white">Weekly Events</h3>
              </div>
              <ul className="space-y-4">
                {events.map((event, index) => {
                  const EventIcon = event.icon;
                  return (
                    <li key={index} className="flex items-start">
                      <EventIcon
                        className={`mr-3 ${event.color} flex-shrink-0 mt-1`}
                        size={20}
                      />
                      <span className="text-slate-300 leading-relaxed">
                        {event.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/40 hover:border-[#765dff]/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-[#765dff]/20 to-[#9c88ff]/20 rounded-2xl mr-4">
                  <Globe size={40} className="text-[#765dff]" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Global Community
                </h3>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Members from over 50 countries, including:
              </p>
              <div className="flex flex-wrap gap-3">
                {countries.map((country) => (
                  <span
                    key={country}
                    className="bg-slate-800/80 border border-slate-700/50 px-4 py-2 rounded-full text-sm text-slate-300 font-medium"
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
      <section className="relative z-20 w-full py-28 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
            Be Part of Something Bigger
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            Whether you're a developer, designer, investor, or just curious
            about Web3 — everyone is welcome. Join us and help build the
            decentralized future!
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.a
              href="https://discord.gg/web3hub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#58a6ff] via-[#765dff] to-[#9c88ff] text-white px-10 py-5 rounded-3xl font-bold text-lg flex items-center justify-center shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              <MessageSquare className="mr-2" size={22} />
              Join Discord Now
            </motion.a>
            <motion.a
              href="https://twitter.com/web3hub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                y: -4,
                borderColor: "rgba(88, 166, 255, 0.8)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0c101c]/60 backdrop-blur-md border-2 border-[#58a6ff]/40 text-[#58a6ff] px-10 py-5 rounded-3xl font-bold text-lg flex items-center justify-center hover:bg-[#0c101c]/80 transition-all duration-300"
            >
              <Twitter className="mr-2" size={22} />
              Follow on X
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
