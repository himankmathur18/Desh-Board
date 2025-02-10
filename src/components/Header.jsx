// import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-400 text-black p-2 rounded-lg ml-small relative left-[10px]">
      <nav className="p-1 font-bold,black">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold"><h1>Dashboard</h1></div>
          <div className="flex items-center space-x-2">
            <input type="text" placeholder="Search..." className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"/>
            <button className="border-gray-300 px-4 py-2 rounded border">Search</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;