import { Product } from "../models/Product";

describe('Product Interface', () => {

  it('should create a product with correct properties', () => {
    const testProduct: Product = {
      id: 1,
      title: 'Test Product',
      description: 'This is a test product',
      price: 100,
      stock: 50,
      vote: 5,
      thumbnail: 'http://example.com/test.jpg',
    };

    expect(testProduct).toBeDefined();
    expect(testProduct.id).toBe(1);
    expect(testProduct.title).toBe('Test Product');
    expect(testProduct.description).toBe('This is a test product');
    expect(testProduct.price).toBe(100);
    expect(testProduct.stock).toBe(50);
    expect(testProduct.vote).toBe(5);
    expect(testProduct.thumbnail).toBe('http://example.com/test.jpg');
  });
});