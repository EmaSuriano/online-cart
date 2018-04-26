import { createMockStore } from 'shared/utils/testUtils';
import { getProductList } from 'shared/constants/services';
import productsReducer, { selectors, actionCreators } from '../products';

jest.mock('shared/constants/services', () => ({
  getProductList: jest.fn().mockReturnValue(Promise.resolve()),
}));

describe('products duck', () => {
  let store;

  beforeEach(() => {
    store = createMockStore({ products: productsReducer });
  });

  describe('fetchProducts', () => {
    const { fetchProducts } = actionCreators;

    it('should request for products', () => {
      store.dispatch(fetchProducts());
      const productsState = store.getState().products;

      expect(selectors.isLoading(productsState)).toEqual(true);
      expect(selectors.getProducts(productsState)).toEqual([]);
    });

    it('should stores products on success', async () => {
      const products = [
        {
          product_id: '1',
          name: 'Apples',
          price: 120,
          image:
            'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/1.jpg',
        },
        {
          product_id: '2',
          name: 'Oranges',
          price: 167,
          image:
            'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/2.jpg',
        },
      ];

      getProductList.mockReturnValue(Promise.resolve({ products }));
      await store.dispatch(fetchProducts());

      const productsState = store.getState().products;

      expect(selectors.isLoading(productsState)).toEqual(false);
      expect(selectors.getProducts(productsState)).toEqual(products);
      expect(selectors.getError(productsState)).toEqual(false);
    });

    it('should store error from server on error while fetching', async () => {
      const error = 'Server Error';
      getProductList.mockReturnValue(Promise.reject(error));
      await store.dispatch(fetchProducts());

      const productsState = store.getState().products;

      expect(selectors.isLoading(productsState)).toEqual(false);
      expect(selectors.getProducts(productsState)).toEqual([]);
      expect(selectors.getError(productsState)).toEqual(Error(error));
    });
  });
});
