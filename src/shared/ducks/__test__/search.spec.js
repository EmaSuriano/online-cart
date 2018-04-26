import { createMockStore } from 'shared/utils/testUtils';
import searchReducer, { selectors, actionCreators } from '../search';

describe('search duck', () => {
  const criteriaExample = {
    name: 'Ema',
    price: {
      min: 5,
      max: 500,
    },
  };
  let store;

  beforeEach(() => {
    store = createMockStore({ search: searchReducer });
  });

  describe('actionCreatos', () => {
    it('setCriteria should store filter criteria', () => {
      store.dispatch(actionCreators.setCriteria(criteriaExample));

      const searchState = store.getState().search;
      expect(selectors.getCriteria(searchState)).toEqual(criteriaExample);
    });

    it('clearFilter should restore value from filte', () => {
      store.dispatch(actionCreators.setCriteria(criteriaExample));
      store.dispatch(actionCreators.clearFilter('name'));

      const searchState = store.getState().search;
      expect(selectors.getCriteria(searchState)).toEqual({
        ...criteriaExample,
        name: '',
      });
    });
  });

  describe('selectors', () => {
    describe('getFiltersInformation', () => {
      it('should return criteria formatted if there was a criteria before', () => {
        store.dispatch(actionCreators.setCriteria(criteriaExample));

        const searchState = store.getState().search;
        expect(selectors.getFiltersInformation(searchState)).toEqual([
          { key: 'name', label: 'Name', value: '"Ema"' },
          { key: 'price', label: 'Price', value: 'from 5 to 500' },
        ]);
      });

      it('should not return anything if there was any criteria', () => {
        const searchState = store.getState().search;
        expect(selectors.getFiltersInformation(searchState)).toEqual([]);
      });
    });

    describe('isDefaultPrice', () => {
      it('should return true if any of the filters were selected', () => {
        const { name, price } = criteriaExample;
        const criteriaList = [criteriaExample, { name }, { price }];

        criteriaList.forEach(criteria => {
          store.dispatch(actionCreators.setCriteria(criteria));
          expect(selectors.isFilterApplied(store.getState().search)).toEqual(
            true,
          );
        });
      });

      it('should return false when criteria is equal to the initial', () => {
        expect(selectors.isFilterApplied(store.getState().search)).toEqual(
          false,
        );
      });
    });
  });
});
