"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = navItems.map((i) => i.href.replace("#", ""));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 150) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => { setMobileOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <>
      <motion.nav className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${scrolled ? "glass shadow-lg" : ""}`} initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => go("#hero")} className="text-xl font-bold heading-md text-gradient">SM</button>
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button key={item.href} onClick={() => go(item.href)} className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${active === item.href.replace("#", "") ? "text-accent" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}>
                {item.label}
                {active === item.href.replace("#", "") && (
                  <motion.div layoutId="nav-ind" className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent rounded-full" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      <button onClick={() => setMobileOpen(!mobileOpen)} className="fixed top-4 right-4 z-[60] md:hidden w-12 h-12 rounded-xl glass flex items-center justify-center text-[var(--text-primary)]" aria-label="Toggle menu">
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="fixed inset-0 z-[55] md:hidden glass-strong flex flex-col items-center justify-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {navItems.map((item, i) => (
              <motion.button key={item.href} onClick={() => go(item.href)} className="text-2xl heading-md text-[var(--text-primary)] hover:text-accent transition-colors" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
