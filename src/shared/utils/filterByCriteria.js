const filterByCriteria = criteria => {
  debugger;
  const nameRegex = new RegExp(criteria.name, 'i');
  return product => nameRegex.test(product.name);
};

export default filterByCriteria;
