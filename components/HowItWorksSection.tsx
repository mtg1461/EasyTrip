"use client";

import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="px-6 py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          How EasyTrip works
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              n: "1",
              title: "Plan",
              text: "Enter a destination and EasyTrip generates a clear, visual travel script tailored to routine and sensory needs.",
            },
            {
              n: "2",
              title: "Go",
              text: "Follow the sensory-aware map with quiet-zone cues and simple steps that make wayfinding feel predictable.",
            },
            {
              n: "3",
              title: "Stay in sync",
              text: "Caregivers see automatic check-ins and can respond if the one-tap help signal is sent.",
            },
          ].map((item) => (
            <motion.div
              key={item.n}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                variants={numberVariants}
              >
                <span className="text-xl font-bold text-teal-600">
                  {item.n}
                </span>
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-slate-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
