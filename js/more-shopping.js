const showItems = () => {
    const productField = document.getElementById('product-field');
    const quantityField = document.getElementById('quantity-field');

    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';

    displayList(product, quantity);
    storeCartToLocalStorage(product, quantity)


} 

const displayList = (product, quantity) => {
    const container = document.getElementById('container');
    const li = document.createElement('li');

    li.innerHTML = `${product} ${quantity}`;
    container.appendChild(li);
}


const getLocalStoredCart = () => {
    let cart = {};
    const savedCart = localStorage.getItem('cart');
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const storeCartToLocalStorage = (product, quantity) => {
    const storedCart = getLocalStoredCart();
    storedCart[product] = quantity;
    const cartStringified = JSON.stringify(storedCart);
    localStorage.setItem('cart', cartStringified);

}

const displayFromSavedCart = () => {
    const listItems = getLocalStoredCart();
    console.log(listItems);
    for(const product in listItems){
        const quantity = listItems[product];
        displayList(product, quantity);
    }
}

displayFromSavedCart();