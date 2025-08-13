import { cart } from "./cart.js";

export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder ( order ) {
    orders.unshift(order);
    saveToStorage();


    console.log(orders);
    // همه سفارش‌ها را حذف می‌کند
    fetch('http://localhost:3000/orders', {
    method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => console.log(data));
    console.log(orders);

}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}



// const response2 = await fetch('https://javascript-amazon-project-1.onrender.com/order');
// const data2 = await response2.json();
// console.log(data2);

