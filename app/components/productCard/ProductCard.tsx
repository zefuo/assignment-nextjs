import React, { useState } from "react";
import { Product } from "../../models/Product";
import DeleteDialog from "../dialog/DeleteDialog";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../lib/redux/store";
import { removeProduct, voteProduct } from "../../lib/redux/slicers/productSlice";
import toast, { Toaster } from "react-hot-toast";
import DialogContent from "../dialog/DialogContent";
import ProductCardContent from "./ProductCardContent";

interface ProductProps {
  product: Product;
}

export default function ProductCard({ product }: ProductProps) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  /*
  ** deleteProduct ve handleVote fonksiyonlarında removeProduct async olmadığı için response'u takip edilemiyor. 
  ** Eğer async yapıda API ile bağlantı kursaydı, aşağıdaki şekilde toast gösterebilirdim.

  dispatch(removeProduct(product.id))
      .unwrap()
      .then(() => {
        toast.success("Successfully deleted!");
        dialogOpener();
      })
      .catch((error: any) => {
        toast.error("Failed to delete!");
        console.error("Delete error:", error);
      });
  */

  const dialogOpener = () => {
    setOpen(!open);
  };

  const deleteProduct = () => {
    dispatch(removeProduct(product.id));
    dialogOpener();
    toast.success("Successfully deleted!");
  };

  const handleVote = (vote: number) => {
    dispatch(voteProduct({ id: product.id, vote: vote }));
    toast.success("Successfully voted!");
  };

  return (
    <div className="mx-auto mt-11 w-80  rounded-lg bg-white dark:bg-emerald-800 shadow-md duration-300 ">
      <ProductCardContent
        product={product}
        dialogOpener={dialogOpener}
        handleVote={handleVote}
      />
      <DeleteDialog open={open} onClose={dialogOpener}>
        <DialogContent
          deleteProduct={deleteProduct}
          dialogOpener={dialogOpener}
        />
      </DeleteDialog>
      <Toaster />
    </div>
  );
}
