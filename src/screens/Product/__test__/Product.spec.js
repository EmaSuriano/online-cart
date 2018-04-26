import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../../../App';
import Product from '../../Product';
import { flushAllPromises } from '../../../shared/utils/testUtils';

describe('<Product />', () => {
  describe('initial render', () => {
    let product;

    beforeEach(() => {
      global.fetch = jest.fn().mockReturnValue(Promise.resolve());

      product = mount(
        <MemoryRouter initialEntries={['/product/1']}>
          <App />
        </MemoryRouter>,
      ).find(Product);
    });

    it('should render a modal', () => {
      expect(product.find('Modal').exists()).toBe(true);
    });

    it('should fetch data and render a spinner', async () => {
      expect(product.find('Spinner').exists()).toBe(true);
    });
  });

  it('should render product details when fetch was succesfull', async () => {
    global.fetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          new Promise(resolve =>
            resolve({
              product_id: '1',
              name: 'Apples',
              price: 120,
              image:
                'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/1.jpg',
              description: 'An apple a day keeps the doctor away.',
            }),
          ),
      }),
    );

    const app = mount(
      <MemoryRouter initialEntries={['/product/1']}>
        <App />
      </MemoryRouter>,
    );
    await flushAllPromises();
    app.update();
    const productDetail = app.find(Product).find('ProductDetail');

    expect(productDetail.exists()).toBe(true);
    expect(
      productDetail
        .find(
          "img[src='https://s3-eu-west-1.amazonaws.com/developer-application-test/images/1.jpg']",
        )
        .exists(),
    ).toBe(true);

    const productDetailInformation = productDetail.text();

    expect(productDetailInformation.includes('Apples')).toBe(true);
    expect(productDetailInformation.includes('120.00')).toBe(true);
    expect(
      productDetailInformation.includes(
        'An apple a day keeps the doctor away.',
      ),
    ).toBe(true);
  });

  it('should render error message if fetch failed', async () => {
    global.fetch = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error('Network Error')));

    const app = mount(
      <MemoryRouter initialEntries={['/product/1']}>
        <App />
      </MemoryRouter>,
    );
    await flushAllPromises();
    app.update();
    const errorMessage = app
      .find(Product)
      .find('Message')
      .first();

    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.prop('error')).toBe(true);
    expect(errorMessage.text()).toBe(
      "Can't get the detail of the selected product",
    );
  });
});
