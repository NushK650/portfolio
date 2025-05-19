"use client"
import { motion } from "framer-motion";
import React from "react";

const skills = [
  { name: "HTML", image: "./Html.png" },
  { name: "CSS", image: "./Css.png" },
  { name: "JavaScript", image: "./JavaScript.png" },
  { name: "TypeScript", image: "./TypeScript.png" },
  { name: "React", image: "./React.png" },
  { name: "React Native", image: "./React.png" },
  { name: "Next.js", image: "./NextJS.png" },
  { name: "Node.js", image: "NodeJS.png" },
  { name: "C#", image: "./CSharp.png" },
  { name: "Azure", image: "./Azure.png" },
  { name: "SQL", image: "Sql.png" },
  { name: "JSON", image: "Json.png" },
  { name: "Tailwind", image: "./TailWind.png" },
  { name: "BootStrap", image: "./bootstrap.png" },
];

function About() {
  const repeatedSkills = [...skills, ...skills]; // duplicate for seamless loop

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-700">
          Hi, I'm Tanush Kumar, a web developer with a particular passion for
          front-end development. There's something truly rewarding about seeing
          the direct impact of my work come to life on the screen. I thrive on
          the challenge of problem-solving and I'm a dedicated lifelong learner,
          always eager to explore new technologies and approaches. My goal is to
          build lasting, well-crafted applications that not only function
          seamlessly but also provide genuine value and help others. I'm deeply
          interested in creating solutions that are robust, user-friendly, and
          built to stand the test of time.
        </p>

        <h2
          id="skills"
          className="text-3xl font-semibold text-gray-800 mb-6 mt-12"
        >
          Skills
        </h2>

        <div className="relative overflow-hidden w-full py-4">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {repeatedSkills.map((skill, index) => (
              <div
                className="flex flex-col items-center min-w-[100px]"
                key={index}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-center text-slate-500 font-semibold mt-2">
                  {skill.name}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
