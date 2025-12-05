// Data Produk Nylan Farma dengan foto asli
const produksData = [
  // Obat Resep Dokter (8 produk)
  {
    id: 1,
    nama: "Amoxynyl",
    kategori: "obat-resep",
    harga: 35000,
    stok: 150,
    deskripsi: "Antibiotik untuk infeksi bakteri",
    rating: 4.5,
    image: "./image/Obat-Resep-Dokter/Amoxynyl.png",
    resep: true
  },
  {
    id: 2,
    nama: "Cefadrox-N",
    kategori: "obat-resep",
    harga: 32000,
    stok: 200,
    deskripsi: "Antibiotik generasi kedua",
    rating: 4.8,
    image: "./image/Obat-Resep-Dokter/Cefadrox-N.png",
    resep: true
  },
  {
    id: 3,
    nama: "Cefinyx",
    kategori: "obat-resep",
    harga: 37000,
    stok: 120,
    deskripsi: "Obat untuk infeksi saluran kemih",
    rating: 4.6,
    image: "./image/Obat-Resep-Dokter/Cefinyx.png",
    resep: true
  },
  {
    id: 4,
    nama: "Amoxynyl Sirup Kering",
    kategori: "obat-resep",
    harga: 15000,
    stok: 100,
    deskripsi: "Sirup antibiotik untuk anak-anak",
    rating: 4.4,
    image: "./image/Obat-Resep-Dokter/AmoxynylSirupKering.png",
    resep: true
  },
  {
    id: 5,
    nama: "Cholamphenyl",
    kategori: "obat-resep",
    harga: 22000,
    stok: 90,
    deskripsi: "Obat untuk infeksi berat",
    rating: 4.5,
    image: "./image/Obat-Resep-Dokter/Cholamphenyl.png",
    resep: true
  },
  {
    id: 6,
    nama: "Ceterinyl",
    kategori: "obat-resep",
    harga: 30000,
    stok: 140,
    deskripsi: "Obat antihistamin untuk alergi",
    rating: 4.7,
    image: "./image/Obat-Resep-Dokter/Ceterinyl.png",
    resep: true
  },
  {
    id: 7,
    nama: "Tensinyl",
    kategori: "obat-resep",
    harga: 48000,
    stok: 110,
    deskripsi: "Obat untuk tekanan darah tinggi",
    rating: 4.6,
    image: "./image/Obat-Resep-Dokter/Tensinyl.png",
    resep: true
  },
  {
    id: 8,
    nama: "Allopurinyl",
    kategori: "obat-resep",
    harga: 40000,
    stok: 80,
    deskripsi: "Obat untuk gout dan asam urat",
    rating: 4.5,
    image: "./image/Obat-Resep-Dokter/Allopurinyl.png",
    resep: true
  },

  // Obat Bebas & Terbatas (14 produk)
  {
    id: 9,
    nama: "N-Cetamol",
    kategori: "obat-bebas",
    harga: 23000,
    stok: 500,
    deskripsi: "Pereda demam dan nyeri",
    rating: 4.7,
    image: "./image/Obat-bebas-terbatas/N-Cetamol.png",
    resep: false
  },
  {
    id: 10,
    nama: "Acetynal",
    kategori: "obat-bebas",
    harga: 23000,
    stok: 350,
    deskripsi: "Obat demam dan sakit kepala",
    rating: 4.6,
    image: "./image/Obat-bebas-terbatas/Acetynal.png",
    resep: false
  },
  {
    id: 11,
    nama: "Maagrelief",
    kategori: "obat-bebas",
    harga: 21000,
    stok: 280,
    deskripsi: "Penawar asam lambung",
    rating: 4.5,
    image: "./image/Obat-bebas-terbatas/Maagrelief.png",
    resep: false
  },
  {
    id: 12,
    nama: "Travomyl",
    kategori: "obat-bebas",
    harga: 10000,
    stok: 450,
    deskripsi: "Obat mual dan muntah",
    rating: 4.3,
    image: "./image/Obat-bebas-terbatas/Travomyl.png",
    resep: false
  },
  {
    id: 13,
    nama: "N-Cetamol Sirup",
    kategori: "obat-bebas",
    harga: 14000,
    stok: 380,
    deskripsi: "Sirup pereda demam untuk anak",
    rating: 4.6,
    image: "./image/Obat-bebas-terbatas/N-Cetamol Sirup.png",
    resep: false
  },
  {
    id: 14,
    nama: "Mucoril",
    kategori: "obat-bebas",
    harga: 20000,
    stok: 220,
    deskripsi: "Obat batuk ekspektoran",
    rating: 4.5,
    image: "./image/Obat-bebas-terbatas/Mucoril.png",
    resep: false
  },
  {
    id: 15,
    nama: "Kidcough",
    kategori: "obat-bebas",
    harga: 21000,
    stok: 300,
    deskripsi: "Sirup batuk untuk anak-anak",
    rating: 4.4,
    image: "./image/Obat-bebas-terbatas/Kidcough.png",
    resep: false
  },
  {
    id: 16,
    nama: "N-Cetamol Drops",
    kategori: "obat-bebas",
    harga: 20000,
    stok: 250,
    deskripsi: "Tetes pereda demam",
    rating: 4.5,
    image: "./image/Obat-bebas-terbatas/N-Cetamol Drops.png",
    resep: false
  },
  {
    id: 17,
    nama: "Folate",
    kategori: "obat-bebas",
    harga: 18000,
    stok: 320,
    deskripsi: "Suplemen folat untuk kehamilan",
    rating: 4.7,
    image: "./image/Obat-bebas-terbatas/Folate.png",
    resep: false
  },
  {
    id: 18,
    nama: "Ferraplus",
    kategori: "obat-bebas",
    harga: 22000,
    stok: 270,
    deskripsi: "Suplemen zat besi",
    rating: 4.6,
    image: "./image/Obat-bebas-terbatas/Ferraplus.png",
    resep: false
  },
  {
    id: 19,
    nama: "Noralit",
    kategori: "obat-bebas",
    harga: 8500,
    stok: 400,
    deskripsi: "Obat diare ringan",
    rating: 4.4,
    image: "./image/Obat-bebas-terbatas/Noralit.png",
    resep: false
  },
  {
    id: 20,
    nama: "Bisacolyn",
    kategori: "obat-bebas",
    harga: 12000,
    stok: 200,
    deskripsi: "Obat pencahar",
    rating: 4.5,
    image: "./image/Obat-bebas-terbatas/Bisacolyn.png",
    resep: false
  },
  {
    id: 21,
    nama: "Losperistine",
    kategori: "obat-bebas",
    harga: 17000,
    stok: 180,
    deskripsi: "Obat diare dengan loperamid",
    rating: 4.5,
    image: "./image/Obat-bebas-terbatas/Losperistine.png",
    resep: false
  },
  {
    id: 22,
    nama: "Flunolax",
    kategori: "obat-bebas",
    harga: 10000,
    stok: 350,
    deskripsi: "Obat pencahar ringan",
    rating: 4.3,
    image: "./image/Obat-bebas-terbatas/Flunolax.png",
    resep: false
  },

  // Obat Injeksi (8 produk)
  {
    id: 23,
    nama: "Dextronyl 10",
    kategori: "obat-injeksi",
    harga: 25000,
    stok: 100,
    deskripsi: "Injeksi dekstrosa untuk hidrasi",
    rating: 4.5,
    image: "./image/Obat-injeksi/Dextronyl10.png",
    resep: false
  },
  {
    id: 24,
    nama: "Mannyl-20",
    kategori: "obat-injeksi",
    harga: 27000,
    stok: 90,
    deskripsi: "Injeksi manitol untuk edema",
    rating: 4.6,
    image: "./image/Obat-injeksi/Mannyl-20.png",
    resep: true
  },
  {
    id: 25,
    nama: "Ceftrylon",
    kategori: "obat-injeksi",
    harga: 48000,
    stok: 80,
    deskripsi: "Antibiotik injeksi generasi ketiga",
    rating: 4.7,
    image: "./image/Obat-injeksi/Ceftrylon.png",
    resep: true
  },
  {
    id: 26,
    nama: "Meropyon",
    kategori: "obat-injeksi",
    harga: 98000,
    stok: 40,
    deskripsi: "Antibiotik injeksi untuk infeksi serius",
    rating: 4.8,
    image: "./image/Obat-injeksi/Meropyon.png",
    resep: true
  },
  {
    id: 27,
    nama: "Raniject",
    kategori: "obat-injeksi",
    harga: 48000,
    stok: 60,
    deskripsi: "Injeksi untuk ulkus peptik",
    rating: 4.5,
    image: "./image/Obat-injeksi/Raniject.png",
    resep: true
  },
  {
    id: 28,
    nama: "Diphenyl",
    kategori: "obat-injeksi",
    harga: 89000,
    stok: 50,
    deskripsi: "Injeksi antihistamin kuat",
    rating: 4.6,
    image: "./image/Obat-injeksi/Diphenyl.png",
    resep: true
  },
  {
    id: 29,
    nama: "VitaC Injeksi",
    kategori: "obat-injeksi",
    harga: 35000,
    stok: 120,
    deskripsi: "Injeksi vitamin C dosis tinggi",
    rating: 4.7,
    image: "./image/Obat-injeksi/VitaC.png",
    resep: false
  },
  {
    id: 30,
    nama: "Vitajelly Injeksi",
    kategori: "obat-injeksi",
    harga: 42000,
    stok: 70,
    deskripsi: "Injeksi multivitamin jelly",
    rating: 4.5,
    image: "./image/Obat-injeksi/Vitajelly.png",
    resep: false
  },

  // Vitamin (7 produk)
  {
    id: 31,
    nama: "Dailyboost",
    kategori: "vitamin",
    harga: 30000,
    stok: 300,
    deskripsi: "Vitamin harian lengkap",
    rating: 4.8,
    image: "./image/vitamin/Dailyboost.png",
    resep: false
  },
  {
    id: 32,
    nama: "Vitamin E",
    kategori: "vitamin",
    harga: 20000,
    stok: 280,
    deskripsi: "Vitamin E untuk antioksidan",
    rating: 4.7,
    image: "./image/vitamin/VitaminE.png",
    resep: false
  },
  {
    id: 33,
    nama: "Multi B",
    kategori: "vitamin",
    harga: 22000,
    stok: 350,
    deskripsi: "Vitamin B kompleks lengkap",
    rating: 4.6,
    image: "./image/vitamin/MultiB.png",
    resep: false
  },
  {
    id: 34,
    nama: "Fishgold",
    kategori: "vitamin",
    harga: 34000,
    stok: 200,
    deskripsi: "Minyak ikan omega-3",
    rating: 4.7,
    image: "./image/vitamin/Fishgold.png",
    resep: false
  },
  {
    id: 35,
    nama: "Calciplus",
    kategori: "vitamin",
    harga: 26000,
    stok: 250,
    deskripsi: "Suplemen kalsium dan vitamin D",
    rating: 4.6,
    image: "./image/vitamin/Calciplus.png",
    resep: false
  },
  {
    id: 36,
    nama: "VitaC",
    kategori: "vitamin",
    harga: 21000,
    stok: 400,
    deskripsi: "Vitamin C untuk imunitas",
    rating: 4.8,
    image: "./image/vitamin/VitaC.png",
    resep: false
  },
  {
    id: 37,
    nama: "Vitajelly",
    kategori: "vitamin",
    harga: 25000,
    stok: 220,
    deskripsi: "Vitamin dalam bentuk jelly yang lezat",
    rating: 4.7,
    image: "./image/vitamin/Vitajelly.png",
    resep: false
  },

  // Obat Topikal (6 produk)
  {
    id: 38,
    nama: "Oralfresh",
    kategori: "obat-topikal",
    harga: 18000,
    stok: 180,
    deskripsi: "Obat kumur antiseptik",
    rating: 4.6,
    image: "./image/Obat-tipikal/Oralfresh.png",
    resep: false
  },
  {
    id: 39,
    nama: "Cholamphenyl Ear Drops",
    kategori: "obat-topikal",
    harga: 10500,
    stok: 120,
    deskripsi: "Tetes telinga antiseptik",
    rating: 4.5,
    image: "./image/Obat-tipikal/CholamphenylEarDrops.png",
    resep: false
  },
  {
    id: 40,
    nama: "Thetrazyl",
    kategori: "obat-topikal",
    harga: 11500,
    stok: 150,
    deskripsi: "Salep untuk luka bakar ringan",
    rating: 4.5,
    image: "./image/Obat-tipikal/Thetrazyl.png",
    resep: false
  },
  {
    id: 41,
    nama: "Nylatisone",
    kategori: "obat-topikal",
    harga: 21000,
    stok: 160,
    deskripsi: "Salep antijamur",
    rating: 4.6,
    image: "./image/Obat-tipikal/Nylatisone.png",
    resep: false
  },
  {
    id: 42,
    nama: "Ketoconyl",
    kategori: "obat-topikal",
    harga: 23000,
    stok: 140,
    deskripsi: "Salep antijamur kuat",
    rating: 4.7,
    image: "./image/Obat-tipikal/Ketoconyl.png",
    resep: false
  },
  {
    id: 43,
    nama: "Myconal",
    kategori: "obat-topikal",
    harga: 24000,
    stok: 130,
    deskripsi: "Salep antijamur spektrum luas",
    rating: 4.6,
    image: "./image/Obat-tipikal/Myconal.png",
    resep: false
  },
];

// Fungsi untuk format harga ke Rupiah
function formatHarga(harga) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(harga);
}

// Fungsi untuk render produk
function renderProduk(produk = produksData) {
  const grid = document.getElementById("produk-grid");
  grid.innerHTML = "";

  if (produk.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
        <p style="font-size: 1.1rem; color: #666;">Tidak ada produk yang ditemukan</p>
      </div>
    `;
    return;
  }

  produk.forEach((item) => {
    const card = document.createElement("div");
    card.className = "produk-card";
    card.innerHTML = `
      <div class="produk-image">
        <img src="${item.image}" alt="${item.nama}" />
        ${item.resep ? '<span class="badge-resep">RESEP</span>' : ''}
        <span class="badge-stok">${item.stok > 0 ? 'Tersedia' : 'Habis'}</span>
      </div>
      <div class="produk-content">
        <h3>${item.nama}</h3>
        <p class="produk-desc">${item.deskripsi}</p>
        <div class="produk-rating">
          <span class="stars">⭐ ${item.rating}</span>
        </div>
        <div class="produk-footer">
          <span class="produk-harga">${formatHarga(item.harga)}</span>
          <button class="btn-add-cart" data-id="${item.id}" ${item.stok === 0 ? 'disabled' : ''}>
            <i data-feather="shopping-cart"></i>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Tambah event listener ke tombol add cart
  document.querySelectorAll(".btn-add-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      tambahKeKeranjang(id);
    });
  });

  feather.replace();
}

// Fungsi untuk menambah ke keranjang
function tambahKeKeranjang(id) {
  const produk = produksData.find((p) => p.id == id);
  if (!produk) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find((item) => item.id == id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: produk.id,
      nama: produk.nama,
      harga: produk.harga,
      quantity: 1,
      image: produk.image
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  
  // Show notification
  showNotification(`${produk.nama} ditambahkan ke keranjang`);
  // Jika tersedia, buka drawer keranjang agar pengguna bisa langsung checkout
  if(window.openCartDrawer){
    setTimeout(() => { window.openCartDrawer(); }, 300);
  }
}

// Fungsi update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = totalItems;
}

// Fungsi show notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Filter produk
function filterProduk() {
  const kategori = document.querySelector('.kategori-tab-btn.active')?.dataset.kategori || '';
  const harga = document.getElementById("harga-filter").value;
  const sortir = document.getElementById("sortir-filter").value;

  let filtered = produksData;

  // Filter kategori
  if (kategori) {
    filtered = filtered.filter((p) => p.kategori === kategori);
  }

  // Filter harga
  if (harga) {
    filtered = filtered.filter((p) => {
      if (harga === "0-50000") return p.harga <= 50000;
      if (harga === "50000-100000") return p.harga >= 50000 && p.harga <= 100000;
      if (harga === "100000-250000") return p.harga >= 100000 && p.harga <= 250000;
      if (harga === "250000+") return p.harga > 250000;
    });
  }

  // Sortir
  if (sortir === "price-low") {
    filtered.sort((a, b) => a.harga - b.harga);
  } else if (sortir === "price-high") {
    filtered.sort((a, b) => b.harga - a.harga);
  } else if (sortir === "popular") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProduk(filtered);
}

// Search produk
function searchProduk(query) {
  if (!query) {
    renderProduk(produksData);
    return;
  }

  const filtered = produksData.filter(
    (p) =>
      p.nama.toLowerCase().includes(query.toLowerCase()) ||
      p.deskripsi.toLowerCase().includes(query.toLowerCase())
  );

  renderProduk(filtered);
}

// Event listeners untuk filter
document.addEventListener("DOMContentLoaded", () => {
  renderProduk();
  updateCartCount();

  // Kategori tabs
  const kategoriTabs = document.querySelectorAll(".kategori-tab-btn");
  kategoriTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      kategoriTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      filterProduk();
    });
  });

  const hargaFilter = document.getElementById("harga-filter");
  const sortirFilter = document.getElementById("sortir-filter");
  const resetButton = document.getElementById("reset-filter");

  if (hargaFilter) hargaFilter.addEventListener("change", filterProduk);
  if (sortirFilter) sortirFilter.addEventListener("change", filterProduk);
  if (resetButton)
    resetButton.addEventListener("click", () => {
      kategoriTabs.forEach((t) => t.classList.remove("active"));
      kategoriTabs[0].classList.add("active");
      if (hargaFilter) hargaFilter.value = "";
      if (sortirFilter) sortirFilter.value = "newest";
      renderProduk(produksData);
    });

  // Search bar
  const searchInput = document.getElementById("search-input");
  const searchTrigger = document.getElementById("search-trigger");
  const searchBar = document.getElementById("search-bar");
  const searchClose = document.getElementById("search-close");

  if (searchTrigger) {
    searchTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      searchBar.classList.toggle("active");
      if (searchBar.classList.contains("active")) {
        searchInput.focus();
      }
    });
  }

  if (searchClose) {
    searchClose.addEventListener("click", () => {
      searchBar.classList.remove("active");
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchProduk(e.target.value);
    });
  }
});
