// Cart Delete Button
const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.remove();
    updateCartTotal();
  });
});

// Update Cart Total
function updateCartTotal() {
  let total = 0;
  const items = document.querySelectorAll('.cart-item');
  items.forEach(item => {
    const price = parseFloat(item.querySelector('.item-price').textContent.replace('$',''));
    total += price;
  });
  const totalElement = document.getElementById('cart-total');
  if(totalElement) totalElement.textContent = total + '$';
}

// Add-to-cart button example (optional)
const addButtons = document.querySelectorAll('.add-to-cart');
addButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Product added to cart!');
  });
});
