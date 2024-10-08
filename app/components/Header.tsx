import React from "react";
// import { MenuIcon } from "@heroicons/react/outline"; // Icon from Heroicons

const Header: React.FC = () => {
  return (
    <header className='bg-purple-700 p-4 flex justify-center items-center'>
      <h1 className='text-white font-light text-lg md:text-2xl'>
        Subscriptions Modal
      </h1>

      <button className='text-white focus:outline-none md:hidden'>
        {/* <MenuIcon className='w-6 h-6 md:w-8 md:h-8' /> */}
      </button>
    </header>
  );
};

export default Header;
