
import React from "react";

function Home() {
  return (
   
      <div className=" mt-11 py-20 h-full text-center bg-[url('/hero.png')]">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-4">
            Hi, I'm Tanush Kumar
          </h1>
          <p className="text-lg text-slate-500 mb-8">
            A passionate Web Developer.
          </p>
          <button>
            <a
              href="#project"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
            >
              View My Projects
            </a>
          </button>
        </div>
      </div>
 
  );
}

export default Home;
