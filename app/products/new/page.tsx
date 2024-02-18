"use client";
import { addProduct } from "@/app/lib/redux/slicers/productSlice";
import { AppDispatch, RootState } from "@/app/lib/redux/store";
import { Product } from "@/app/models/Product";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Product name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .required("Price is required")
    .integer("Price must be number")
    .positive("Price must be a positive number"),
  stock: Yup.number()
    .required("Stock is required")
    .integer("Stock must be number")
    .positive("Stock must be a positive number"),
  thumbnail: Yup.string()
    .required("Thumbnail URL is required")
    .url("Input must be in a URL form"),
});

const AddProductPage = () => {
  let idcounter = 200;

  const totalProducts = useSelector((state: RootState) => state.products.total);
  console.log(totalProducts);
  const initialValues = {
    title: "",
    description: "",
    price: 0,
    stock: 0,
    vote: 0,
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    id: idcounter + 1,
  };
  const dispatch = useDispatch<AppDispatch>();

  function handleSubmit(
    values: Product,
    actions: FormikHelpers<{
      title: string;
      description: string;
      price: number;
      stock: number;
      vote: number;
      thumbnail: string;
      id: number;
    }>
  ) {
    dispatch(addProduct(values));
    actions.resetForm();
  }

  return (
    <div className="mx-48">
      <h1 className="block text-gray-700 text-lg font-bold mt-4 mb-0 text-center">
        {" "}
        Add Product
      </h1>
      <br></br>
      <Formik
        initialValues={initialValues}
        validationSchema={ProductSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-normal mb-2"
                htmlFor="title"
              >
                Title:
              </label>
              <Field
                type="text"
                name="title"
                placeholder="Product Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-normal mb-2"
                htmlFor="description"
              >
                Description:
              </label>
              <Field
                type="text"
                name="description"
                placeholder="Description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-normal mb-2"
                htmlFor="price"
              >
                Price:
              </label>
              <Field
                type="number"
                name="price"
                placeholder="Price"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-normal mb-2"
                htmlFor="stock"
              >
                Stock:
              </label>
              <Field
                type="number"
                name="stock"
                placeholder="Stock"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="stock"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-normal mb-2"
                htmlFor="thumbnail"
              >
                Thumbnail (Dummy URL added):
              </label>
              <Field
                type="text"
                name="thumbnail"
                placeholder="Thumbnail URL"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="thumbnail"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProductPage;
