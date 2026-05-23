import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function ToggleMode() {
  const [theme, setTheme] = useTheme();

  return (
    <button
      onClick={() =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
      }
      aria-label="Toggle color mode"
      className="p-2 rounded-full transition
        hover:bg-gray-200 dark:hover:bg-gray-700
        focus:outline-none"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 md:w-8 md:h-8 text-white transition-transform duration-300 rotate-90 dark:rotate-0" />
      ) : (
        //<Moon className="w-6 h-6 md:w-8 md:h-8 text-gray-800 dark:text-gray-100 transition-transform duration-300 dark:rotate-0" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-6 h-6 md:w-8 md:h-8 text-gray-800 dark:text-gray-100 transition-transform duration-300 dark:rotate-0">
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
        </svg>
      )}
    </button>
  );
}
