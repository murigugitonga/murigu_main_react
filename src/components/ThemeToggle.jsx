import { motion } from "framer-motion";
import useTheme from "./useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  // Preload audio
  const clickSound = new Audio("/sounds/toggle-click.mp3");
  const whooshSound = new Audio("/sounds/toggle-whoosh.mp3");

  const handleToggle = () => {
    clickSound.volume = 0.25;
    whooshSound.volume = 0.15;

    clickSound.play();

    setTimeout(() => {
      whooshSound.play();
    }, 100); // a slight delay feels more natural

    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      className="
        relative flex items-center h-10 w-20 px-2 rounded-full
        bg-gray-300 dark:bg-gray-700
        transition-colors duration-300
        shadow-inner
        hover:shadow-lg
      "
    >
      {/* Sun Icon */}
      <motion.span
        initial={false}
        animate={{ opacity: isDark ? 0 : 1, rotate: isDark ? -90 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute left-3 text-yellow-500 text-xl"
      >
        ☀️
      </motion.span>

      {/* Moon Icon */}
      <motion.span
        initial={false}
        animate={{ opacity: isDark ? 1 : 0, rotate: isDark ? 0 : 90 }}
        transition={{ duration: 0.3 }}
        className="absolute right-3 text-blue-300 text-xl"
      >
        🌙
      </motion.span>

      {/* Sliding knob */}
      <motion.div
        initial={false}
        animate={{
          x: isDark ? 40 : 0,
          backgroundColor: isDark ? "#1f2937" : "#f3f4f6",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="
          h-8 w-8 rounded-full shadow-md
          border border-gray-400 dark:border-gray-600
        "
      />
    </button>
  );
}
