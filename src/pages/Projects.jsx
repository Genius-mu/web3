// src/pages/Projects.jsx
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Database,
  Lock,
  Zap,
  Rocket,
  Github,
  ExternalLink,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Decentralized Marketplace",
      description:
        "A peer-to-peer NFT marketplace built on Ethereum with IPFS storage and zero-knowledge proofs for privacy.",
      tech: ["React", "ethers.js", "IPFS", "Solidity", "Tailwind CSS"],
      features: ["Gasless minting", "OpenSea compatible", "Dark mode support"],
      link: "https://github.com/yourusername/decentralized-marketplace",
      live: "https://dapp-marketplace.vercel.app",
      icon: Database,
      color: "from-[#58a6ff] to-[#765dff]",
    },
    {
      title: "Web3 DAO Governance",
      description:
        "A fully on-chain governance platform for DAOs with proposal creation, voting, and treasury management.",
      tech: ["Next.js", "ethers.js", "Snapshot", "Tailwind", "Framer Motion"],
      features: [
        "Token-weighted voting",
        "Multi-sig treasury",
        "Real-time updates",
      ],
      link: "https://github.com/yourusername/dao-governance",
      live: "https://dao-gov.example.com",
      icon: Lock,
      color: "from-[#765dff] to-[#9c88ff]",
    },
    {
      title: "Cross-Chain Bridge",
      description:
        "Secure bridge between Ethereum, Polygon, and Arbitrum for transferring assets seamlessly.",
      tech: ["React", "Web3Modal", "ethers.js", "Chainlink CCIP"],
      features: ["Low fees", "Fast confirmations", "Security audits"],
      link: "https://github.com/yourusername/cross-chain-bridge",
      live: null,
      icon: Zap,
      color: "from-[#58a6ff] to-[#9c88ff]",
    },
    {
      title: "NFT Launchpad",
      description:
        "Platform for creators to launch and mint NFT collections with customizable smart contracts.",
      tech: ["Vite + React", "ethers.js", "Pinata IPFS", "Tailwind"],
      features: ["Lazy minting", "Royalty enforcement", "Whitelist support"],
      link: "https://github.com/yourusername/nft-launchpad",
      live: "https://nft-launchpad.example.com",
      icon: Rocket,
      color: "from-[#765dff] to-[#58a6ff]",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[rgb(var(--background-rgb))]">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(88,166,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(88,166,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#58a6ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#765dff]/10 rounded-full blur-3xl" />
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
              Our Projects
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore the decentralized applications and tools we're building to
            shape the future of Web3.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-20 w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -6 }}
                  className="group bg-gradient-to-b from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/40 hover:border-[#58a6ff]/30 transition-all duration-300 flex flex-col h-full shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Icon Header */}
                  <div className="p-8 pb-6 flex justify-center">
                    <div
                      className={`p-5 bg-gradient-to-br ${project.color}/10 rounded-2xl group-hover:${project.color}/20 transition-all duration-300`}
                    >
                      <Icon size={48} className="text-[#58a6ff]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-8 pb-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-6 text-center leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-slate-800/80 border border-slate-700/50 rounded-full text-sm text-slate-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <ul className="text-slate-400 mb-8 space-y-2.5 flex-grow">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] mt-2 mr-3 flex-shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div className="flex justify-center gap-4 mt-auto">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/60 border border-slate-700/50 rounded-xl text-[#58a6ff] hover:border-[#58a6ff]/40 transition-all duration-300 font-medium"
                      >
                        <Github size={18} />
                        GitHub
                      </motion.a>

                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#58a6ff] to-[#765dff] rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
            Want to Collaborate?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            We're always open to new ideas and contributors. Fork a repo or
            reach out!
          </p>
          <motion.a
            href="/community"
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-gradient-to-r from-[#58a6ff] via-[#765dff] to-[#9c88ff] text-white px-12 py-5 rounded-3xl font-bold text-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
          >
            Join the Community
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
