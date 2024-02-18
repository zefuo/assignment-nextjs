import React from "react";
interface DialogContentProps {
  deleteProduct: () => void;
  dialogOpener: () => void;
}

const DialogContent = ({ deleteProduct, dialogOpener }: DialogContentProps) => {
  return (
    <div>
      <div className="text-center w-56">
        <div className="mx-auto my-4 w-48">
          <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
          <p className="text-sm text-gray-500">
            Are you sure you want to delete this item?
          </p>
        </div>
        <div className="flex gap-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={deleteProduct}
          >
            Delete
          </button>
          <button
            className="bg-stone-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={dialogOpener}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogContent;
