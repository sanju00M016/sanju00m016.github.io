"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle { x: number; y: number; vx: number; vy: number; radius: number; opacity: number; }

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particles = useRef<Particle[]>([]);

  const count = useCallback(() => {
    if (typeof window === "undefined") return 40;
    return window.innerWidth < 768 ? 25 : window.innerWidth < 1280 ? 40 : 60;
  }, []);

  const init = useCallback((w: number, h: number) => {
    const n = count();
    const arr: Particle[] = [];
    for (let i = 0; i < n; i++) {
      arr.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5, opacity: Math.random() * 0.4 + 0.1,
      });
    }
    particles.current = arr;
  }, [count]);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; init(c.width, c.height); };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      // Gradient mesh
      const g1 = ctx.createRadialGradient(c.width * 0.3, c.height * 0.2, 0, c.width * 0.3, c.height * 0.2, c.width * 0.6);
      g1.addColorStop(0, "rgba(0,229,160,0.03)"); g1.addColorStop(0.5, "rgba(0,180,216,0.015)"); g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1; ctx.fillRect(0, 0, c.width, c.height);
      const g2 = ctx.createRadialGradient(c.width * 0.8, c.height * 0.7, 0, c.width * 0.8, c.height * 0.7, c.width * 0.5);
      g2.addColorStop(0, "rgba(0,180,216,0.025)"); g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2; ctx.fillRect(0, 0, c.width, c.height);

      const ps = particles.current;
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > c.width) p.vx *= -1;
        if (p.y < 0 || p.y > c.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,160,${p.opacity})`; ctx.fill();
        for (let j = i + 1; j < ps.length; j++) {
          const q = ps[j]; const dx = p.x - q.x; const dy = p.y - q.y; const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,229,160,${(1 - d / 120) * 0.08})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animRef.current); };
  }, [init]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" style={{ pointerEvents: "none" }} aria-hidden="true" />;
}
