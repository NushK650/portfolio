'use client';
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Focus', value: 'Front-End' },
  { label: 'Stack', value: 'Next.js + Tailwind' },
  { label: 'Goal', value: 'Productive UX' },
];

function Home() {
  return (
    <section id="home" className="pt-32 pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="chip mb-6">Available for internships</p>
          <h1 className="text-4xl font-semibold text-white md:text-6xl">
            Building thoughtful web experiences with a focus on craft.
          </h1>
          <p className="mt-6 text-lg text-white/70 md:text-xl">
            Hi, I&apos;m Tanush Kumar. I design and build modern front-end
            interfaces that feel elegant, responsive, and reliable.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#project" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-ghost">
              Start a Conversation
            </a>
          </div>
        </div>

        <motion.div
          className="glass-panel rounded-3xl p-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Snapshot
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            Shipping polished portfolio projects and modern rebuilds.
          </h3>
          <div className="mt-6 grid gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {stat.label}
                </p>
                <p className="text-sm font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
