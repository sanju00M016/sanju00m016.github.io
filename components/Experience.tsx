"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Calendar, Sparkles } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { resumeData } from "@/data/resume";

function extractMetrics(bullet: string): string | null {
  const patterns = [/\d+%/, /\$[\d,]+[KkMm]?\+?/, /99\.\d+%/, /100%/, /~?\d+%/, /CVE-\d{4}-\d+/];
  for (const p of patterns) { const m = bullet.match(p); if (m) return m[0]; }
  return null;
}

function ExperienceCard({ exp, index }: { exp: (typeof resumeData.experience)[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const hasContent = exp.bullets.length > 0;
  const impactBullets = exp.bullets.filter((b) => extractMetrics(b));

  return (
    <motion.div className="relative" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.08, duration: 0.5 }}>
      <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/30 to-transparent hidden md:block" />
      <div className="md:pl-16 relative">
        <div className="absolute left-[18px] top-6 w-4 h-4 rounded-full border-2 border-accent bg-surface z-10 hidden md:block">
          <div className="absolute inset-1 rounded-full bg-accent animate-pulse_glow" />
        </div>
        <motion.div className="rounded-2xl glass overflow-hidden hover-glow transition-all duration-300" whileHover={{ y: -2 }}>
          <button onClick={() => hasContent && setOpen(!open)} className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4" aria-expanded={open}>
            <div className="flex-1 min-w-0">
              <h3 className="heading-md text-lg sm:text-xl text-[var(--text-primary)]">{exp.role}</h3>
              <p className="text-accent font-semibold text-sm sm:text-base">{exp.company}</p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-[var(--text-secondary)]">
                <span className="inline-flex items-center gap-1"><Calendar size={12} />{exp.dates}</span>
                <span className="inline-flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
              </div>
              {!open && impactBullets.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {impactBullets.slice(0, 3).map((b, i) => {
                    const metric = extractMetrics(b);
                    return <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold mono bg-accent/10 text-accent border border-accent/20"><Sparkles size={10} />{metric}</span>;
                  })}
                </div>
              )}
            </div>
            {hasContent && (
              <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="mt-1 text-[var(--text-secondary)]"><ChevronDown size={20} /></motion.div>
            )}
          </button>
          <AnimatePresence initial={false}>
            {open && hasContent && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                <div className="px-5 sm:px-6 pb-6 space-y-3">
                  {impactBullets.length > 0 && (
                    <div className="rounded-xl bg-accent/5 border border-accent/10 p-4 mb-4">
                      <p className="text-xs font-semibold text-accent mono tracking-wider uppercase mb-3 flex items-center gap-1.5"><Sparkles size={12} />Impact Highlights</p>
                      <div className="flex flex-wrap gap-2">
                        {impactBullets.map((b, i) => <span key={i} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-accent/10 text-accent border border-accent/20">{extractMetrics(b)}</span>)}
                      </div>
                    </div>
                  )}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <motion.li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="Career Journey">
      <div className="space-y-6">
        {resumeData.experience.map((exp, i) => (
          <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
