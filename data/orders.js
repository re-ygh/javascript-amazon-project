import { cart } from "./cart.js";

export const orders = JSON.parse(localStorage.getItem('orders')) || [];

const response = await fetch('https://javascript-amazon-project-1.onrender.com/order');
const data = await response.json();
 // should put data in orders if local storage was empty
 
export function addOrder ( order ) {
    orders.unshift(order);
    saveToStorage();

}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}
