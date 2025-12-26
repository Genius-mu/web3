// src/pages/Home.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Rocket,
  Users,
  Wallet,
  Code,
  Zap,
  ArrowRight,
  Sparkles,
  Shield,
} from "lucide-react";

function Home() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const features = [
    {
      icon: Code,
      title: "Build Powerful dApps",
      desc: "Full Ethereum integration, smart contracts, IPFS, and more — all in a beautiful React environment.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Users,
      title: "Thriving Community",
      desc: "Connect with thousands of builders, join events, hackathons, and collaborate on real projects.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Blazing Fast & Secure",
      desc: "Optimized performance, gas-efficient contracts, and top-tier security practices.",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "dApps Built" },
    { value: "100+", label: "Community Events" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0c101c]">
      {/* Animated Background */}
      <motion.div className="absolute inset-0 w-full" style={{ y: bgY }}>
        {/* Wave Layers */}
        <div className="absolute inset-0 w-full opacity-30">
          <div className="water-bg animate-wave-slow w-full h-full" />
          <div className="absolute inset-0 water-bg animate-wave-fast opacity-50 w-full h-full" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 w-full pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                background: `rgba(${88 + Math.random() * 30}, ${
                  166 + Math.random() * 30
                }, 255, ${0.3 + Math.random() * 0.3})`,
              }}
              initial={{
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
              }}
              animate={{
                y: "-120vh",
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 15 + 20,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 w-full bg-[linear-gradient(to_right,rgba(88,166,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(88,166,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-20 w-full text-center pt-28 pb-32 md:pt-40 md:pb-48 px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ scale: [1, 1.015, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#58a6ff] via-[#765dff] to-[#9c88ff] text-transparent bg-clip-text">
                Welcome to Web3 Hub
              </span>
            </h1>
            <Sparkles
              className="inline-block text-[#58a6ff] animate-pulse mx-auto"
              size={40}
            />
          </motion.div>

          <motion.p
            className="text-lg md:text-2xl lg:text-3xl text-slate-300 mb-10 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The next-generation platform for building, exploring, and thriving
            in the decentralized world.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#58a6ff] to-[#765dff] text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 w-full sm:w-auto"
            >
              <Rocket className="mr-2" size={22} />
              Get Started
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.04,
                y: -3,
                borderColor: "rgba(88, 166, 255, 0.8)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0c101c]/60 backdrop-blur-md border-2 border-[#58a6ff]/40 text-[#58a6ff] px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-[#0c101c]/80 transition-all duration-300 w-full sm:w-auto"
            >
              <Wallet className="mr-2" size={22} />
              Connect Wallet
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-14 text-white"
          >
            Why Choose Web3 Hub?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -6 }}
                  className="group relative bg-gradient-to-b from-slate-900/60 to-slate-800/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/40 hover:border-[#58a6ff]/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className={`mb-5 flex justify-center`}
                  >
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color}/10 group-hover:${feature.color}/20 transition-all duration-300`}
                    >
                      <Icon size={48} className="text-[#58a6ff]" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-center text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-center leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 w-full py-20 px-4 bg-gradient-to-r from-slate-900/30 via-slate-800/30 to-slate-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
          >
            {stats.map((stat, index) => (
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
                  {stat.value}
                </h3>
                <p className="text-slate-400 text-lg font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-20 w-full py-28 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            Join thousands of builders creating the decentralized web.
          </p>
          <motion.button
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#58a6ff] via-[#765dff] to-[#9c88ff] text-white px-12 py-5 rounded-3xl font-bold text-xl flex items-center mx-auto shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
          >
            Start Building Now
            <ArrowRight className="ml-2" size={24} />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
