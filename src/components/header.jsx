import { useState, useEffect } from "react";
import { logoimage } from "../assets/images";
import MessageMenu from "./MessageMenu";
import ToggleMode from "./ToggleMode";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500); // threshold for triggering compact header
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 rounded-b-lg transition-all duration-300
        ${scrolled
          ? "bg-transparent dark:bg-transparent border-none"
          : "bg-inherit dark:bg-black/60 border-b border-gray-700/40 dark:border-gray-500 backdrop-blur-sm dark:backdrop-blur-md"
        }`}
    >
      <div
        className={`flex items-center justify-between px-4 transition-all duration-300
          ${scrolled ? "py-1" : "py-2.5 lg:py-2.5"}
        `}
      >
        {/* Logo container */}
        <div className="flex items-center space-x-4 transition-all duration-300">
          <img
            src={logoimage}
            alt="Logo"
            className={`transition-all duration-300 w-12 h-12 md:w-14 md:h-14
              ${scrolled
                ? "scale-50 opacity-0 delay-150" // shrink first, then fade
                : "scale-100 opacity-100 delay-0"
              }
            `}
          />
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* MessageMenu disappears on scroll */}
          <div
            className={`transition-all duration-300
              ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}
            `}
          >
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
