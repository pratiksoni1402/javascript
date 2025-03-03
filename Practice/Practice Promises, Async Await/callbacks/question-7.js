function fetchUserOrder(userId, callBack){
  console.log("Fetching user order...")
  setTimeout(()=>{
    const order = { orderId: 101, userId: userId, item: "Smartphone", price: 30000 }
    callBack(order)
  },2000)
}

function applyCoupon(order, callbacks){
  console.log("Applying Discount")
  setTimeout(()=>{
    order.price *= 0.8
    callbacks(order)
  }, 1000)
}

function userOrder(order){
  console.log("Order Fetched Successfully", order)
}

fetchUserOrder(10, (order) =>{
  applyCoupon(order,(discountedProduct)=>{
    userOrder(discountedProduct)
  })
})