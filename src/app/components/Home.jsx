'use client';
import React, { useEffect, useState } from 'react';

function Home() {
  const firstMessage = "Hi, I'm Tanush Kumar.";
  const secondMessage = "Nice to meet you!";
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    firstMessage.split('').forEach((char, i) => {
      setTimeout(() => {
        setGreeting((prev) => prev + char);
      }, i * 100);
    });

    
    const clearDelay = firstMessage.length * 100 + 500;
    setTimeout(() => {
      setGreeting('');
    }, clearDelay);

    
    secondMessage.split('').forEach((char, i) => {
      setTimeout(() => {
        setGreeting((prev) => prev + char);
      }, clearDelay + i * 100);
    });

  }, []);

  return (
    <div className="mt-11 py-20 h-full text-center bg-cover bg-no-repeat bg-[url('/hero.png')]">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-slate-700 mb-4">{greeting}</h1>
        <p className="text-lg text-slate-500 mb-8">I'm a passionate Web Developer.</p>
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
