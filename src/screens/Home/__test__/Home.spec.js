import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { getProductList } from 'shared/constants/services';
import App from '../../../App';
import Home from '../Home';
import { flushAllPromises } from '../../../shared/utils/testUtils';

jest.mock('shared/constants/services', () => ({
  getProductList: jest.fn().mockReturnValue(Promise.resolve()),
}));

describe('<Home />', () => {
  describe('initial render', () => {
    let home;

    beforeEach(() => {
      home = mount(
        <MemoryRouter initialEntries={['/home/1']}>
          <App />
        </MemoryRouter>,
      ).find(Home);
    });

    it('should render ProductFilters', () => {
      expect(home.find('ProductFilters').exists()).toBe(true);
    });

    it('should fetch data and render a spinner', async () => {
      expect(home.find('Spinner').exists()).toBe(true);
    });

    it('should render a Footer', () => {
      expect(home.find('Footer').exists()).toBe(true);
    });
  });

  it('should show products after a succesfull fetch', async () => {
    getProductList.mockReturnValue(
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
    );
    const app = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    await flushAllPromises();
    app.update();
    const productCard = app.find(Home).find('ProductCard');
    expect(productCard.length).toBe(3);
    const productCardExample = productCard.first();
    expect(productCardExample.text().includes('Apples')).toBe(true);
    expect(productCardExample.text().includes('120')).toBe(true);
    expect(
      productCardExample
        .find(
          "img[src='https://s3-eu-west-1.amazonaws.com/developer-application-test/images/1.jpg']",
        )
        .exists(),
    ).toBe(true);
  });

  it('should display an error message after a bad fetch', async () => {
    const error = 'Server Error';
    getProductList.mockReturnValue(Promise.reject(error));

    const app = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    await flushAllPromises();
    app.update();
    const errorMessage = app.find(Home).find('Message');
    expect(errorMessage.exists()).toBe(true);
  });

  it('should open productFilter on pressing button in Filter', () => {
    const app = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const showFilterButton = app.find('ProductFilters').find('button');
    showFilterButton.simulate('click');
    app.update();
    expect(app.find('FilterContainer').length).toBe(2);
  });
});
