
import React from 'react';

function Projects() {
  return (
    <section id="project" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">

          <a href="https://itineraio-git-main-karens-projects-ca6e76a2.vercel.app/">
          <div className="bg-gray-100 rounded-lg shadow-md p-6 border-2 hover:scale-105 hover:border-2  hover:border-blue-400 hover:transition-transform hover:duration-800">
            <p className=' font-bold text-center text-slate-500'>Itinera.io</p>
            <img className='h-full aspect-video mt-2' src="./Itinera.io.png" alt="Itinera.io" />
            <p className='text-gray-500 mt-5 font-bold'>Description</p>
            <p className='text-gray-500 mt-2 font-medium max-h-30 overflow-auto'>I was responsible for developing the frontend of the project, which involved creating a responsive and intuitive navigation system, building key user interface components, and ensuring the entire website was optimized for performance across devices. I focused on translating design requirements into clean, maintainable code using modern frontend technologies, contributing significantly to the overall user experience and functionality of the application. </p>
            </div>
          </a>
          <a href="https://kumartc-weather-app-twux.vercel.app/">
          <div className="bg-gray-100 rounded-lg shadow-md p-6  border-2 hover:scale-105 hover:border-2  hover:border-blue-400  hover:transition-transform hover:duration-800"> 
            <p className=' font-bold text-center text-slate-500'>Weather App </p>
          <img className='h-full aspect-video mt-2' src="./WeatherApp.png" alt="Weather App" />
          <p className='text-gray-500 mt-5 font-bold'>Description</p>
          <p className='text-gray-500 mt-2 font-medium max-h-30 overflow-auto'>Similar to my earlier Pokémon Rebuild project—I was tasked with rebuilding a previously developed weather application originally written in vanilla HTML, CSS, and JavaScript. The goal was to reimplement the project using a modern framework (Next.js), improve user experience, and make the codebase scalable and maintainable. </p>
          </div>
          </a>
          <a href="https://kumartc-pokemon-rebuild.vercel.app/">
          <div className="bg-gray-100 rounded-lg shadow-md p-6  border-2 hover:scale-105 hover:border-2  hover:border-blue-400 hover:transition-transform hover:duration-800"> 
            <p className=' font-bold text-center text-slate-500'>Pokemon App</p>
          <img className='h-full aspect-video mt-2' src="./PokemonApp.png" alt="Pokemon App" />
          <p className='text-gray-500 mt-5 font-bold'>Description</p>
          <p className='text-gray-500 mt-2 font-medium max-h-30 overflow-auto'>I was assigned the task of modernizing a static website originally built using vanilla HTML, CSS, and basic JavaScript. The goal was to enhance scalability, maintainability, and performance by rebuilding the entire site from scratch using Next.js, a powerful React-based framework. Weather app rebuild | Project 

Similarly to the Pokémon rebuild I had built the same project in Vanilla Html and rebuilt it in Next.js from scratch  </p>
          </div>
          </a>
        
        </div>
      </div>
    </section>
  );
}

export default Projects;