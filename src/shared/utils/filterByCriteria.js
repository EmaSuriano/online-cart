const filterByCriteria = ({ name, price: { min, max } }) => {
  const nameRegex = new RegExp(name, 'i'); // one time instance and not one every lap of filter

  return product =>
    nameRegex.test(product.name) && product.price > min && product.price < max;
};

export default filterByCriteria;
