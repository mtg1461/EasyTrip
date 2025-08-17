"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        delay: 0.2,
      },
    },
  };

  const authorVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        delay: 0.4,
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
          What caregivers are saying
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-lg text-slate-700 mb-4 italic"
              variants={quoteVariants}
            >
              &ldquo;For the first time, I wasn&rsquo;t texting every five
              minutes. Our grocery trip was calm.&rdquo;
            </motion.p>
            <motion.p
              className="text-sm text-slate-600"
              variants={authorVariants}
            >
              — Maya R., caregiver and pilot participant (Seattle)
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-lg text-slate-700 mb-4 italic"
              variants={quoteVariants}
            >
              &ldquo;I could follow the pictures and knew where the quiet spots
              were.&rdquo;
            </motion.p>
            <motion.p
              className="text-sm text-slate-600"
              variants={authorVariants}
            >
              — J., autistic adult and pilot participant
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
