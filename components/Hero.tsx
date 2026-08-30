"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { resumeData } from "@/data/resume";
import { openResumeForDownload } from "@/lib/generateResume";

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="mono text-xs tracking-wider text-[var(--text-secondary)]">{resumeData.basics.open_to.split(".")[0]}</span>
        </motion.div>

        <motion.h1 className="heading-xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <span className="text-[var(--text-primary)]">{resumeData.basics.name}</span>
        </motion.h1>

        <motion.p className="heading-md text-lg sm:text-xl md:text-2xl text-gradient mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }}>
          SRE 2 &middot; DevSecOps &middot; Cloud Security &middot; Platform Engineering
        </motion.p>

        <motion.p className="body-lg text-base sm:text-lg max-w-2xl mx-auto text-[var(--text-secondary)] mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
          Building reliable cloud platforms with SRE, DevSecOps, and AI-assisted engineering. 5+ years working across AWS, Kubernetes, Terraform, CI/CD, observability, and cloud security, automating infrastructure, improving reliability, accelerating developer workflows, and operating production platforms at scale. AWS SAA-C03 certified, M.Tech in Cloud Computing from BITS Pilani.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.5 }}>
          <button onClick={() => scrollTo("experience")} className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-surface bg-accent hover:shadow-glow-lg transition-all duration-300 overflow-hidden">
            <span className="relative z-10">View Experience</span>
            <ArrowDown size={18} className="relative z-10 group-hover:translate-y-0.5 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button onClick={openResumeForDownload} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold glass hover-glow text-[var(--text-primary)] transition-all duration-300">
            <FileDown size={18} />
            <span>Download Resume</span>
          </button>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
            <motion.div className="w-1 h-2 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
