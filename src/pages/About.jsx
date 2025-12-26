// src/pages/About.jsx
import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Heart,
  Users,
  Rocket,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      desc: "Pushing the boundaries of what's possible in decentralized technology.",
    },
    {
      icon: Shield,
      title: "Security & Trust",
      desc: "Building robust, audited systems that protect user data and assets.",
    },
    {
      icon: Users,
      title: "Community Driven",
      desc: "Empowering developers and users to shape the future together.",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      desc: "Making Web3 technology accessible to everyone, everywhere.",
    },
  ];

  const team = [
    { role: "Founders", count: "5+", description: "Industry veterans" },
    { role: "Developers", count: "50+", description: "Full-stack experts" },
    { role: "Contributors", count: "200+", description: "Community builders" },
    { role: "Partners", count: "30+", description: "Strategic alliances" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0c101c]">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(88,166,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(88,166,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#58a6ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#765dff]/10 rounded-full blur-3xl" />
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
              About Web3 Hub
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We're building the infrastructure for the next generation of the
            internet—decentralized, open, and owned by everyone.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-20 w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl p-10 rounded-3xl border border-slate-700/40 hover:border-[#58a6ff]/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-[#58a6ff]/20 to-[#765dff]/20 rounded-2xl mr-4">
                  <Target size={40} className="text-[#58a6ff]" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                To democratize access to decentralized technology and empower
                developers worldwide to build the future of the internet—one
                that's transparent, secure, and accessible to all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl p-10 rounded-3xl border border-slate-700/40 hover:border-[#765dff]/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-[#765dff]/20 to-[#9c88ff]/20 rounded-2xl mr-4">
                  <Lightbulb size={40} className="text-[#765dff]" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                A world where everyone has sovereignty over their digital
                identity, assets, and data—powered by blockchain technology
                that's intuitive, scalable, and sustainable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative z-20 w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-14 text-white"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -6 }}
                  className="bg-gradient-to-b from-slate-900/60 to-slate-800/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/40 hover:border-[#58a6ff]/30 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-5">
                    <div className="p-4 bg-gradient-to-br from-[#58a6ff]/10 to-[#765dff]/10 rounded-2xl">
                      <Icon size={40} className="text-[#58a6ff]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="relative z-20 w-full py-20 px-4 bg-gradient-to-r from-slate-900/30 via-slate-800/30 to-slate-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-14 text-white"
          >
            Our Team
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-default"
              >
                <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#58a6ff] to-[#765dff] text-transparent bg-clip-text mb-2">
                  {member.count}
                </h3>
                <p className="text-xl font-bold text-white mb-1">
                  {member.role}
                </p>
                <p className="text-slate-400">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 w-full py-28 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
            Join Our Journey
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            Be part of the movement that's reshaping the digital landscape.
          </p>
          <motion.button
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#58a6ff] via-[#765dff] to-[#9c88ff] text-white px-12 py-5 rounded-3xl font-bold text-xl flex items-center mx-auto shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
          >
            <Heart className="mr-2" size={24} />
            Get Involved
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
