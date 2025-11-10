import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-green-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify">
            I design and develop secure, scalable web applications with a strong
            focus on frontend performance, and system reliability.
            With experience in HTML,CSS,JS,React.Js, and full-stack projects,
            along with certifications in cloud, python,I bring both technical depth and a passion 
            for building robust digital solutions.
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li>Building responsive and accessible UIs</li>
            <li>Component-driven development using React</li>
            <li>Design impressive UI's using Figma</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
