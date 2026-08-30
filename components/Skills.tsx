"use client";

import { motion } from "framer-motion";
import { Cloud, Container, FileCode, GitBranch, Shield, BarChart3, Network, Terminal, Monitor, Server, DollarSign } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { resumeData } from "@/data/resume";

const groupIcons: Record<string, typeof Cloud> = {
  "Cloud": Cloud,
  "Containers & Orchestration": Container,
  "Infrastructure as Code": FileCode,
  "CI/CD & DevOps": GitBranch,
  "Security & Compliance": Shield,
  "Observability & Monitoring": BarChart3,
  "Networking": Network,
  "Scripting & Languages": Terminal,
  "Operating Systems": Monitor,
  "Middleware & Web Servers": Server,
  "Governance & FinOps": DollarSign,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills" subtitle="Technical Arsenal">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {resumeData.skills.map((group, gi) => {
          const Icon = groupIcons[group.group] || Terminal;
          return (
            <motion.div key={group.group} className="rounded-2xl glass p-5 hover-glow transition-all duration-300" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.05, duration: 0.4 }} whileHover={{ y: -3 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="heading-md text-sm text-[var(--text-primary)]">{group.group}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded-md text-[11px] text-[var(--text-secondary)] bg-white/5 border border-white/5 hover:text-accent hover:border-accent/20 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
