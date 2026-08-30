"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { resumeData } from "@/data/resume";

const items = [
  { icon: Mail, label: "Email", value: resumeData.basics.email, href: `mailto:${resumeData.basics.email}` },
  { icon: Phone, label: "Phone", value: resumeData.basics.phone, href: `tel:${resumeData.basics.phone}` },
  { icon: MapPin, label: "Location", value: resumeData.basics.location, href: null },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sanju-m", href: resumeData.basics.links.linkedin },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Contact">
      <div className="max-w-2xl mx-auto">
        <motion.p className="text-center text-[var(--text-secondary)] mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {resumeData.basics.open_to}
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isLink = !!item.href;
            const Wrapper = isLink ? "a" : "div";
            const linkProps = isLink ? { href: item.href!, target: item.href!.startsWith("http") ? "_blank" as const : undefined, rel: item.href!.startsWith("http") ? "noopener noreferrer" : undefined } : {};
            return (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}>
                <Wrapper {...linkProps} className="flex items-center gap-4 rounded-xl glass p-5 hover-glow transition-all duration-300 group cursor-pointer">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors"><Icon size={20} className="text-accent" /></div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-[var(--text-secondary)] mono uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium text-[var(--text-primary)] truncate">{item.value}</p>
                  </div>
                  {isLink && <ExternalLink size={14} className="text-[var(--text-secondary)] group-hover:text-accent transition-colors" />}
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
