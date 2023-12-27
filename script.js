const cartItems = {};
const productPrices = {
    'A': 10,
    'B': 15,
    'C': 20,
    'D': 25
};

function addToCart(productId) {
    if (!cartItems[productId]) {
        cartItems[productId] = 1;
    } else {
        cartItems[productId]++;
    }
    updateCart();
}

function removeFromCart(productId) {
    if (cartItems[productId] > 0) {
        cartItems[productId]--;
    }
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalQuantityElement = document.getElementById('total-quantity');
    const totalPriceElement = document.getElementById('total-price');

    let totalQuantity = 0;
    let totalPrice = 0;

    cartContainer.innerHTML = '';

    for (const [productId, quantity] of Object.entries(cartItems)) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>Product ${productId} - Quantity: ${quantity}</p>
            <button onclick="removeFromCart('${productId}')">Remove</button>
        `;
        cartContainer.appendChild(cartItem);

        totalQuantity += quantity;
        totalPrice += quantity * productPrices[productId];
    }

    totalQuantityElement.textContent = totalQuantity;
    totalPriceElement.textContent = totalPrice;
}