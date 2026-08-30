"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { topImpact } from "@/data/resume";
import { TrendingUp, Eye, Zap } from "lucide-react";

const icons = [TrendingUp, Eye, Zap];

function Counter({ value, suffix, inView }: { value: string; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const num = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isNum = !isNaN(num);
  const prefix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (!inView || !isNum) return;
    let start = 0;
    const end = num;
    const dur = 1500;
    const step = Math.max(0.01, end / (dur / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(parseFloat(start.toFixed(2)));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, num, isNum]);

  const display = isNum ? `${prefix}${num % 1 !== 0 ? count.toFixed(2) : Math.round(count)}` : value;
  return <span className="text-3xl sm:text-4xl md:text-5xl heading-xl text-gradient">{display}{suffix}</span>;
}

export default function TopImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-12 sm:py-16">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {topImpact.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={item.label} className="relative group rounded-2xl glass p-6 sm:p-8 text-center hover-glow transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -4 }}>
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center"><Icon size={20} className="text-accent" /></div>
                </div>
                <Counter value={item.value} suffix={item.suffix} inView={inView} />
                <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">{item.label}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
