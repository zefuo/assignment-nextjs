"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./components/Dropdown";
import ProductCard from "./components/productCard/ProductCard";
import SearchBar from "./components/SearchBar";
import {
  setSortPreference,
  setSearchTerm,
} from "./lib/redux/slicers/productSlice";
import { RootState } from "./lib/redux/store";
import { Product } from "./models/Product";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.products.filteredItems
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPreviousPage = () => {
    setCurrentPage((currentPage) => Math.max(1, currentPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((currentPage) => Math.min(totalPages, currentPage + 1));
  };

  const handleSortChange = (preference: "most" | "least" | "default") => {
    dispatch(setSortPreference(preference));
  };

  const handleSearchChange = (searchTerm: string) => {
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <div>
      <h1 className="text-center p-4 text-lg font-extrabold text-gray-900">
        Product List
      </h1>
      <div className="relative">
        <SearchBar onSearchChange={handleSearchChange} />
      </div >
      <div className="relative">
        <Dropdown onSortChange={handleSortChange} />
      </div>
      <div className="flex flex-wrap content-start">
        {currentProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-5 p-4 text-lg font-bold text-gray-900">
        <button
          onClick={goToPreviousPage}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          disabled={currentPage === 1}
        >
          Önceki
        </button>
        <span>
          {" "}
          Sayfa {currentPage}/{totalPages}{" "}
        </span>
        <button
          onClick={goToNextPage}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          disabled={currentPage === totalPages}
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default ProductList;
