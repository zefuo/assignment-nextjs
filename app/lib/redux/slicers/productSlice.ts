import { Product } from "@/app/models/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dummyItems } from "./dummydata";

interface ProductState {
  items: Product[];
  filteredItems: Product[];
  searchTerm: string;
  sortMode: "default" | "most" | "least";
}

const initialState: ProductState = {
  items: dummyItems,
  filteredItems: dummyItems,
  searchTerm: "",
  sortMode: "default",
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
      filterProducts(state, state.searchTerm);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
      filterProducts(state, state.searchTerm);
    },
    voteProduct: (
      state,
      action: PayloadAction<{ id: number; vote: number }>
    ) => {
      const index = state.items.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        if (action.payload.vote === 1) {
          state.items[index].vote = state.items[index].vote + 1;
        } else {
          state.items[index].vote = state.items[index].vote - 1;
        }
        filterProducts(state, state.searchTerm);
      }
    },
    setSortPreference: (
      state,
      action: PayloadAction<"most" | "least" | "default">
    ) => {
      state.sortMode = action.payload;
      filterProducts(state, state.searchTerm);
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload.toLowerCase();
      filterProducts(state, state.searchTerm);
    },
  },
});

function filterProducts(state: ProductState, searchTerm: string) {
  if (!searchTerm) {
    state.filteredItems = state.items;
  } else {
    state.filteredItems = state.items.filter(
      (product: Product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
  }
  sortProducts(state);
}

function sortProducts(state: ProductState) {
  switch (state.sortMode) {
    case "default":
      state.items.sort((a, b) => a.id - b.id);
      return;
    case "most":
      state.items.sort((a, b) => b.vote - a.vote);
      break;
    case "least":
      state.items.sort((a, b) => a.vote - b.vote);
  }
}

export const {
  addProduct,
  removeProduct,
  voteProduct,
  setSortPreference,
  setSearchTerm,
} = productsSlice.actions;

export default productsSlice.reducer;
