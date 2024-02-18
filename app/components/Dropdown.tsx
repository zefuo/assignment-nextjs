import React, { useState } from "react";

interface DropdownMenuProps {
  onSortChange: (selection: "most" | "least" | "default") => void;
}
const DropdownMenu = ({ onSortChange }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = (selection: "most" | "least" | "default") => {
    onSortChange(selection);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className=" absolute top-0 right-8">
      <button
        onClick={toggleDropdown}
        className="w-48 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Sort By
      </button>

      {isOpen && (
        <div className="  mt-2  w-48 bg-white rounded-md shadow-xl ">
          <button
            onClick={() => {
              handleDropdown("default");
              toggleDropdown();
            }}
            className="w-48 block px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Default
          </button>
          <button
            onClick={() => {
              handleDropdown("most");
              toggleDropdown();
            }}
            className="w-48 block px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Most Liked
          </button>
          <button
            onClick={() => {
              handleDropdown("least");
              toggleDropdown();
            }}
            className="w-48 block px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Least Liked
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
