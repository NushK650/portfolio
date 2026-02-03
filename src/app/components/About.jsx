"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { FaHtml5, FaCss3, FaPython, FaBootstrap, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BsFiletypeJson, BsFiletypeSql } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { TbBrandCSharp, TbBrandReactNative } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

const skills = [
  { name: "HTML", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3 },
  { name: "JavaScript", Icon: IoLogoJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: FaReact },
  { name: "React Native", Icon: TbBrandReactNative },
  { name: "Next.js", Icon: RiNextjsFill },
  { name: "Node.js", Icon: FaNode },
  { name: "C#", Icon: TbBrandCSharp },
  { name: "Azure", Icon: VscAzure },
  { name: "SQL", Icon: BsFiletypeSql },
  { name: "JSON", Icon: BsFiletypeJson },
  { name: "Tailwind", Icon: RiTailwindCssFill },
  { name: "Bootstrap", Icon: FaBootstrap },
  { name: "Python", Icon: FaPython },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="glass-panel rounded-4xl p-8 md:p-10">
            <p className="chip mb-6">About me</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              A builder focused on clarity, polish, and long-term maintainability.
            </h2>
            <p className="mt-6 text-white/70">
              Hi, I&apos;m Tanush Kumar, a web developer with a particular passion
              for front-end development. I love turning complex problems into
              elegant interfaces with thoughtful interactions and structure.
            </p>
            <p className="mt-4 text-white/70">
              My goal is to create reliable, user-friendly products that feel
              calm and intentional while staying scalable and easy to evolve.
            </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-panel rounded-4xl p-8 md:p-10">
            <p className="chip mb-6">Approach</p>
            <div className="space-y-5 text-white/70">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Design for flow</p>
                <p className="text-sm">
                  I focus on clarity, hierarchy, and rhythm so each screen feels
                  calm and intuitive.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Build for scale</p>
                <p className="text-sm">
                  Components stay flexible with reusable patterns and clean
                  architecture.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Ship thoughtfully</p>
                <p className="text-sm">
                  I iterate fast while maintaining accessibility, performance,
                  and polish.
                </p>
              </div>
            </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="section-title mb-6">Toolkit</h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skill.Icon;
              return (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white/80"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  viewport={{ once: true }}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/5 text-white">
                    <Icon size={22} />
                  </div>
                  <p className="text-sm font-semibold">{skill.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
