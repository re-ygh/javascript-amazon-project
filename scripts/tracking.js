import { renderOrdersHeader } from "./orders/orderHeader.js";
import { products } from "../data/products.js";
import { orders } from "../data/orders.js";
import { getDeliveryOption } from "../data/deliveryOptions.js";
import { loadProductsFetch } from "../data/products.js";


loadProductsFetch().then(renderOrderTracking);

renderOrdersHeader();
// renderOrderTracking();


function renderOrderTracking() {

    
    const url = new URL(window.location.href);
    const orderId = url.searchParams.get('orderId');
    const productId = url.searchParams.get('productId');

    let thisProduct;
    products.forEach((product) => {
        if( product.id === productId ){
            thisProduct = product;
        }
    });


    
    
    let thisOrder;
    let deliveryOption;
    orders
    .filter(item => item.cart) // keep only ones with a cart
    .forEach(order => {
        if(order.id === orderId){
            thisOrder = order;
            thisOrder.cart.forEach((cartItem) => {
                if( cartItem.productId === thisProduct.id){
                    deliveryOption = cartItem.deliveryDate;
                }
            });
        }   
    });
    
    
    const isoDate = thisOrder.createdAt;
    const date = new Date(isoDate);
    let arrivingDate = new Date(date);
    const finalDeliveryOption = getDeliveryOption(deliveryOption);
    arrivingDate.setDate
    (arrivingDate.getDate() + finalDeliveryOption.deliveryDays);
    const arrivingDateFormatted =
    arrivingDate.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });
    

    let quantity;
    thisOrder.cart.forEach((productToFindQuantity) => {
        if ( productToFindQuantity.productId ===  thisProduct.id) {
            quantity = productToFindQuantity.quantity;
        }
    });

    const productName = thisProduct.name;
    const productImageLink =thisProduct.image;
    const productQuantity = quantity;


    let orderTrackHTML = `   
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${arrivingDateFormatted}
        </div>

        <div class="product-name">
            ${productName}
        </div>

        <div class="product-quantity">
          Quantity: ${productQuantity}
        </div>

        <img class="product-image" src="${productImageLink}">

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
    `;

    
    document.querySelector('.js-order-tracking')
    .innerHTML = orderTrackHTML;  
}