"use client";

import { motion } from "framer-motion";

type Props = { onCTA: () => void };

export default function FinalCTASection({ onCTA }: Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headlineVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const subheadVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const disclaimerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="px-6 py-16 bg-gradient-to-b from-teal-50 to-white">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2
          className="text-3xl lg:text-4xl font-bold mb-4"
          variants={headlineVariants}
        >
          Ready for calmer, safer trips?
        </motion.h2>

        <motion.p
          className="text-xl text-slate-700 mb-8"
          variants={subheadVariants}
        >
          See exactly how the Safety Demo works and what you&rsquo;ll get.
        </motion.p>

        <motion.button
          onClick={onCTA}
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 focus:ring-4 focus:ring-teal-300 focus:outline-none"
          aria-label="See EasyTrip in action"
          variants={buttonVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(13, 148, 136, 0.3)",
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
            y: 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            initial={{ opacity: 1 }}
            whileHover={{
              textShadow: "0 0 8px rgba(255,255,255,0.3)",
            }}
            transition={{ duration: 0.2 }}
          >
            See EasyTrip in action
          </motion.span>
        </motion.button>

        <motion.p
          className="text-sm text-slate-600 mt-3"
          variants={disclaimerVariants}
        >
          Takes 2 minutes • Not an emergency service
        </motion.p>
      </motion.div>
    </section>
  );
}
