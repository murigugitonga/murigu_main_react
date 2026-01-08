import { useState, useEffect } from "react";
import { logoimage } from "../assets/images";
import MessageMenu from "./MessageMenu";
import ToggleMode from "./ToggleMode";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 250); // threshold for triggering compact header
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 rounded-b-lg transition-all duration-300
        ${scrolled
          ? "bg-transparent dark:bg-transparent border-none"
          : "bg-white/90 dark:bg-gray-900/80 border-b border-gray-700/40 dark:border-gray-500 backdrop-blur-sm dark:backdrop-blur-md"
        }`}
    >
      <div className="flex items-center justify-between px-4 py-2.5 lg:container lg:mx-auto transition-all duration-300">
        
        {/* Logo container */}
        <div className="flex items-center space-x-4 transition-all duration-300">
          <img
            src={logoimage}
            alt="Logo"
            className={`transition-all duration-300 w-10 h-10
              ${scrolled ? "scale-75 opacity-0" : "scale-100 opacity-100"}
            `}
          /> 
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* MessageMenu disappears on scroll */}
          <div className={`transition-all duration-300
            ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}
          `}>
            <MessageMenu />
          </div>

          {/* ToggleMode always visible */}
          <div className="flex items-center">
            <ToggleMode />
          </div>
        </div>
      </div>
    </header>
  );
}
