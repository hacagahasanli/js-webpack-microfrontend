import faker from "faker";

export const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name + " " + i}</div>`;
  }

  el.innerHTML = products;
};

if(process.env.NODE_ENV === "development"){
  const el = document.querySelector('#dev-products');

  //Assuming our container doesn't have an element
  // with id 'dev-products'...
  if(el){
    // We are probably running in isolation
    mount(el)
  }
}

//REFACTORING PRODUCTS

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into the element

//Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products'
// WE DO NOT WANT try to immediately render the app
