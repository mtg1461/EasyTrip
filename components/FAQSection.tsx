"use client";

import { motion } from "framer-motion";

export default function FAQSection() {
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
      x: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const questionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const answerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        delay: 0.1,
      },
    },
  };

  const faqData = [
    {
      question: "Who is EasyTrip for?",
      answer:
        "Non-speaking autistic adults living semi-independently in U.S. metros, plus their caregivers and support professionals.",
    },
    {
      question: "How does one-tap help work?",
      answer:
        "If the traveler taps help, caregivers receive an instant alert with live location and simple next steps.",
    },
    {
      question: "Is EasyTrip accessible?",
      answer:
        "Yes—clear visual schedules, large touch targets, high contrast, and optional reduced motion.",
    },
    {
      question: "Do you store personal data?",
      answer:
        "We use industry-standard encryption and only the data needed to provide the service. See our Privacy Policy.",
    },
    {
      question: "Will it work in my city?",
      answer:
        "We're focused on U.S. metros first. The demo will show current coverage.",
    },
    {
      question: "Is this a medical device or emergency service?",
      answer:
        "No. EasyTrip supports daily independence but is not a substitute for 911 or clinical care.",
    },
    {
      question: "Is Medicaid covered?",
      answer:
        "A Medicaid reimbursement pilot pathway is in progress. We'll share updates inside the demo.",
    },
  ];

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                x: 8,
                transition: { duration: 0.2 },
              }}
            >
              <motion.h3
                className="text-xl font-semibold mb-2"
                variants={questionVariants}
              >
                {faq.question}
              </motion.h3>
              <motion.p className="text-slate-700" variants={answerVariants}>
                {faq.answer}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
