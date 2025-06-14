'use client';
import React from 'react';

const projects = [
  {
    title: 'Itinera.io',
    image: './Itinera.io.png',
    link: 'https://itineraio-git-main-karens-projects-ca6e76a2.vercel.app/',
    description: `I was responsible for developing the frontend of the project, which involved creating a responsive and intuitive navigation system, building key user interface components, and ensuring the entire website was optimized for performance across devices. I focused on translating design requirements into clean, maintainable code using modern frontend technologies, contributing significantly to the overall user experience and functionality of the application.`,
  },
  {
    title: 'Pokemon App',
    image: './PokemonApp.png',
    link: 'https://kumartc-pokemon-rebuild.vercel.app/',
    description: `I was assigned the task of modernizing a static website originally built using vanilla HTML, CSS, and basic JavaScript. The goal was to enhance scalability, maintainability, and performance by rebuilding the entire site from scratch using Next.js, a powerful React-based framework.`,
  },
  {
    title: 'Weather App',
    image: './WeatherApp.png',
    link: 'https://kumartc-weather-app-twux.vercel.app/',
    description: `Similar to my earlier Pokémon Rebuild project—I was tasked with rebuilding a previously developed weather application originally written in vanilla HTML, CSS, and JavaScript. The goal was to reimplement the project using a modern framework (Next.js), improve user experience, and make the codebase scalable and maintainable.`,
  },
];

function Projects() {
  return (
    <section className="py-16 bg-white dark:bg-neutral-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold dark:text-white text-gray-800 mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="" rel="">
              <div className="bg-gray-100 dark:bg-neutral-600 dark:border-neutral-600 border-gray-100 dark:shadow-xl rounded-lg shadow-md p-6 border-2 hover:scale-105 hover:border-blue-400 hover:transition-transform hover:duration-800">
                <p className="font-bold text-center text-slate-500 dark:text-white">{project.title}</p>
                <img className="h-full aspect-video mt-2" src={project.image} alt={project.title} />
                <p className="text-gray-500 dark:text-white mt-5 font-bold">Description</p>
                <p className="text-gray-500 dark:text-white mt-2 font-medium max-h-30 overflow-auto">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
