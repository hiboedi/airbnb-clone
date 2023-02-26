import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
  MenuIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle Search */}
      <div className="flex items-center border-2 rounded-full py-2 shadow-md">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a House</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2 shadow-md">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
