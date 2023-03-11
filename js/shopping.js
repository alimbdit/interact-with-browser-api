const showProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';
    
    console.log(product, quantity);

    productList(product, quantity);
    saveCartToLocalStorage(product, quantity);


}

const productList = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}  ${quantity}`;

    productContainer.appendChild(li);

}

// const getStoredShoppingCart = () => {
//     let cart = {};
//     const storedCart = localStorage.getItem('cart');
//     if(storedCart){
//         cart = JSON.parse(storedCart);
//     }
//     return cart;
// }


const getStoredCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}


// const saveCartToLocalStorage = (product, quantity) => {
//     const getCart = getStoredCart();

//     getCart[product] = quantity;
//     const cartStringified = JSON.stringify(getCart);
//     localStorage.setItem('cart', cartStringified);
// }


const saveCartToLocalStorage = (product, quantity) => {
    const storedCart = getStoredCart();
    storedCart[product] = quantity;
    const cartItemsInStringified = JSON.stringify(storedCart);
    localStorage.setItem('cart', cartItemsInStringified);
}


const displayFromLocalStorage = () => {
    const savedCart = getStoredCart();

    for(const product in savedCart){
        const quantity = savedCart[product];
        productList(product, quantity)
    }
}

displayFromLocalStorage();