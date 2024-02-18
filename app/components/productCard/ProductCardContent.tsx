/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Product } from "../../models/Product";

interface ProductCardContent {
  dialogOpener: () => void;
  handleVote: (vote: number) => void;
  product: Product;
}
const ProductCardContent = ({
  product,
  dialogOpener,
  handleVote,
}: ProductCardContent) => {
  return (
    <div>
      <img
        className="h-48 w-full object-cover object-center"
        src={product.thumbnail}
        alt="Product Image"
        //loading="lazy"
      />
      <div className=" h-64 flex flex-col p-4">
        <div className=" h-12">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {product.title}
          </h2>
        </div>
        <div className=" h-24">
          <p className=" mb-2 text-base dark:text-gray-300 text-gray-700">
            {product.description}
          </p>
        </div>
        <div className="h-12 flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            {product.price}TL
          </p>

          <p className="ml-auto text-base font-medium text-green-500">
            {product.stock} pieces left
          </p>
        </div>
        <div className="h-12 flex flex-row ">
          <div className="basis-1/2">
            <div className="flex items-center space-x-4">
              <button
                className="p-2 border rounded-full hover:bg-gray-100"
                onClick={() => {
                  handleVote(1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
              <span className="text-2xl font-bold dark:text-white">
                {product.vote}
              </span>
              <button
                className="p-2 border rounded-full hover:bg-gray-100"
                onClick={() => {
                  handleVote(-1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="basis-1/2 flex justify-end">
            <button
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={dialogOpener}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardContent;
