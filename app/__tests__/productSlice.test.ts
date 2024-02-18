// productsSlice.test.ts
import { AppStore, makeStore } from "../lib/redux/store";
import { Product } from "@/app/models/Product";

import {
  addProduct,
  removeProduct,
  voteProduct,
  setSortPreference,
  setSearchTerm,
} from "../lib/redux/slicers/productSlice";

describe("productsSlice", () => {
  const store = makeStore();
  it("should handle adding a product", () => {
    const initialProductCount = store.getState().products.items.length;
    const newProduct: Product = {
      id: 999,
      title: "Test Product",
      description: "This is a test product",
      price: 100,
      stock: 50,
      vote: 5,
      thumbnail: "http://example.com/test.jpg",
    };

    store.dispatch(addProduct(newProduct));
    expect(store.getState().products.items.length).toBe(
      initialProductCount + 1
    );
    expect(store.getState().products.items).toContainEqual(newProduct);
  });

  it("should handle removing a product", () => {
    const initialProductCount = store.getState().products.items.length;
    const productIdToRemove = 999; // Önceki testte eklenen ürünün ID'si

    store.dispatch(removeProduct(productIdToRemove));
    expect(store.getState().products.items.length).toBe(
      initialProductCount - 1
    );
    expect(
      store
        .getState()
        .products.items.find((product:Product) => product.id === productIdToRemove)
    ).toBeUndefined();
  });

  it("should handle voting on a product", () => {
    // Öncelikle test için bir ürün ekleyin
    const testProduct: Product = {
      id: 998,
      title: "Vote Test Product",
      description: "This is a vote test product",
      price: 100,
      stock: 50,
      vote: 5,
      thumbnail: "http://example.com/vote_test.jpg",
    };
    store.dispatch(addProduct(testProduct));

    store.dispatch(voteProduct({ id: 998, vote: 1 }));
    expect(
      store.getState().products.items.find((product:Product) => product.id === 998)
        ?.vote
    ).toBe(6);

    store.dispatch(voteProduct({ id: 998, vote: -1 }));
    expect(
      store.getState().products.items.find((product:Product) => product.id === 998)
        ?.vote
    ).toBe(5);
  });

  it("should handle setting sort preference", () => {
    store.dispatch(setSortPreference("most"));
    expect(store.getState().products.sortMode).toBe("most");
  });

  it("should handle setting search term", () => {
    const searchTerm = "test";
    store.dispatch(setSearchTerm(searchTerm));
    expect(store.getState().products.searchTerm).toBe(searchTerm);
  });
});
