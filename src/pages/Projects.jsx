// src/pages/Projects.jsx
import { motion } from "framer-motion";
import { Code, Globe, Database, Lock, Zap, Rocket, Github } from "lucide-react";

export default function Projects() {
  // Sample project data – you can replace this with real data from an API, IPFS, or your own projects
  const projects = [
    {
      title: "Decentralized Marketplace",
      description:
        "A peer-to-peer NFT marketplace built on Ethereum with IPFS storage and zero-knowledge proofs for privacy.",
      tech: ["React", "ethers.js", "IPFS", "Solidity", "Tailwind CSS"],
      features: ["Gasless minting", "OpenSea compatible", "Dark mode support"],
      link: "https://github.com/yourusername/decentralized-marketplace",
      live: "https://dapp-marketplace.vercel.app",
      icon: <Database size={48} className="text-blue-400" />,
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
      icon: <Lock size={48} className="text-purple-400" />,
    },
    {
      title: "Cross-Chain Bridge",
      description:
        "Secure bridge between Ethereum, Polygon, and Arbitrum for transferring assets seamlessly.",
      tech: ["React", "Web3Modal", "ethers.js", "Chainlink CCIP"],
      features: ["Low fees", "Fast confirmations", "Security audits"],
      link: "https://github.com/yourusername/cross-chain-bridge",
      live: null,
      icon: <Zap size={48} className="text-green-400" />,
    },
    {
      title: "NFT Launchpad",
      description:
        "Platform for creators to launch and mint NFT collections with customizable smart contracts.",
      tech: ["Vite + React", "ethers.js", "Pinata IPFS", "Tailwind"],
      features: ["Lazy minting", "Royalty enforcement", "Whitelist support"],
      link: "https://github.com/yourusername/nft-launchpad",
      live: "https://nft-launchpad.example.com",
      icon: <Rocket size={48} className="text-orange-400" />,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Subtle background */}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Explore the decentralized applications and tools we're building to
            shape the future of Web3.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="glow bg-slate-800/60 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon / Header */}
                <div className="p-8 pb-4 flex justify-center">
                  <div className="p-6 bg-slate-900/50 rounded-full">
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="px-8 pb-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-center">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="text-gray-400 mb-8 space-y-2 flex-grow">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Code size={16} className="mr-2 mt-1 text-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex justify-center gap-4 mt-auto">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <GitHub size={20} />
                      GitHub
                    </motion.a>

                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                      >
                        <Globe size={20} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
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
          <h2 className="text-4xl font-bold mb-6">Want to Collaborate?</h2>
          <p className="text-xl text-gray-300 mb-10">
            We're always open to new ideas and contributors. Fork a repo or
            reach out!
          </p>
          <motion.a
            href="/community"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold text-xl"
          >
            Join the Community
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
