"use client";

import { motion } from "framer-motion";

export default function TrustEvidenceSection() {
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

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
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

  return (
    <section className="px-6 py-12 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Image Container */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-96"
            variants={imageVariants}
          >
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/TrustEvidenceImage.png"
                alt="Families and support professionals collaborating"
                className="w-full h-full object-cover aspect-[5/4]"
              />
            </motion.div>
          </motion.div>

          {/* Content Container */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={contentVariants}
          >
            <motion.h3
              className="text-2xl font-semibold text-slate-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Built with families and support professionals
            </motion.h3>

            <motion.p
              className="text-lg text-slate-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              In early pilots, families reported fewer abandoned routes, fewer
              panic moments, and fewer unnecessary help alerts.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.7,
                  },
                },
              }}
            >
              {[
                "Early Pilot",
                "U.S. Metros First",
                "Caregiver-Led Feedback",
                "Medicaid Pilot Pathway (in progress)",
              ].map((badge, index) => (
                <motion.span
                  key={badge}
                  className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-100"
                  variants={badgeVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f0fdfa",
                    borderColor: "#5eead4",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
