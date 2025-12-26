import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Wallet, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BrowserProvider, formatEther } from "ethers";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);

        const bal = await provider.getBalance(accounts[0]);
        setBalance(formatEther(bal));
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask not detected!");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Community", path: "/community" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="sticky top-0 z-50 bg-[#0c101c]/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-black bg-gradient-to-r from-[#58a6ff] to-[#765dff] text-transparent bg-clip-text hover:from-[#765dff] hover:to-[#9c88ff] transition-all duration-300"
            >
              Web3 Hub
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200 font-medium group"
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#765dff]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {!isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#765dff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right side: Wallet + Theme Toggle + Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Wallet Button - Hidden on small screens */}
              <motion.button
                onClick={connectWallet}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center bg-gradient-to-r from-[#58a6ff] to-[#765dff] hover:from-[#765dff] hover:to-[#9c88ff] text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                <Wallet className="mr-2" size={18} />
                <span className="text-sm">
                  {walletAddress
                    ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(
                        -4
                      )}`
                    : "Connect"}
                </span>
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={20} className="text-[#58a6ff]" />
                ) : (
                  <Moon size={20} className="text-[#765dff]" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X size={20} className="text-slate-300" />
                ) : (
                  <Menu size={20} className="text-slate-300" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-[#0c101c]/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-[#58a6ff]/10 to-[#765dff]/10 text-[#58a6ff] border border-[#58a6ff]/30"
                          : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Wallet Button */}
              <motion.button
                onClick={() => {
                  connectWallet();
                  setMobileMenuOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="w-full flex items-center justify-center bg-gradient-to-r from-[#58a6ff] to-[#765dff] text-white px-4 py-3 rounded-xl font-medium shadow-lg shadow-blue-500/20"
              >
                <Wallet className="mr-2" size={18} />
                {walletAddress
                  ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                  : "Connect Wallet"}
              </motion.button>

              {/* Balance display if connected */}
              {balance && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-slate-400"
                >
                  Balance: {Number(balance).toFixed(4)} ETH
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
