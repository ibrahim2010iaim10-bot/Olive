// Delete button functionality
const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.remove();
    updateCartTotal();
  });
});

// Update cart total
function updateCartTotal() {
  let total = 0;
  const items = document.querySelectorAll('.cart-item');
  items.forEach(item => {
    const price = parseFloat(item.querySelector('.item-price').textContent.replace('جنيه',''));
    total += price;
  });
  const totalElement = document.getElementById('cart-total');
  if(totalElement) totalElement.textContent = total + ' جنيه';
}

// Add-to-cart button
const addButtons = document.querySelectorAll('.add-to-cart');
addButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('تم إضافة المنتج إلى السلة!');
  });
});
