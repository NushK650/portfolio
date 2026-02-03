'use client';
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Pokemon Rebuild',
    link: 'https://kumartc-pokemon-rebuild.vercel.app/',
    description:
      'Modernized a static Pokémon site with Next.js, emphasizing scalable structure, faster performance, and a refreshed UI.',
    tags: ['Next.js', 'UI Rebuild', 'Performance'],
  },
  {
    title: 'Weather Experience',
    link: 'https://kumartc-weather-app-twux.vercel.app/',
    description:
      'Rebuilt a weather app with a modern front-end stack, improving the UX with clearer data hierarchy and responsive layouts.',
    tags: ['Next.js', 'Responsive', 'API UX'],
  },
];

function Projects() {
  return (
    <section id="project" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="chip mb-4">Selected Work</p>
          <h2 className="section-title">Projects That Showcase Craft</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            A curated set of rebuilds and product-focused experiments that
            highlight modern tooling, clean layout systems, and care for detail.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel rounded-4xl p-6 transition group-hover:-translate-y-1">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  <iframe
                    src={project.link}
                    title={project.title}
                    className="aspect-video w-full"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  {project.description}
                </p>
                <p className="mt-6 text-sm font-semibold text-[#f4b259]">
                  View live project
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
