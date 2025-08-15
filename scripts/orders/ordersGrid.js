import { formatCurrency } from "../utils/money.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { addToCart, calculateAllQuantityIncart } from '../../data/cart.js';
import { products } from '../../data/products.js';
import { orders } from '../../data/orders.js';


export function renderOrdersGrid() {
    let ordersHTML = '';

    console.log(orders);

    orders
    .filter(item => item.cart) // keep only ones with a cart
    .forEach(order => {   
        
        const isoDate = order.createdAt;
        const date = new Date(isoDate);
        const orderPlaced = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric"
        });
        const orderID = order.id;

        let productPriceCents = 0 ;
        let shippingPriceCents = 0 ;
        order.cart.forEach((cartItemForPrice) => {
            products.forEach((product) => {
                if(product.id === cartItemForPrice.productId){
                    productPriceCents += 
                    (Number(product.priceCents) * cartItemForPrice.quantity);
                    const deliveryOption = getDeliveryOption(cartItemForPrice.deliveryId);
                    shippingPriceCents += deliveryOption.priceCents;
                }
            });
        });

            
        const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
        const taxCents = totalBeforeTaxCents * 0.1;
        const totalCents = totalBeforeTaxCents + taxCents; 

        ordersHTML += `
            <div class="order-container">
                <div class="order-header">
                <div class="order-header-left-section">
                    <div class="order-date">
                    <div class="order-header-label">Order Placed:</div>
                    <div>${orderPlaced}</div>
                    </div>
                    <div class="order-total">
                    <div class="order-header-label">Total:</div>
                    <div>$${formatCurrency(totalCents)}</div>
                    </div>
                </div>

                <div class="order-header-right-section">
                    <div class="order-header-label">Order ID:</div>
                    <div>${orderID}</div>
                </div>
                </div>

                <div class="order-details-grid js-order-details-grid">
                ${renderOrderDetailsGrid(order.cart, date)}
                </div>
            </div>
        `;  
    });    
    

    document.querySelector('.js-orders-grid')
    .innerHTML = ordersHTML;

    document.querySelectorAll('.js-buy-again-button')
    .forEach((button) => {
        button.addEventListener('click', () => {
        const productId = button.dataset.productId;        
        addToCart(productId);
        document.querySelector('.js-cart-quantity')
        .innerHTML = calculateAllQuantityIncart();
        });
    });

}


function renderOrderDetailsGrid (cart, date){
    let orderDetailsHTML = '';

        cart.forEach((cartItem) => {
            let cartItemInUse ;
            products.forEach((product) => {
                if(product.id === cartItem.productId){
                    cartItemInUse = product;
                }
            });

            const imageLink = cartItemInUse.image;
            const name = cartItemInUse.name;
            const quantity = cartItem.quantity;
            const productId = cartItemInUse.id;

            let arrivingDate = new Date(date);

            const deliveryOption = getDeliveryOption(cartItem.deliveryId);
            arrivingDate.setDate
            (arrivingDate.getDate() + deliveryOption.deliveryDays);
            const arrivingDateFormatted =
             arrivingDate.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric"
            });

            



            orderDetailsHTML += `        
            <div class="product-image-container">
                <img src="${imageLink}">
            </div>
    
            <div class="product-details">
                <div class="product-name">
                ${name}
                </div>
                <div class="product-delivery-date">
                Arriving on: ${arrivingDateFormatted}
                </div>
                <div class="product-quantity">
                Quantity: ${quantity}
                </div>
                <button class="buy-again-button button-primary
                js-buy-again-button"
                data-product-id="${productId}">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
                </button>
            </div>
    
            <div class="product-actions">
                <a href="tracking.html?orderId=123&productId=456">
                <button class="track-package-button button-secondary">
                    Track package
                </button>
                </a>
            </div>
        `;
    });

    return orderDetailsHTML;
}