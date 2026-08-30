"use client";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  return (
    <motion.button onClick={toggle} className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass hover-glow flex items-center justify-center text-[var(--text-primary)] shadow-card" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Toggle theme" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
}
