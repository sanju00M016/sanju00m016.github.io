"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer className="relative z-10 py-8 border-t border-white/5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs text-[var(--text-secondary)]">&copy; {new Date().getFullYear()} Sanju M &mdash; Built with Next.js, TailwindCSS &amp; Framer Motion</p>
      </div>
    </motion.footer>
  );
}
