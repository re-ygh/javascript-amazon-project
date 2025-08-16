export let cart;

loadFromStorage();

export function loadFromStorage(){
    cart = JSON.parse(localStorage.getItem('cart'));

    if(!cart){
        cart= [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryId: '1'
        }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryId: '2'
        }];
    }
}

export function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
    let quantitySelected = 1;

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    if(quantitySelector && quantitySelector.value){
        quantitySelected = Number(quantitySelector.value);
    }

    let matchingItem;
    cart.forEach((cartItem) =>{
        if (productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
    if (matchingItem){
        matchingItem.quantity += quantitySelected;
    }else {
        cart.push({
            productId: productId,
            quantity: quantitySelected,
            deliveryId: '1'
        });
    }

    saveToStorage();
}

export function removeFromCart(productId){
    const newCart = [];
    
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();
}

export function calculateAllQuantityIncart(){
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
}

export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem) =>{
        if (productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryId = deliveryOptionId;
    
    saveToStorage();
}

export async function loadCartFetch() {
    const response = await fetch('https://supersimplebackend.dev/cart');
    const data = await response.text();
}

export function clearCart() {
    cart.length = 0; // keeps the same array reference
    saveToStorage();
}