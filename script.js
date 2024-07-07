// Add event listener to cart logo
document.querySelector('.cart-logo').addEventListener('click', () => {
    document.querySelector('#cart-sidebar').classList.toggle('show');
});

// Add event listener to add to cart buttons
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', (e) => {
        const destination = e.target.parentNode;
        const destinationName = destination.querySelector('h2').textContent;
        const cartItem = `
            <li>
                <span>${destinationName}</span>
                <span>$250</span>
                <button class="remove-from-cart">x</button>
            </li>
        `;
        document.querySelector('.cart-items').innerHTML += cartItem;
        updateCartCount();
    });
});

// Add event listener to remove from cart buttons
document.querySelector('.cart-items').addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-from-cart')) {
        e.target.parentNode.remove();
        updateCartCount();
    }
});

// Update cart count
function updateCartCount() {
    const cartItemCount = document.querySelectorAll('.cart-items li').length;
    document.querySelector('.cart-count').textContent = cartItemCount;
}



// Add event listener to close cart button
document.querySelector('.close-cart').addEventListener('click', () => {
    document.querySelector('#cart-sidebar').classList.remove('show');
});

// Add event listener to tours link in navbar
document.querySelector('.tours-link').addEventListener('click', () => {
    document.querySelector('#tours').scrollIntoView({ behavior: 'mooth' });
});
// Add an event listener to the close button
document.querySelector('.close-cart').addEventListener('click', () => {
    document.querySelector('#cart-sidebar').classList.remove('show');
});
function toggleMenu() {
    console.log('Toggle menu called');
    document.querySelector('.links-container').classList.toggle('show');
}