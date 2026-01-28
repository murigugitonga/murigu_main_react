import { useState, useEffect } from "react";
import { logoimage } from "../assets/images";
import MessageMenu from "./MessageMenu";
import ToggleMode from "./ToggleMode";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled((prev) => {
        if (window.scrollY > 300 && !prev) return true;
        if (window.scrollY <= 300 && prev) return false;
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-30 rounded-b-lg
        transition-all duration-400 ease-in-out
        ${
          scrolled
            ? "bg-transparent dark:bg-transparent border-none"
            : "bg-inherit dark:bg-black/60 border-b border-gray-700/40 dark:border-gray-500 backdrop-blur-sm dark:backdrop-blur-md"
        }
      `}
    >
      <div
        className={`
          flex items-center justify-between px-4
          transition-all duration-400 ease-in-out
          ${scrolled ? "py-1" : "py-2.5 lg:py-2.5"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logoimage}
            alt="Logo"
            className={`
              w-12 h-12 md:w-14 md:h-14
              transition-all duration-400 ease-in-out
              ${
                scrolled
                  ? "scale-75 opacity-0 translate-y-1"
                  : "scale-100 opacity-100 translate-y-0"
              }
            `}
          />
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* MessageMenu — smooth fade on scroll */}
          <div
            className={`
              transition-opacity transform
              duration-400 ease-in-out
              ${
                scrolled
                  ? "opacity-0 translate-y-1 pointer-events-none"
                  : "opacity-100 translate-y-0 pointer-events-auto"
              }
            `}
          >
            <MessageMenu />
          </div>

          {/* ToggleMode — always visible */}
          <div className="flex items-center">
            <ToggleMode />
          </div>
        </div>
      </div>
    </header>
  );
}
