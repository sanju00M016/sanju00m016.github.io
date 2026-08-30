"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, Shield, Zap, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { resumeData } from "@/data/resume";

const typeIcons: Record<string, typeof Trophy> = { metrics: TrendingUp, wins: Zap, security: Shield, awards: Award };
const typeGrad: Record<string, string> = {
  metrics: "from-emerald-500/20 to-emerald-500/5",
  wins: "from-cyan-500/20 to-cyan-500/5",
  security: "from-violet-500/20 to-violet-500/5",
  awards: "from-amber-500/20 to-amber-500/5",
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" title="Achievements" subtitle="Key Wins">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {resumeData.achievements.map((ach, i) => {
          const Icon = typeIcons[ach.type] || Trophy;
          const grad = typeGrad[ach.type] || typeGrad.wins;
          return (
            <motion.div key={i} className="group relative rounded-2xl glass overflow-hidden hover-glow" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.06, duration: 0.5 }} whileHover={{ y: -6, scale: 1.02 }}>
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${grad}`} />
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center`}><Icon size={20} className="text-accent" /></div>
                  <span className="mono text-base sm:text-lg font-bold text-gradient">{ach.metric}</span>
                </div>
                <p className="text-sm font-medium text-[var(--text-primary)] leading-snug mb-2">{ach.item}</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{ach.context}</p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-semibold mono uppercase tracking-wider bg-white/5 text-[var(--text-secondary)] border border-white/5">{ach.type}</span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-radial from-accent/5 via-transparent to-transparent" />
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
