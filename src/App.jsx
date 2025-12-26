// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// import { useTheme } from "./context/ThemeContext.jsx";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Community from "./pages/Community.jsx";
import Footer from "./components/Footer.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/community" element={<Community />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="min-h-screen flex items-center justify-center px-4"
            >
              <div className="text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-[#58a6ff] to-[#765dff] text-transparent bg-clip-text"
                >
                  404
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-slate-400 mb-8"
                >
                  The page you're looking for doesn't exist.
                </motion.p>
                <motion.a
                  href="/"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block bg-gradient-to-r from-[#58a6ff] to-[#765dff] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Go Home
                </motion.a>
              </div>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  // const { theme } = useTheme();

  return (
    <Router>
      <div
        className={`min-h-screen w-full transition-colors duration-300 bg-[#0c101c]`}
      >
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
