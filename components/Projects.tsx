"use client";

import { motion } from "framer-motion";
import { Layers, Code2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { resumeData } from "@/data/resume";

export default function Projects() {
  if (resumeData.projects.length === 0) return null;

  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Hands-on Work">
      <div className="max-w-4xl mx-auto space-y-6">
        {resumeData.projects.map((proj, i) => (
          <motion.div key={proj.title} className="rounded-2xl glass overflow-hidden hover-glow" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Layers size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="heading-md text-lg sm:text-xl text-[var(--text-primary)]">{proj.title}</h3>
                  <p className="text-sm text-accent font-medium mt-0.5">{proj.context}</p>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {proj.stack.map((tech) => (
                  <span key={tech} className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                    <Code2 size={10} />
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                {proj.bullets.map((bullet, j) => (
                  <motion.li key={j} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.05 }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
