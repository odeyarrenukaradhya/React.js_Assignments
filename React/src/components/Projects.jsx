import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import { projects as initialProjects } from "../data";
import { motion } from "framer-motion";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [modalItem, setModalItem] = useState(null);
  const visible = initialProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold mb-6"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setModalItem} />
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {visibleCount < initialProjects.length && (
            <button
              onClick={() =>
                setVisibleCount((c) => Math.min(c + 3, initialProjects.length))
              }
              className="px-4 py-2 rounded-lg border"
            >
              Show more
            </button>
          )}
          {visibleCount > 3 && (
            <button
              onClick={() => setVisibleCount(3)}
              className="px-4 py-2 rounded-lg border"
            >
              Show less
            </button>
          )}
        </div>
      </div>

      <Modal item={modalItem} onClose={() => setModalItem(null)} />
    </section>
  );
}
