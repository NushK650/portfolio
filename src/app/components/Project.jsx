
import React from 'react';

function Projects() {
  return (
    <section id="project" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <a href="https://itineraio-git-main-karens-projects-ca6e76a2.vercel.app/">
          <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:scale-105 hover:border-2 hover:border-blue-400">
            <p className=' font-bold text-center text-slate-500'>Itinera.io</p>
            <img className='h-full aspect-video mt-2' src="./Itinera.io.png" alt="Itinera.io" />
            <p className='text-gray-500 mt-5 font-bold'>Short Description</p>
            <p className='text-gray-500 mt-2 font-medium'>I used Next.js</p>
            </div>
          </a>
          <a href="https://kumartc-weather-app-twux.vercel.app/">
          <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:scale-105 hover:border-2 hover:border-blue-400"> 
            <p className=' font-bold text-center text-slate-500'>Weather App </p>
          <img className='h-full aspect-video mt-2' src="./WeatherApp.png" alt="Weather App" />
          <p className='text-gray-500 mt-5 font-bold'>Short Description</p>
          <p className='text-gray-500 mt-2 font-medium'>I used Next.js</p>
          </div>
          </a>
          <a href="https://kumartc-pokemon-rebuild.vercel.app/">
          <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:scale-105 hover:border-2 hover:border-blue-400"> 
            <p className=' font-bold text-center text-slate-500'>Pokemon App</p>
          <img className='h-full aspect-video mt-2' src="./PokemonApp.png" alt="Pokemon App" />
          <p className='text-gray-500 mt-5 font-bold'>Short Description</p>
          <p className='text-gray-500 mt-2 font-medium'>I used Next.js</p>
          </div>
          </a>
        
        </div>
      </div>
    </section>
  );
}

export default Projects;