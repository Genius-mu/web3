// src/pages/About.jsx
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Code,
  Globe,
  HeartHandshake,
  Rocket,
} from "lucide-react";

export default function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="water-bg opacity-10"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About Web3 Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Building the bridge between traditional web and the decentralized
            future.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-10 py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At Web3 Hub, we believe the future of the internet is
              decentralized, transparent, and user-owned. Our mission is to
              empower developers, creators, and users to build, explore, and
              thrive in the Web3 ecosystem using beautiful, performant, and
              accessible tools.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We combine cutting-edge React technologies with Ethereum and
              modern design principles to create experiences that are fast,
              secure, and delightful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="glow bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 rounded-3xl border border-blue-500/30 text-center">
              <Rocket size={64} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-2">Empowering Builders</h3>
              <p className="text-gray-400">
                From beginners to experts — everyone has a place here.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={48} className="text-green-400" />,
                title: "Security First",
                desc: "We prioritize decentralization, transparency, and best security practices in every project.",
              },
              {
                icon: <Globe size={48} className="text-blue-400" />,
                title: "Open Source & Community",
                desc: "Everything we build is open source, and we thrive on collaboration and community contributions.",
              },
              {
                icon: <HeartHandshake size={48} className="text-purple-400" />,
                title: "User Empowerment",
                desc: "We build tools that give users control over their data, identity, and digital assets.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glow bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Why Us */}
      <section className="relative z-10 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-10"
          >
            Why Choose Web3 Hub?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glow bg-slate-800/50 p-8 rounded-2xl border border-slate-700"
            >
              <Code size={48} className="mx-auto mb-6 text-blue-400" />
              <h3 className="text-2xl font-bold mb-4">Modern Tech Stack</h3>
              <p className="text-gray-300">
                React, Tailwind CSS, Framer Motion, ethers.js, and more — we use
                the best tools available.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glow bg-slate-800/50 p-8 rounded-2xl border border-slate-700"
            >
              <Users size={48} className="mx-auto mb-6 text-purple-400" />
              <h3 className="text-2xl font-bold mb-4">Active Community</h3>
              <p className="text-gray-300">
                Join thousands of developers, designers, and Web3 enthusiasts
                building the future together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Whether you're a developer, creator, or just curious about Web3 —
            there's a place for you here.
          </p>
          <motion.a
            href="/community"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-xl"
          >
            Join the Community
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
