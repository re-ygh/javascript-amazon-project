class Cart {
    cartItems;
    #localStorageKey;

    constructor(localStorageKey){
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

        if(!this.cartItems){
            this.cartItems= [{
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

    saveToStorage(){
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId){
        let quantitySelected = 1;

        const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
        if(quantitySelector && quantitySelector.value){
            quantitySelected = Number(quantitySelector.value);
        }

        let matchingItem;
        this.cartItems.forEach((cartItem) =>{
            if (productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });
        if (matchingItem){
            matchingItem.quantity += quantitySelected;
        }else {
            this.cartItems.push({
                productId: productId,
                quantity: quantitySelected,
                deliveryId: '1'
            });
        }

        this.saveToStorage();
    }

    removeFromCart(productId){
        const newCart = [];
        
        this.cartItems.forEach((cartItem) => {
            if(cartItem.productId !== productId){
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;
        this.saveToStorage();
    }

    calculateAllQuantityIncart(){
        let cartQuantity = 0;
        this.cartItems.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
        });
        return cartQuantity;
    }

    updateDeliveryOption(productId, deliveryOptionId){
        let matchingItem;
        this.cartItems.forEach((cartItem) =>{
            if (productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });
        matchingItem.deliveryId = deliveryOptionId;
        
        this.saveToStorage();
    }
}

const cart = new Cart('cart-oop');
const bussinessCart = new Cart('cart-bussiness');

console.log(bussinessCart instanceof Cart);