import { Link } from "react-router-dom";
import { Moon, Sun, Wallet } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { BrowserProvider, formatEther } from "ethers"; // Fixed import

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);

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

  // Navigation links data
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Community", path: "/community" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="sticky top-0 z-50 bg-slate-800/80 dark:bg-slate-900/80 backdrop-blur-md p-4 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white dark:text-gray-200 hover:text-blue-400 transition-colors"
        >
          Web3 Hub
        </Link>

        {/* Navigation Links - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side: Wallet + Theme Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={connectWallet}
            className="glow bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center transition-all duration-300"
          >
            <Wallet className="mr-2" size={18} />
            {walletAddress
              ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)} (${
                  balance ? `${Number(balance).toFixed(4)} ETH` : "..."
                })`
              : "Connect Wallet"}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
