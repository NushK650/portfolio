import React from "react";

const skills = [
  { name: 'HTML', image: './Html.png' },
  { name: 'CSS', image: './Css.png' },
  { name: 'JavaScript', image: './JavaScript.png' },
  { name: 'TypeScript', image: './TypeScript.png' },
  { name: 'React', image: './React.png' },
  { name: 'React Native', image: './React.png' },
  { name: 'Next.js', image: './NextJS.png' },
  { name: 'Node.js', image: 'NodeJS.png' },
  { name: 'C#', image: './CSharp.png' },
  { name: 'Azure', image: './Azure.png' },
  { name: 'SQL', image: 'Sql.png' },
  { name: 'JSON', image: 'Json.png' },
];

function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-700">
          Hi, I'm Tanush Kumar , a web developer with a particular passion for
          front-end development. There's something truly rewarding about seeing
          the direct impact of my work come to life on the screen. I thrive on
          the challenge of problem-solving and I'm a dedicated lifelong learner,
          always eager to explore new technologies and approaches. My goal is to
          build lasting, well-crafted applications that not only function
          seamlessly but also provide genuine value and help others. I'm deeply
          interested in creating solutions that are robust, user-friendly, and
          built to stand the test of time.
        </p>

        <h2 id="skills" className="text-3xl font-semibold text-gray-800 mb-6 mt-12">
          Skills
        </h2>
        <div className="grid grid-cols-6  gap-10">
          {skills.map((skill) => (
            <div className="place-items-center" key={skill.name}>
              <img src={skill.image} alt={skill.name} />
              <h3 className="text-center text-slate-500 font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;