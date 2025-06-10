
import React from 'react';

function Header() {
  return (
    
    <div className="bg-white shadow py-4 px-6 fixed top-0 left-0 right-0 z-50  items-center flex justify-between text-slate-500">
      <div className="font-bold text-xl">
        <p>Tanush R. Kumar</p>
      </div>

      <nav>
        <ul className="flex space-x-4">
          
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#project" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
