import { dummyItems } from '../lib/redux/slicers/dummydata';
import { setSearchTerm } from '../lib/redux/slicers/productSlice';
import { makeStore } from '../lib/redux/store';

describe('Redux Store', () => {
  it('should update searchTerm and filter products correctly', () => {
    const store = makeStore();
    const searchTerm = 'test';

    expect(store.getState().products.searchTerm).toEqual('');
    expect(store.getState().products.filteredItems).toEqual(dummyItems); 
    store.dispatch(setSearchTerm(searchTerm));
    expect(store.getState().products.searchTerm).toEqual(searchTerm);
    
    const expectedFilteredItems = dummyItems.filter(item => item.title.includes(searchTerm) || item.description.includes(searchTerm));
    expect(store.getState().products.filteredItems).toEqual(expectedFilteredItems);
  });
});