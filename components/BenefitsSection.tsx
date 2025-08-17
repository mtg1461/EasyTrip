"use client";

import { Check, MapPin, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          Why families choose EasyTrip
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-teal-100 p-2 rounded-lg flex-shrink-0"
              variants={iconVariants}
            >
              <Shield className="w-6 h-6 text-teal-600" />
            </motion.div>
            <p className="text-lg text-slate-700">
              Predictable, step-by-step travel scripts reduce uncertainty and
              panic moments.
            </p>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-teal-100 p-2 rounded-lg flex-shrink-0"
              variants={iconVariants}
            >
              <MapPin className="w-6 h-6 text-teal-600" />
            </motion.div>
            <p className="text-lg text-slate-700">
              Sensory-aware maps highlight quiet zones and avoid crowded
              hotspots.
            </p>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-teal-100 p-2 rounded-lg flex-shrink-0"
              variants={iconVariants}
            >
              <Check className="w-6 h-6 text-teal-600" />
            </motion.div>
            <p className="text-lg text-slate-700">
              Visual schedules build confidence and make routines stick.
            </p>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-teal-100 p-2 rounded-lg flex-shrink-0"
              variants={iconVariants}
            >
              <Users className="w-6 h-6 text-teal-600" />
            </motion.div>
            <p className="text-lg text-slate-700">
              One-tap help alerts caregivers instantly with live location.
            </p>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-teal-100 p-2 rounded-lg flex-shrink-0"
              variants={iconVariants}
            >
              <Check className="w-6 h-6 text-teal-600" />
            </motion.div>
            <p className="text-lg text-slate-700">
              Less planning and fewer check-ins means more time back each week.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
