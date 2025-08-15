import { cart } from "./cart.js";

export let orders = JSON.parse(localStorage.getItem('orders')) || [];

const response = await fetch('https://javascript-amazon-project-1.onrender.com/order');
const data = await response.json();

// If orders array is empty, fill it with fetched data
if (orders.length === 0) {
    orders = data;
    saveToStorage();
}

export function addOrder(order) {
    orders.unshift(order);
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}
