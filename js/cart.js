// Fungsi untuk format harga ke Rupiah
function formatHarga(harga) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(harga);
}

// Fungsi render cart items
function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cart-items");
  const emptyMessage = document.getElementById("empty-cart-message");

  if (cart.length === 0) {
    cartItemsContainer.style.display = "none";
    emptyMessage.style.display = "block";
    document.querySelector(".cart-summary").style.display = "none";
    return;
  }

  cartItemsContainer.style.display = "block";
  emptyMessage.style.display = "none";
  document.querySelector(".cart-summary").style.display = "block";
  cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.nama}" />
      </div>
      <div class="cart-item-details">
        <h3>${item.nama}</h3>
        <p class="cart-item-price">${formatHarga(item.harga)}</p>
      </div>
      <div class="cart-item-quantity">
        <button class="qty-btn" data-index="${index}" data-action="decrease">−</button>
        <input type="number" class="qty-input" value="${item.quantity}" min="1" data-index="${index}" readonly />
        <button class="qty-btn" data-index="${index}" data-action="increase">+</button>
      </div>
      <div class="cart-item-subtotal">
        ${formatHarga(item.harga * item.quantity)}
      </div>
      <button class="btn-remove" data-index="${index}">
        <i data-feather="trash-2"></i>
      </button>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  // Event listeners
  document.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      const action = e.target.dataset.action;
      updateQuantity(index, action);
    });
  });

  document.querySelectorAll(".btn-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.closest("button").dataset.index;
      removeFromCart(index);
    });
  });

  updateSummary();
  feather.replace();
}

// Fungsi update quantity
function updateQuantity(index, action) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart[index];

  if (action === "increase") {
    item.quantity += 1;
  } else if (action === "decrease") {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// Fungsi remove dari cart
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// Fungsi update summary
function updateSummary() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const subtotal = cart.reduce((sum, item) => sum + item.harga * item.quantity, 0);
  const discount = 0; // Bisa ditambahkan promo code
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax - discount;

  document.getElementById("subtotal").textContent = formatHarga(subtotal);
  document.getElementById("discount").textContent = formatHarga(discount);
  document.getElementById("tax").textContent = formatHarga(tax);
  document.getElementById("total").textContent = formatHarga(total);
}

// Fungsi update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = totalItems;
}

// Checkout handler
function handleCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  if (cart.length === 0) {
    alert("Keranjang Anda kosong");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.harga * item.quantity, 0);
  const tax = Math.round(total * 0.1);
  const grandTotal = total + tax;

  // Bisa diarahkan ke halaman checkout atau payment gateway
  alert(`Total pembelian: ${formatHarga(grandTotal)}\n\nSilakan lanjutkan ke halaman pembayaran.`);
  
  // Uncomment untuk implementasi lebih lanjut:
  // window.location.href = '/checkout.html';
}

// Open/close cart drawer (used on menu page)
function openCartDrawer(){
  const drawer = document.getElementById('cart-drawer');
  if(!drawer) return;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden','false');
  renderCart();
}

function closeCartDrawer(){
  const drawer = document.getElementById('cart-drawer');
  if(!drawer) return;
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
}

// Save order (persist to localStorage.orders) and clear cart
function saveOrderFromDrawer(){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if(cart.length === 0){ alert('Keranjang kosong'); return; }
  const subtotal = cart.reduce((s,i)=>s + i.harga * i.quantity,0);
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const order = { id: 'ORD' + Date.now(), createdAt: new Date().toISOString(), items: cart, subtotal, tax, total };
  orders.unshift(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.removeItem('cart');
  renderCart();
  updateCartCount();
  closeCartDrawer();
  alert('Pembayaran berhasil. Terima kasih!');
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  updateCartCount();

  const checkoutBtn = document.querySelector(".btn-checkout");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", handleCheckout);
  }

  // open drawer button on menu page
  const openBtn = document.getElementById('open-cart-btn');
  if(openBtn){
    openBtn.addEventListener('click', (e)=>{ e.preventDefault(); openCartDrawer(); });
  }

  const closeBtn = document.getElementById('close-cart-btn');
  if(closeBtn){ closeBtn.addEventListener('click', closeCartDrawer); }

  const drawerCheckout = document.getElementById('drawer-checkout');
  if(drawerCheckout){ drawerCheckout.addEventListener('click', saveOrderFromDrawer); }

  // expose globally so products.js can open drawer after adding
  window.openCartDrawer = openCartDrawer;
  window.closeCartDrawer = closeCartDrawer;
});
