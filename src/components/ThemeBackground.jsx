import { motion } from "framer-motion";
import useTheme from "./useTheme";

export default function ThemeBackground({ children }) {
  const { theme } = useTheme();

  const lightGradient = `
    radial-gradient(circle at top left, #ffffff, #dfe9ff, #c1d4ff)
  `;

  const darkGradient = `
    radial-gradient(circle at bottom right, #0f172a, #1e293b, #334155)
  `;

  return (
    <motion.div
      initial={false}
      animate={{
        background: theme === "dark" ? darkGradient : lightGradient,
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="min-h-screen w-full transition-colors"
    >
      {children}
    </motion.div>
  );
}
