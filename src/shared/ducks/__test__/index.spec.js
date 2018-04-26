import { createMockStore } from 'shared/utils/testUtils';
import { actionCreators as searchActions } from '../search';
import { actionCreators as productsActions } from '../products';
import { selectors } from '../index';

jest.mock('shared/constants/services', () => ({
  getProductList: jest.fn().mockReturnValue(
    Promise.resolve({
      products: [
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
        {
          product_id: '3',
          name: 'Bananas',
          price: 180,
          image:
            'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/3.jpg',
        },
      ],
    }),
  ),
}));

describe('index ducks', () => {
  let store;

  beforeEach(async () => {
    store = createMockStore();
    await store.dispatch(productsActions.fetchProducts());
  });

  describe('getFilteredProducts', () => {
    const { getFilteredProducts } = selectors;
    it('should return products filter by name', () => {
      store.dispatch(searchActions.setCriteria({ name: 'ap' }));

      expect(getFilteredProducts(store.getState())).toEqual([
        {
          image:
            'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/1.jpg',
          name: 'Apples',
          price: 120,
          product_id: '1',
        },
      ]);
    });

    it('should return products filter by price', () => {
      store.dispatch(
        searchActions.setCriteria({
          price: {
            min: 0,
            max: 124,
          },
        }),
      );

      expect(getFilteredProducts(store.getState())).toEqual([
        {
          image:
            'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/1.jpg',
          name: 'Apples',
          price: 120,
          product_id: '1',
        },
      ]);
    });

    it('should return products filter by name and price', () => {
      store.dispatch(
        searchActions.setCriteria({
          name: 'a',
          price: {
            min: 160,
            max: 190,
          },
        }),
      );

      expect(getFilteredProducts(store.getState())).toEqual([
        {
          product_id: '2',
          name: 'Oranges',
          price: 167,
          image:
            'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/2.jpg',
        },
        {
          product_id: '3',
          name: 'Bananas',
          price: 180,
          image:
            'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/3.jpg',
        },
      ]);
    });

    it('should return products without filtering', () => {
      expect(getFilteredProducts(store.getState())).toEqual([
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
        {
          product_id: '3',
          name: 'Bananas',
          price: 180,
          image:
            'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/3.jpg',
        },
      ]);
    });
  });
});
