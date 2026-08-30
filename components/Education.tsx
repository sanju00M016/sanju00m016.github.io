"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { resumeData } from "@/data/resume";

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education" subtitle="Academic Path">
      <div className="max-w-3xl mx-auto space-y-5">
        {resumeData.education.map((edu, i) => (
          <motion.div key={edu.institution} className="rounded-2xl glass p-6 hover-glow transition-all duration-300" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -3 }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={22} className="text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="heading-md text-base sm:text-lg text-[var(--text-primary)]">{edu.degree}</h3>
                <p className="text-accent text-sm font-medium mt-0.5">{edu.field}</p>
                <p className="text-sm text-[var(--text-secondary)] mt-1">{edu.institution}</p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-[var(--text-secondary)]">
                  <Calendar size={12} />{edu.dates}
                </span>
                {edu.notes && (
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Award size={12} />{edu.notes}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
