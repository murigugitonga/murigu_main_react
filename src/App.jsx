import { Routes, Route, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import PersonalDetail from "./components/Image";
import Header from "./components/Header";
import Footer from "./components/Footer";



export default function App() {
  const location = useLocation();

  return (
    <div className="bg-[#f5f5f5] flex">
      <div className="relative flex flex-col items-center justify-start w-full space-y-12">
        <Header/>
        <div className="relative z-10 flex flex-col min-h-screen space-y-8 mt-28 md:space-x-5 md:flex-row md:mx-5 lg:gap-8 lg:container lg:mx-auto">
          <PersonalDetail/>
          <div className="flex flex-col -space-y-2 xl:max-w-3xl md:w-3/4">
              <Navbar/>
              
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                  </Routes>
                </AnimatePresence>
              
          </div>
        </div>
        <Footer/>
      </div>
     
    </div>
  );
}




