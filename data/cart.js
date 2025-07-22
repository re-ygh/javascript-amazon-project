export const cart = [];

export function addToCart(productId){
    let quantitySelected = 1;
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    if(quantitySelected && quantitySelector.value){
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
            quantity: quantitySelected
        });
    }
}