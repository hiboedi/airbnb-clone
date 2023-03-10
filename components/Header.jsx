import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle Search */}
      <div className="flex items-center md:border-2 md:shadow-lg rounded-full py-2 ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400 "
          type="text"
          placeholder={placeholder || "Search here"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a House</p>
        <GlobeAltIcon className="hiiden xs:inline h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2 shadow-md">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b-2 mb-4">
            <h2 className="text-2xl flex-grow font-semibold pl-6">
              Number of Guests
            </h2>
            <UserIcon className="h-5 " />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cacncel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
