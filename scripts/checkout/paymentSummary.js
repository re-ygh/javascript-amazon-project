import { cart, calculateAllQuantityIncart} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption} from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';
import { addOrder } from '../../data/orders.js';


export function renderPaymentSummary (){
    let productPriceCents = 0 ;
    let shippingPriceCents = 0 ;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryId);
        shippingPriceCents += deliveryOption.priceCents;
        });

    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents; 


    const paymentSummaryHTML = `
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
        <div>Items (${calculateAllQuantityIncart()}):</div>
        <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
        </div>

        <button class="place-order-button button-primary js-place-order">
        Place your order
        </button>
    `;

    document.querySelector('.js-payment-summary')
        .innerHTML = paymentSummaryHTML;

    
    document.querySelector('.js-place-order')
        .addEventListener('click', async () => {
            try{
                console.log(cart);
                const response = await fetch('https://javascript-amazon-project-1.onrender.com/order', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        cart: cart
                    })
                });

                const order = await response.json();
                console.log(order);
                addOrder(order);

            }catch (error){
                console.log('unexpected error. try again later.');
            }


            // window.location.href = 'orders.html';
        });
}