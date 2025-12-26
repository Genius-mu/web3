// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  MessageSquare,
  Mail,
  Heart,
  ExternalLink,
  Send,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Community", path: "/community" },
    ],
    resources: [
      { name: "Documentation", path: "#" },
      { name: "API Reference", path: "#" },
      { name: "GitHub", path: "https://github.com/web3hub", external: true },
      { name: "Blog", path: "#" },
    ],
    legal: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
      { name: "Cookie Policy", path: "#" },
      { name: "Disclaimer", path: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/web3hub",
      color: "hover:text-slate-300",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/web3hub",
      color: "hover:text-[#58a6ff]",
    },
    {
      name: "Discord",
      icon: MessageSquare,
      url: "https://discord.gg/web3hub",
      color: "hover:text-[#765dff]",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:hello@web3hub.dev",
      color: "hover:text-[#9c88ff]",
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0c101c] to-[#08090f] border-t border-slate-800/50">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#58a6ff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#765dff]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block text-2xl font-black bg-gradient-to-r from-[#58a6ff] to-[#765dff] text-transparent bg-clip-text mb-4"
            >
              Web3 Hub
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Building the infrastructure for the next generation of the
              internet—decentralized, open, and owned by everyone.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-400 ${social.color} transition-all duration-300`}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-[#58a6ff] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#58a6ff] transition-colors duration-200 text-sm inline-flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-[#58a6ff] transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-[#58a6ff] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold mb-2">Stay Updated</h3>
              <p className="text-slate-400 text-sm">
                Get the latest Web3 news and updates delivered to your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-slate-800/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#58a6ff]/50 transition-colors duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#58a6ff] to-[#765dff] text-white rounded-xl font-medium flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  Subscribe
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} Web3 Hub. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Built with
              <Heart size={14} className="text-red-400 fill-red-400" />
              by the Web3 community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
