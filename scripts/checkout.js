import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import{ renderOrderSummary } from './checkout/orderSummary.js';
import{ renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/backend-practice.js';


async function loadPage() {
    await loadProductsFetch();

    await new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    }); 

    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
}

loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
});
*/


/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    });

}).then((value) => {

    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });

    }).then(() => {
        renderOrderSummary();
        renderPaymentSummary();
        renderCheckoutHeader();
    });

}); 
*/

/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
        renderCheckoutHeader();
    });
});
*/
