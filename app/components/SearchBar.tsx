import React from "react";

interface SearchBarProps {
  onSearchChange: (searchTerm: string) => void;
}

const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  return (
    <div className=" -z-11 overflow-hidden flex items-center justify-center">
      <div className="flex border-2 rounded">
        <input
          type="text"
          className="px-4 py-2 w-80"
          placeholder="Search by title or description..."
          onChange={(e) => {
            onSearchChange(e.target.value);
          }}
        />
        <button className="flex items-center justify-center px-4 border-l">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
