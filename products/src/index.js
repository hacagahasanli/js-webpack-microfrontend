import faker from 'faker';

export const a = "Frontend Engineer"

export const hacagaFunc  = () => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name + " " + i}</div>`;
  }
  
  document.querySelector('#dev-products').innerHTML = products;
}

export const b = a