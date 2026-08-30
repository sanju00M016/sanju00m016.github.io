"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { resumeData } from "@/data/resume";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" title="Certifications" subtitle="Credentials">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resumeData.certifications.map((cert, i) => (
          <motion.div key={cert.name} className="flex items-start gap-3 rounded-xl glass p-4 hover-glow transition-all duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }} whileHover={{ y: -2, scale: 1.01 }}>
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
              <BadgeCheck size={18} className="text-amber-400" />
            </div>
            <div>
              <p className="text-sm text-[var(--text-primary)] font-medium">{cert.name}</p>
              {"code" in cert && cert.code && (
                <span className="mono text-[10px] text-accent">{cert.code}</span>
              )}
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
