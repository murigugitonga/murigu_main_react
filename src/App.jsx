import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/header";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import PersonalDetail from "./components/Image";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3,
      }}
      className="bg-neutral-50 flex"
    >
      <div className="relative flex flex-col items-center justify-start w-full space-y-12 dark:bg-[#000000] md:pb-3">
        <Header />

        <div className="relative z-10 flex flex-col min-h-screen space-y-8 mt-28 md:space-x-5 md:flex-row md:mx-5 lg:gap-8 lg:container lg:mx-auto">
          <PersonalDetail />

          <div className="flex flex-col -space-y-2 xl:max-w-3xl md:w-3/4">
            <Navbar />

            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
}
