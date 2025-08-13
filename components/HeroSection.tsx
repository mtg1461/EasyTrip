"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Props = { onCTA: () => void };

// Lightweight particle field using <canvas>
function ParticleField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return; // Respect user motion preferences

    const state = {
      width: 0,
      height: 0,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      particles: [] as {
        x: number;
        y: number;
        vx: number;
        vy: number;
        r: number;
      }[],
    };

    function resize() {
      const rect = canvas.getBoundingClientRect();
      state.width = Math.floor(rect.width);
      state.height = Math.floor(rect.height);
      canvas.width = Math.floor(state.width * state.dpr);
      canvas.height = Math.floor(state.height * state.dpr);
      if (ctx == null) return;
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0); // draw in CSS pixels

      // Particle count scales with area, capped for perf
      const target = Math.min(
        140,
        Math.floor((state.width * state.height) / 26000)
      );
      const current = state.particles.length;
      if (current < target) {
        for (let i = 0; i < target - current; i++) {
          state.particles.push(spawn());
        }
      } else if (current > target) {
        state.particles.length = target;
      }
    }

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function spawn() {
      const speed = rand(0.05, 0.25); // slow
      const angle = Math.random() * Math.PI * 2;
      return {
        x: rand(0, state.width),
        y: rand(0, state.height),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: rand(1.2, 3.0),
      };
    }

    function step() {
      if (ctx == null) return;
      // Clear with small alpha to keep trails subtle and ultra lightweight
      ctx.clearRect(0, 0, state.width, state.height);

      // Draw particles
      ctx.globalAlpha = 0.7;
      ctx.fillStyle = "#4C9E47";

      for (let i = 0; i < state.particles.length; i++) {
        const p = state.particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < p.r) {
          p.x = p.r;
          p.vx *= -1;
        } else if (p.x > state.width - p.r) {
          p.x = state.width - p.r;
          p.vx *= -1;
        }
        if (p.y < p.r) {
          p.y = p.r;
          p.vy *= -1;
        } else if (p.y > state.height - p.r) {
          p.y = state.height - p.r;
          p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    }

    const handleResize = () => resize();
    const handleVisibility = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    resize();
    rafRef.current = requestAnimationFrame(step);

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={
        "pointer-events-none absolute inset-0 h-full w-full " + className
      }
      aria-hidden
    />
  );
}

export default function HeroSection({ onCTA }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 z-0"
        style={{ backgroundImage: "url('/heroimage.jpg')" }}
      />

      {/* Particle Layer (between bg image and gradient) */}
      <ParticleField className="z-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/30 z-20" />

      {/* Central Content */}
      <div className="relative z-30 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm text-slate-600 mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Safety for routine errands
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            Make every trip
            <br />
            <span className="text-teal-600">a calm one.</span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-slate-700 mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          >
            Visual steps, quiet routes, and live caregiver updates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={onCTA}
              className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 focus:ring-4 focus:ring-teal-300 focus:outline-none shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
              aria-label="See EasyTrip in action"
            >
              See EasyTrip in action
            </button>
          </motion.div>

          <motion.p
            className="text-sm text-slate-600 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            Takes 2 minutes • Not an emergency service
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
