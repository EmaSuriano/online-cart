const parseJson = response => response.json();

const BASE_SERVICE_URL =
  'https://s3-eu-west-1.amazonaws.com/developer-application-test';

// export const getProductList = () =>
//   fetch(`${BASE_SERVICE_URL}/cart/list`, {
//     method: 'GET',
//     mode: 'no-cors',
//   }).then(parseJson);

// mocked response due to issues with above endpoint, can't parse to JSON
export const getProductList = () =>
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
        price: 88,
        image:
          'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/3.jpg',
      },
      {
        product_id: '4',
        name: 'Onions',
        price: 110,
        image:
          'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/4.jpg',
      },
      {
        product_id: '5',
        name: 'Steak',
        price: 543,
        image:
          'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/5.jpg',
      },
      {
        product_id: '6_id_is_a_string',
        name: 'Pork',
        price: 343,
        image:
          'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/6.jpg',
      },
      {
        product_id: '7',
        name: 'Chicken',
        price: 272,
        image:
          'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/chicken.jpg',
      },
      {
        product_id: '8',
        name: 'Salmon',
        price: 267,
        image:
          'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/8.jpg',
      },
      {
        product_id: '9',
        name: 'Tuna',
        price: 557,
        image:
          'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/9.jpg',
      },
      {
        product_id: '10',
        name: 'Broccoli',
        price: 32,
        image:
          'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/10.jpg',
      },
      {
        product_id: '11',
        name: 'Bacon',
        price: 212,
        image:
          'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/11.jpg',
      },
      {
        product_id: '12',
        name: 'Peppers',
        price: 9,
        image:
          'https://s3-eu-west-1.amazonaws.com/developer-application-test/images/12.jpg',
      },
    ],
  });

export const getProductDetails = id =>
  fetch(`${BASE_SERVICE_URL}/cart/${id}/detail`).then(parseJson);
