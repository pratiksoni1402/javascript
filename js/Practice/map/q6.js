const orders = [
  { id: 101, amount: 2500, customer: "Amit" },
  { id: 102, amount: 1500, customer: "Sneha" },
  { id: 103, amount: 4000, customer: "Rakesh" }
];

const result = orders.map(calcGst => {
  const orderRecords = {}
  orderRecords.customer = calcGst.customer,
    orderRecords.amount = calcGst.amount,
    orderRecords.amountWithGST = ((calcGst.amount) + (calcGst.amount * 0.18))
  return orderRecords
})

console.log(result)