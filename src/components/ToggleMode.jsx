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
        <Sun className="w-6 h-6 md:w-10 md:h-10 text-white" />
      ) : (
        <Moon className="w-6 h-6 md:w-10 md:h-10 text-gray-800 dark:text-gray-100" />
      )}
    </button>
  );
}
