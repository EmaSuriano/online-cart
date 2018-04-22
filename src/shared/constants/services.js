// const parseJson = response => {
//   debugger;
//   return response.json();
// };

const parseJson = response => {
  debugger;
  return response.text().then(text => {
    debugger;
    return text ? JSON.parse(text) : {};
  });
};

const BASE_SERVICE_URL =
  'https://s3-eu-west-1.amazonaws.com/developer-application-test';

export const getProductList = () =>
  fetch(`${BASE_SERVICE_URL}/cart/list`, {
    headers: new Headers({
      'Content-Type': 'application/x-amz-json-1.0.',
    }),
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, cors, *same-origin
  })
    .then(parseJson)
    .then(x => {
      debugger;
      return x;
    })
    .catch(y => {
      debugger;
      console.log(y);
    });

export const getProductDetails = id =>
  fetch(`${BASE_SERVICE_URL}/cart/${id}/detail`).then(parseJson);
