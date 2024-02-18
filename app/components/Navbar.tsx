import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="flex md:gap-x-6 text-white align-center justify-center">
              <li className="mr-5">
                <Link href="/">Product List</Link>
              </li>
              <li>
                <Link href="/products/new">Add New Product</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
