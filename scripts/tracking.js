import { renderOrdersHeader } from "./orders/orderHeader.js";
import { products } from "../data/products.js";
import { orders } from "../data/orders.js";
import { getDeliveryOption } from "../data/deliveryOptions.js";
import { loadProductsFetch } from "../data/products.js";
import dayjs from  'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';



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
                    deliveryOption = cartItem.deliveryId;
                }
            });
        }   
    });
    
    const isoDate = thisOrder.createdAt;
    const createdDate = new Date(isoDate);
    let arrivingDate = new Date(createdDate);
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
          <div class="progress-label js-Preparing-label">
            Preparing
          </div>
          <div class="progress-label js-Shipped-label">
            Shipped
          </div>
          <div class="progress-label js-Delivered-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
    `;

    
    document.querySelector('.js-order-tracking')
    .innerHTML = orderTrackHTML;  


    const currrentDate = dayjs();
    // تبدیل فاصله‌ها به میلی‌ثانیه
    const totalDuration = dayjs(arrivingDate).valueOf() - dayjs(createdDate).valueOf();
    const passedDuration = currrentDate.valueOf() - dayjs(createdDate).valueOf();

    // محاسبه درصد پیشرفت
    let statusBarPercentage = (passedDuration / totalDuration) * 100;    

    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${statusBarPercentage}%`;

    let currentStatusClass = '';

    if (statusBarPercentage < 50) {
        currentStatusClass = `.js-Preparing-label`;
    } else if (statusBarPercentage >= 50 && statusBarPercentage < 100) {
        currentStatusClass = `.js-Shipped-label`;
    } else if (statusBarPercentage >= 100) {
        currentStatusClass = `.js-Delivered-label`;
    }

    // پیدا کردن المان درست بر اساس کلاس
    let progressLabelContainer = document.querySelector(currentStatusClass);

    // اضافه کردن کلاس هایلایت یا وضعیت
    if (progressLabelContainer) {
        progressLabelContainer.classList.add("current-status");
    }


}