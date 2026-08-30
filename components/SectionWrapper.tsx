"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionWrapper({ id, children, className = "", title, subtitle }: { id: string; children: ReactNode; className?: string; title?: string; subtitle?: string }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
            <span className="inline-block mono text-xs tracking-[0.25em] uppercase text-accent mb-3">{subtitle}</span>
            <h2 className="heading-lg text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)]">{title}</h2>
            <div className="mt-4 mx-auto w-16 h-[2px] bg-gradient-to-r from-accent to-secondary rounded-full" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
