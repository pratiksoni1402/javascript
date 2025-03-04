function placeOrder(orderId, callBackFunction){
  console.log("Placing order...")
  setTimeout(()=>{
    console.log("Order placed successfully: ", orderId)
    callBackFunction(orderId)
  },2000)
}

function paymentProcessing(orderId, callBackFunction){
  console.log("Processing payment...")
  setTimeout(()=>{
    console.log("Payment processed for Order ID: ", orderId)
    callBackFunction(orderId)
  },5000)
}

function sendConfirmation(orderId){
  console.log("Order confirmation sent for Order ID: ", orderId)
}

placeOrder(101, (orderId)=>paymentProcessing(orderId, sendConfirmation))