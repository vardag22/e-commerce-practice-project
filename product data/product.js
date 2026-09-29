// Products Data

// flash sales products data
const bestSellingProducts = [
  {
    title: "Asus gaming machine for ultra graphics",
    price: 500,
    originalPrice: 600,
    rating: 4.9,
    image: "assets/product-images/img-3.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 500,
    originalPrice: 600,
    rating: 4.9,
    image: "assets/product-images/img-4.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 500,
    originalPrice: 600,
    rating: 4.9,
    image: "assets/product-images/img-5.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 500,
    originalPrice: 600,
    rating: 4.9,
    image: "assets/product-images/img-5.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 500,
    originalPrice: 600,
    rating: 4.9,
    image: "assets/product-images/img-4.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 500,
    originalPrice: 600,
    rating: 4.9,
    image: "assets/product-images/img-3.png",
  }
];

const bestSellingProductsGrid = document.querySelector(".best-selling-products-container");
bestSellingProducts.forEach(product => {
  bestSellingProductsGrid.innerHTML += `
    <div class="best-product-card">
      <div class="best-product-image">
        <img loading="lazy" height="130px" src="${product.image}" alt="product-image">
        <div class="add-to-cart-label"><p>Add to cart</p></div>
      </div>
      <div class="best-product-details">
        <div class="product-name"><p>${product.title}</p></div>
        <div class="price"><p>$${product.price}</p><p>$${product.originalPrice}</p></div>
        <div class="rating"><p>Rating</p><p>${product.rating}</p></div>
      </div>
    </div>
  `;
});


// Explore products data
const exploreOurProducts = [
  {
    title: "Asus gaming machine for ultra graphics",
    price: 500,
    rating: 4.9,
    image: "assets/product-images/img-2.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 900,
    rating: 4.9,
    image: "assets/product-images/img-5.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 800,
    rating: 4.9,
    image: "assets/product-images/img-3.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 500,
    rating: 4.9,
    image: "assets/product-images/img-4.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 300,
    rating: 4.9,
    image: "assets/product-images/img-5.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 500,
    rating: 4.9,
    image: "assets/product-images/img-6.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 500,
    rating: 4.9,
    image: "assets/product-images/img-4.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 400,
    originalPrice: 500,
    rating: 4.9,
    image: "assets/product-images/img-4.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 500,
    rating: 4.9,
    image: "assets/product-images/img-6.png",
  },
  {
    title: "Asus gaming machine for ultra graphics",
    price: 700,
    rating: 4.9,
    image: "assets/product-images/img-3.png",
  },
];

const ourProducts = document.querySelector(".js-our-product-grid");
exploreOurProducts.forEach((product, productIndex) => {
  ourProducts.innerHTML += `
  <div class="best-product-card our-product-card">
  <div class="our-product-image">
    <img loading="lazy" height="130px" src="${product.image}" alt="product-image">
    <div class="add-to-cart-label"><p>Add to cart</p></div>
  </div>
  <div class="our-product-details">
    <div class="product-name"><p>${product.title}</p></div>
    <div class="our-price">
      <div><p>$${product.price}</p></div>
      <div class="star-rating">
        <input type="radio" id="star5-${productIndex}" name="rating-${productIndex}" value="5" />
        <label for="star5-${productIndex}" title="5 stars">
          <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </label>
      
        <input type="radio" id="star4-${productIndex}" name="rating-${productIndex}" value="4" />
        <label for="star4-${productIndex}" title="4 stars">
          <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </label>
      
        <input type="radio" id="star3-${productIndex}" name="rating-${productIndex}" value="3" />
        <label for="star3-${productIndex}" title="3 stars">
          <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </label>
      
        <input type="radio" id="star2-${productIndex}" name="rating-${productIndex}" value="2" />
        <label for="star2-${productIndex}" title="2 stars">
          <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </label>
      
        <input type="radio" id="star1-${productIndex}" name="rating-${productIndex}" value="1" />
        <label for="star1-${productIndex}" title="1 star">
          <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </label>
      </div>
      
      <div><p>(4.9)</p></div>
    </div>
  </div>
</div>
  `;
})