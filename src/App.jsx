import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PersonalDetail from "./components/Image";
import Header from "./components/header";


export default function App() {
  const location = useLocation();

  return (
    <div className="bg-[#f5f5f5] min-h-screen flex">
      <div className="flex flex-col items-center justify-start w-full relative">
        <Header/>
        <div className="relative mt-28 z-10 flex flex-col md:space-x-5 md:flex-row md:container md:mx-auto">
          <PersonalDetail/>
          <div className="flex flex-col space-y-10 md:w-2/3 ">
              <Navbar/>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </AnimatePresence>
          </div>
        </div>
        
      </div>
     
    </div>
  );
}




