import { formatCurrency } from "../scripts/utils/money.js";


export function getProduct(productId) {
  let matchingItem ;

  products.forEach((product) =>{
      if(product.id === productId){
          matchingItem = product;
      }
  });
  return matchingItem;
}
class Product {
  id;
  image;
  name;
  rating;
  priceCents;
  keywords;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.rating = productDetails.rating;
    this.name = productDetails.name;
    this.priceCents = productDetails.priceCents;
    this.keywords = productDetails.keywords;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML(){
    return ``;
  }
}

class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    return `
      <a href="${this.sizeChartLink}" target="_blank">Size chart</a>
    `;
  }
}

class Appliance extends Product {
  instructionsLink;
  warrantyLink;
  constructor(productDetails) {
    super(productDetails);
    this.instructionsLink = productDetails.instructionsLink;
    this.warrantyLink = productDetails.warrantyLink;
  }

    extraInfoHTML() {
    return `
      <a href="${this.instructionsLink}" target="_blank">instructions</a>
      <a href="${this.warrantyLink}" target="_blank">warranty</a>
    `;
  }
}

export let products = [];



export function loadProductsFetch() {
  const promise = fetch(
    'https://supersimplebackend.dev/products'
  ).then((response) => {
    return response.json();
  }).then(( productsData ) => {
    products = productsData.map((productDetails) => {
      if(productDetails.id === '77a845b1-16ed-4eac-bdf9-5b591882113d'
        || productDetails.id === '54e0eccd-8f36-462b-b68a-8182611d9add'
        || productDetails.id === '0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524'
        || productDetails.id === 'c2a82c5e-aff4-435f-9975-517cfaba2ece'
      ){
        productDetails.type = 'appliance';
        productDetails.instructionsLink = "images/appliance-instructions.png";
        productDetails.warrantyLink = "images/appliance-warranty.png";
      }else if(productDetails.id === 'b0f17cc5-8b40-4ca5-9142-b61fe3d98c85'
        || productDetails.id === '5968897c-4d27-4872-89f6-5bcb052746d7' 
        || productDetails.id === '83d4ca15-0f35-48f5-b7a3-1ea210004f2e' 
      ){
        productDetails.type = 'clothing';
        productDetails.instructionsLink = 'images/clothing-size-chart.png';
      }

      if(productDetails.type === 'clothing'){
        return new Clothing(productDetails);
      }else if(productDetails.type === 'appliance'){
        return new Appliance(productDetails);
      }
    return new Product(productDetails);
    });
  }).catch((error) => {
    console.log('unexpected error. please try again later.');
  });
  return promise;
}


export function loadProducts(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    products = JSON.parse(xhr.response).map((productDetails) => {
    if(productDetails.type === 'clothing'){
      return new Clothing(productDetails);
    }else if(productDetails.type === 'appliance'){
      return new Appliance(productDetails);
    }
    return new Product(productDetails);
    });

    if (typeof fun === 'function') {
      fun();
    }
  });

  xhr.addEventListener('error', (error) => {
    console.log('unexpected error. please try again later.');
  });

  xhr.open('GET','https://supersimplebackend.dev/products');
  xhr.send();
}