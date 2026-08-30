"use client";

import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0F1C]"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div className="relative mb-8" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4, ease: "easeOut" }}>
        <div className="relative w-24 h-24 flex items-center justify-center">
          <motion.div className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(from 0deg, #00E5A0, #00B4D8, #00E5A0)", opacity: 0.3 }} animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
          <div className="absolute inset-[2px] rounded-full bg-[#0A0F1C]" />
          <motion.span className="relative z-10 text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)", background: "linear-gradient(135deg, #00E5A0, #00B4D8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>
            SM
          </motion.span>
        </div>
      </motion.div>
      <motion.div className="w-48 h-[2px] rounded-full overflow-hidden bg-white/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #00E5A0, #00B4D8)" }} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 }} />
      </motion.div>
      <motion.p className="mt-4 text-xs tracking-[0.3em] uppercase text-white/30 mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.4 }}>
        Loading Portfolio
      </motion.p>
    </motion.div>
  );
}
