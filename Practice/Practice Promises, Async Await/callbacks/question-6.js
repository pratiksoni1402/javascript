function fetchProductDetails(productId, callBackFunction){
  console.log("Fetching Product Details")
  setTimeout(()=>{
    const product = { id: productId, name: "Laptop", price: 50000 }
    callBackFunction(product)
  },2000)
}

function applyDiscount(product, callBackFunction){
  console.log("Applying Discount")
  setTimeout(()=>{
    product.price = product.price * 0.9
    callBackFunction(product)
  }, 1000)
}

function displayProduct(product){
  console.log("Product Details Received:", product)
}

// Fetch product and apply discount
fetchProductDetails(1, (product) => {
  applyDiscount(product, (discountedProduct) => {
    displayProduct(discountedProduct);
  });
});