const products = [
  { name: "Glow Hydrating Face Serum", price: 25, image: "./images/serum.jpg" },
  { name: "Rose Water Toner", price: 15, image: "./images/toner.jpg" },
  { name: "Aloe Vera Moisturizer", price: 18, image: "./images/moisturizer.jpg" },
  { name: "Shea Butter Body Lotion", price: 22, image: "./images/sheabutter.jpg"},
  { name: "Vitamin C Brightening Cream", price: 30, image: "./images/vitaminc.jpg" },
  { name: "SPF 50 Sunscreen", price: 20, image: "./images/sunscreen.jpg" },
  { name: "Coconut Lip Balm", price: 5, image: "./images/coconut.jpg" },
  { name: "Charcoal Face Mask", price: 12, image: "./images/coal.jpg" },
  { name: "Honey Facial Cleanser", price: 17, image: "./images/cleaner.jpg" },
  { name: "Lavender Body Scrub", price: 28, image: "./images/scrub.png" }
];

// Render products
const productList = document.getElementById("productList");

function renderProducts(list) {
  productList.innerHTML = "";

  list.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-name">${product.name}</div>
      <div class="product-price">$${product.price}</div>
    `;

    productList.appendChild(div);
  });
}

renderProducts(products);

// Debounce function
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Search function
function handleSearch(e) {
  const query = e.target.value.toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  renderProducts(filtered);
}

// Attach debounced search
document.getElementById("search")
  .addEventListener("input", debounce(handleSearch, 300));


function renderProducts(list) {
  productList.innerHTML = "";

  // If no items found
  if (list.length === 0) {
    productList.style.display = "block"; // make sure area shows
    productList.innerHTML = `<p style="font-style: italic; display: flex; justify-content: center; align-item: center; font-size: 18px; color: #333;">Item not found...</p>`;
    return;
  }

  productList.style.display = "grid"; // show results

  list.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-name">${product.name}</div>
      <div class="product-price">$${product.price}</div>
    `;

    productList.appendChild(div);
  });
}
