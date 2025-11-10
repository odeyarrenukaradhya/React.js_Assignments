import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-8 py-20">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hello, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
             Renukaradhya Odeyar C G
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
            I'm a Student — I build accessible,interactive, and impressive
            web experiences.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:shadow-lg transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg flex-shrink-0"
        >
          <img
            alt="Profile"
            src="https://media.licdn.com/dms/image/v2/D5603AQF-DOnh39GOQA/profile-displayphoto-crop_800_800/B56ZjGwwCaG4AU-/0/1755681327461?e=1762387200&v=beta&t=6dc6FnIPzv_2yzE_qOOKS7Xb2d95dTbn84myLDW14GM"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
